// Step 03.01.01: Next.js सर्वर रिस्पॉन्स के लिए 'NextResponse' को इम्पोर्ट करें।
// सर्वर की हार्ड डिस्क पर फाइल को रीड (read) और राइट (write) करने के लिए नोड (Node.js) के 'fs/promises' का उपयोग करें।
// प्रोजेक्ट फाइलों का सटीक एड्रेस (absolute path) निकालने के लिए 'path' मॉड्यूल इम्पोर्ट करें।
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Step 03.01.02: इस राउट को 'force-dynamic' घोषित करें। 
// यह Next.js को बताता है कि डेटा को कैश (cache) न करे। जब भी यूजर रिफ्रेश करे, डेटा लाइव सर्वर से ही पढ़ा जाना चाहिए।
export const dynamic = 'force-dynamic';

// Step 03.01.03: content.json डेटाबेस फाइल का सटीक कंप्यूटर पाथ निकालने के लिए हेल्पर बनाएं।
// 'process.cwd()' प्रोजेक्ट की मुख्य डायरेक्टरी (root folder) का रास्ता देता है।
const getFilePath = () => path.join(process.cwd(), 'src', 'data', 'content.json');

// Step 03.01.04: GET हैंडलर फंक्शन बनाएं।
// जब हमारी वेबसाइट लोड होती है, तो यह फंक्शन बैकग्राउंड में 'content.json' फाइल को पढ़ता है, 
// उसे JSON में कन्वर्ट करता है और सुरक्षित रूप से फ्रंटएंड की स्क्रीन पर भेज देता है।
export async function GET() {
  try {
    const filePath = getFilePath();
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to read content.json:', error);
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

// Step 03.01.05: POST हैंडलर फंक्शन बनाएं।
// जब एडमिन पैनल में टेक्स्ट या इमेजेस बदलकर "Save Changes" बटन दबाया जाता है, 
// तो यह फंक्शन एडमिन के भेजे गए नए डेटा को रिसीव (receive) करता है, उसे क्लीन फ़ॉर्मेट में कनवर्ट करता है,
// और 'content.json' फाइल के पुराने डेटा को रिप्लेस (overwrite) करके सहेज देता है।
export async function POST(request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid content format' }, { status: 400 });
    }

    const filePath = getFilePath();
    // 'fs.writeFile' डेटा को सुंदर फॉर्मेट (2 स्पेस इंडेंटेशन) के साथ फाइल में सुरक्षित लिख देगा
    await fs.writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Failed to update content.json:', error);
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
