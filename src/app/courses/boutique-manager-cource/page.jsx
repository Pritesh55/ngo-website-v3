'use client'
import React from 'react'
import CourseDetailTemplate from '@/components/courses/CourseDetailTemplate'

const courseData = {
  title: 'Boutique Manager Course',
  gujaratiTitle: 'બુટિક મેનેજર કોર્સ',
  categoryBadge: 'Govt. Certified Professional Program',
  description: 'An advanced 6-month retail management program for degree holders, covering boutique operations, visual merchandising, fabric procurement, client consultations, inventory accounting, and staff supervision.',
  gujaratiDescription: 'માનવ કલ્યાણ ટ્રસ્ટ દ્વારા સ્નાતક (UG Degree) ઉમેદવારો માટે ખાસ આયોજિત ૬ મહિના (૬૦૦ કલાક) નો બુટિક મેનેજર પ્રોફેશનલ કોર્સ. જેમાં બુટિક મેનેજમેન્ટ, ફેશન રિટેલ, મર્ચેન્ડાઇઝિંગ, ક્લાયન્ટ કન્સલ્ટેશન અને અદ્યતન સ્ટોર ઓપરેશન્સની પ્રેક્ટિકલ તાલીમ આપવામાં આવે છે.',
  image: '/images/courses/Boutique_Manager_Course/Boutique_Manager_Course.png',
  duration: '6 Months',
  durationHours: '600 Hours / ૬૦૦ કલાક',
  fee: 'Free (રૂ. 0/-)',
  qualification: 'Completed 3-Year UG Degree',
  ageLimit: 'Minimum 23+ Years required (ન્યૂનતમ ૨૩ વર્ષ જરૂરી)',
  stipend: 'Stipend provided by Government after Certification',
  placement: '100% Job Placement Assistance',
  syllabus: [
    {
      title: 'Boutique Store Planning & Visual Merchandising (સ્ટોર પ્લાનિંગ)',
      desc: 'Boutique interior layout, store zoning, garment display racks, mannequin styling, window displays, and luxury boutique ambiance.'
    },
    {
      title: 'Fashion Merchandising & Fabric Wholesale Sourcing (મર્ચેન્ડાઇઝિંગ)',
      desc: 'Wholesale textile procurement, vendor negotiations, fabric quality grading, seasonal collection planning, and markups.'
    },
    {
      title: 'Client Consultation, Body Measurements & Styling (કન્સલ્ટેશન)',
      desc: 'Consulting high-profile clients, body proportions, custom measurements, silhouette selection, bespoke fittings, and repeat client relationships.'
    },
    {
      title: 'Inventory Control, Billing & POS Software (ઇન્વેન્ટરી અને બિલિંગ)',
      desc: 'Barcode scanning, stock audit, fast vs slow moving stock management, retail POS software, invoices, and GST compliance.'
    },
    {
      title: 'Staff Supervision & Customer Experience (સ્ટાફ મેનેજમેન્ટ)',
      desc: 'Supervising master cutters, tailors, and sales staff, customer hospitality standards, handling feedback, and boutique workflow.'
    },
    {
      title: 'Boutique Branding, Digital Marketing & Finance (બ્રાન્ડિંગ અને માર્કેટિંગ)',
      desc: 'Social media cataloging, WhatsApp business marketing, photo styling, profit-loss bookkeeping, and boutique startup guidance.'
    }
  ],
  batchTimings: [
    {
      shift: 'Batch 1 (Morning / સવારની બેચ)',
      time: '07:30 AM to 11:30 AM',
      hours: '4 Hours Daily',
      desc: 'Ideal for early learners and those managing daytime responsibilities.'
    },
    {
      shift: 'Batch 2 (Afternoon / બપોરની બેચ)',
      time: '11:30 AM to 03:30 PM',
      hours: '4 Hours Daily',
      desc: 'Focused 4-hour comprehensive practical and retail operations session.'
    },
    {
      shift: 'Batch 3 (Evening / સાંજની બેચ)',
      time: '03:30 PM to 07:30 PM',
      hours: '4 Hours Daily',
      desc: 'Convenient slot for degree graduates and working professionals.'
    }
  ],
  documents: [
    { id: 1, guj: '૦૪ પાસપોર્ટ સાઈઝ ફોટો', eng: '4 Passport size photographs' },
    { id: 2, guj: 'આધાર કાર્ડની કલર ઝેરોક્ષ', eng: 'Color xerox of Aadhaar card' },
    { id: 3, guj: 'શાળા છોડ્યાનું પ્રમાણપત્ર (LC)', eng: 'School Leaving Certificate (LC)' },
    { id: 4, guj: 'માર્કશીટ (૩ વર્ષની સ્નાતક ડિગ્રી માર્કશીટ)', eng: 'Marksheet (3-Year UG Degree Marksheet)' },
    { id: 5, guj: 'બેંક પાસબુક પ્રથમ પાનાની નકલ', eng: 'Copy of bank passbook first page (for stipend transfer)' },
    { id: 6, guj: 'લગ્ન નોંધણી પ્રમાણપત્ર (માત્ર પરિણીત મહિલાઓ માટે)', eng: 'Marriage registration certificate (for married women only)' }
  ]
}

export default function BoutiqueManagerCoursePage() {
  return <CourseDetailTemplate course={courseData} />
}
