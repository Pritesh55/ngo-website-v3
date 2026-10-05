import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const studentsMap = new Map()

    // 1. Fetch from Supabase admission_applications table if available
    try {
      const supabase = await createClient()
      const { data: supabaseRows, error } = await supabase
        .from('admission_applications')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && Array.isArray(supabaseRows)) {
        supabaseRows.forEach((row) => {
          const key = row.form_no || row.id
          if (key) {
            studentsMap.set(key, {
              ...row,
              source: 'supabase',
            })
          }
        })
      }
    } catch (sbErr) {
      console.warn('Supabase fetch notice in /api/admission/students:', sbErr.message)
    }

    // 2. Fetch from local backup JSON file (src/data/admission_submissions.json)
    try {
      const backupFile = path.join(process.cwd(), 'src', 'data', 'admission_submissions.json')
      if (fs.existsSync(backupFile)) {
        const localData = JSON.parse(fs.readFileSync(backupFile, 'utf8'))
        if (Array.isArray(localData)) {
          localData.forEach((row, index) => {
            const key = row.form_no || `local_${index}`
            // Only add if not already present from Supabase (or merge)
            if (!studentsMap.has(key)) {
              studentsMap.set(key, {
                ...row,
                id: row.id || `local_${index}`,
                source: 'local_backup',
                created_at: row.created_at || row.savedLocallyAt || new Date().toISOString(),
              })
            }
          })
        }
      }
    } catch (fsErr) {
      console.warn('Local backup read notice in /api/admission/students:', fsErr.message)
    }

    // Convert map to array and sort by submission date descending
    const students = Array.from(studentsMap.values()).sort((a, b) => {
      const dateA = new Date(a.created_at || a.savedLocallyAt || 0).getTime()
      const dateB = new Date(b.created_at || b.savedLocallyAt || 0).getTime()
      return dateB - dateA
    })

    return NextResponse.json({
      success: true,
      count: students.length,
      students,
    })
  } catch (error) {
    console.error('Error fetching students in /api/admission/students:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch students', students: [] },
      { status: 500 }
    )
  }
}
