import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { generateNextNumbers } from '@/lib/admission/numberGenerator'
import fs from 'fs'
import path from 'path'

// Local backup helper
function saveLocalBackup(submission) {
  try {
    const backupFile = path.join(process.cwd(), 'src', 'data', 'admission_submissions.json')
    let submissions = []
    if (fs.existsSync(backupFile)) {
      submissions = JSON.parse(fs.readFileSync(backupFile, 'utf8'))
    }
    submissions.push({
      ...submission,
      savedLocallyAt: new Date().toISOString(),
    })
    fs.mkdirSync(path.dirname(backupFile), { recursive: true })
    fs.writeFileSync(backupFile, JSON.stringify(submissions, null, 2))
  } catch (err) {
    console.error('Local backup error:', err)
  }
}

export async function POST(request) {
  try {
    const payload = await request.json()

    // Concurrency-safe atomic number assignment with retry loop
    const maxAttempts = 5
    let attempts = 0
    let insertSuccess = false
    let applicationRecord = null
    let supabaseSaved = false
    let supabaseError = null

    while (attempts < maxAttempts && !insertSuccess) {
      attempts++

      // Automatically generate next sequential numbers based on current DB & local backup state
      const numbers = await generateNextNumbers(payload.course_name)
      const formNo = numbers.form_no
      const registrationNo = numbers.registration_no

      applicationRecord = {
        form_no: formNo,
        registration_no: registrationNo,
        course_name: payload.course_name || '',
        course_duration: payload.course_duration || '',
        time_slot: payload.time_slot || '',
        full_name: (payload.full_name || '').toUpperCase(),
        date_of_birth: payload.date_of_birth || null,
        calculated_age: Number(payload.calculated_age) || 0,
        gender: payload.gender || '',
        fathers_name: payload.fathers_name || '',
        mothers_name: payload.mothers_name || '',
        fathers_occupation: payload.fathers_occupation || '',
        marital_status: payload.marital_status || '',
        category: payload.category || 'GEN',
        aadhaar_no: payload.aadhaar_no || '',
        contact_number: payload.contact_number || '',
        father_number: payload.father_number || '',
        email: payload.email || '',
        flat_society: payload.flat_society || '',
        street_road: payload.street_road || '',
        landmark: payload.landmark || '',
        area_village: payload.area_village || '',
        city: payload.city || 'Ahmedabad',
        state: payload.state || 'Gujarat',
        pincode: payload.pincode || '',
        permanent_address: payload.permanent_address || '',
        permanent_pincode: payload.permanent_pincode || '',
        education_level: payload.below_10th_standard
          ? `${payload.education_level || 'Below 10th pass'} (${payload.below_10th_standard})`
          : payload.education_level || '',
        below_10th_standard: payload.below_10th_standard || '',
        education_history: payload.education_history || [],
        passport_photo_url: payload.passport_photo_url || null,
        aadhaar_photos: payload.aadhaar_photos || [],
        marriage_certificates: payload.marriage_certificates || [],
        school_leaving_certificates: payload.school_leaving_certificates || [],
        marksheets_10th: payload.marksheets_10th || [],
        marksheets_12th: payload.marksheets_12th || [],
        diploma_certificates: payload.diploma_certificates || [],
        ug_degree_certificates: payload.ug_degree_certificates || [],
        marriage_certificate_url: payload.marriage_certificates?.[0]?.url || payload.marriage_certificate_url || null,
        school_leaving_certificate_url: payload.school_leaving_certificates?.[0]?.url || payload.school_leaving_certificate_url || null,
        marksheet_10th_url: payload.marksheets_10th?.[0]?.url || payload.marksheet_10th_url || null,
        marksheet_12th_url: payload.marksheets_12th?.[0]?.url || payload.marksheet_12th_url || null,
        diploma_certificate_url: payload.diploma_certificates?.[0]?.url || payload.diploma_certificate_url || null,
        ug_degree_certificate_url: payload.ug_degree_certificates?.[0]?.url || payload.ug_degree_certificate_url || null,
        applicant_signature_url: payload.applicant_signature_url || null,
        year_of_passing: payload.year_of_passing || '',
        declaration_agreed: true,
        application_date: payload.application_date || new Date().toLocaleDateString('en-GB'),
        application_place: payload.application_place || 'Ahmedabad',
        status: 'submitted',
      }

      try {
        const supabase = createAdminClient()
        const { data, error } = await supabase
          .from('admission_applications')
          .insert([applicationRecord])
          .select()

        if (!error) {
          insertSuccess = true
          supabaseSaved = true
          saveLocalBackup(applicationRecord)
          break
        } else {
          // Check for unique key conflict (code 23505) in race conditions
          const isUniqueConflict =
            error.code === '23505' ||
            /duplicate key|unique constraint/i.test(error.message || '')

          if (isUniqueConflict && attempts < maxAttempts) {
            console.warn(
              `Concurrent conflict for Form No: ${formNo}, Reg No: ${registrationNo}. Retrying (${attempts}/${maxAttempts})...`
            )
            await new Promise((resolve) => setTimeout(resolve, 80 * attempts))
            continue
          } else {
            supabaseError = error.message
            console.warn('Supabase insert notice:', error)
            saveLocalBackup(applicationRecord)
            break
          }
        }
      } catch (err) {
        supabaseError = err.message
        console.warn('Supabase client connection notice:', err)
        saveLocalBackup(applicationRecord)
        break
      }
    }

    return NextResponse.json({
      success: true,
      form_no: applicationRecord?.form_no,
      registration_no: applicationRecord?.registration_no,
      supabaseSaved,
      supabaseError,
      data: applicationRecord,
      message: supabaseSaved
        ? 'Application successfully submitted and stored in Supabase!'
        : 'Application received and safely backed up! (Run SQL schema in Supabase to sync).',
    })
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
