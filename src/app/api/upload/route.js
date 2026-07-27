// Step 03.02.01: फाइल अपलोड API के लिए जरूरी नोड और नेक्स्ट (Next.js) लाइब्रेरी इम्पोर्ट करें।
// 'fs/promises' का उपयोग हम कंप्यूटर की डिस्क पर इमेज फाइल को फिजिकल रूप से सेव करने के लिए करेंगे।
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Step 03.02.02: एपीआई को हमेशा लाइव और डायनामिक रिस्पॉन्सिव रखने के लिए 'force-dynamic' मोड सेट करें।
export const dynamic = 'force-dynamic';

// Step 03.02.03: POST हैंडलर फंक्शन जो फाइल अपलोड रिक्वेस्ट को रिसीव और प्रोसेस करता है।
export async function POST(request) {
  try {
    // Step 03.02.04: रिक्वेस्ट पेलोड में से FormData निकालें और उसमें से फाइल ऑब्जेक्ट को 'file' वेरिएबल में रखें।
    const formData = await request.formData();
    const file = formData.get('file');
    
    // Step 03.02.05: चेक करें कि फाइल रिक्वेस्ट में भेजी भी गई है या नहीं। यदि नहीं, तो बैड रिक्वेस्ट एरर भेजें।
    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Step 03.02.06: फाइल को रीड करके उसे एरे-बफर (ArrayBuffer) और फिर बाइनरी बफर (memory buffer) में बदलें।
    // कंप्यूटर में फाइलें सेव करने के लिए बफर की आवश्यकता होती है।
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Step 03.02.07: तय करें कि इमेज को 'public/uploads' डायरेक्टरी में डालना है।
    // 'public' फोल्डर में रखी फाइलें सीधे ब्राउजर में URL द्वारा देखी जा सकती हैं।
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Step 03.02.08: 'public/uploads' फोल्डर बनाएं। 'recursive: true' का मतलब है कि 
    // यदि यह फोल्डर पहले से कंप्यूटर में नहीं है, तो सिस्टम एरर देने के बजाय इसे खुद बना देगा।
    await fs.mkdir(uploadDir, { recursive: true });

    // Step 03.02.09: फाइल नेम से फालतू स्पेशल कैरेक्टर्स हटाएं ताकि यूआरएल साफ रहे (Sanitization)।
    // इसके आगे 'Date.now()' (यूनिक्स टाइमस्टैम्प) लगाएं ताकि दो अलग-अलग फाइलों के नाम एक जैसे न हो जाएं।
    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const filename = `${Date.now()}_${safeName}`;
    const filePath = path.join(uploadDir, filename);

    // Step 03.02.10: बफर को सहेजे गए पाथ (filePath) पर सेव कर दें।
    await fs.writeFile(filePath, buffer);

    // Step 03.02.11: फ्रंटएंड को इमेज का स्टेटिक वेब एड्रेस (relative URL) रिटर्न करें। 
    // यह एड्रेस सीधे वेबसाइट के इमेजेस पाथ में सेव हो जाता है (जैसे '/uploads/17849_logo.png')।
    return NextResponse.json({ 
      success: true, 
      url: `/uploads/${filename}` 
    });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
