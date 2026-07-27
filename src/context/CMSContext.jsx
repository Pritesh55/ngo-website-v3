'use client'
// Step 02.01.01: React hooks को इम्पोर्ट करें। 
// 'createContext' और 'useContext' का उपयोग ग्लोबल स्टेट (बिना प्रॉप्स पास किए) शेयर करने के लिए होता है, 
// 'useState' लोकल डेटा/वैल्यूज को याद रखने के लिए है, और 'useEffect' कंपोनेंट लोड होने पर API कॉल करने के लिए है।
import React, { createContext, useContext, useState, useEffect } from 'react'

// Step 02.01.02: CMSContext नाम का एक नया React Context बनाएं। 
// यह एक खाली कंटेनर की तरह है जो हमारे पूरे वेबसाइट के टेक्स्ट और इमेज पाथ को स्टोर करेगा।
const CMSContext = createContext()

// Step 02.01.03: CMSProvider कंपोनेंट को डिफाइन करें जो पूरे एप्लीकेशन को रैप (wrap) करेगा।
// 'children' का मतलब है कि इसके अंदर जितने भी वेब पेज या कंपोनेंट आएंगे, उन सबको ये डेटा उपलब्ध होगा।
export const CMSProvider = ({ children }) => {
  // Step 02.01.04: useState हुक की मदद से 'allContent' स्टेट घोषित करें।
  // शुरुआत में यह 'null' रहेगा जब तक डेटाबेस फ़ाइल से टेक्स्ट लोड नहीं हो जाता।
  const [allContent, setAllContent] = useState(null)

  // Step 02.01.05: useEffect का उपयोग करें ताकि जैसे ही यूजर वेबसाइट खोले, 
  // बैकएंड API '/api/content' से content.json का सारा डेटा फ़ेच (fetch) हो जाए।
  useEffect(() => {
    fetch('/api/content')
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('Failed to fetch content')
      })
      .then((data) => {
        if (data && typeof data === 'object') {
          // Step 02.01.06: फ़ेच किया हुआ डेटा स्टेट 'allContent' में सेव कर दें ताकि स्क्रीन अपडेट हो जाए।
          setAllContent(data)
        }
      })
      .catch((err) => console.error('Error fetching content:', err))
  }, [])

  // Step 02.01.07: updateContent फंक्शन बनाएं जो एडमिन पैनल में "Save Changes" क्लिक होने पर, 
  // नए बदले हुए डेटा को रीयल-टाइम में होमपेज पर तुरंत सिंक (sync) कर देगा।
  const updateContent = (newContent) => {
    if (newContent && typeof newContent === 'object') {
      setAllContent(newContent)
    }
  }

  // Step 02.01.08: t(path) नाम का अनुवादक (lookup helper) फंक्शन बनाएं।
  // उदाहरण के लिए, यदि हम 'hero.title' भेजेंगे, तो यह टेक्स्ट निकाल कर लाएगा।
  // 1. path.split('.') से 'hero.title' टूटकर ['hero', 'title'] एरे बन जाएगा।
  // 2. लूप चलाकर हम डेटाबेस के अंदर गहराई से वह स्पेसिफिक टेक्स्ट ढूंढते हैं।
  // 3. यदि वह टेक्स्ट नहीं मिलता है, तो खाली स्ट्रिंग "" रिटर्न कर देते हैं ताकि स्क्रीन फटे न।
  const t = (path) => {
    if (!allContent) return ''
    const keys = path.split('.')
    let current = allContent

    for (const key of keys) {
      if (current === undefined || current === null || current[key] === undefined) {
        return '' // सुरक्षा के लिए खाली टेक्स्ट भेजें यदि पाथ गलत है
      }
      current = current[key]
    }

    return current
  }

  // Step 02.01.09: Context Provider को रेंडर करें और 't' (लुकअप फंक्शन), 
  // 'allContent' (डेटाबेस ट्री) और 'updateContent' (अपडेटर) को वैल्यू के तौर पर सभी चिल्ड्रेन को उपलब्ध कराएं।
  return (
    <CMSContext.Provider value={{ t, allContent, updateContent }}>
      {children}
    </CMSContext.Provider>
  )
}

// Step 02.01.10: useCMS नाम का एक कस्टम हुक (custom hook) बनाकर एक्सपोर्ट करें।
// इससे रिएक्ट बिगिनर्स को बार-बार 'useContext(CMSContext)' नहीं लिखना पड़ेगा। 
// वे सीधे 'const { t } = useCMS()' लिखकर किसी भी बटन या पैराग्राफ को डायनामिक बना सकते हैं।
export const useCMS = () => {
  const context = useContext(CMSContext)
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider')
  }
  return context
}
