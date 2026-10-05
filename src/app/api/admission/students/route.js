import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

// GET: Fetch all enrolled students (merged from Supabase & local backup)
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

// DELETE: Remove student by id or form_no from Supabase and local backup
export async function DELETE(request) {
  try {
    const { id, form_no } = await request.json()

    if (!id && !form_no) {
      return NextResponse.json(
        { success: false, error: 'Student ID or Form Number is required for deletion' },
        { status: 400 }
      )
    }

    let deletedFromSupabase = false
    let deletedFromLocal = false

    // 1. Delete from Supabase
    try {
      const supabase = await createClient()
      let query = supabase.from('admission_applications').delete()
      if (id && !String(id).startsWith('local_')) {
        query = query.eq('id', id)
      } else if (form_no) {
        query = query.eq('form_no', form_no)
      }

      const { error: sbDeleteError } = await query
      if (!sbDeleteError) {
        deletedFromSupabase = true
      } else {
        console.warn('Supabase delete notice:', sbDeleteError.message)
      }
    } catch (sbErr) {
      console.warn('Supabase delete exception:', sbErr.message)
    }

    // 2. Delete from local JSON backup
    try {
      const backupFile = path.join(process.cwd(), 'src', 'data', 'admission_submissions.json')
      if (fs.existsSync(backupFile)) {
        const fileContent = fs.readFileSync(backupFile, 'utf8')
        const localData = JSON.parse(fileContent)
        if (Array.isArray(localData)) {
          const initialLength = localData.length
          const updatedData = localData.filter((item) => {
            if (id && item.id === id) return false
            if (form_no && item.form_no === form_no) return false
            return true
          })
          if (updatedData.length < initialLength) {
            fs.writeFileSync(backupFile, JSON.stringify(updatedData, null, 2), 'utf8')
            deletedFromLocal = true
          }
        }
      }
    } catch (fsErr) {
      console.warn('Local backup delete notice:', fsErr.message)
    }

    return NextResponse.json({
      success: true,
      message: 'Student record deleted successfully',
      deletedFromSupabase,
      deletedFromLocal,
    })
  } catch (error) {
    console.error('Error deleting student in /api/admission/students:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete student' },
      { status: 500 }
    )
  }
}

// PUT / PATCH: Update student details in Supabase and local backup
export async function PUT(request) {
  try {
    const student = await request.json()
    const { id, form_no } = student

    if (!form_no && !id) {
      return NextResponse.json(
        { success: false, error: 'Student Form Number or ID is required for update' },
        { status: 400 }
      )
    }

    const updatePayload = {
      full_name: student.full_name,
      registration_no: student.registration_no,
      course_name: student.course_name,
      course_duration: student.course_duration,
      time_slot: student.time_slot,
      date_of_birth: student.date_of_birth,
      calculated_age: student.calculated_age ? Number(student.calculated_age) : null,
      gender: student.gender,
      fathers_name: student.fathers_name,
      mothers_name: student.mothers_name,
      fathers_occupation: student.fathers_occupation,
      marital_status: student.marital_status,
      category: student.category,
      aadhaar_no: student.aadhaar_no,
      contact_number: student.contact_number,
      father_number: student.father_number,
      email: student.email,
      flat_society: student.flat_society,
      street_road: student.street_road,
      landmark: student.landmark,
      area_village: student.area_village,
      city: student.city,
      state: student.state,
      pincode: student.pincode,
      permanent_address: student.permanent_address,
      permanent_pincode: student.permanent_pincode,
      education_level: student.education_level,
      below_10th_standard: student.below_10th_standard,
      education_history: student.education_history || [],
      passport_photo_url: student.passport_photo_url,
      aadhaar_photos: student.aadhaar_photos || [],
      school_leaving_certificates: student.school_leaving_certificates || [],
      marksheets_10th: student.marksheets_10th || [],
      marksheets_12th: student.marksheets_12th || [],
      diploma_certificates: student.diploma_certificates || [],
      ug_degree_certificates: student.ug_degree_certificates || [],
      updated_at: new Date().toISOString(),
    }

    let updatedInSupabase = false
    let updatedInLocal = false

    // 1. Update in Supabase
    try {
      const supabase = await createClient()
      let query = supabase.from('admission_applications').update(updatePayload)
      if (id && !String(id).startsWith('local_')) {
        query = query.eq('id', id)
      } else if (form_no) {
        query = query.eq('form_no', form_no)
      }

      const { data, error: sbUpdateError } = await query.select()
      if (!sbUpdateError && data && data.length > 0) {
        updatedInSupabase = true
      }
    } catch (sbErr) {
      console.warn('Supabase update notice:', sbErr.message)
    }

    // 2. Update in local JSON backup
    try {
      const backupFile = path.join(process.cwd(), 'src', 'data', 'admission_submissions.json')
      if (fs.existsSync(backupFile)) {
        const fileContent = fs.readFileSync(backupFile, 'utf8')
        const localData = JSON.parse(fileContent)
        if (Array.isArray(localData)) {
          let found = false
          const updatedData = localData.map((item) => {
            if ((id && item.id === id) || (form_no && item.form_no === form_no)) {
              found = true
              return {
                ...item,
                ...updatePayload,
                form_no: item.form_no || form_no,
              }
            }
            return item
          })
          if (found) {
            fs.writeFileSync(backupFile, JSON.stringify(updatedData, null, 2), 'utf8')
            updatedInLocal = true
          }
        }
      }
    } catch (fsErr) {
      console.warn('Local backup update notice:', fsErr.message)
    }

    return NextResponse.json({
      success: true,
      message: 'Student record updated successfully',
      updatedInSupabase,
      updatedInLocal,
      student: {
        ...student,
        ...updatePayload,
      },
    })
  } catch (error) {
    console.error('Error updating student in /api/admission/students:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update student' },
      { status: 500 }
    )
  }
}
