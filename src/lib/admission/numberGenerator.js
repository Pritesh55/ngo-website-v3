import { createAdminClient } from '../supabase/server.js'
import fs from 'fs'
import path from 'path'

/**
 * Returns Indian Standard Time (IST, UTC+5:30) date parts
 */
export function getISTDateParts(date = new Date()) {
  const istOffset = 5.5 * 60 * 60 * 1000
  const istDate = new Date(date.getTime() + istOffset)
  const year = istDate.getUTCFullYear()
  const month = String(istDate.getUTCMonth() + 1).padStart(2, '0')
  const day = String(istDate.getUTCDate()).padStart(2, '0')
  return {
    year,
    month,
    day,
    dateCompact: `${year}${month}${day}`, // e.g. 20261006
    dateHyphen: `${year}-${month}-${day}`, // e.g. 2026-10-06
  }
}

/**
 * Resolves standard prefix from course name:
 * - Fashion Designer -> FD
 * - Boutique Manager -> BM
 * - Purchase Coordinator Electronics -> EPC
 */
export function getCoursePrefix(courseName = '') {
  const c = String(courseName || '').toLowerCase().trim()
  if (c.includes('boutique') || c === 'bm') return 'BM'
  if (c.includes('purchase') || c.includes('electronic') || c === 'epc') return 'EPC'
  return 'FD'
}

/**
 * Fetch all existing form_no and registration_no from Supabase and local backup
 */
export async function getAllExistingNumbers() {
  const existingRecords = []
  const seenFormNos = new Set()

  // 1. Fetch from Supabase
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('admission_applications')
      .select('form_no, registration_no, course_name, created_at')

    if (!error && Array.isArray(data)) {
      data.forEach((row) => {
        if (row.form_no) {
          seenFormNos.add(row.form_no.trim())
          existingRecords.push({
            form_no: row.form_no.trim(),
            registration_no: (row.registration_no || '').trim(),
            course_name: (row.course_name || '').toLowerCase(),
          })
        }
      })
    }
  } catch (err) {
    console.warn('Notice fetching Supabase numbers:', err.message)
  }

  // 2. Fetch from local JSON backup
  try {
    const backupFile = path.join(process.cwd(), 'src', 'data', 'admission_submissions.json')
    if (fs.existsSync(backupFile)) {
      const localData = JSON.parse(fs.readFileSync(backupFile, 'utf8'))
      if (Array.isArray(localData)) {
        localData.forEach((row) => {
          if (row.form_no && !seenFormNos.has(row.form_no.trim())) {
            seenFormNos.add(row.form_no.trim())
            existingRecords.push({
              form_no: row.form_no.trim(),
              registration_no: (row.registration_no || '').trim(),
              course_name: (row.course_name || '').toLowerCase(),
            })
          }
        })
      }
    }
  } catch (err) {
    console.warn('Notice reading local backup numbers:', err.message)
  }

  return existingRecords
}

/**
 * Generates the next unique Form Number and Registration Number
 * Format:
 * - Form No: {PREFIX}{YYYYMMDD}{001...} (e.g. FD20261006007, BM20261006003, EPC20261006008)
 * - Registration No: MKT_{YYYY-MM-DD}-{001...} (e.g. MKT_2026-10-06-016)
 */
export async function generateNextNumbers(courseName = '') {
  const prefix = getCoursePrefix(courseName)
  const { dateCompact, dateHyphen } = getISTDateParts()
  const records = await getAllExistingNumbers()

  // 1. Calculate next sequence for Form No (specific to this course)
  // Filter records belonging to this course prefix
  const courseRecords = records.filter((r) => {
    const rPrefix = getCoursePrefix(r.course_name || r.form_no)
    return rPrefix === prefix
  })

  let maxFormSeq = courseRecords.length // Base count

  courseRecords.forEach((r) => {
    // Check if form_no matches new format: e.g. FD20261003025 or FD_20261003025
    const match = r.form_no.match(new RegExp(`^${prefix}_?\\d{8}(\\d+)$`, 'i'))
    if (match) {
      const seqVal = parseInt(match[1], 10)
      if (!isNaN(seqVal) && seqVal > maxFormSeq) {
        maxFormSeq = seqVal
      }
    }
  })

  let nextFormSeq = maxFormSeq + 1
  let candidateFormNo = `${prefix}${dateCompact}${String(nextFormSeq).padStart(3, '0')}`

  // Ensure candidateFormNo does not collide with ANY existing record
  const allExistingFormNos = new Set(records.map((r) => r.form_no.toLowerCase()))
  while (allExistingFormNos.has(candidateFormNo.toLowerCase())) {
    nextFormSeq++
    candidateFormNo = `${prefix}${dateCompact}${String(nextFormSeq).padStart(3, '0')}`
  }

  // 2. Calculate next sequence for Registration No (across all courses)
  let maxRegSeq = records.length // Base count of all students

  records.forEach((r) => {
    // Match date-formatted registration number: e.g. MKT_2026-10-04-085 or MKT_20261004085
    const match = (r.registration_no || '').match(/^MKT_\d{4}-?\d{2}-?\d{2}-?(\d+)$/i)
    if (match) {
      const seqVal = parseInt(match[1], 10)
      if (!isNaN(seqVal) && seqVal > maxRegSeq) {
        maxRegSeq = seqVal
      }
    }
  })

  let nextRegSeq = maxRegSeq + 1
  let candidateRegNo = `MKT_${dateHyphen}-${String(nextRegSeq).padStart(3, '0')}`

  const allExistingRegNos = new Set(records.map((r) => (r.registration_no || '').toLowerCase()))
  while (allExistingRegNos.has(candidateRegNo.toLowerCase())) {
    nextRegSeq++
    candidateRegNo = `MKT_${dateHyphen}-${String(nextRegSeq).padStart(3, '0')}`
  }

  return {
    prefix,
    dateCompact,
    dateHyphen,
    form_no: candidateFormNo,
    registration_no: candidateRegNo,
  }
}
