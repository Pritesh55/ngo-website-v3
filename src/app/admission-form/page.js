'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  Clock,
  Printer,
  Calendar,
  MapPin,
  Camera,
  Trash2,
  FileCheck,
  RefreshCw,
  Info,
  ShieldCheck,
  BookOpen,
  User,
  GraduationCap,
  Plus,
  File,
  ChevronDown,
  Sparkles,
  Loader2
} from 'lucide-react'

// ============================================================
// ATOM: COURSE_DEFINITIONS
// ============================================================
const COURSES = [
  {
    id: 'fashion designer',
    name: 'Fashion Designer',
    prefix: 'FD',
    duration: '6 Months (570 Hours)',
    minAge: 20,
    minEduLevel: 2, // Min 12th pass or Diploma (level 2 or 3)
    allowedEduLevels: [2, 3, 4],
    eduRequirementText: 'Minimum 12th Pass or 3-Year Diploma after 10th required',
  },
  {
    id: 'boutique manager',
    name: 'Boutique Manager',
    prefix: 'BM',
    duration: '6 Months (600 Hours)',
    minAge: 23,
    minEduLevel: 4, // UnderGraduate Degree (UG)
    allowedEduLevels: [4],
    eduRequirementText: 'Minimum UnderGraduate Degree (UG - 3 or 4 years) required',
  },
  {
    id: 'purchase coordinator electronics',
    name: 'Purchase Coordinator - Electronics',
    prefix: 'EPC',
    duration: '6 Months (510 Hours)',
    minAge: 16,
    minEduLevel: 1, // Minimum 10th pass
    allowedEduLevels: [1, 2, 3, 4],
    eduRequirementText: 'Minimum 10th Pass required',
  },
]

// ============================================================
// ATOM: TIMESLOT_DEFINITIONS
// ============================================================
const TIME_SLOTS = [
  '7:30 AM to 11:30 AM',
  '11:30 AM to 3:30 PM',
  '3:30 PM to 7:30 PM',
]

// ============================================================
// ATOM: EDUCATION_LEVELS_DEFINITIONS
// ============================================================
const EDUCATION_LEVELS = [
  { id: 0, label: 'Below 10th pass' },
  { id: 1, label: '10th pass' },
  { id: 2, label: '12th pass' },
  { id: 3, label: 'Diploma after 10th' },
  { id: 4, label: 'UG' },
]

// ============================================================
// ATOM: BELOW_10TH_STANDARDS_DEFINITIONS
// ============================================================
const BELOW_10TH_STANDARDS = [
  '1st Pass',
  '2nd Pass',
  '3rd Pass',
  '4th Pass',
  '5th Pass',
  '6th Pass',
  '7th Pass',
  '8th Pass',
  '9th Pass',
  '10th Pass',
]

// ============================================================
// ATOM: TABLE_EXAM_OPTIONS (Exam Passed Autocomplete Options)
// ============================================================
const TABLE_EXAM_OPTIONS = [
  '10th pass',
  '12th pass',
  'Diploma after 10th',
  'UG',
  'Below 10th pass',
]

// ============================================================
// ATOM: INITIAL_EDUCATION_HISTORY_GENERATOR
// Generates exact table rows based on selected Education Qualification
// ============================================================
const getInitialEducationHistory = (eduLevelId, below10thStd = '') => {
  if (eduLevelId === '' || eduLevelId === null || eduLevelId === undefined) {
    return []
  }
  switch (Number(eduLevelId)) {
    case 0: // Below 10th pass
      return [
        {
          exam: below10thStd ? `Below 10th (${below10thStd})` : 'Below 10th pass',
          board: '',
          year: '',
        },
      ]
    case 1: // 10th pass
      return [
        {
          exam: '10th pass',
          board: 'GSEB',
          year: '',
        },
      ]
    case 2: // 12th pass
      return [
        {
          exam: '10th pass',
          board: 'GSEB',
          year: '',
        },
        {
          exam: '12th pass',
          board: 'GSHSEB',
          year: '',
        },
      ]
    case 3: // Diploma after 10th
      return [
        {
          exam: '10th pass',
          board: 'GSEB',
          year: '',
        },
        {
          exam: 'Diploma after 10th',
          board: 'GTU',
          year: '',
        },
      ]
    case 4: // UG
      return [
        {
          exam: '10th pass',
          board: 'GSEB',
          year: '',
        },
        {
          exam: '12th pass',
          board: 'GSHSEB',
          year: '',
        },
        {
          exam: 'UG',
          board: '',
          year: '',
        },
      ]
    default:
      return []
  }
}

// ============================================================
// ATOM: INDIAN_STATES_DATA (Gujarat first, then near-Gujarat states, then rest of India)
// ============================================================
const INDIAN_STATES = [
  // Gujarat first
  { name: 'Gujarat' },

  // Near Gujarat neighboring states & Union Territories
  { name: 'Maharashtra' },
  { name: 'Rajasthan' },
  { name: 'Madhya Pradesh' },
  { name: 'Dadra and Nagar Haveli and Daman and Diu' },
  { name: 'Goa' },

  // Remaining Indian States & Union Territories (Alphabetical)
  { name: 'Andaman and Nicobar Islands' },
  { name: 'Andhra Pradesh' },
  { name: 'Arunachal Pradesh' },
  { name: 'Assam' },
  { name: 'Bihar' },
  { name: 'Chandigarh' },
  { name: 'Chhattisgarh' },
  { name: 'Delhi (NCT)' },
  { name: 'Haryana' },
  { name: 'Himachal Pradesh' },
  { name: 'Jammu and Kashmir' },
  { name: 'Jharkhand' },
  { name: 'Karnataka' },
  { name: 'Kerala' },
  { name: 'Ladakh' },
  { name: 'Lakshadweep' },
  { name: 'Manipur' },
  { name: 'Meghalaya' },
  { name: 'Mizoram' },
  { name: 'Nagaland' },
  { name: 'Odisha' },
  { name: 'Puducherry' },
  { name: 'Punjab' },
  { name: 'Sikkim' },
  { name: 'Tamil Nadu' },
  { name: 'Telangana' },
  { name: 'Tripura' },
  { name: 'Uttar Pradesh' },
  { name: 'Uttarakhand' },
  { name: 'West Bengal' },
]

// Module-level caches for full datasets (persist across navigations without reloading)
let cachedCities = null
let cachedVillages = null

