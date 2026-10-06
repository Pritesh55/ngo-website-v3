import { NextResponse } from 'next/server'
import { generateNextNumbers } from '@/lib/admission/numberGenerator'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const course = searchParams.get('course') || 'fashion designer'

    const result = await generateNextNumbers(course)

    return NextResponse.json({
      success: true,
      ...result,
    })
  } catch (error) {
    console.error('Error in /api/admission/next-numbers:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to generate numbers' },
      { status: 500 }
    )
  }
}
