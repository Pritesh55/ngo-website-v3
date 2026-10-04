import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request) {
  try {
    let body = {}
    const contentType = request.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      body = await request.json()
    } else {
      const text = await request.text()
      try {
        body = JSON.parse(text)
      } catch {
        body = { raw: text }
      }
    }

    // Save draft event to local logs / cache so no draft is lost
    const draftsDir = path.join(process.cwd(), 'src', 'data', 'drafts')
    if (!fs.existsSync(draftsDir)) {
      fs.mkdirSync(draftsDir, { recursive: true })
    }

    const draftId = body.phone || body.email || `draft_${Date.now()}`
    const sanitizedId = String(draftId).replace(/[^a-zA-Z0-9_-]/g, '_')
    const filePath = path.join(draftsDir, `${sanitizedId}.json`)

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        {
          ...body,
          savedAt: new Date().toISOString(),
          type: 'tab_close_draft',
        },
        null,
        2
      )
    )

    return NextResponse.json({ success: true, message: 'Draft saved' })
  } catch (err) {
    console.error('Error saving draft beacon:', err)
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    )
  }
}
