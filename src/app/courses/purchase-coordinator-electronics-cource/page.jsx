'use client'
import React from 'react'
import CourseDetailTemplate from '@/components/courses/CourseDetailTemplate'

const courseData = {
  title: 'Purchase Coordinator - Electronics Course',
  gujaratiTitle: 'પરચેઝ કો-ઓર્ડિનેટર - ઇલેક્ટ્રોનિક્સ કોર્સ',
  categoryBadge: 'Govt. Certified Technical Vocational Course',
  description: 'A 6-month specialized procurement and supply chain course for 10th pass candidates, covering electronic components, purchase orders, vendor negotiation, stock inventory, and office tools.',
  gujaratiDescription: 'માનવ કલ્યાણ ટ્રસ્ટ દ્વારા ૧૦ પાસ ઉમેદવારો માટે ખાસ આયોજિત ૬ મહિના (૫૧૦ કલાક) નો પરચેઝ કો-ઓર્ડિનેટર - ઇલેક્ટ્રોનિક્સ કોર્સ. જેમાં ઇલેક્ટ્રોનિક્સ પ્રોડક્ટ્સ ખરીદી, સપ્લાયર કોઓર્ડિનેશન, ઇન્વેન્ટરી મેનેજમેન્ટ અને બિલિંગની સંપૂર્ણ પ્રેક્ટિકલ તાલીમ આપવામાં આવે છે.',
  image: '/images/courses/Purchase_Coordinator_Electronics/Purchase_Coordinator_Electronics.png',
  duration: '6 Months',
  durationHours: '510 Hours / ૫૧૦ કલાક',
  fee: 'Free (રૂ. 0/-)',
  qualification: '10th Pass (SSC) or above (12th / Diploma / UG / PG)',
  ageLimit: 'Minimum 16+ Years required (ન્યૂનતમ ૧૬ વર્ષ જરૂરી)',
  stipend: 'Stipend provided by Government after Certification',
  placement: '100% Job Placement Assistance',
  syllabus: [
    {
      title: 'Electronic Components & Hardware Basics (ઇલેક્ટ્રોનિક્સ ઘટકોનું જ્ઞાન)',
      desc: 'Identification of electronics components: PCBs, ICs, sensors, displays, capacitors, semiconductors, connectors, and technical specs.'
    },
    {
      title: 'Procurement Process & PO Creation (પરચેઝ ઓર્ડર પ્રોસેસ)',
      desc: 'Understanding Purchase Requisitions (PR), Request for Quotations (RFQ), Purchase Orders (PO), vendor comparison sheets, and approvals.'
    },
    {
      title: 'Supplier Negotiations & Vendor Relations (વેન્ડર ડીલિંગ)',
      desc: 'Supplier sourcing, price bargaining, payment credit terms, vendor rating, and establishing long-term vendor partnerships.'
    },
    {
      title: 'Inventory Control & Warehouse Stock Tracking (સ્ટોક કંટ્રોલ)',
      desc: 'Min-Max reorder levels, stock audit registers, barcode scanning, stock preservation, and entry into ERP / spreadsheet systems.'
    },
    {
      title: 'Inward Quality Inspection & Logistics (ક્વોલિટી ચેક અને ડિસ્પેચ)',
      desc: 'Material verification against PO, Goods Received Notes (GRN), handling damaged goods, courier coordination, and GST e-way bills.'
    },
    {
      title: 'MS Excel, ERP Data Entry & Placement Prep (કમ્પ્યુટર તાલીમ અને રિપોર્ટિંગ)',
      desc: 'Practical training on MS Excel formulas, email correspondence, procurement MIS reporting, mock interviews, and 100% placement support.'
    }
  ],
  batchTimings: [
    {
      shift: 'Batch 1 (Morning / સવારની બેચ)',
      time: '07:30 AM to 11:30 AM',
      hours: '4 Hours Daily',
      desc: 'Practical electronic component identification and purchase order drafting.'
    },
    {
      shift: 'Batch 2 (Afternoon / બપોરની બેચ)',
      time: '11:30 AM to 03:30 PM',
      hours: '4 Hours Daily',
      desc: 'Computer lab practical session, quotation analysis, and inventory software.'
    },
    {
      shift: 'Batch 3 (Evening / સાંજની બેચ)',
      time: '03:30 PM to 07:30 PM',
      hours: '4 Hours Daily',
      desc: 'Suitable for students and candidates seeking career transition.'
    }
  ],
  documents: [
    { id: 1, guj: '૦૪ પાસપોર્ટ સાઈઝ ફોટો', eng: '4 Passport size photographs' },
    { id: 2, guj: 'આધાર કાર્ડની કલર ઝેરોક્ષ', eng: 'Color xerox of Aadhaar card' },
    { id: 3, guj: 'શાળા છોડ્યાનું પ્રમાણપત્ર (LC)', eng: 'School Leaving Certificate (LC)' },
    { id: 4, guj: 'માર્કશીટ (ધોરણ ૧૦ પાસ માર્કશીટ)', eng: 'Marksheet (10th Pass Marksheet)' },
    { id: 5, guj: 'બેંક પાસબુક પ્રથમ પાનાની નકલ', eng: 'Copy of bank passbook first page (for stipend transfer)' },
    { id: 6, guj: 'લગ્ન નોંધણી પ્રમાણપત્ર (માત્ર પરિણીત મહિલાઓ માટે)', eng: 'Marriage registration certificate (for married women only)' }
  ]
}

export default function PurchaseCoordinatorElectronicsPage() {
  return <CourseDetailTemplate course={courseData} />
}
