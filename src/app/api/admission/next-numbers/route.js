import { NextResponse } from 'next/server'
import { generateNextNumbers } from '@/lib/admission/numberGenerator'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const rawCourse = searchParams.get('course')
    const hasCourse = Boolean(rawCourse && rawCourse.trim() !== '')
    const course = hasCourse ? rawCourse.trim() : ''

    const result = await generateNextNumbers(course || 'fashion designer')

    return NextResponse.json(
      {
        success: true,
        ...result,
        form_no: hasCourse ? result.form_no : '',
      },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    )
  } catch (error) {
    console.error('Error in /api/admission/next-numbers:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to generate numbers' },
      { status: 500 }
    )
  }
}
