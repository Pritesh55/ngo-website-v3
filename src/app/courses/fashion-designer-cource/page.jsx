'use client'
import React from 'react'
import CourseDetailTemplate from '@/components/courses/CourseDetailTemplate'

const courseData = {
  title: 'Fashion Designer Course',
  gujaratiTitle: 'ફેશન ડિઝાઇનર કોર્સ',
  categoryBadge: 'Govt. Certified Vocational Course',
  description: 'A comprehensive 6-month hands-on vocational program designed to prepare candidates for careers in fashion design, garment construction, pattern drafting, and apparel entrepreneurship.',
  gujaratiDescription: 'માનવ કલ્યાણ ટ્રસ્ટ દ્વારા આયોજિત ૬ મહિના (૫૭૦ કલાક) નો ફેશન ડિઝાઇનર કોર્સ. જેમાં ગાર્મેન્ટ ડિઝાઇનિંગ, સ્કેચિંગ, પેટર્ન મેકિંગ, સિલાઈ ટેકનિક્સ અને પ્રોફેશનલ બુટિક કૌશલ્ય શીખવવામાં આવે છે.',
  image: '/images/courses/fashion_designer_cources/Fashion_designer_Course.png',
  duration: '6 Months',
  durationHours: '570 Hours / ૫૭૦ કલાક',
  fee: 'Free (રૂ. 0/-)',
  qualification: '12th Pass or 3-Year Diploma after 10th',
  ageLimit: '20+ Years required (૨૦+ ઉંમર જરૂરી)',
  stipend: 'Stipend provided by Government after Certification',
  placement: '100% Job Placement Assistance',
  syllabus: [
    {
      title: 'Fashion Illustration & Croquis Sketching (ફેશન ઇલસ્ટ્રેશન)',
      desc: 'Fundamentals of figure drawing, fashion croquis, body proportions, silhouette design, color wheel theory, and fabric rendering.'
    },
    {
      title: 'Pattern Making & Garment Drafting (પેટર્ન મેકિંગ અને ડ્રાફ્ટિંગ)',
      desc: 'Precision body measurements, drafting basic blocks, pattern alteration, dart manipulation, and custom sizing techniques.'
    },
    {
      title: 'Garment Construction & Stitching (ગાર્મેન્ટ કન્સ્ટ્રક્શન અને સિલાઈ)',
      desc: 'Hands-on practice on modern sewing machines, seam finishes, collars, sleeves, necklines, zips, and professional garment assembly.'
    },
    {
      title: 'Fabric Science & Surface Ornamentation (ફેબ્રિક નોલેજ અને ભરતકામ)',
      desc: 'Identification of textiles, woven and knitted fabrics, embroidery stitches, mirror work, sequin application, and dyeing methods.'
    },
    {
      title: 'Ethnic, Western & Fusion Apparel Design (ડિઝાઇનિંગ વેર)',
      desc: 'Creative design of designer blouses, kurtis, lehengas, evening gowns, western wear, and festive collections.'
    },
    {
      title: 'Boutique Operations & Portfolio (પોર્ટફોલિયો અને બુટિક સંચાલન)',
      desc: 'Building a professional design portfolio, client order handling, costing, pricing strategy, and job placement assistance.'
    }
  ],
  batchTimings: [
    {
      shift: 'Batch 1 (Morning / સવારની બેચ)',
      time: '07:30 AM to 11:30 AM',
      hours: '4 Hours Daily',
      desc: 'Ideal for early learners and candidates managing daytime commitments.'
    },
    {
      shift: 'Batch 2 (Afternoon / બપોરની બેચ)',
      time: '11:30 AM to 03:30 PM',
      hours: '4 Hours Daily',
      desc: 'Convenient 4-hour comprehensive practical and theory session.'
    },
    {
      shift: 'Batch 3 (Evening / સાંજની બેચ)',
      time: '03:30 PM to 07:30 PM',
      hours: '4 Hours Daily',
      desc: 'Perfect for working individuals and college students.'
    }
  ],
  documents: [
    { id: 1, guj: '૦૪ પાસપોર્ટ સાઈઝ ફોટો', eng: '4 Passport size photographs' },
    { id: 2, guj: 'આધાર કાર્ડની કલર ઝેરોક્ષ', eng: 'Color xerox of Aadhaar card' },
    { id: 3, guj: 'શાળા છોડ્યાનું પ્રમાણપત્ર (LC)', eng: 'School Leaving Certificate (LC)' },
    { id: 4, guj: 'માર્કશીટ (ધોરણ ૧૨ / ડિપ્લોમા)', eng: 'Marksheet (12th Pass or 3-Year Diploma)' },
    { id: 5, guj: 'બેંક પાસબુક પ્રથમ પાનાની નકલ', eng: 'Copy of bank passbook first page (for stipend transfer)' },
    { id: 6, guj: 'લગ્ન નોંધણી પ્રમાણપત્ર (માત્ર પરિણીત મહિલાઓ માટે)', eng: 'Marriage registration certificate (for married women only)' }
  ]
}

export default function FashionDesignerCoursePage() {
  return <CourseDetailTemplate course={courseData} />
}