// Fast instant fallback dataset for zero-lag initial page paint (covers primary Gujarat cities & Ahmedabad)
const FAST_FALLBACK_CITIES = [
  { name: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Surat', state: 'Gujarat' },
  { name: 'Vadodara', state: 'Gujarat' },
  { name: 'Rajkot', state: 'Gujarat' },
  { name: 'Bhavnagar', state: 'Gujarat' },
  { name: 'Jamnagar', state: 'Gujarat' },
  { name: 'Gandhinagar', state: 'Gujarat' },
  { name: 'Junagadh', state: 'Gujarat' },
  { name: 'Anand', state: 'Gujarat' },
  { name: 'Navsari', state: 'Gujarat' },
  { name: 'Morbi', state: 'Gujarat' },
  { name: 'Nadiad', state: 'Gujarat' },
  { name: 'Surendranagar', state: 'Gujarat' },
  { name: 'Bharuch', state: 'Gujarat' },
  { name: 'Mehsana', state: 'Gujarat' },
  { name: 'Bhuj', state: 'Gujarat' },
  { name: 'Porbandar', state: 'Gujarat' },
  { name: 'Palanpur', state: 'Gujarat' },
  { name: 'Valsad', state: 'Gujarat' },
  { name: 'Vapi', state: 'Gujarat' },
  { name: 'Gondal', state: 'Gujarat' },
  { name: 'Veraval', state: 'Gujarat' },
  { name: 'Godhra', state: 'Gujarat' },
  { name: 'Patan', state: 'Gujarat' },
  { name: 'Dahod', state: 'Gujarat' },
  { name: 'Botad', state: 'Gujarat' },
  { name: 'Amreli', state: 'Gujarat' },
  { name: 'Deesa', state: 'Gujarat' },
  { name: 'Jetpur', state: 'Gujarat' },
]

const FAST_FALLBACK_VILLAGES = [
  { name: 'Ghatlodia', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Naranpura', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Memnagar', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Chandlodia', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Ranip', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Sola', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Satellite', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Vastrapur', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Bopal', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Bodakdev', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Navrangpura', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Sabarmati', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Maninagar', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Gota', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Thaltej', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Jodhpur', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Ambawadi', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Paldi', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Usmanpura', district: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Vejalpur', district: 'Ahmedabad', state: 'Gujarat' },
]

// ============================================================
// ATOM: AUTOCOMPLETE_SUGGEST_INPUT_COMPONENT
// ============================================================
function AutocompleteInput({
  id,
  atomId,
  label,
  value,
  onChange,
  onSelectOption,
  options = [],
  placeholder,
  required = false,
  error,
  disabled = false,
  helperText,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  const filtered = useMemo(() => {
    if (!options || options.length === 0) return []
    if (!value || !value.trim()) {
      // Return options in their pre-sorted contextual order (capped to 80 items for maximum speed)
      return options.slice(0, 80)
    }
    const q = value.toLowerCase().trim()
    const matches = options.filter(
      (opt) =>
        opt.name.toLowerCase().includes(q) ||
        (opt.state && opt.state.toLowerCase().includes(q)) ||
        (opt.district && opt.district.toLowerCase().includes(q))
    )
    return matches
      .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(q)
        const bStarts = b.name.toLowerCase().startsWith(q)
        if (aStarts && !bStarts) return -1
        if (!aStarts && bStarts) return 1
        return 0 // Maintain original contextual order
      })
      .slice(0, 80)
  }, [value, options])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div id={`atom-${atomId}`} data-atom-id={atomId} ref={wrapperRef} className="relative">
      <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5 flex items-center justify-between">
        <span>
          {label} {required && <span className="text-red-600">*</span>}
        </span>
        <span className="text-[10px] text-slate-400 font-normal">
          {disabled ? 'Locked' : 'Select or type'}
        </span>
      </label>
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            onChange(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => {
            if (!disabled) setIsOpen(true)
          }}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full ${disabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200' : 'bg-white text-slate-900 border-slate-300'
            } border ${error ? '!border-red-500' : ''
            } rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
        />
        <button
          type="button"
          tabIndex={-1}
          disabled={disabled}
          onClick={() => {
            if (!disabled) setIsOpen(!isOpen)
          }}
          className={`absolute right-3 top-1/2 -translate-y-1/2 ${disabled ? 'text-slate-300 cursor-not-allowed' : 'text-slate-400 hover:text-slate-600 cursor-pointer'
            }`}
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {helperText && !error && (
        <p className="text-[11px] text-slate-500 mt-1">{helperText}</p>
      )}

      {!disabled && isOpen && filtered.length > 0 && (
        <ul className="absolute z-40 left-0 right-0 mt-1 max-h-64 overflow-y-auto bg-white border border-slate-300 rounded-xl shadow-xl py-1 text-xs divide-y divide-slate-100">
          {filtered.map((item, index) => {
            const subtitle = [
              item.district,
              item.state && item.state !== item.district ? item.state : null,
            ]
              .filter(Boolean)
              .join(', ')

            return (
              <li
                key={index}
                onMouseDown={(e) => {
                  e.preventDefault()
                  onChange(item.name)
                  if (onSelectOption) onSelectOption(item)
                  setIsOpen(false)
                }}
                className="px-3.5 py-2.5 hover:bg-rose-50 hover:text-rose-900 cursor-pointer flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  {subtitle && (
                    <span className="text-[11px] text-slate-400 font-normal">
                      ({subtitle})
                    </span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}

// ============================================================
// ATOM: TABLE_EXAM_AUTOCOMPLETE (Searchable dropdown & datalist for table)
// ============================================================
function TableExamAutocomplete({
  value,
  onChange,
  placeholder,
  rowIndex = 0,
  allRows = [],
  allowedEduLevels = [],
}) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  const filteredOptions = useMemo(() => {
    // 1. Collect qualifications selected in other rows
    const otherSelectedExams = (allRows || [])
      .filter((_, i) => i !== rowIndex)
      .map((r) => (r.exam || '').toLowerCase().trim())
      .filter(Boolean)

    // 2. Check if first row or any other row has 10th pass or higher
    const firstRowExam = (allRows?.[0]?.exam || '').toLowerCase().trim()
    const isFirstRow10thOrHigher =
      firstRowExam.includes('10th') ||
      firstRowExam.includes('12th') ||
      firstRowExam.includes('diploma') ||
      firstRowExam.includes('ug')

    const has10thOrHigherElsewhere = otherSelectedExams.some(
      (e) => e.includes('10th') || e.includes('12th') || e.includes('diploma') || e.includes('ug')
    )

    // 3. Filter available options based on course eligibility and position
    const available = TABLE_EXAM_OPTIONS.filter((opt) => {
      const optLower = opt.toLowerCase().trim()

      // Requirement: Don't repeat qualifications already selected in other rows
      if (otherSelectedExams.includes(optLower)) {
        return false
      }

      // Requirement: 'Below 10th pass' should NOT be there if course doesn't allow Below 10th pass
      if (optLower === 'below 10th pass') {
        const isBelow10thAllowedForCourse = allowedEduLevels?.includes(0)
        if (!isBelow10thAllowedForCourse) {
          return false
        }
        if (rowIndex > 0 && (isFirstRow10thOrHigher || has10thOrHigherElsewhere)) {
          return false
        }
      }

      return true
    })

    // 4. If user typed in search query, further filter
    if (value && value.trim()) {
      const q = value.toLowerCase().trim()
      const searchMatches = available.filter((opt) =>
        opt.toLowerCase().includes(q)
      )
      return searchMatches.length > 0 ? searchMatches : available
    }

    return available
  }, [value, rowIndex, allRows, allowedEduLevels])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className={`relative w-full ${isOpen ? 'z-[9999]' : 'z-10'}`}>
      <div className="relative flex items-center">
        <input
          type="text"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder || 'Select or type exam...'}
          className="w-full pl-2 pr-6 py-1.5 text-xs border-0 focus:ring-1 focus:ring-rose-500 font-medium text-slate-800 bg-transparent rounded"
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-1 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
          title="Show exam suggestions"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Custom styled autocomplete floating dropdown - Highest z-index, no scrollbar, full display */}
      {isOpen && (
        <ul className="absolute z-[9999] left-0 top-full mt-1 min-w-[230px] w-full bg-white border border-slate-300 rounded-xl shadow-2xl py-1 text-xs divide-y divide-slate-100">
          <li className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 rounded-t-xl">
            Suggested Qualifications
          </li>
          {filteredOptions.length === 0 ? (
            <li className="px-3 py-2.5 text-slate-400 italic text-[11px]">
              No other standard qualifications. You can type custom exam name.
            </li>
          ) : (
            filteredOptions.map((opt) => {
              const isSelected = (value || '').toLowerCase() === opt.toLowerCase()
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      onChange(opt)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-3.5 py-2 flex items-center justify-between transition-colors cursor-pointer ${isSelected
                      ? 'bg-rose-50 text-rose-700 font-bold'
                      : 'hover:bg-slate-50 text-slate-800 hover:text-rose-600'
                      }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <span className="text-rose-600 font-bold">✓</span>}
                  </button>
                </li>
              )
            })
          )}
        </ul>
      )}
    </div>
  )
}

export default function AdmissionFormPage() {
  const todayDateFormatted = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  // ============================================================
  // ATOM: INITIAL_FORM_STATE
  // ============================================================
  const initialFormState = {
    application_date: todayDateFormatted,
    application_place: 'Ahmedabad',
    course_name: 'fashion designer',
    course_duration: '6 Months (570 Hours)',
    time_slot: '7:30 AM to 11:30 AM',
    form_no: 'FD_001',
    registration_no: 'MKT_001',

    // Personal Details (Default Gender: Male)
    full_name: '',
    date_of_birth: '', // Stored as DD/MM/YYYY
    calculated_age: '',
    gender: 'Male',
    fathers_name: '',
    mothers_name: '',
    fathers_occupation: '',
    marital_status: 'Unmarried',
    category: 'GEN',
    aadhaar_no: '',

    // Contact & Address
    contact_number: '',
    father_number: '',
    email: '',
    flat_society: '',
    street_road: '',
    landmark: '',
    area_village: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '',
    same_as_postal: true,
    permanent_address: '',
    permanent_pincode: '',

    // Education
    education_level: '',
    education_level_id: '',
    below_10th_standard: '',
    year_of_passing: '',
    education_history: [],

    // File Uploads (Supports multiple photos, PDFs, or documents)
    passport_photo_url: '',
    aadhaar_photos: [],
    marriage_certificates: [],
    school_leaving_certificates: [],
    marksheets_10th: [],
    marksheets_12th: [],
    diploma_certificates: [],
    ug_degree_certificates: [],

    // Declaration
    declaration_agreed: false,
  }

  const [formData, setFormData] = useState(initialFormState)
  const [allCities, setAllCities] = useState(() => cachedCities || FAST_FALLBACK_CITIES)
  const [allVillages, setAllVillages] = useState(() => cachedVillages || FAST_FALLBACK_VILLAGES)
  const [lastSavedTime, setLastSavedTime] = useState('')
  const [ageValidationMsg, setAgeValidationMsg] = useState({ valid: true, text: '' })
  const [eduValidationMsg, setEduValidationMsg] = useState({ valid: true, text: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(null)
  const [errors, setErrors] = useState({})
  const [pincodeLoading, setPincodeLoading] = useState(false)
  const [pincodeStatusMsg, setPincodeStatusMsg] = useState({ text: '', isError: false })
  const [pincodeVillages, setPincodeVillages] = useState([])
  const [permPincodeStatusMsg, setPermPincodeStatusMsg] = useState({ text: '', isError: false })
  const [isPassportDragging, setIsPassportDragging] = useState(false)
  const [draggingField, setDraggingField] = useState(null)

  const formDataRef = useRef(formData)
  useEffect(() => {
    formDataRef.current = formData
  }, [formData])

  // Non-blocking background loader for full all-India cities & villages datasets (320KB+)
  useEffect(() => {
    if (cachedCities && cachedVillages) return

    let isMounted = true
    const loadFullDatasets = async () => {
      try {
        const [citiesMod, villagesMod] = await Promise.all([
          import('@/data/all_india_cities.json'),
          import('@/data/all_india_villages.json'),
        ])
        cachedCities = citiesMod.default || citiesMod
        cachedVillages = villagesMod.default || villagesMod
        if (isMounted) {
          setAllCities(cachedCities)
          setAllVillages(cachedVillages)
        }
      } catch (err) {
        console.warn('Background dataset load error:', err)
      }
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => loadFullDatasets(), { timeout: 1200 })
      return () => {
        isMounted = false
        if (window.cancelIdleCallback) window.cancelIdleCallback(handle)
      }
    } else {
      const timer = setTimeout(loadFullDatasets, 60)
      return () => {
        isMounted = false
        clearTimeout(timer)
      }
    }
  }, [])

  // Active course definition based on selected course_name
  const activeCourse = useMemo(() => {
    return COURSES.find((c) => c.id === formData.course_name) || COURSES[0]
  }, [formData.course_name])

  // Lookup PIN Code across India via Postal Registry API
  const lookupPincode = useCallback(async (pin, isPermanent = false) => {
    const cleanPin = (pin || '').replace(/\D/g, '')
    if (cleanPin.length !== 6) return

    if (!isPermanent) {
      setPincodeLoading(true)
      setPincodeStatusMsg({ text: `Looking up Postal registry for PIN ${cleanPin}...`, isError: false })
    }

    try {
      const res = await fetch(`/api/pincode?code=${cleanPin}`)
      const data = await res.json()

      if (data.success) {
        if (!isPermanent) {
          setFormData((prev) => ({
            ...prev,
            pincode: cleanPin,
            state: data.state || prev.state,
            city: data.city || data.district || prev.city,
            area_village: data.primaryVillage || prev.area_village,
          }))

          if (Array.isArray(data.villages) && data.villages.length > 0) {
            const formattedVillages = data.villages.map((vName) => ({
              name: vName,
              district: data.city || data.district,
              state: data.state,
              priority: true,
              fromPincode: true,
            }))
            setPincodeVillages(formattedVillages)
          }

          // Clear validation errors for auto-filled fields
          setErrors((prev) => {
            const updated = { ...prev }
            delete updated.pincode
            delete updated.state
            delete updated.city
            delete updated.area_village
            return updated
          })

          setPincodeStatusMsg({
            text: `✓ Auto-selected: ${data.primaryVillage ? `${data.primaryVillage}, ` : ''}${data.city || data.district}, ${data.state}`,
            isError: false,
          })
        } else {
          setPermPincodeStatusMsg({
            text: `✓ Detected: ${data.city || data.district}, ${data.state}`,
            isError: false,
          })
        }
      } else {
        if (!isPermanent) {
          setPincodeStatusMsg({
            text: data.error || 'Pincode not found. Please fill city, state & village manually.',
            isError: true,
          })
        } else {
          setPermPincodeStatusMsg({
            text: data.error || 'Pincode not found.',
            isError: true,
          })
        }
      }
    } catch {
      if (!isPermanent) {
        setPincodeStatusMsg({
          text: 'Pincode lookup failed. Please enter details manually.',
          isError: true,
        })
      }
    } finally {
      if (!isPermanent) {
        setPincodeLoading(false)
      }
    }
  }, [])

  // Handle Pincode input with automatic 6-digit detection
  const handlePincodeChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 6)
    setFormData((prev) => ({ ...prev, pincode: rawVal }))
    if (rawVal.length === 6) {
      lookupPincode(rawVal, false)
    } else {
      setPincodeStatusMsg({ text: '', isError: false })
      setPincodeVillages([])
    }
  }

  // Dynamic City options:
  // Dynamic City options:
  // Strictly filter to ONLY the selected state's cities/districts (User requirement)
  const contextualCityOptions = useMemo(() => {
    const selectedState = (formData.state || '').trim().toLowerCase()
    if (!selectedState) return []
    return allCities
      .filter((c) => (c.state || '').toLowerCase() === selectedState)
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [formData.state, allCities])

  // Dynamic Village options:
  // Strictly filter to ONLY the selected state (and if city is chosen, prioritize/filter to that city's villages)
  const contextualVillageOptions = useMemo(() => {
    const selectedState = (formData.state || '').trim().toLowerCase()
    const selectedCity = (formData.city || '').trim().toLowerCase()
    if (!selectedState) return []

    // 1. PIN code villages from live postal lookup (filtered to this state)
    const pinVillages = (pincodeVillages || [])
      .filter((v) => {
        const matchState = !v.state || v.state.toLowerCase() === selectedState
        const matchCity = !selectedCity || !v.district || v.district.toLowerCase() === selectedCity
        return matchState && matchCity
      })
      .map((v) => ({
        name: v.name,
        district: v.district || formData.city,
        state: v.state || formData.state,
      }))

    // 2. Villages from allVillages strictly matching this selected state
    const stateVillages = allVillages.filter(
      (v) => (v.state || '').toLowerCase() === selectedState
    )

    // If city is selected, check if we have specific villages for that city
    let matchedVillages = stateVillages
    if (selectedCity) {
      const citySpecific = stateVillages.filter((v) => {
        const vd = (v.district || '').toLowerCase().trim()
        const sc = selectedCity.trim()
        if (vd === sc) return true
        const n1 = vd.replace(/[^a-z0-9]/g, '')
        const n2 = sc.replace(/[^a-z0-9]/g, '')
        return n1.includes(n2) || n2.includes(n1)
      })
      if (citySpecific.length > 0) {
        matchedVillages = citySpecific
      }
    }

    const sorted = [...matchedVillages].sort((a, b) => a.name.localeCompare(b.name))

    if (pinVillages.length > 0) {
      const seen = new Set(pinVillages.map((p) => p.name.toLowerCase()))
      const nonDuplicate = sorted.filter((b) => !seen.has(b.name.toLowerCase()))
      return [...pinVillages, ...nonDuplicate]
    }

    return sorted
  }, [formData.city, formData.state, pincodeVillages, allVillages])

  // Dynamic sample cities and placeholder for City/District based on selected State
  const sampleCities = useMemo(() => {
    if (!formData.state || contextualCityOptions.length === 0) return ''
    return contextualCityOptions.slice(0, 3).map((c) => c.name).join(', ')
  }, [formData.state, contextualCityOptions])

  const cityPlaceholder = useMemo(() => {
    if (!formData.state) {
      return 'पहले State चुनें (Select State first)'
    }
    return sampleCities
      ? `Select city in ${formData.state} (e.g. ${sampleCities})...`
      : `Select or type city in ${formData.state}...`
  }, [formData.state, sampleCities])

  // Dynamic sample villages and placeholder for Area/Village based on selected State & City/District
  const sampleVillages = useMemo(() => {
    if (!formData.city || contextualVillageOptions.length === 0) return ''
    return contextualVillageOptions.slice(0, 3).map((v) => v.name).join(', ')
  }, [formData.city, contextualVillageOptions])

  const villagePlaceholder = useMemo(() => {
    if (!formData.state) {
      return 'पहले State चुनें (Select State first)'
    }
    if (!formData.city) {
      return `पहले City चुनें (Select City in ${formData.state} first)`
    }
    return sampleVillages
      ? `Select village in ${formData.city} (e.g. ${sampleVillages})...`
      : `Select or type village in ${formData.city}, ${formData.state}...`
  }, [formData.state, formData.city, sampleVillages])

  // Helper to parse DD/MM/YYYY into a real Date
  const parseDobStringToDate = (dobStr) => {
    if (!dobStr) return null
    if (dobStr.includes('/')) {
      const parts = dobStr.split('/')
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10)
        const month = parseInt(parts[1], 10) - 1
        const year = parseInt(parts[2], 10)
        if (day > 0 && day <= 31 && month >= 0 && month < 12 && year > 1900) {
          return new Date(year, month, day)
        }
      }
    }
    const d = new Date(dobStr)
    return isNaN(d.getTime()) ? null : d
  }

  // 1. Calculate age from Date of Birth (DD/MM/YYYY)
  const calculateAge = (dobString) => {
    const birthDate = parseDobStringToDate(dobString)
    if (!birthDate) return null

    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  // Format typed DOB as DD/MM/YYYY automatically
  const handleDobChange = (e) => {
    let val = e.target.value.replace(/[^\d/]/g, '')
    if (val.length === 2 && !val.includes('/')) {
      val = val + '/'
    } else if (val.length === 5 && (val.match(/\//g) || []).length === 1) {
      val = val + '/'
    }
    setFormData((prev) => ({ ...prev, date_of_birth: val }))
  }

  // Handle native date picker selection and format to DD/MM/YYYY
  const handleNativeDateChange = (e) => {
    const ymd = e.target.value
    if (!ymd) return
    const [yyyy, mm, dd] = ymd.split('-')
    if (yyyy && mm && dd) {
      setFormData((prev) => ({ ...prev, date_of_birth: `${dd}/${mm}/${yyyy}` }))
    }
  }

  // 2. Validate Age and Education when course, DOB, or education changes
  useEffect(() => {
    const activeCourse = COURSES.find((c) => c.id === formData.course_name) || COURSES[0]

    // Age validation
    if (formData.date_of_birth && formData.date_of_birth.length >= 10) {
      const age = calculateAge(formData.date_of_birth)
      setFormData((prev) => ({ ...prev, calculated_age: age !== null ? age : '' }))

      if (age !== null) {
        if (age < activeCourse.minAge) {
          setAgeValidationMsg({
            valid: false,
            text: `Age requirement not met! ${activeCourse.name} requires minimum ${activeCourse.minAge}+ years of age. (Current: ${age} years)`,
          })
        } else {
          setAgeValidationMsg({
            valid: true,
            text: `Eligible: Age ${age} years meets the requirement (${activeCourse.minAge}+ years).`,
          })
        }
      } else {
        setAgeValidationMsg({ valid: false, text: 'Please enter a valid date in DD/MM/YYYY format.' })
      }
    } else {
      setAgeValidationMsg({ valid: true, text: '' })
    }

    // Education validation
    if (formData.education_level_id !== undefined && formData.education_level_id !== null && formData.education_level_id !== '') {
      const isEduAllowed =
        activeCourse.allowedEduLevels.includes(formData.education_level_id) ||
        (formData.education_level_id === 0 &&
          formData.below_10th_standard === '10th Pass' &&
          activeCourse.allowedEduLevels.includes(1))

      if (!isEduAllowed) {
        setEduValidationMsg({
          valid: false,
          text: `Selected education does not qualify for ${activeCourse.name}. ${activeCourse.eduRequirementText}.`,
        })
      } else {
        setEduValidationMsg({
          valid: true,
          text: `Education qualification eligible for ${activeCourse.name}.`,
        })
      }
    } else {
      setEduValidationMsg({ valid: true, text: '' })
    }
  }, [formData.course_name, formData.date_of_birth, formData.education_level_id, formData.below_10th_standard])

  // 3. Load from LocalStorage on mount
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem('mkt_admission_form_draft_v1')
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft)
        if (!parsed.gender) parsed.gender = 'Male'
        // Handle legacy single-string uploads to array transition
        if (parsed.marriage_certificate_url && (!parsed.marriage_certificates || !parsed.marriage_certificates.length)) {
          parsed.marriage_certificates = [{ name: 'Marriage Certificate', url: parsed.marriage_certificate_url, isImage: true }]
        }
        if (parsed.school_leaving_certificate_url && (!parsed.school_leaving_certificates || !parsed.school_leaving_certificates.length)) {
          parsed.school_leaving_certificates = [{ name: 'School Leaving Certificate', url: parsed.school_leaving_certificate_url, isImage: true }]
        }
        if (parsed.marksheet_10th_url && (!parsed.marksheets_10th || !parsed.marksheets_10th.length)) {
          parsed.marksheets_10th = [{ name: '10th Marksheet', url: parsed.marksheet_10th_url, isImage: true }]
        }
        if (parsed.marksheet_12th_url && (!parsed.marksheets_12th || !parsed.marksheets_12th.length)) {
          parsed.marksheets_12th = [{ name: '12th Marksheet', url: parsed.marksheet_12th_url, isImage: true }]
        }
        if (parsed.diploma_certificate_url && (!parsed.diploma_certificates || !parsed.diploma_certificates.length)) {
          parsed.diploma_certificates = [{ name: 'Diploma Certificate', url: parsed.diploma_certificate_url, isImage: true }]
        }
        if (parsed.ug_degree_certificate_url && (!parsed.ug_degree_certificates || !parsed.ug_degree_certificates.length)) {
          parsed.ug_degree_certificates = [{ name: 'UG Degree Certificate', url: parsed.ug_degree_certificate_url, isImage: true }]
        }
        setFormData((prev) => ({ ...prev, ...parsed }))
        setLastSavedTime('Restored from previous session')
      }
    } catch (e) {
      console.error('Failed to load draft from localStorage', e)
    }
  }, [])

  // 4. Save to LocalStorage debounced (700ms) - eliminates UI freezing and input lag
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const sanitized = { ...formData }
        const cleanFiles = (list) => {
          if (!Array.isArray(list)) return []
          return list.map((f) => ({
            name: f.name,
            size: f.size,
            type: f.type,
            isPdf: f.isPdf,
            isImage: f.isImage,
            url: f.url && f.url.length > 500000 ? '' : f.url,
          }))
        }
        sanitized.aadhaar_photos = cleanFiles(sanitized.aadhaar_photos)
        sanitized.marriage_certificates = cleanFiles(sanitized.marriage_certificates)
        sanitized.school_leaving_certificates = cleanFiles(sanitized.school_leaving_certificates)
        sanitized.marksheets_10th = cleanFiles(sanitized.marksheets_10th)
        sanitized.marksheets_12th = cleanFiles(sanitized.marksheets_12th)
        sanitized.diploma_certificates = cleanFiles(sanitized.diploma_certificates)
        sanitized.ug_degree_certificates = cleanFiles(sanitized.ug_degree_certificates)
        if (sanitized.passport_photo_url && sanitized.passport_photo_url.length > 500000) {
          sanitized.passport_photo_url = ''
        }

        localStorage.setItem('mkt_admission_form_draft_v1', JSON.stringify(sanitized))
        const time = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
        setLastSavedTime(`Saved locally at ${time}`)
      } catch (e) {
        console.warn('LocalStorage save error:', e)
      }
    }, 700)

    return () => clearTimeout(timer)
  }, [formData])

  // 5. Send Beacon / Sync on Tab Close / Unload (lightweight, non-blocking payload < 64KB)
  useEffect(() => {
    const handleBeforeUnload = () => {
      const currentData = formDataRef.current
      if (currentData.full_name || currentData.contact_number || currentData.email) {
        const payloadData = {
          ...currentData,
          passport_photo_url: currentData.passport_photo_url ? '[attached]' : '',
          aadhaar_photos: (currentData.aadhaar_photos || []).map((f) => ({ name: f.name, size: f.size })),
          marriage_certificates: (currentData.marriage_certificates || []).map((f) => ({ name: f.name, size: f.size })),
          school_leaving_certificates: (currentData.school_leaving_certificates || []).map((f) => ({ name: f.name, size: f.size })),
          marksheets_10th: (currentData.marksheets_10th || []).map((f) => ({ name: f.name, size: f.size })),
          marksheets_12th: (currentData.marksheets_12th || []).map((f) => ({ name: f.name, size: f.size })),
          diploma_certificates: (currentData.diploma_certificates || []).map((f) => ({ name: f.name, size: f.size })),
          ug_degree_certificates: (currentData.ug_degree_certificates || []).map((f) => ({ name: f.name, size: f.size })),
          closedAt: new Date().toISOString(),
        }
        const payload = JSON.stringify(payloadData)

        if (navigator.sendBeacon) {
          const blob = new Blob([payload], { type: 'application/json' })
          navigator.sendBeacon('/api/admission/draft', blob)
        } else {
          fetch('/api/admission/draft', {
            method: 'POST',
            body: payload,
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
          })
        }
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('pagehide', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('pagehide', handleBeforeUnload)
    }
  }, [])

  // Handle Course Change
  const handleCourseChange = (courseId) => {
    const selected = COURSES.find((c) => c.id === courseId) || COURSES[0]
    setFormData((prev) => {
      let newEduLevelId = prev.education_level_id
      let newEduLevel = prev.education_level

      // If current education level is not allowed in new course, reset it
      if (prev.education_level_id !== '' && prev.education_level_id !== null && prev.education_level_id !== undefined) {
        if (!selected.allowedEduLevels.includes(newEduLevelId)) {
          newEduLevelId = ''
          newEduLevel = ''
        }
      }

      return {
        ...prev,
        course_name: selected.id,
        course_duration: selected.duration,
        form_no: `${selected.prefix}_001`,
        education_level_id: newEduLevelId,
        education_level: newEduLevel,
        below_10th_standard: newEduLevelId === 0 ? prev.below_10th_standard : '',
        education_history: getInitialEducationHistory(
          newEduLevelId,
          newEduLevelId === 0 ? prev.below_10th_standard : ''
        ),
      }
    })
  }

  // Handle Multiple File Uploads (Supports multiple photos, PDFs, or any documents)
  // Process multiple file uploads (from file input or drag-and-drop)
  const processMultipleFiles = (field, files) => {
    if (!files || !files.length) return

    const readers = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader()
        const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
        const isImage = file.type.startsWith('image/')
        reader.onload = () =>
          resolve({
            name: file.name,
            size: file.size,
            type: file.type || (isPdf ? 'application/pdf' : 'application/octet-stream'),
            isPdf,
            isImage,
            url: reader.result,
          })
        reader.readAsDataURL(file)
      })
    })

    Promise.all(readers).then((newFiles) => {
      setFormData((prev) => ({
        ...prev,
        [field]: [...(prev[field] || []), ...newFiles],
      }))
    })
  }

  // Handle Multiple File Uploads (Supports multiple photos, PDFs, or any documents)
  const handleMultipleFilesUpload = (field, e) => {
    const files = Array.from(e.target.files || [])
    processMultipleFiles(field, files)
    if (e.target) e.target.value = ''
  }

  // Handle Single Passport Photo Upload (file or drop)
  const processPassportFile = (file) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        passport_photo_url: reader.result,
      }))
      setErrors((prev) => {
        const u = { ...prev }
        delete u.passport_photo
        return u
      })
    }
    reader.readAsDataURL(file)
  }

  const handlePassportPhotoChange = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length) processPassportFile(files[0])
    if (e.target) e.target.value = ''
  }

  const handlePassportPhotoDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPassportDragging(false)
    const files = Array.from(e.dataTransfer?.files || [])
    if (files.length) processPassportFile(files[0])
  }

  // Remove uploaded file from array
  const removeFileFromArray = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  // Format file size nicely
  const formatFileSize = (bytes) => {
    if (!bytes) return ''
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  // Reusable Multiple File Upload Box Component with Drag & Drop
  const renderMultiUploadBox = ({
    field,
    label,
    required = false,
    atomId,
    description = 'Upload multiple photos, PDFs, or scanned documents.',
  }) => {
    const items = formData[field] || []
    const isDraggingThis = draggingField === field

    return (
      <div
        id={`atom-${atomId}`}
        data-atom-id={atomId}
        onDragOver={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (draggingField !== field) setDraggingField(field)
        }}
        onDragEnter={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setDraggingField(field)
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (e.currentTarget.contains(e.relatedTarget)) return
          setDraggingField(null)
        }}
        onDrop={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setDraggingField(null)
          const droppedFiles = Array.from(e.dataTransfer?.files || [])
          if (droppedFiles.length) {
            processMultipleFiles(field, droppedFiles)
          }
        }}
        className={`bg-white p-4 rounded-xl border transition-all space-y-3 ${isDraggingThis
          ? 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-300 shadow-md'
          : 'border-slate-200 shadow-xs'
          } ${items.length === 0 ? 'print:hidden' : ''} print:p-2.5 print:border print:border-slate-300 print:rounded-lg print:shadow-none`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              {label} {required && <span className="text-red-600">*</span>}
              {isDraggingThis && (
                <span className="text-[10px] font-semibold bg-rose-600 text-white px-2 py-0.5 rounded-full animate-pulse print:hidden">
                  Drop files to upload!
                </span>
              )}
            </span>
            <p className="text-[11px] text-slate-500 print:hidden">{description}</p>
          </div>
          <label className="cursor-pointer px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs print:hidden">
            <Plus className="w-3.5 h-3.5" /> Add Document / Photo / PDF
            <input
              type="file"
              accept="image/*,.pdf,application/pdf,.doc,.docx"
              multiple
              onChange={(e) => handleMultipleFilesUpload(field, e)}
              className="hidden"
            />
          </label>
        </div>

        {/* Drag & Drop Dropzone Box - Always visible on screen for multiple file uploads, ONLY hidden in printing */}
        <label
          className={`block border-2 border-dashed rounded-lg p-3 text-center cursor-pointer transition-colors print:hidden ${isDraggingThis
            ? 'border-rose-600 bg-rose-100/70 text-rose-800 font-semibold'
            : 'border-slate-300 hover:border-rose-500 hover:bg-slate-50/70 text-slate-500'
            }`}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <Upload className={`w-5 h-5 ${isDraggingThis ? 'text-rose-600 animate-bounce' : 'text-slate-400'}`} />
            <span className="text-xs font-medium">
              {isDraggingThis ? 'Drop documents here!' : 'Drag & drop photos, PDFs or documents here, or click to browse'}
            </span>
            <span className="text-[10px] text-slate-400">Supports multiple files (JPG, PNG, PDF, DOC)</span>
          </div>
          <input
            type="file"
            accept="image/*,.pdf,application/pdf,.doc,.docx"
            multiple
            onChange={(e) => handleMultipleFilesUpload(field, e)}
            className="hidden"
          />
        </label>

        {/* Uploaded Files Count & Badges */}
        {items.length > 0 && (
          <div className="space-y-2 pt-1 border-t border-slate-100 print:border-none print:pt-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>
                {items.length} {items.length === 1 ? 'document' : 'documents'} uploaded
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {items.map((fileItem, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs gap-2 group hover:border-slate-300 transition-colors print:bg-white print:border-slate-300"
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    {fileItem.isImage ? (
                      <div className="w-9 h-9 shrink-0 rounded overflow-hidden border border-slate-200 bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={fileItem.url}
                          alt={fileItem.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-9 h-9 shrink-0 rounded bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 font-bold text-[10px]">
                        PDF
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-800 truncate" title={fileItem.name}>
                        {fileItem.name || `Document_${idx + 1}`}
                      </p>
                      {fileItem.size && (
                        <p className="text-[10px] text-slate-400 print:hidden">{formatFileSize(fileItem.size)}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFileFromArray(field, idx)}
                    className="text-slate-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors cursor-pointer shrink-0 print:hidden"
                    title="Delete document"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Handle Education History Rows (Only 3 columns: exam, board, year)
  const updateEducationHistory = (index, field, value) => {
    const updated = [...formData.education_history]
    updated[index] = { ...updated[index], [field]: value }
    setFormData((prev) => ({ ...prev, education_history: updated }))
  }

  const addEducationRow = () => {
    setFormData((prev) => ({
      ...prev,
      education_history: [
        ...prev.education_history,
        { exam: '', board: '', year: '' },
      ],
    }))
  }

  // Remove Education History Row
  const removeEducationRow = (index) => {
    setFormData((prev) => ({
      ...prev,
      education_history: prev.education_history.filter((_, i) => i !== index),
    }))
  }

  // Validation before submit
  const validateForm = () => {
    const newErrors = {}
    const activeCourse = COURSES.find((c) => c.id === formData.course_name) || COURSES[0]

    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required (Block Letters)'
    if (!formData.date_of_birth || formData.date_of_birth.length < 10) {
      newErrors.date_of_birth = 'Date of birth is required in DD/MM/YYYY format'
    }

    // Age validation
    const age = calculateAge(formData.date_of_birth)
    if (age !== null && age < activeCourse.minAge) {
      newErrors.date_of_birth = `${activeCourse.name} requires minimum ${activeCourse.minAge}+ years of age`
    }

    // Gender
    if (!formData.gender) newErrors.gender = 'Gender selection is required'

    // Aadhaar: 12 digits
    const cleanAadhaar = (formData.aadhaar_no || '').replace(/\D/g, '')
    if (cleanAadhaar.length !== 12) {
      newErrors.aadhaar_no = 'Aadhaar number must be exactly 12 digits'
    }

    // Email: @gmail.com required
    if (!formData.email.trim() || !formData.email.toLowerCase().endsWith('@gmail.com')) {
      newErrors.email = 'Valid email ending with @gmail.com is required'
    }

    // Phone: 10 digits
    const cleanPhone = (formData.contact_number || '').replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      newErrors.contact_number = 'Phone number must be exactly 10 digits'
    }

    // Address
    if (!formData.flat_society.trim()) newErrors.flat_society = 'Flat no / Society name is required'
    if (!formData.area_village.trim()) newErrors.area_village = 'Area / Village name is required'
    if (!formData.city.trim()) newErrors.city = 'City name is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    const cleanPin = (formData.pincode || '').replace(/\D/g, '')
    if (cleanPin.length !== 6) newErrors.pincode = 'Valid 6-digit Pincode is required'

    // Education Level vs Course
    if (formData.education_level_id === '' || formData.education_level_id === null || formData.education_level_id === undefined) {
      newErrors.education_level = 'Please select an Education Qualification'
    } else {
      const isEduAllowed =
        activeCourse.allowedEduLevels.includes(formData.education_level_id) ||
        (formData.education_level_id === 0 &&
          formData.below_10th_standard === '10th Pass' &&
          activeCourse.allowedEduLevels.includes(1))

      if (!isEduAllowed) {
        newErrors.education_level = `Selected qualification does not qualify. ${activeCourse.eduRequirementText}`
      }

      if (formData.education_level_id === 0 && !formData.below_10th_standard) {
        newErrors.below_10th_standard = 'Please select standard passed (1st to 10th)'
      }
    }

    // Required Photo
    if (!formData.passport_photo_url) {
      newErrors.passport_photo = 'Passport size photograph is required'
    }

    // Declaration Checkbox
    if (!formData.declaration_agreed) {
      newErrors.declaration = 'You must agree to the declaration and terms before submitting'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      window.scrollTo({ top: 300, behavior: 'smooth' })
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/admission/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitSuccess(result)
        // Clear local storage draft after successful submit
        localStorage.removeItem('mkt_admission_form_draft_v1')
        // Scroll to top immediately to display the success section
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        alert(`Submission Error: ${result.error || 'Failed to submit'}`)
      }
    } catch (err) {
      console.error('Submit failed:', err)
      alert(`Network error occurred: ${err.message}`)
    } finally {
      setSubmitting(false)
    }
  }

  // Helper to fill form with random realistic data for fast testing
  const fillRandomRealisticData = () => {
    // Reset any previous submit status
    setSubmitSuccess(null)

    // 1. Pick a random course
    const randomCourseIndex = Math.floor(Math.random() * COURSES.length)
    const selectedCourse = COURSES[randomCourseIndex]

    // 2. Pick Gender and appropriate Gujarati first names
    const isMale = Math.random() > 0.5
    const maleFirstNames = ['AARAV', 'PRITESH', 'DHRUV', 'HIREN', 'BHAVIN', 'CHIRAG', 'JAYESH', 'MEHUL', 'HARSH']
    const femaleFirstNames = ['PRIYA', 'ANANYA', 'KAJAL', 'POOJA', 'DIPTI', 'NEHAL', 'HETAL', 'PAYAL', 'KOMAL']
    const middleNames = ['SURESHBHAI', 'MAHENDRABHAI', 'RAMESHBHAI', 'KIRITBHAI', 'PRAVINBHAI', 'BHARATBHAI', 'DINESHBHAI']
    const lastNames = ['PATEL', 'SHAH', 'PANCHAL', 'JOSHI', 'DESAI', 'MEHTA', 'SOLANKI', 'RATHOD', 'CHAUHAN', 'SONI']

    const firstName = isMale
      ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
      : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)]
    const middleName = middleNames[Math.floor(Math.random() * middleNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const fullName = `${lastName} ${firstName} ${middleName}`

    // 3. Generate birth date strictly satisfying the course's minimum age
    const applicantAge = selectedCourse.minAge + 2 + Math.floor(Math.random() * 3)
    const birthYear = 2026 - applicantAge
    const birthMonth = '01'
    const birthDay = '15'
    const dobString = `${birthDay}/${birthMonth}/${birthYear}`

    // 4. Random Time Slot
    const randomTimeSlot = TIME_SLOTS[Math.floor(Math.random() * TIME_SLOTS.length)]

    // 5. Appropriate Education Level for this course
    let eduLevelId = 2
    let eduLevelLabel = '12th pass'
    if (selectedCourse.id === 'boutique manager') {
      eduLevelId = 4
      eduLevelLabel = 'UG'
    } else if (selectedCourse.id === 'fashion designer') {
      eduLevelId = Math.random() > 0.5 ? 2 : 3
      eduLevelLabel = eduLevelId === 2 ? '12th pass' : 'Diploma after 10th'
    } else {
      eduLevelId = Math.random() > 0.5 ? 1 : 2
      eduLevelLabel = eduLevelId === 1 ? '10th pass' : '12th pass'
    }

    // 6. Education History
    const baseHistory = getInitialEducationHistory(eduLevelId)
    const eduHistory = baseHistory.map((row, idx) => {
      let passYear = String(birthYear + 16 + idx * 2)
      return {
        ...row,
        year: passYear,
      }
    })

    // 7. Realistic Address in Ahmedabad / Gujarat
    const areas = [
      { village: 'Ghatlodia', pin: '380061', society: 'A-204, Shrinathji Complex', street: 'Near Rannapark, Ghatlodia Road', landmark: 'Opposite Bank of Baroda' },
      { village: 'Chandlodiya', pin: '380061', society: 'B-12, Radhe Shyam Residency', street: 'Near Railway Crossing', landmark: 'Near Swaminarayan Temple' },
      { village: 'Sola', pin: '380060', society: 'Flat 404, Shivam Apartment', street: 'Science City Road', landmark: 'Behind CIMS Hospital' },
      { village: 'Bopal', pin: '380058', society: '15, Nilkanth Bunglows', street: 'Bopal-Ambli Road', landmark: 'Near BRTS Bus Stop' },
      { village: 'Naranpura', pin: '380013', society: 'C-101, Tirupati Heights', street: 'Near Ankur Cross Road', landmark: 'Opposite Government School' },
    ]
    const chosenArea = areas[Math.floor(Math.random() * areas.length)]

    // 8. Contact & IDs
    const randPhone = `98${Math.floor(10000000 + Math.random() * 90000000)}`
    const randFatherPhone = `97${Math.floor(10000000 + Math.random() * 90000000)}`
    const randAadhaar = `${Math.floor(2000 + Math.random() * 7000)}${Math.floor(1000 + Math.random() * 9000)}${Math.floor(1000 + Math.random() * 9000)}`
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(10 + Math.random() * 90)}@gmail.com`

    // Mothers & Fathers details
    const mothers = ['GITABEN', 'MINAXIBEN', 'BHAVANABEN', 'DAKSHABEN', 'REKHABEN', 'SAROJBEN']
    const occupations = ['Business', 'Private Job', 'Farmer', 'Shop Owner', 'Accountant', 'Supervisor']

    const dummySvgPhoto = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="360" viewBox="0 0 300 360"><rect width="300" height="360" fill="%23e0e7ff"/><circle cx="150" cy="125" r="55" fill="%23f97316"/><path d="M60,330 C60,210 240,210 240,330 Z" fill="%231e3a8a"/><text x="150" y="345" font-family="Arial" font-size="13" font-weight="bold" fill="%23ffffff" text-anchor="middle">PASSPORT PHOTO (SAMPLE)</text></svg>`

    const dummyDoc = (name) => [
      {
        name,
        size: 154200,
        type: 'application/pdf',
        url: 'https://placehold.co/600x400/png?text=' + encodeURIComponent(name),
      },
    ]

    const newFilledData = {
      course_name: selectedCourse.id,
      course_duration: selectedCourse.duration,
      time_slot: randomTimeSlot,
      form_no: `${selectedCourse.prefix}_001`,
      registration_no: 'MKT_001',
      full_name: fullName,
      date_of_birth: dobString,
      calculated_age: applicantAge,
      gender: isMale ? 'Male' : 'Female',
      fathers_name: `${middleName} ${lastName}`,
      mothers_name: `${mothers[Math.floor(Math.random() * mothers.length)]} ${lastName}`,
      fathers_occupation: occupations[Math.floor(Math.random() * occupations.length)],
      marital_status: 'Unmarried',
      category: ['GEN', 'OBC', 'SC', 'ST'][Math.floor(Math.random() * 4)],
      aadhaar_no: randAadhaar,
      contact_number: randPhone,
      father_number: randFatherPhone,
      email: email,
      flat_society: chosenArea.society,
      street_road: chosenArea.street,
      landmark: chosenArea.landmark,
      area_village: chosenArea.village,
      city: 'Ahmedabad',
      state: 'Gujarat',
      pincode: chosenArea.pin,
      same_as_postal: true,
      permanent_address: `${chosenArea.society}, ${chosenArea.village}, Ahmedabad`,
      permanent_pincode: chosenArea.pin,
      education_level: `Level ${eduLevelId}) ${eduLevelLabel}`,
      education_level_id: eduLevelId,
      below_10th_standard: '',
      year_of_passing: String(birthYear + (eduLevelId === 4 ? 21 : 18)),
      education_history: eduHistory,
      passport_photo_url: dummySvgPhoto,
      aadhaar_photos: dummyDoc('Aadhaar_Card_Front_Back.pdf'),
      marriage_certificates: [],
      school_leaving_certificates: dummyDoc('School_Leaving_Certificate.pdf'),
      marksheets_10th: dummyDoc('10th_SSC_Marksheet.pdf'),
      marksheets_12th: eduLevelId >= 2 ? dummyDoc('12th_HSC_Marksheet.pdf') : [],
      diploma_certificates: eduLevelId === 3 ? dummyDoc('Diploma_Certificate.pdf') : [],
      ug_degree_certificates: eduLevelId === 4 ? dummyDoc('UG_Degree_Certificate.pdf') : [],
      declaration_agreed: true,
      application_date: new Date().toLocaleDateString('en-GB'),
      application_place: 'Ahmedabad',
    }

    setFormData(newFilledData)
    setErrors({})
    setEduValidationMsg({ valid: true, text: `✓ Valid: ${selectedCourse.eduRequirementText}` })
    setAgeValidationMsg({ valid: true, text: `✓ Valid: Age ${applicantAge} Years qualifies for ${selectedCourse.name} (${selectedCourse.minAge}+ required)` })
  }

  // Print Form Action
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-3 sm:px-6 lg:px-8 print:bg-white print:p-0 print:m-0">
      {/* ============================================================ */}
      {/* ATOM: TOP_BANNER_NAVIGATION */}
      {/* ============================================================ */}
      <div
        id="atom-top-navigation-banner"
        data-atom-id="TOP_BANNER_NAVIGATION"
        className="mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-xs border border-slate-200 print:hidden"
      >
        <Link
          href="/"
          className="text-sm font-semibold text-rose-700 hover:text-rose-900 flex items-center gap-1.5"
        >
          ← Back to Home
        </Link>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Clock className="w-4 h-4 text-emerald-600 animate-pulse" />
          <span>{lastSavedTime || 'Auto-save active'}</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* ATOM: BUTTON_AUTOFILL_TEST_DATA (Top Banner) */}
          <button
            type="button"
            onClick={fillRandomRealisticData}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer border border-amber-600 active:scale-95"
            title="Click to fill form with random realistic test data"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>⚡ Fill Test Data (ટેસ્ટ ડેટા ભરો)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (confirm('Are you sure you want to clear this draft and reset the form?')) {
                localStorage.removeItem('mkt_admission_form_draft_v1')
                setFormData(initialFormState)
                setErrors({})
                setPincodeStatusMsg({ text: '', isError: false })
                setPermPincodeStatusMsg({ text: '', isError: false })
                setPincodeVillages([])
                setEduValidationMsg({ valid: true, text: '' })
                setAgeValidationMsg({ valid: true, text: '' })
              }
            }}
            className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Form
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ATOM: SUCCESS_MODAL_SCREEN */}
      {/* ============================================================ */}
      {submitSuccess && (
        <div
          id="atom-submission-success-modal"
          data-atom-id="SUCCESS_MODAL_SCREEN"
          className="mx-auto mb-8 bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 shadow-lg text-slate-800 print:hidden"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-10 h-10 text-emerald-600 shrink-0 mt-1" />
            <div className="space-y-3 w-full">
              <h2 className="text-2xl font-bold text-emerald-900">
                Admission Application Submitted Successfully!
              </h2>
              <p className="text-sm text-emerald-800">
                Your admission application has been registered and securely saved in the system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-xl border border-emerald-200 text-sm">
                <div>
                  <span className="text-slate-500 block text-xs">Form Number:</span>
                  <span className="font-bold text-base text-rose-700">
                    {submitSuccess.form_no}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Registration Number:</span>
                  <span className="font-bold text-base text-indigo-700">
                    {submitSuccess.registration_no}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Selected Course:</span>
                  <span className="font-semibold text-slate-900">
                    {submitSuccess.data?.course_name}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-6 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-xl flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" /> Print / Download Form (PDF)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitSuccess(null)
                    setFormData(initialFormState)
                    setErrors({})
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                >
                  Fill Another Form
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* ATOM: MAIN_FORM_CONTAINER */}
      {/* ============================================================ */}
      <form
        id="atom-admission-main-form"
        data-atom-id="MAIN_FORM_CONTAINER"
        onSubmit={handleSubmit}
        className="mx-auto bg-white border-2 border-slate-900 shadow-xl rounded-2xl overflow-hidden print:border print:border-slate-800 print:shadow-none print:m-0 print:p-0 print:rounded-none"
      >
        {/* ============================================================ */}
        {/* ATOM: HEADER_SECTION (Top Date & Place, Logos, Passport Slot) */}
        {/* ============================================================ */}
        <div
          id="atom-form-header-section"
          data-atom-id="HEADER_SECTION"
          className="p-4 sm:p-6 md:p-8 border-b-2 border-slate-900 bg-white print:p-3 print:border-b-2"
        >
          {/* ============================================================ */}
          {/* ATOM: HEADER_LIVE_METADATA_DATE_PLACE */}
          {/* ============================================================ */}
          <div
            id="atom-header-live-metadata"
            data-atom-id="HEADER_LIVE_METADATA_DATE_PLACE"
            className="flex justify-between items-center text-xs font-bold text-slate-700 border-b border-slate-200 pb-2 mb-3 print:pb-1 print:mb-2"
          >
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-700" />
              <span>Date:</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-300 font-mono text-slate-900">
                {formData.application_date}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-700" />
              <span>Place:</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-300 font-mono text-slate-900">
                {formData.application_place}
              </span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* ATOM: LOGOS_AND_PASSPORT_ROW */}
          {/* ============================================================ */}
          <div
            id="atom-logos-and-passport-row"
            data-atom-id="LOGOS_AND_PASSPORT_ROW"
            className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-4 print:flex-row print:gap-4"
          >
            {/* Top row on mobile: Both logos side by side for a neat header */}
            <div className="w-full flex items-center justify-between sm:hidden px-2 pb-1 border-b border-slate-100">
              <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
                <Image
                  src="/images/partners-logo/gsdc-logo.png"
                  alt="Gujarat Skill Development Mission Logo"
                  width={56}
                  height={56}
                  className="object-contain max-h-full max-w-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="w-12 h-12 relative flex items-center justify-center shrink-0">
                <Image
                  src="/Mkt-logo.svg"
                  alt="Manav Kalyan Trust Logo"
                  width={48}
                  height={48}
                  className="object-contain max-h-full max-w-full"
                  priority
                />
              </div>
            </div>

            {/* ATOM: LOGO_GSDM_LEFT (Desktop & Print) */}
            <div
              id="atom-logo-gsdm-left"
              data-atom-id="LOGO_GSDM_LEFT"
              className="hidden sm:flex print:flex items-center justify-center shrink-0"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 print:w-18 print:h-18 relative flex items-center justify-center rounded-lg p-1">
                <Image
                  src="/images/partners-logo/gsdc-logo.png"
                  alt="Gujarat Skill Development Mission Logo"
                  width={96}
                  height={96}
                  className="object-contain max-h-full max-w-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>

            {/* ATOM: LOGO_MKT_CENTER_AND_TITLES */}
            <div
              id="atom-logo-mkt-center"
              data-atom-id="LOGO_MKT_CENTER_AND_TITLES"
              className="text-center flex-1 flex flex-col items-center justify-center px-1 sm:px-2"
            >
              {/* Center MKT Logo for Desktop & Print */}
              <div className="hidden sm:flex print:flex w-12 h-12 md:w-14 md:h-14 print:w-12 print:h-12 relative items-center justify-center mb-0.5">
                <Image
                  src="/Mkt-logo.svg"
                  alt="Manav Kalyan Trust Logo"
                  width={56}
                  height={56}
                  className="object-contain max-h-full max-w-full"
                  priority
                />
              </div>

              <h3 className="text-xs sm:text-xs md:text-sm font-extrabold capitalize tracking-wider text-slate-700">
                NGKRM SCHEME – GSDM
              </h3>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-rose-800 tracking-tight leading-tight mt-0.5">
                Manav Kalyan Trust
              </h1>
              <div className="inline-block mt-1 sm:mt-1.5 px-3 py-0.5 sm:px-5 sm:py-0.5 border-2 border-slate-900 rounded bg-slate-50 font-black text-xs sm:text-sm tracking-widest text-slate-900 uppercase">
                ADMISSION FORM
              </div>
            </div>

            {/* ATOM: PASSPORT_PHOTO_BOX (Desktop Right, Mobile Center - with Drag & Drop) */}
            <div
              id="atom-passport-photo-box"
              data-atom-id="PASSPORT_PHOTO_BOX"
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsPassportDragging(true)
              }}
              onDragEnter={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsPassportDragging(true)
              }}
              onDragLeave={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (e.currentTarget.contains(e.relatedTarget)) return
                setIsPassportDragging(false)
              }}
              onDrop={handlePassportPhotoDrop}
              className={`w-28 h-36 sm:w-32 sm:h-40 print:w-28 print:h-36 shrink-0 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-1.5 relative text-center group cursor-pointer transition-all ${
                isPassportDragging
                  ? 'border-rose-600 bg-rose-50 ring-4 ring-rose-200 scale-102'
                  : 'border-slate-800 bg-slate-50 hover:border-rose-600 print:bg-white'
              }`}
            >
              {formData.passport_photo_url ? (
                <div className="w-full h-full relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={formData.passport_photo_url}
                    alt="Passport Preview"
                    className="w-full h-full object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setFormData((prev) => ({ ...prev, passport_photo_url: '' }))
                    }}
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full text-xs shadow-md print:hidden cursor-pointer"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-1">
                  <Camera
                    className={`w-6 h-6 sm:w-7 sm:h-7 mb-1 transition-colors ${
                      isPassportDragging ? 'text-rose-600 animate-bounce' : 'text-slate-400 group-hover:text-rose-600'
                    }`}
                  />
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                    {isPassportDragging ? 'Drop Photo!' : 'Affix Passport Photograph'}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-slate-400 mt-0.5 print:hidden">
                    (Click or Drop)
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePassportPhotoChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {errors.passport_photo && (
            <p className="text-xs text-red-600 text-center sm:text-right mt-1 font-semibold">
              {errors.passport_photo}
            </p>
          )}

          {/* ============================================================ */}
          {/* ATOM: FORM_NO_AND_REGISTRATION_NO_ROW */}
          {/* ============================================================ */}
          <div
            id="atom-form-and-reg-numbers-row"
            data-atom-id="FORM_NO_AND_REGISTRATION_NO_ROW"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-300 print:mt-2 print:pt-2"
          >
            {/* ATOM: FIELD_FORM_NO */}
            <div id="atom-field-form-no" data-atom-id="FIELD_FORM_NO" className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-slate-800 shrink-0">Form No.:</span>
              <input
                type="text"
                readOnly
                value={formData.form_no}
                className="bg-amber-50 border border-amber-300 text-rose-800 font-bold px-3 py-1 rounded-lg text-xs sm:text-sm flex-1 font-mono tracking-wider shadow-inner"
              />
            </div>
            {/* ATOM: FIELD_REGISTRATION_NO */}
            <div id="atom-field-registration-no" data-atom-id="FIELD_REGISTRATION_NO" className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-slate-800 shrink-0">Registration No.:</span>
              <input
                type="text"
                readOnly
                value={formData.registration_no}
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 font-bold px-3 py-1 rounded-lg text-xs sm:text-sm flex-1 font-mono tracking-wider shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: COURSE_SELECTION_SECTION */}
        {/* ============================================================ */}
        <div
          id="atom-course-selection-section"
          data-atom-id="COURSE_SELECTION_SECTION"
          className="p-6 sm:p-8 border-b-2 border-slate-900 bg-slate-50/50 space-y-5"
        >
          <h2 className="text-base font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-rose-700" /> Course Selection &amp; Scheduling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* ATOM: FIELD_COURSE_NAME */}
            <div id="atom-field-course-name" data-atom-id="FIELD_COURSE_NAME">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                01) Course Name <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.course_name}
                onChange={(e) => handleCourseChange(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              >
                {COURSES.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                Student can select only one course option.
              </p>
            </div>

            {/* ATOM: FIELD_COURSE_DURATION */}
            <div id="atom-field-course-duration" data-atom-id="FIELD_COURSE_DURATION">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                02) Course Duration (Auto)
              </label>
              <div className="w-full bg-emerald-50 border border-emerald-300 rounded-xl px-3 py-2.5 text-sm font-bold text-emerald-900 flex items-center justify-between shadow-xs">
                <span>{formData.course_duration}</span>
                <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                  Free of Cost
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 mt-1">
                Duration automated based on selected course.
              </p>
            </div>

            {/* ATOM: FIELD_TIME_SLOT */}
            <div id="atom-field-time-slot" data-atom-id="FIELD_TIME_SLOT">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                03) Time Slot <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.time_slot}
                onChange={(e) => setFormData({ ...formData, time_slot: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500 mt-1">
                Select your preferred daily batch timing.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: PERSONAL_DETAILS_SECTION */}
        {/* ============================================================ */}
        <div
          id="atom-personal-details-section"
          data-atom-id="PERSONAL_DETAILS_SECTION"
          className="p-6 sm:p-8 border-b-2 border-slate-900 space-y-6"
        >
          <h2 className="text-base font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
            <User className="w-5 h-5 text-rose-700" /> Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* ATOM: FIELD_FULL_NAME */}
            <div id="atom-field-full-name" data-atom-id="FIELD_FULL_NAME" className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Full Name (In Block Letters) <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="field-full-name"
                name="name"
                autoComplete="name"
                placeholder="FIRSTNAME MIDDLENAME SURNAME"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value.toUpperCase() })
                }
                style={{ textTransform: 'uppercase' }}
                className={`w-full bg-white border ${errors.full_name ? 'border-red-500' : 'border-slate-300'
                  } rounded-xl px-3.5 py-2.5 text-sm font-semibold tracking-wide text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
              />
              {errors.full_name && (
                <p className="text-xs text-red-600 mt-1">{errors.full_name}</p>
              )}
            </div>

            {/* ATOM: FIELD_DATE_OF_BIRTH (DD/MM/YYYY Format) */}
            <div id="atom-field-date-of-birth" data-atom-id="FIELD_DATE_OF_BIRTH">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Date of Birth (DD/MM/YYYY) <span className="text-red-600">*</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  maxLength={10}
                  placeholder="DD/MM/YYYY (e.g. 15/08/2000)"
                  value={formData.date_of_birth}
                  onChange={handleDobChange}
                  className={`w-full bg-white border ${errors.date_of_birth ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl px-3.5 py-2.5 pr-10 text-sm font-mono font-semibold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
                />
                <input
                  type="date"
                  onChange={handleNativeDateChange}
                  className="absolute right-2.5 opacity-0 w-6 h-6 cursor-pointer"
                  title="Pick from calendar"
                />
                <Calendar className="absolute right-2.5 w-5 h-5 text-slate-400 pointer-events-none" />
              </div>

              {/* Dynamic Age Calculation Feedback */}
              {formData.calculated_age !== '' && (
                <div
                  className={`mt-2 p-2.5 rounded-lg text-xs font-medium flex items-start gap-2 ${ageValidationMsg.valid
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-red-50 text-red-800 border border-red-300'
                    }`}
                >
                  {ageValidationMsg.valid ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <span>{ageValidationMsg.text}</span>
                </div>
              )}
              {errors.date_of_birth && (
                <p className="text-xs text-red-600 mt-1">{errors.date_of_birth}</p>
              )}
            </div>

            {/* ATOM: FIELD_GENDER (Default: Male) */}
            <div id="atom-field-gender" data-atom-id="FIELD_GENDER">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>

            {/* ATOM: FIELD_FATHERS_NAME */}
            <div id="atom-field-fathers-name" data-atom-id="FIELD_FATHERS_NAME" className={!formData.fathers_name?.trim() ? 'print:hidden' : ''}>
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Father&apos;s Name
              </label>
              <input
                type="text"
                value={formData.fathers_name}
                onChange={(e) => setFormData({ ...formData, fathers_name: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              />
            </div>

            {/* ATOM: FIELD_MOTHERS_NAME */}
            <div id="atom-field-mothers-name" data-atom-id="FIELD_MOTHERS_NAME" className={!formData.mothers_name?.trim() ? 'print:hidden' : ''}>
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Mother&apos;s Name
              </label>
              <input
                type="text"
                value={formData.mothers_name}
                onChange={(e) => setFormData({ ...formData, mothers_name: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              />
            </div>

            {/* ATOM: FIELD_FATHERS_OCCUPATION */}
            <div id="atom-field-fathers-occupation" data-atom-id="FIELD_FATHERS_OCCUPATION" className={!formData.fathers_occupation?.trim() ? 'print:hidden' : ''}>
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Father&apos;s Occupation
              </label>
              <input
                type="text"
                value={formData.fathers_occupation}
                onChange={(e) => setFormData({ ...formData, fathers_occupation: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              />
            </div>

            {/* ATOM: FIELD_MARITAL_STATUS */}
            <div id="atom-field-marital-status" data-atom-id="FIELD_MARITAL_STATUS">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Marital Status <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.marital_status}
                onChange={(e) => setFormData({ ...formData, marital_status: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              >
                <option value="Unmarried">Unmarried</option>
                <option value="Married">Married</option>
              </select>
            </div>

            {/* ATOM: FIELD_MARRIAGE_CERTIFICATE_UPLOAD (CONDITIONAL - MULTIPLE FILES SUPPORT) */}
            {formData.marital_status === 'Married' && (
              <div className={`md:col-span-2 ${(!formData.marriage_certificates || formData.marriage_certificates.length === 0) ? 'print:hidden' : ''}`}>
                {renderMultiUploadBox({
                  field: 'marriage_certificates',
                  label: 'Upload Marriage Certificate Documents (Photos / PDFs)',
                  required: true,
                  atomId: 'FIELD_MARRIAGE_CERTIFICATE_UPLOAD',
                  description: 'You can upload multiple photos, PDFs, or scanned documents of the Marriage Certificate.',
                })}
              </div>
            )}

            {/* ATOM: FIELD_CAST_CATEGORY */}
            <div id="atom-field-cast-category" data-atom-id="FIELD_CAST_CATEGORY">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Cast (Category) <span className="text-red-600">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              >
                <option value="GEN">GEN (General)</option>
                <option value="OBC">OBC</option>
                <option value="SC / ST">SC / ST</option>
              </select>
            </div>

            {/* ATOM: FIELD_AADHAAR_NO (12 Digits) */}
            <div id="atom-field-aadhaar-no" data-atom-id="FIELD_AADHAAR_NO">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Student Aadhaar Number (12 Digits) <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                maxLength={12}
                placeholder="123456789012"
                value={formData.aadhaar_no}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    aadhaar_no: e.target.value.replace(/\D/g, ''),
                  })
                }
                className={`w-full bg-white border ${errors.aadhaar_no ? 'border-red-500' : 'border-slate-300'
                  } rounded-xl px-3.5 py-2.5 text-sm font-mono tracking-widest text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
              />
              {errors.aadhaar_no && (
                <p className="text-xs text-red-600 mt-1">{errors.aadhaar_no}</p>
              )}
            </div>

            {/* ATOM: FIELD_AADHAAR_PHOTOS_UPLOAD (Multiple files support) */}
            <div className={`md:col-span-2 ${(!formData.aadhaar_photos || formData.aadhaar_photos.length === 0) ? 'print:hidden' : ''}`}>
              {renderMultiUploadBox({
                field: 'aadhaar_photos',
                label: 'Upload Aadhaar Card Documents (Front & Back Photos / PDFs)',
                required: false,
                atomId: 'FIELD_AADHAAR_PHOTOS_UPLOAD',
                description: 'You can upload multiple files (photos, PDF files) of your Aadhaar card.',
              })}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: CONTACT_AND_POSTAL_ADDRESS_SECTION */}
        {/* ============================================================ */}
        <div
          id="atom-contact-and-postal-address-section"
          data-atom-id="CONTACT_AND_POSTAL_ADDRESS_SECTION"
          className="p-6 sm:p-8 border-b-2 border-slate-900 bg-slate-50/50 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-base font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-700" /> Contact &amp; Postal Address
            </h2>
            <div className="inline-flex items-center gap-1.5 text-xs bg-rose-50 text-rose-800 border border-rose-200 px-3 py-1 rounded-full font-medium">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Enter 6-digit Pincode to auto-select Village, City &amp; State</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* ATOM: FIELD_CONTACT_NUMBER (10 digit required) */}
            <div id="atom-field-contact-number" data-atom-id="FIELD_CONTACT_NUMBER">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Contact Phone Number (10 Digits) <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="field-contact-number"
                name="tel"
                autoComplete="tel"
                maxLength={10}
                placeholder="9876543210"
                value={formData.contact_number}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contact_number: e.target.value.replace(/\D/g, ''),
                  })
                }
                className={`w-full bg-white border ${errors.contact_number ? 'border-red-500' : 'border-slate-300'
                  } rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
              />
              {errors.contact_number && (
                <p className="text-xs text-red-600 mt-1">{errors.contact_number}</p>
              )}
            </div>

            {/* ATOM: FIELD_FATHER_NUMBER */}
            <div id="atom-field-father-number" data-atom-id="FIELD_FATHER_NUMBER" className={!formData.father_number?.trim() ? 'print:hidden' : ''}>
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Father&apos;s / Alternate Phone Number
              </label>
              <input
                type="tel"
                id="field-father-number"
                name="tel-alternate"
                autoComplete="tel"
                maxLength={10}
                placeholder="9876543210"
                value={formData.father_number}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    father_number: e.target.value.replace(/\D/g, ''),
                  })
                }
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              />
            </div>

            {/* ATOM: FIELD_EMAIL (@gmail.com required) */}
            <div id="atom-field-email" data-atom-id="FIELD_EMAIL" className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Email Address (@gmail.com required) <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="field-email"
                name="email"
                autoComplete="email"
                placeholder="studentname@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-300'
                  } rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* ATOM: FIELD_ADDRESS_FLAT_SOCIETY (Chrome Autofill address-line1) */}
            <div id="atom-field-flat-society" data-atom-id="FIELD_ADDRESS_FLAT_SOCIETY">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Flat No. &amp; Society Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="field-flat-society"
                name="address-line1"
                autoComplete="address-line1 street-address"
                placeholder="e.g. A-204, Shrinath Residency"
                value={formData.flat_society}
                onChange={(e) => setFormData({ ...formData, flat_society: e.target.value })}
                className={`w-full bg-white border ${errors.flat_society ? 'border-red-500' : 'border-slate-300'
                  } rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
              />
              {errors.flat_society && (
                <p className="text-xs text-red-600 mt-1">{errors.flat_society}</p>
              )}
            </div>

            {/* ATOM: FIELD_ADDRESS_STREET_ROAD (Chrome Autofill address-line2) */}
            <div id="atom-field-street-road" data-atom-id="FIELD_ADDRESS_STREET_ROAD" className={!formData.street_road?.trim() ? 'print:hidden' : ''}>
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Street / Road Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="field-street-road"
                name="address-line2"
                autoComplete="address-line2"
                placeholder="e.g. Near Rannapark"
                value={formData.street_road}
                onChange={(e) => setFormData({ ...formData, street_road: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              />
            </div>

            {/* ATOM: FIELD_ADDRESS_LANDMARK */}
            <div id="atom-field-landmark" data-atom-id="FIELD_ADDRESS_LANDMARK" className={`md:col-span-2 ${!formData.landmark?.trim() ? 'print:hidden' : ''}`}>
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
                Landmark <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="field-landmark"
                name="address-line3"
                autoComplete="address-line3"
                placeholder="e.g. Opposite Jain Temple"
                value={formData.landmark}
                onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs"
              />
            </div>

            {/* ATOM: FIELD_ADDRESS_STATE (Step 1: Searchable Autocomplete for all Indian States) */}
            <div id="atom-field-state-wrapper" data-atom-id="FIELD_ADDRESS_STATE_WRAPPER">
              <AutocompleteInput
                id="field-state"
                atomId="FIELD_ADDRESS_STATE"
                label="State"
                value={formData.state}
                onChange={(val) => {
                  setFormData((prev) => ({
                    ...prev,
                    state: val,
                    city: prev.state.toLowerCase() === val.toLowerCase() ? prev.city : '',
                    area_village: prev.state.toLowerCase() === val.toLowerCase() ? prev.area_village : '',
                  }))
                }}
                onSelectOption={(item) => {
                  setFormData((prev) => ({
                    ...prev,
                    state: item.name,
                    city: prev.state === item.name ? prev.city : '',
                    area_village: prev.state === item.name ? prev.area_village : '',
                  }))
                  setPincodeVillages([])
                }}
                options={INDIAN_STATES}
                placeholder="e.g. Gujarat, Uttar Pradesh, Maharashtra..."
                required={true}
                error={errors.state}
              />
            </div>

            {/* ATOM: FIELD_ADDRESS_CITY (Step 2: Suggests ONLY selected state's cities) */}
            <AutocompleteInput
              id="field-city"
              atomId="FIELD_ADDRESS_CITY"
              label="City / District"
              value={formData.city}
              disabled={!formData.state}
              onChange={(val) => {
                setFormData((prev) => ({
                  ...prev,
                  city: val,
                  area_village: prev.city.toLowerCase() === val.toLowerCase() ? prev.area_village : '',
                }))
              }}
              onSelectOption={(item) => {
                setFormData((prev) => ({
                  ...prev,
                  city: item.name,
                  state: item.state || prev.state,
                  area_village: prev.city === item.name ? prev.area_village : '',
                }))
              }}
              options={contextualCityOptions}
              placeholder={cityPlaceholder}
              required={true}
              error={errors.city}
              helperText={
                formData.state
                  ? `Select city/district in ${formData.state} or type manually`
                  : 'Please select a State first'
              }
            />

            {/* ATOM: FIELD_ADDRESS_AREA_VILLAGE (Step 3: Suggests villages of the selected state/city) */}
            <AutocompleteInput
              id="field-area-village"
              atomId="FIELD_ADDRESS_AREA_VILLAGE"
              label="Area or Village Name"
              value={formData.area_village}
              disabled={!formData.state || !formData.city}
              onChange={(val) => setFormData((prev) => ({ ...prev, area_village: val }))}
              onSelectOption={(item) => {
                setFormData((prev) => ({
                  ...prev,
                  area_village: item.name,
                  city: item.district || prev.city,
                  state: item.state || prev.state,
                }))
              }}
              options={contextualVillageOptions}
              placeholder={villagePlaceholder}
              required={true}
              error={errors.area_village}
              helperText={
                !formData.state
                  ? 'Please select a State first'
                  : !formData.city
                    ? `Please select a City in ${formData.state} first`
                    : 'Select from suggestions or type your village/area manually'
              }
            />

            {/* ATOM: FIELD_ADDRESS_PINCODE (Instant Auto-fill Trigger for City, State, and Village) */}
            <div id="atom-field-pincode" data-atom-id="FIELD_ADDRESS_PINCODE">
              <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  Pincode (6 Digits) <span className="text-red-600">*</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] bg-rose-100 text-rose-800 font-semibold">
                    <Sparkles className="w-2.5 h-2.5 text-rose-600 animate-pulse" /> Auto-detect
                  </span>
                </span>
                {pincodeLoading && (
                  <span className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                    <Loader2 className="w-3 h-3 animate-spin" /> Detecting...
                  </span>
                )}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="field-pincode"
                  name="postal-code"
                  autoComplete="postal-code"
                  maxLength={6}
                  placeholder="e.g. 380061"
                  value={formData.pincode}
                  onChange={handlePincodeChange}
                  className={`w-full bg-white border ${errors.pincode ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs ${formData.pincode && formData.pincode.length === 6 ? 'pr-24' : ''
                    }`}
                />
                {formData.pincode && formData.pincode.length === 6 && (
                  <button
                    type="button"
                    onClick={() => lookupPincode(formData.pincode, false)}
                    disabled={pincodeLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 text-[11px] font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50 shadow-2xs"
                    title="Re-fetch Postal details"
                  >
                    <RefreshCw className={`w-3 h-3 ${pincodeLoading ? 'animate-spin' : ''}`} />
                    Auto-fill
                  </button>
                )}
              </div>

              {/* Live status feedback badge */}
              {pincodeStatusMsg.text && (
                <div
                  className={`mt-1.5 p-2 rounded-lg text-xs flex items-start gap-1.5 ${pincodeStatusMsg.isError
                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}
                >
                  {pincodeStatusMsg.isError ? (
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  <span className="leading-tight font-medium">{pincodeStatusMsg.text}</span>
                </div>
              )}

              {errors.pincode && <p className="text-xs text-red-600 mt-1">{errors.pincode}</p>}
            </div>

            {/* ATOM: FIELD_ADDRESS_PERMANENT */}
            <div id="atom-field-permanent-address" data-atom-id="FIELD_ADDRESS_PERMANENT" className="md:col-span-2 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
                <input
                  type="checkbox"
                  checked={formData.same_as_postal}
                  onChange={(e) =>
                    setFormData({ ...formData, same_as_postal: e.target.checked })
                  }
                  className="w-4 h-4 text-rose-600 rounded focus:ring-rose-500 border-slate-300"
                />
                <span>Permanent Address is same as Postal Address</span>
              </label>

              {!formData.same_as_postal && (
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Permanent Full Address (Flat, Street, Area)
                    </label>
                    <input
                      type="text"
                      placeholder="Permanent Full Address"
                      value={formData.permanent_address}
                      onChange={(e) =>
                        setFormData({ ...formData, permanent_address: e.target.value })
                      }
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span>Permanent Pincode</span>
                      {permPincodeStatusMsg.text && (
                        <span className={`text-[10px] font-medium ${permPincodeStatusMsg.isError ? 'text-amber-600' : 'text-emerald-700'}`}>
                          {permPincodeStatusMsg.text}
                        </span>
                      )}
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 380061"
                      value={formData.permanent_pincode}
                      onChange={(e) => {
                        const rawVal = e.target.value.replace(/\D/g, '').slice(0, 6)
                        setFormData({ ...formData, permanent_pincode: rawVal })
                        if (rawVal.length === 6) {
                          lookupPincode(rawVal, true)
                        } else {
                          setPermPincodeStatusMsg({ text: '', isError: false })
                        }
                      }}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono text-slate-900 shadow-xs"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: EDUCATION_QUALIFICATION_SECTION */}
        {/* ============================================================ */}
        <div
          id="atom-education-qualification-section"
          data-atom-id="EDUCATION_QUALIFICATION_SECTION"
          className="p-6 sm:p-8 border-b-2 border-slate-900 space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-rose-700" /> Education Qualification &amp; Proofs
            </h2>
            <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-300">
              Only 1 Qualification can be selected
            </span>
          </div>

          {/* ATOM: FIELD_EDUCATION_LEVEL */}
          <div id="atom-field-education-level" data-atom-id="FIELD_EDUCATION_LEVEL">
            <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
              Education Qualification (Select One) <span className="text-red-600">*</span>
            </label>
            <select
              value={formData.education_level_id !== undefined && formData.education_level_id !== null ? formData.education_level_id : ''}
              onChange={(e) => {
                const val = e.target.value
                if (val === '') {
                  setFormData((prev) => ({
                    ...prev,
                    education_level_id: '',
                    education_level: '',
                    below_10th_standard: '',
                    education_history: [],
                  }))
                  return
                }
                const id = Number(val)
                const opt = EDUCATION_LEVELS.find((l) => l.id === id)
                setFormData((prev) => ({
                  ...prev,
                  education_level_id: id,
                  education_level: opt ? opt.label : '',
                  below_10th_standard: id === 0 ? prev.below_10th_standard : '',
                  education_history: getInitialEducationHistory(
                    id,
                    id === 0 ? prev.below_10th_standard : ''
                  ),
                }))
              }}
              className={`w-full bg-white border ${errors.education_level ? 'border-red-500' : 'border-slate-300'
                } rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
            >
              <option value="">-- Select Education Qualification --</option>
              {EDUCATION_LEVELS.filter((level) =>
                activeCourse.allowedEduLevels.includes(level.id)
              ).map((level) => (
                <option key={level.id} value={level.id}>
                  {level.label}
                </option>
              ))}
            </select>
            {errors.education_level && (
              <p className="text-xs text-red-600 font-semibold mt-1">
                {errors.education_level}
              </p>
            )}

            {/* ATOM: FIELD_BELOW_10TH_STANDARD (Dropdown for 1st pass to 10th pass when Below 10th pass is selected) */}
            {formData.education_level_id === 0 && (
              <div
                id="atom-field-below-10th-standard"
                data-atom-id="FIELD_BELOW_10TH_STANDARD"
                className="mt-3 p-3.5 bg-amber-50/80 border border-amber-300 rounded-xl space-y-1.5"
              >
                <label className="block text-xs font-bold text-slate-900 capitalize flex items-center justify-between">
                  <span>
                    Select Standard / Class Passed (Below 10th) <span className="text-red-600">*</span>
                  </span>
                  <span className="text-[10px] text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded">
                    Required for Below 10th
                  </span>
                </label>
                <select
                  id="field-below-10th-standard"
                  value={formData.below_10th_standard || ''}
                  onChange={(e) => {
                    const std = e.target.value
                    setFormData((prev) => ({
                      ...prev,
                      below_10th_standard: std,
                      education_history:
                        prev.education_level_id === 0 && prev.education_history.length === 1
                          ? [
                            {
                              ...prev.education_history[0],
                              exam: std ? `Below 10th (${std})` : 'Below 10th pass',
                            },
                          ]
                          : prev.education_history,
                    }))
                  }}
                  className={`w-full bg-white border ${errors.below_10th_standard ? 'border-red-500' : 'border-slate-300'
                    } rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-rose-600 focus:outline-none shadow-xs`}
                >
                  <option value="">-- Select Standard Passed (1st to 10th) --</option>
                  {BELOW_10TH_STANDARDS.map((std) => (
                    <option key={std} value={std}>
                      {std}
                    </option>
                  ))}
                </select>
                {errors.below_10th_standard && (
                  <p className="text-xs text-red-600 font-semibold mt-1">
                    {errors.below_10th_standard}
                  </p>
                )}
              </div>
            )}

            {/* Dynamic Education Qualification Eligibility Alert */}
            {eduValidationMsg.text && (
              <div
                className={`mt-2.5 p-3 rounded-xl text-xs font-medium flex items-start gap-2.5 ${eduValidationMsg.valid
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-300'
                  }`}
              >
                {eduValidationMsg.valid ? (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                )}
                <span>{eduValidationMsg.text}</span>
              </div>
            )}
          </div>

          {/* ATOM: FIELD_YEAR_OF_PASSING */}
          <div id="atom-field-year-of-passing" data-atom-id="FIELD_YEAR_OF_PASSING">
            <label className="block text-xs font-bold text-slate-800 capitalize mb-1.5">
              Year of Passing (Last Exam Passed) <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 2023"
              maxLength={4}
              value={formData.year_of_passing}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  year_of_passing: e.target.value.replace(/\D/g, ''),
                })
              }
              className="w-full sm:w-64 bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-mono text-slate-900 shadow-xs"
            />
          </div>

          {/* ============================================================ */}
          {/* ATOM: CONDITIONAL_PROOFS_UPLOAD_CARDS (MULTIPLE FILES FOR EACH) */}
          {/* ============================================================ */}
          <div
            id="atom-conditional-proofs-upload-cards"
            data-atom-id="CONDITIONAL_PROOFS_UPLOAD_CARDS"
            className="bg-slate-50 border border-slate-300 rounded-2xl p-5 space-y-4 print:bg-white print:border-slate-300 print:p-3 print:rounded-none"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 print:pb-1">
              <div>
                <h3 className="text-xs font-bold uppercase text-slate-800 tracking-wider">
                  Required Proof Uploads {formData.education_level ? `for ${formData.education_level}` : ''}
                </h3>
                <p className="text-[11px] text-slate-500 print:hidden">
                  You can upload multiple files (photos, PDFs, documents) for each required proof.
                </p>
              </div>
            </div>

            {formData.education_level_id !== '' && formData.education_level_id !== null && formData.education_level_id !== undefined ? (
              <div className="grid grid-cols-1 gap-4">
                {/* ATOM: UPLOAD_SCHOOL_LEAVING_CERT (Multiple files allowed) */}
                {renderMultiUploadBox({
                  field: 'school_leaving_certificates',
                  label:
                    formData.education_level_id === 0
                      ? '01) School Leaving Certificate / School Marksheet (Photos / PDFs)'
                      : '01) School Leaving Certificate (Photos / PDFs)',
                  required: true,
                  atomId: 'UPLOAD_SCHOOL_LEAVING_CERT',
                  description:
                    formData.education_level_id === 0
                      ? 'Upload School Leaving Certificate or marksheets of highest class passed.'
                      : 'Upload multiple photos or PDFs of the School Leaving Certificate.',
                })}

                {/* ATOM: UPLOAD_MARKSHEET_10TH (Multiple files allowed - 10th pass and above) */}
                {formData.education_level_id !== 0 &&
                  renderMultiUploadBox({
                    field: 'marksheets_10th',
                    label: '02) 10th Marksheet (Photos / PDFs)',
                    required: true,
                    atomId: 'UPLOAD_MARKSHEET_10TH',
                    description: 'Upload multiple photos or PDFs of the 10th Standard Marksheet / Certificate.',
                  })}

                {/* ATOM: UPLOAD_MARKSHEET_12TH (Levels 2, 3, 4 - Multiple files allowed) */}
                {(formData.education_level_id === 2 ||
                  formData.education_level_id === 3 ||
                  formData.education_level_id === 4) &&
                  renderMultiUploadBox({
                    field: 'marksheets_12th',
                    label: '03) 12th Marksheet (Photos / PDFs)',
                    required: formData.education_level_id !== 3,
                    atomId: 'UPLOAD_MARKSHEET_12TH',
                    description: 'Upload multiple photos or PDFs of the 12th Standard Marksheet / Certificate.',
                  })}

                {/* ATOM: UPLOAD_DIPLOMA_CERT (Level 3 - Multiple files allowed) */}
                {formData.education_level_id === 3 &&
                  renderMultiUploadBox({
                    field: 'diploma_certificates',
                    label: '04) Diploma (03 years) Marksheets & Pass Certificate (Photos / PDFs)',
                    required: true,
                    atomId: 'UPLOAD_DIPLOMA_CERT',
                    description: 'Upload multiple semester marksheets and diploma passing certificate files.',
                  })}

                {/* ATOM: UPLOAD_UG_DEGREE_CERT (Level 4 - Multiple files allowed) */}
                {formData.education_level_id === 4 &&
                  renderMultiUploadBox({
                    field: 'ug_degree_certificates',
                    label: '05) UnderGraduate (UG) Degree Certificate & Marksheets (Photos / PDFs)',
                    required: true,
                    atomId: 'UPLOAD_UG_DEGREE_CERT',
                    description: 'Upload multiple semester / year marksheets and degree pass certificate files.',
                  })}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic py-2">
                Please select an Education Qualification above to view required document upload fields.
              </p>
            )}
          </div>

          {/* ============================================================ */}
          {/* ATOM: TABLE_EDUCATION_HISTORY (3 Columns: Exam, Board, Year) */}
          {/* ============================================================ */}
          <div
            id="atom-table-education-history"
            data-atom-id="TABLE_EDUCATION_HISTORY"
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-800 capitalize">
                Education Table (Last Exam Passed)
              </label>
              <button
                type="button"
                onClick={addEducationRow}
                className="text-xs font-semibold text-rose-700 hover:text-rose-900 cursor-pointer"
              >
                + Add Another Exam Row
              </button>
            </div>

            <div className="overflow-x-auto md:overflow-visible border border-slate-900 ">
              <table className="min-w-full divide-y divide-slate-900 text-sm ">
                <thead className="bg-slate-100 font-bold text-slate-900">
                  <tr>
                    <th className="px-3 py-2 text-left border-r border-slate-900 text-xs">
                      Exam Passed
                    </th>
                    <th className="px-3 py-2 text-left border-r border-slate-900 text-xs">
                      Board / University
                    </th>
                    <th className="px-3 py-2 text-left border-r border-slate-900 text-xs w-36">
                      Year of Passing
                    </th>
                    <th className="px-2 py-2 text-center text-xs w-16 print:hidden">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 bg-white">
                  {formData.education_history.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-xs text-slate-500 italic bg-slate-50">
                        Please select Education Qualification above to automatically generate required exam rows.
                      </td>
                    </tr>
                  ) : (
                    formData.education_history.map((row, index) => (
                      <tr key={index} className="relative">
                        <td className="p-1 border-r border-slate-900 relative">
                          <TableExamAutocomplete
                            value={row.exam}
                            onChange={(val) =>
                              updateEducationHistory(index, 'exam', val)
                            }
                            placeholder="Select or type exam (e.g. 10th pass)"
                            rowIndex={index}
                            allRows={formData.education_history}
                            allowedEduLevels={activeCourse.allowedEduLevels}
                          />
                        </td>
                        <td className="p-1 border-r border-slate-900">
                          <input
                            type="text"
                            value={row.board}
                            onChange={(e) =>
                              updateEducationHistory(index, 'board', e.target.value)
                            }
                            className="w-full px-2 py-1 text-xs border-0 focus:ring-0 text-slate-800"
                            placeholder="e.g. GSEB"
                          />
                        </td>
                        <td className="p-1 border-r border-slate-900">
                          <input
                            type="text"
                            maxLength={4}
                            value={row.year}
                            onChange={(e) =>
                              updateEducationHistory(index, 'year', e.target.value)
                            }
                            className="w-full px-2 py-1 text-xs border-0 focus:ring-0 text-slate-800 font-mono"
                            placeholder="2022"
                          />
                        </td>
                        <td className="p-1 text-center print:hidden">
                          <button
                            type="button"
                            onClick={() => removeEducationRow(index)}
                            className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer inline-flex items-center justify-center"
                            title="Remove this exam row"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: BOX_PHYSICAL_DOCUMENTS_CHECKLIST */}
        {/* ============================================================ */}
        <div
          id="atom-box-physical-documents-checklist"
          data-atom-id="BOX_PHYSICAL_DOCUMENTS_CHECKLIST"
          className="p-6 sm:p-8 border-b-2 border-slate-900 bg-amber-50/50"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-sm font-bold capitalize text-amber-950 tracking-wider">
                Physical Required Documents (To bring at Training Center)
              </h3>
              <p className="text-xs text-amber-900">
                Candidates must carry the original and photocopies of the following 7 documents
                during admission verification:
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 pt-2 list-decimal list-inside">
                <li className="bg-white p-2 rounded border border-amber-200">
                  4 Passport Size Photos
                </li>
                <li className="bg-white p-2 rounded border border-amber-200">
                  Aadhar Card Color Xerox
                </li>
                <li className="bg-white p-2 rounded border border-amber-200">Voter ID Card</li>
                <li className="bg-white p-2 rounded border border-amber-200">
                  Marksheet (10th / 12th / Diploma / Degree)
                </li>
                <li className="bg-white p-2 rounded border border-amber-200">
                  School Leaving Certificate
                </li>
                <li className="bg-white p-2 rounded border border-amber-200">
                  Bank Passbook Front Page Xerox
                </li>
                <li className="bg-white p-2 rounded border border-amber-200">
                  Marriage Certificate (if married)
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: SECTION_TERMS_AND_CONDITIONS */}
        {/* ============================================================ */}
        <div
          id="atom-section-terms-and-conditions"
          data-atom-id="SECTION_TERMS_AND_CONDITIONS"
          className="p-6 sm:p-8 border-b-2 border-slate-900 space-y-4"
        >
          <h2 className="text-base font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-rose-700" /> Terms and Conditions
          </h2>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-300 text-xs text-slate-700 space-y-2.5 leading-relaxed">
            <p>1. The candidate must be a resident of Gujarat.</p>
            <p>2. A minimum of 90% attendance is mandatory throughout the training program.</p>
            <p>
              3. The candidate must attend all practical sessions, assessments, and examinations as
              Scheduled.
            </p>
            <p>
              4. The course is completely free of cost. No fees or charges are payable by the
              Candidate.
            </p>
            <p>
              5. Candidates must inform the training center in case of prolonged absence due to
              Genuine reasons.
            </p>
            <p>6. The candidate must submit all required documents before admission.</p>
            <p>
              7. Candidates must maintain discipline and follow all rules and regulations of the
              Training center.
            </p>
            <p>
              8. Any misconduct, use of unfair means, or submission of false information may lead to
              Cancellation of admission.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ATOM: SECTION_DECLARATION_AND_SIGNATURES */}
        {/* ============================================================ */}
        <div
          id="atom-section-declaration-and-signatures"
          data-atom-id="SECTION_DECLARATION_AND_SIGNATURES"
          className="p-6 sm:p-8 space-y-6 bg-white"
        >
          <h2 className="text-base font-bold text-slate-900 capitalize tracking-wide">
            Declaration
          </h2>

          {/* ATOM: CHECKBOX_DECLARATION */}
          <div
            id="atom-checkbox-declaration"
            data-atom-id="CHECKBOX_DECLARATION"
            className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl"
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.declaration_agreed}
                onChange={(e) =>
                  setFormData({ ...formData, declaration_agreed: e.target.checked })
                }
                className="w-5 h-5 text-rose-700 rounded focus:ring-rose-500 border-slate-400 shrink-0 mt-0.5 cursor-pointer"
              />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-normal">
                I hereby declare that the information given in this application form is true to the
                best of my knowledge and belief. And I have read all the rules and regulation and
                promise to abide by it. <span className="text-red-600">*</span>
              </span>
            </label>
            {errors.declaration && (
              <p className="text-xs text-red-600 mt-2 font-bold">{errors.declaration}</p>
            )}
          </div>

          {/* ============================================================ */}
          {/* ATOM: SIGNATURES_ROW (Both Sign Physically Upon Verification) */}
          {/* ============================================================ */}
          <div
            id="atom-signatures-row"
            data-atom-id="SIGNATURES_ROW"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
          >
            {/* ATOM: SIGNATURE_PARENTS */}
            <div
              id="atom-signature-parents"
              data-atom-id="SIGNATURE_PARENTS"
              className="border border-slate-300 rounded-xl p-4 text-center bg-slate-50 space-y-3"
            >
              <span className="text-xs font-bold text-slate-600 uppercase block">
                Signature of Parents / Guardians
              </span>
              <div className="h-16 border-b border-dashed border-slate-400 flex items-end justify-center text-xs text-slate-400  pb-2">
                (Sign physically upon verification)
              </div>
            </div>

            {/* ATOM: SIGNATURE_APPLICANT */}
            <div
              id="atom-signature-applicant"
              data-atom-id="SIGNATURE_APPLICANT"
              className="border border-slate-300 rounded-xl p-4 text-center bg-slate-50 space-y-3"
            >
              <span className="text-xs font-bold text-slate-600 uppercase block">
                Signature of Applicant
              </span>
              <div className="h-16 border-b border-dashed border-slate-400 flex items-end justify-center text-xs text-slate-400 pb-2">
                (Sign physically upon verification)
              </div>
            </div>
          </div>

          {/* ATOM: FOOTER_DATE_PLACE */}
          <div
            id="atom-footer-date-place"
            data-atom-id="FOOTER_DATE_PLACE"
            className="flex justify-between items-center text-xs text-slate-600 pt-2 border-t border-slate-200"
          >
            <span>Date: <strong>{formData.application_date}</strong></span>
            <span>Place: <strong>{formData.application_place}</strong></span>
          </div>

          {/* ============================================================ */}
          {/* ATOM: SUBMIT_BUTTON_BAR */}
          {/* ============================================================ */}
          <div
            id="atom-submit-button-bar"
            data-atom-id="SUBMIT_BUTTON_BAR"
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-slate-900 print:hidden"
          >
            <p className="text-xs text-slate-500">
              * On clicking Submit, your application will be saved to Supabase and a copy backed up locally.
            </p>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto justify-end">
              {/* ATOM: BUTTON_AUTOFILL_TEST_DATA (Bottom Bar) */}
              <button
                id="atom-button-autofill-test-bottom"
                data-atom-id="BUTTON_AUTOFILL_TEST"
                type="button"
                onClick={fillRandomRealisticData}
                disabled={submitting || !!submitSuccess}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl border-2 border-dashed border-amber-500 bg-amber-50 hover:bg-amber-100 text-amber-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs active:scale-95"
                title="Click to fill form with random realistic test data"
              >
                <Sparkles className="w-4 h-4 text-amber-600 fill-amber-400 shrink-0" />
                <span>⚡ Auto-Fill Test Data</span>
              </button>

              {/* ATOM: BUTTON_SUBMIT */}
              <button
                id="atom-button-submit"
                data-atom-id="BUTTON_SUBMIT"
                type="submit"
                disabled={submitting || !formData.declaration_agreed || !!submitSuccess}
                className={`w-full sm:w-auto px-10 py-3.5 rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 select-none ${
                  submitting || !formData.declaration_agreed || !!submitSuccess
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed pointer-events-none opacity-60 shadow-none'
                    : 'bg-rose-700 hover:bg-rose-800 text-white hover:shadow-rose-700/25 cursor-pointer'
                }`}
              >
                {submitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" /> Submitting Application...
                  </>
                ) : submitSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-600" /> Application Submitted
                  </>
                ) : (
                  <>
                    <FileCheck className="w-5 h-5" /> Submit Admission Form
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
