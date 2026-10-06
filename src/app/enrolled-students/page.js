'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import PrintableAdmissionForm from '@/components/forms/PrintableAdmissionForm'
import {
  Users,
  Search,
  Filter,
  GraduationCap,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download,
  Printer,
  Eye,
  RefreshCw,
  PlusCircle,
  FileCheck,
  CheckCircle,
  X,
  FileText,
  User,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
  LayoutGrid,
  List,
  Edit,
  Trash2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  AlertTriangle,
  Save,
  Check,
  FileDown,
  Lock,
  Unlock,
  KeyRound,
  LogIn,
  LogOut,
  ArrowLeft,
  ArrowRight,
  Shield,
  Award,
  BookOpen,
  EyeOff
} from 'lucide-react'

// Course definitions with visual styles
const COURSES = [
  {
    id: 'all',
    name: 'All Courses (બધા કોર્સ)',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    headerGradient: 'from-slate-800 to-slate-900',
  },
  {
    id: 'fashion designer',
    shortName: 'Fashion Designer',
    name: 'Fashion Designer (ફેશન ડિઝાઇનર)',
    prefix: 'FD',
    duration: '6 Months (570 Hours)',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    headerGradient: 'from-rose-600 via-rose-700 to-orange-600',
    tagColor: 'from-rose-500 to-orange-500',
  },
  {
    id: 'boutique manager',
    shortName: 'Boutique Manager',
    name: 'Boutique Manager (બુટિક મેનેજર)',
    prefix: 'BM',
    duration: '6 Months (600 Hours)',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    headerGradient: 'from-amber-600 via-amber-700 to-orange-600',
    tagColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'purchase coordinator electronics',
    shortName: 'Purchase Coordinator',
    name: 'Purchase Coordinator - Electronics (પરચેઝ કો-ઓર્ડિનેટર)',
    prefix: 'EPC',
    duration: '6 Months (510 Hours)',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    headerGradient: 'from-blue-600 via-indigo-700 to-cyan-700',
    tagColor: 'from-blue-600 to-cyan-600',
  },
]

const TIME_SLOTS = [
  '7:30 AM to 11:30 AM',
  '11:30 AM to 3:30 PM',
  '3:30 PM to 7:30 PM',
]

export default function EnrolledStudentsPage() {
  const router = useRouter()
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedCourseTab, setSelectedCourseTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [timeSlotFilter, setTimeSlotFilter] = useState('all')
  const [genderFilter, setGenderFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'table'

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [authChecking, setAuthChecking] = useState(true)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  // Modals state
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [studentToPrint, setStudentToPrint] = useState(null)
  const [viewingDoc, setViewingDoc] = useState(null) // { title, url, type, studentName, formNo }
  const [docZoom, setDocZoom] = useState(1)
  const [editingStudent, setEditingStudent] = useState(null)
  const [editFormData, setEditFormData] = useState({})
  const [isSavingEdit, setIsSavingEdit] = useState(false)
  const [deletingStudent, setDeletingStudent] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [statusNotification, setStatusNotification] = useState(null) // { type: 'success'|'error', text: '' }

  // Auto-dismiss notification after 4 seconds
  useEffect(() => {
    if (statusNotification) {
      const timer = setTimeout(() => setStatusNotification(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [statusNotification])

  // Helper to detect correct file extension from data URI or URL
  const getFileExtensionFromUrl = (url, defaultExt = 'jpg') => {
    if (!url) return defaultExt
    if (typeof url === 'string') {
      if (url.startsWith('data:')) {
        const mimeMatch = url.match(/^data:([^;,]+)[;,]/)
        if (mimeMatch && mimeMatch[1]) {
          const mime = mimeMatch[1].toLowerCase()
          if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpg'
          if (mime.includes('png')) return 'png'
          if (mime.includes('webp')) return 'webp'
          if (mime.includes('pdf')) return 'pdf'
          if (mime.includes('svg')) return 'svg'
          if (mime.includes('gif')) return 'gif'
        }
      }
      try {
        const cleanUrl = url.split('?')[0].split('#')[0]
        const ext = cleanUrl.substring(cleanUrl.lastIndexOf('.') + 1).toLowerCase()
        if (['jpg', 'jpeg', 'png', 'webp', 'pdf', 'svg', 'gif', 'doc', 'docx'].includes(ext)) {
          return ext === 'jpeg' ? 'jpg' : ext
        }
      } catch {
        // ignore
      }
    }
    return defaultExt
  }

  // Helper to get formatted student photo filename preserving original file extension
  const getStudentPhotoFilename = (student) => {
    const safeName = (student?.full_name || 'Student').trim().replace(/[^a-zA-Z0-9_-]/g, '_')
    const formNo = (student?.form_no || 'Form').trim().replace(/[^a-zA-Z0-9_-]/g, '_')
    const ext = getFileExtensionFromUrl(student?.passport_photo_url, 'jpg')
    return `${formNo}_${safeName}_Photo.${ext}`
  }

  // Helper to get document filename preserving original user file name and extension
  const getDocumentFilename = (student, doc, defaultTitle = 'Document') => {
    const formNo = (student?.form_no || 'Form').trim().replace(/[^a-zA-Z0-9_-]/g, '_')
    const safeName = (student?.full_name || 'Student').trim().replace(/[^a-zA-Z0-9_-]/g, '_')

    if (doc && doc.name && typeof doc.name === 'string') {
      if (doc.name.includes('.')) {
        return `${formNo}_${doc.name.replace(/[^a-zA-Z0-9_.-]/g, '_')}`
      }
      const ext = getFileExtensionFromUrl(doc.url, doc.type?.includes('pdf') ? 'pdf' : 'jpg')
      return `${formNo}_${doc.name.replace(/[^a-zA-Z0-9_.-]/g, '_')}.${ext}`
    }

    const ext = getFileExtensionFromUrl(doc?.url, 'pdf')
    return `${formNo}_${safeName}_${defaultTitle}.${ext}`
  }

  // Download Single File Helper (supports data URL and external URL with exact binary preservation)
  const downloadFile = (url, filename) => {
    if (!url) {
      alert('File content is not available for download')
      return
    }

    try {
      if (url.startsWith('data:')) {
        const parts = url.split(',')
        const mimeMatch = parts[0].match(/:(.*?);/)
        const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream'

        let blob
        if (parts[0].indexOf('base64') >= 0) {
          const byteString = atob(parts[1])
          const ia = new Uint8Array(byteString.length)
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i)
          }
          blob = new Blob([ia], { type: mime })
        } else {
          const text = decodeURIComponent(parts[1])
          blob = new Blob([text], { type: mime })
        }

        const blobUrl = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = blobUrl
        a.download = filename || 'document'
        document.body.appendChild(a)
        a.click()
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl)
          document.body.removeChild(a)
        }, 300)
        return
      }

      // If standard HTTP/HTTPS URL
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const blobUrl = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = blobUrl
          a.download = filename || 'document'
          document.body.appendChild(a)
          a.click()
          setTimeout(() => {
            window.URL.revokeObjectURL(blobUrl)
            document.body.removeChild(a)
          }, 300)
        })
        .catch(() => {
          const a = document.createElement('a')
          a.href = url
          a.target = '_blank'
          a.download = filename || 'document'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        })
    } catch (err) {
      window.open(url, '_blank')
    }
  }

  // Download All Student Documents Helper (Passport photo + all attached certificates)
  const downloadAllStudentFiles = (student) => {
    if (!student) return
    const filesToDownload = []

    // 1. Passport Photo
    if (student.passport_photo_url) {
      filesToDownload.push({
        url: student.passport_photo_url,
        filename: getStudentPhotoFilename(student),
      })
    }

    // 2. Helper to collect documents
    const addDocList = (docs, defaultTitle) => {
      if (Array.isArray(docs)) {
        docs.forEach((d, i) => {
          if (d && d.url) {
            filesToDownload.push({
              url: d.url,
              filename: getDocumentFilename(student, d, `${defaultTitle}_${i + 1}`),
            })
          }
        })
      }
    }

    addDocList(student.aadhaar_photos, 'Aadhaar_Card')
    addDocList(student.school_leaving_certificates, 'School_Leaving_Certificate')
    addDocList(student.marksheets_10th, '10th_Marksheet')
    addDocList(student.marksheets_12th, '12th_Marksheet')
    addDocList(student.diploma_certificates, 'Diploma_Certificate')
    addDocList(student.ug_degree_certificates, 'UG_Degree_Certificate')
    addDocList(student.pg_degree_certificates, 'PG_Degree_Certificate')
    addDocList(student.marriage_certificates, 'Marriage_Certificate')

    if (filesToDownload.length === 0) {
      alert('No downloadable documents or photos found for this student.')
      return
    }

    // Sequentially trigger downloads
    filesToDownload.forEach((item, index) => {
      setTimeout(() => {
        downloadFile(item.url, item.filename)
      }, index * 300)
    })

    setStatusNotification({
      type: 'success',
      text: `Downloading ${filesToDownload.length} file(s) for ${student.full_name}...`,
    })
  }

  // Count total documents attached to student
  const getStudentDocsCount = (student) => {
    let count = 0
    if (Array.isArray(student.aadhaar_photos)) count += student.aadhaar_photos.length
    if (Array.isArray(student.school_leaving_certificates)) count += student.school_leaving_certificates.length
    if (Array.isArray(student.marksheets_10th)) count += student.marksheets_10th.length
    if (Array.isArray(student.marksheets_12th)) count += student.marksheets_12th.length
    if (Array.isArray(student.diploma_certificates)) count += student.diploma_certificates.length
    if (Array.isArray(student.ug_degree_certificates)) count += student.ug_degree_certificates.length
    if (Array.isArray(student.pg_degree_certificates)) count += student.pg_degree_certificates.length
    if (Array.isArray(student.marriage_certificates)) count += student.marriage_certificates.length
    return count
  }

  // Fetch students from API
  const fetchStudents = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admission/students')
      const data = await res.json()
      if (data.success && Array.isArray(data.students)) {
        setStudents(data.students)
      } else {
        setError(data.error || 'Failed to load students')
      }
    } catch (err) {
      console.error('Failed to fetch students:', err)
      setError(err.message || 'Network error')
    } finally {
      setLoading(false)
    }
  }

  // Check saved admin session on mount
  useEffect(() => {
    try {
      const savedAuth = sessionStorage.getItem('mkt_admin_logged_in') || localStorage.getItem('mkt_admin_logged_in')
      if (savedAuth === 'true') {
        setIsAdminAuthenticated(true)
      }
    } catch (e) {
      // ignore
    } finally {
      setAuthChecking(false)
    }
  }, [])

  // Fetch only when authenticated as admin
  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchStudents()
    }
  }, [isAdminAuthenticated])

  // Admin login handler
  const handleAdminLogin = (e) => {
    if (e) e.preventDefault()
    setLoginError('')
    const pwd = (loginPassword || '').trim().toLowerCase()
    // Supported admin passcodes
    const validPasswords = ['mkt@2026', 'admin123', 'admin', 'mktngo', 'mktadmin2026', 'mkt@ngo', 'admin@mktngo']
    if (validPasswords.includes(pwd)) {
      setIsAdminAuthenticated(true)
      setShowLoginModal(false)
      setLoginPassword('')
      try {
        if (rememberMe) {
          localStorage.setItem('mkt_admin_logged_in', 'true')
        }
        sessionStorage.setItem('mkt_admin_logged_in', 'true')
      } catch (err) {}
      setStatusNotification({ type: 'success', text: 'Admin login successful! Student directory unlocked.' })
    } else {
      setLoginError('Invalid password. Default admin passcode: mkt@2026')
    }
  }

  // Admin logout handler
  const handleAdminLogout = () => {
    try {
      sessionStorage.removeItem('mkt_admin_logged_in')
      localStorage.removeItem('mkt_admin_logged_in')
    } catch (err) {}
    setIsAdminAuthenticated(false)
    setStudents([])
    setStatusNotification({ type: 'success', text: 'Admin logged out successfully.' })
  }

  // Back button handler
  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  // Calculate Course Counts
  const courseCounts = useMemo(() => {
    const counts = {
      all: students.length,
      'fashion designer': 0,
      'boutique manager': 0,
      'purchase coordinator electronics': 0,
    }

    students.forEach((s) => {
      const c = (s.course_name || '').toLowerCase()
      if (c.includes('fashion')) counts['fashion designer']++
      else if (c.includes('boutique')) counts['boutique manager']++
      else if (c.includes('purchase') || c.includes('electronic')) counts['purchase coordinator electronics']++
    })

    return counts
  }, [students])

  // Filter students based on tab, search and dropdowns
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      // 1. Course Tab
      if (selectedCourseTab !== 'all') {
        const c = (s.course_name || '').toLowerCase()
        if (selectedCourseTab === 'fashion designer' && !c.includes('fashion')) return false
        if (selectedCourseTab === 'boutique manager' && !c.includes('boutique')) return false
        if (selectedCourseTab === 'purchase coordinator electronics' && !c.includes('purchase') && !c.includes('electronic')) return false
      }

      // 2. Search Term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim()
        const matchName = (s.full_name || '').toLowerCase().includes(q)
        const matchFormNo = (s.form_no || '').toLowerCase().includes(q)
        const matchRegNo = (s.registration_no || '').toLowerCase().includes(q)
        const matchPhone = (s.contact_number || '').includes(q)
        const matchEmail = (s.email || '').toLowerCase().includes(q)
        const matchCity = (s.city || '').toLowerCase().includes(q)
        const matchArea = (s.area_village || '').toLowerCase().includes(q)
        const matchAadhaar = (s.aadhaar_no || '').includes(q)

        if (!matchName && !matchFormNo && !matchRegNo && !matchPhone && !matchEmail && !matchCity && !matchArea && !matchAadhaar) {
          return false
        }
      }

      // 3. Time Slot Filter
      if (timeSlotFilter !== 'all') {
        if (s.time_slot !== timeSlotFilter) return false
      }

      // 4. Gender Filter
      if (genderFilter !== 'all') {
        if (s.gender !== genderFilter) return false
      }

      // 5. Category Filter
      if (categoryFilter !== 'all') {
        if (s.category !== categoryFilter) return false
      }

      return true
    })
  }, [students, selectedCourseTab, searchTerm, timeSlotFilter, genderFilter, categoryFilter])

  // Open Edit Modal
  const handleOpenEdit = (student) => {
    setEditingStudent(student)
    setEditFormData({
      ...student,
      full_name: student.full_name || '',
      form_no: student.form_no || '',
      registration_no: student.registration_no || '',
      course_name: student.course_name || 'fashion designer',
      time_slot: student.time_slot || '7:30 AM to 11:30 AM',
      date_of_birth: student.date_of_birth || '',
      calculated_age: student.calculated_age || '',
      gender: student.gender || 'Male',
      fathers_name: student.fathers_name || '',
      mothers_name: student.mothers_name || '',
      fathers_occupation: student.fathers_occupation || '',
      marital_status: student.marital_status || 'Unmarried',
      category: student.category || 'GEN',
      aadhaar_no: student.aadhaar_no || '',
      contact_number: student.contact_number || '',
      father_number: student.father_number || '',
      email: student.email || '',
      flat_society: student.flat_society || '',
      street_road: student.street_road || '',
      landmark: student.landmark || '',
      area_village: student.area_village || '',
      city: student.city || 'Ahmedabad',
      state: student.state || 'Gujarat',
      pincode: student.pincode || '',
      education_level: student.education_level || '12th pass',
      year_of_passing: student.year_of_passing || '',
    })
  }

  // Save Edit Student
  const handleSaveEdit = async (e) => {
    e.preventDefault()
    setIsSavingEdit(true)
    try {
      const res = await fetch('/api/admission/students', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData),
      })
      const data = await res.json()
      if (data.success && data.student) {
        // Update local list
        setStudents((prev) =>
          prev.map((s) => (s.form_no === editFormData.form_no || s.id === editFormData.id ? data.student : s))
        )
        // If modal was open, update selected student
        if (selectedStudent && (selectedStudent.form_no === editFormData.form_no || selectedStudent.id === editFormData.id)) {
          setSelectedStudent(data.student)
        }
        setEditingStudent(null)
        setStatusNotification({ type: 'success', text: `✓ Student profile for ${editFormData.full_name} updated successfully!` })
      } else {
        alert(data.error || 'Failed to update student profile')
      }
    } catch (err) {
      alert(`Error updating student: ${err.message}`)
    } finally {
      setIsSavingEdit(false)
    }
  }

  // Handle Delete Confirmation
  const handleConfirmDelete = async () => {
    if (!deletingStudent) return
    setIsDeleting(true)
    try {
      const res = await fetch('/api/admission/students', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: deletingStudent.id,
          form_no: deletingStudent.form_no,
        }),
      })
      const data = await res.json()
      if (data.success) {
        // Remove from local list
        setStudents((prev) => prev.filter((s) => s.form_no !== deletingStudent.form_no && s.id !== deletingStudent.id))
        // If selected student is deleted, close profile modal
        if (selectedStudent && (selectedStudent.form_no === deletingStudent.form_no || selectedStudent.id === deletingStudent.id)) {
          setSelectedStudent(null)
        }
        const name = deletingStudent.full_name
        setDeletingStudent(null)
        setStatusNotification({ type: 'success', text: `✓ Student record for ${name} deleted successfully.` })
      } else {
        alert(data.error || 'Failed to delete student')
      }
    } catch (err) {
      alert(`Error deleting student: ${err.message}`)
    } finally {
      setIsDeleting(false)
    }
  }

  // Print Student Application
  const printStudentApplication = (student = null) => {
    const targetStudent = student || selectedStudent
    if (!targetStudent) return
    setStudentToPrint(targetStudent)
    setTimeout(() => {
      window.print()
    }, 150)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-3 sm:px-6 lg:px-8 print:bg-white print:p-0 print:m-0">
      {/* ============================================================ */}
      {/* TOAST / NOTIFICATION */}
      {/* ============================================================ */}
      {statusNotification && (
        <div className="fixed top-5 right-5 z-[99999] bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold border border-slate-700 animate-in fade-in slide-in-from-top-3">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{statusNotification.text}</span>
          <button
            onClick={() => setStatusNotification(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* ADMIN LOGIN MODAL */}
      {/* ============================================================ */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-darkred via-rose-700 to-orange-600 p-6 text-white text-center relative">
              <button
                type="button"
                onClick={() => { setShowLoginModal(false); setLoginError(''); }}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <KeyRound className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-black tracking-tight">Admin Authorization</h3>
              <p className="text-xs text-rose-100 mt-1">
                એડમિન લૉગિન • માનવ કલ્યાણ ટ્રસ્ટ
              </p>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleAdminLogin} className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed text-center">
                Please enter the administrative password to access the enrolled students directory and student records.
              </p>

              {loginError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Admin Passcode / પાસવર્ડ
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => { setLoginPassword(e.target.value); setLoginError(''); }}
                    placeholder="Enter admin password (e.g. mkt@2026)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 text-sm font-medium pr-10 outline-hidden transition-all"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Default passcode: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-mono font-bold">mkt@2026</code>
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-rose-600 focus:ring-rose-500"
                  />
                  <span>Remember on this browser</span>
                </label>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => { setShowLoginModal(false); setLoginError(''); }}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-darkred to-rose-600 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login / પ્રવેશો</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 1. NON-ADMIN GATEWAY & STUDENT ENROLLMENT CTA (RESTRICTED VIEW) */}
      {/* ============================================================ */}
      {!isAdminAuthenticated ? (
        <div className="max-w-5xl mx-auto space-y-6 print:hidden">
          {/* Top Bar Navigation for Non-Admin */}
          <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-xs border border-slate-200">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleGoBack}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                title="Go back to previous page"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-rose-600" />
                <span>← Back (પાછા જાઓ)</span>
              </button>
              <span className="text-slate-300">|</span>
              <Link
                href="/"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                Home
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href="/courses"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                Courses
              </Link>
            </div>

            <button
              type="button"
              onClick={() => { setShowLoginModal(true); setLoginError(''); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-black hover:to-slate-900 text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer border border-slate-700"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Login (એડમિન લૉગિન)</span>
            </button>
          </div>

          {/* Access Restricted Notice Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold mb-4">
              <Shield className="w-3.5 h-3.5 text-rose-600" />
              <span>Restricted Access • માત્ર અધિકૃત એડમિન માટે</span>
            </div>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-rose-500 to-darkred text-white flex items-center justify-center shadow-md">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Enrolled Students Directory (વિદ્યાર્થીઓની યાદી)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-2 leading-relaxed">
              આ પેજ પર માનવ કલ્યાણ ટ્રસ્ટના નોંધાયેલા વિદ્યાર્થીઓની ગોપનીય માહિતી, ફોટા અને સરકારી દસ્તાવેજો છે. માત્ર અધિકૃત સંચાલક (Admin) જ આ પેજ જોઈ શકે છે.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => { setShowLoginModal(true); setLoginError(''); }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-darkred to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <KeyRound className="w-4 h-4" />
                <span>Admin Login (એડમિન લૉગિન કરો)</span>
              </button>
              <button
                type="button"
                onClick={handleGoBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back (પાછા જાઓ)</span>
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CALL TO ACTION SECTION FOR PROSPECTIVE STUDENTS */}
          {/* ============================================================ */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-rose-50/40 to-amber-50/50 border-2 border-rose-200/90 shadow-xl p-6 sm:p-10 text-center">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-300 text-rose-800 text-xs sm:text-sm font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-rose-600 animate-spin" style={{ animationDuration: '6s' }} />
                <span>નવી બેચમાં પ્રવેશ શરૂ છે • GSDM માન્યતા પ્રાપ્ત 100% મફત સરકારી યોજના</span>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-2 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  વિનામૂલ્યે સરકારી કૌશલ્ય તાલીમ મેળવો અને ઉજ્જવળ કારકિર્દી બનાવો
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  જો તમે વિદ્યાર્થી છો અને માનવ કલ્યાણ ટ્રસ્ટ (MKT) દ્વારા સંચાલિત ગુજરાત કૌશલ્ય વિકાસ મિશન (GSDM) હેઠળ 100% મફત કોર્સમાં પ્રવેશ મેળવવા માંગો છો, તો અત્યારે જ ઓનલાઇન એડમિશન ફોર્મ ભરો.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2 text-left">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-rose-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 text-base font-bold">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% મફત તાલીમ</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">કોઈ પણ ફી વિના સંપૂર્ણ અભ્યાસક્રમ</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-amber-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-base font-bold">
                    📜
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">સરકારી પ્રમાણપત્ર</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">GSDM માન્યતા પ્રાપ્ત સર્ટિફિકેટ</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-emerald-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-base font-bold">
                    💰
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">રોજિંદુ સ્ટાઇપેન્ડ</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">સરકારી નિયમ મુજબ દૈનિક ભથ્થું</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-blue-100 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-base font-bold">
                    💼
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% પ્લેસમેન્ટ</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">નોકરી અને સ્વરોજગાર સહાય</p>
                  </div>
                </div>
              </div>

              {/* Course Visual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2 text-left">
                {/* Fashion Designer */}
                <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs flex flex-col justify-between hover:border-rose-400 hover:shadow-md transition-all">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[11px] font-bold mb-2">
                      Code: FD • 6 Months
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900">Fashion Designer (ફેશન ડિઝાઇનર)</h3>
                    <p className="text-xs text-slate-500 mt-1">લાયકાત: 10th પાસ • ડ્રેસ ડિઝાઇનિંગ, પેટર્ન મેકિંગ અને સિલાઈ તાલીમ સાથે મફત કિટ</p>
                  </div>
                  <Link
                    href="/admission-form?course=fashion+designer"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-colors"
                  >
                    <span>Apply For FD</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Boutique Manager */}
                <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[11px] font-bold mb-2">
                      Code: BM • 6 Months
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900">Boutique Manager (બુટિક મેનેજર)</h3>
                    <p className="text-xs text-slate-500 mt-1">લાયકાત: 12th પાસ • બુટિક સંચાલન, ફેશન બિઝનેસ પ્લાનિંગ અને ક્લાયન્ટ મેનેજમેન્ટ</p>
                  </div>
                  <Link
                    href="/admission-form?course=boutique+manager"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold transition-colors"
                  >
                    <span>Apply For BM</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Purchase Coordinator - Electronics */}
                <div className="bg-white rounded-2xl p-5 border border-blue-200 shadow-xs flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold mb-2">
                      Code: EPC • 6 Months
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900">Purchase Coordinator (પરચેઝ કો-ઓર્ડિનેટર)</h3>
                    <p className="text-xs text-slate-500 mt-1">લાયકાત: 10th/12th પાસ • ઇલેક્ટ્રોનિક્સ સપ્લાય ચેઇન, સ્ટોર મેનેજમેન્ટ અને કમ્પ્યુટર</p>
                  </div>
                  <Link
                    href="/admission-form?course=purchase+coordinator+electronics"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors"
                  >
                    <span>Apply For EPC</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* MAIN PRIMARY CTA BUTTONS */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/admission-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-darkred via-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
                >
                  <FileText className="w-5 h-5 text-amber-200" />
                  <span>Apply Online Free (ઓનલાઇન મફત પ્રવેશ ફોર્મ ભરો)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={handleGoBack}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-sm sm:text-base shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-500" />
                  <span>Go Back (અગાઉના પેજ પર પાછા જાઓ)</span>
                </button>
              </div>

              {/* Support Hotline Info */}
              <div className="pt-4 border-t border-rose-200/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-rose-600" />
                  <span>હેલ્પલાઇન: <strong className="text-slate-800">+91 99099 66050 / +91 98252 23377</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>માનવ કલ્યાણ ટ્રસ્ટ • અમદાવાદ / ગાંધીનગર, ગુજરાત</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ============================================================ */
        /* 2. ADMIN ENROLLED STUDENTS DIRECTORY (AUTHENTICATED VIEW) */
        /* ============================================================ */
        <div className="max-w-7xl mx-auto space-y-6 print:hidden">
          {/* TOP BAR & NAVIGATION FOR ADMIN */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-2xs border border-slate-200 print:hidden">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleGoBack}
                className="text-xs font-semibold text-slate-700 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                title="Go back to previous page"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-rose-600" /> Back
              </button>
              <span className="text-slate-300">|</span>
              <Link
                href="/"
                className="text-xs font-semibold text-rose-700 hover:text-rose-900 flex items-center gap-1"
              >
                ← Home
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href="/admission-form"
                className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 flex items-center gap-1"
              >
                <PlusCircle className="w-3.5 h-3.5" /> New Admission Form
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>Admin Mode</span>
              </span>

              <button
                type="button"
                onClick={handleAdminLogout}
                className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Logout from Admin Mode"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>

              <button
                onClick={fetchStudents}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Refresh enrolled students list"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-rose-600' : ''}`} />
                <span>Refresh</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Directory</span>
              </button>
            </div>
          </div>

        {/* ============================================================ */}
        {/* PAGE HEADER */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-darkred via-rose-700 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-lg print:bg-white print:text-black print:p-2 print:border-b-2 print:border-black">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-200" />
                <span>GSDM • 100% Free Government Approved Scheme</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Enrolled Students Directory (વિદ્યાર્થીઓની યાદી)
              </h1>
              <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
                Manav Kalyan Trust - Course-wise Visual Directory of all registered candidates with document verification, download, edit &amp; record management.
              </p>
            </div>

            {/* Total count badge */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shrink-0 self-start md:self-auto">
              <span className="text-xs uppercase tracking-wider text-rose-100 font-bold block">
                Total Enrolled
              </span>
              <span className="text-3xl sm:text-4xl font-black block">
                {loading ? '...' : students.length}
              </span>
              <span className="text-[11px] text-rose-200 block">Registered Applicants</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* COURSE SUMMARY STATS CARDS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 print:hidden">
          {/* Card 1: All Courses */}
          <div
            onClick={() => setSelectedCourseTab('all')}
            className={`p-4 rounded-xl border bg-white shadow-2xs hover:shadow-sm cursor-pointer transition-all ${
              selectedCourseTab === 'all' ? 'border-slate-900 ring-2 ring-slate-900/20' : 'border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">All Courses</span>
              <span className="p-2 rounded-lg bg-slate-100 text-slate-700">
                <Users className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{courseCounts.all}</p>
            <span className="text-[11px] text-slate-400 font-medium">All Candidates</span>
          </div>

          {/* Card 2: Fashion Designer */}
          <div
            onClick={() => setSelectedCourseTab('fashion designer')}
            className={`p-4 rounded-xl border bg-white shadow-2xs hover:shadow-sm cursor-pointer transition-all ${
              selectedCourseTab === 'fashion designer' ? 'border-rose-500 ring-2 ring-rose-400/30' : 'border-rose-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-700 uppercase">Fashion Designer</span>
              <span className="p-2 rounded-lg bg-rose-50 text-rose-600">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-rose-700 mt-2">{courseCounts['fashion designer']}</p>
            <span className="text-[11px] text-rose-600/80 font-medium">FD Prefix</span>
          </div>

          {/* Card 3: Boutique Manager */}
          <div
            onClick={() => setSelectedCourseTab('boutique manager')}
            className={`p-4 rounded-xl border bg-white shadow-2xs hover:shadow-sm cursor-pointer transition-all ${
              selectedCourseTab === 'boutique manager' ? 'border-amber-500 ring-2 ring-amber-400/30' : 'border-amber-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-700 uppercase">Boutique Manager</span>
              <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <GraduationCap className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-amber-700 mt-2">{courseCounts['boutique manager']}</p>
            <span className="text-[11px] text-amber-600/80 font-medium">BM Prefix</span>
          </div>

          {/* Card 4: Purchase Coordinator */}
          <div
            onClick={() => setSelectedCourseTab('purchase coordinator electronics')}
            className={`p-4 rounded-xl border bg-white shadow-2xs hover:shadow-sm cursor-pointer transition-all ${
              selectedCourseTab === 'purchase coordinator electronics' ? 'border-blue-500 ring-2 ring-blue-400/30' : 'border-blue-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-700 uppercase">Electronics Purchase</span>
              <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <ShieldCheck className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-blue-700 mt-2">{courseCounts['purchase coordinator electronics']}</p>
            <span className="text-[11px] text-blue-600/80 font-medium">EPC Prefix</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* COURSE TABS */}
        {/* ============================================================ */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none print:hidden">
          {COURSES.map((course) => {
            const isActive = selectedCourseTab === course.id
            const count = courseCounts[course.id] ?? 0
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseTab(course.id)}
                className={`px-4 py-2 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                <span>{course.shortName || course.name}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-black ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* ============================================================ */}
        {/* SEARCH & FILTERS BAR */}
        {/* ============================================================ */}
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3 print:hidden">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by student name, Form No, Reg No, phone, email, city..."
                className="w-full pl-9 pr-8 py-2 bg-slate-50 focus:bg-white border border-slate-200 focus:border-rose-500 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-rose-400 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Time Slot Filter */}
              <select
                value={timeSlotFilter}
                onChange={(e) => setTimeSlotFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 cursor-pointer"
              >
                <option value="all">All Batches (સમય સ્લોટ)</option>
                <option value="7:30 AM to 11:30 AM">7:30 AM to 11:30 AM</option>
                <option value="11:30 AM to 3:30 PM">11:30 AM to 3:30 PM</option>
                <option value="3:30 PM to 7:30 PM">3:30 PM to 7:30 PM</option>
              </select>

              {/* Gender Filter */}
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 cursor-pointer"
              >
                <option value="all">All Genders (જાતિ)</option>
                <option value="Male">Male (પુરુષ)</option>
                <option value="Female">Female (સ્ત્રી)</option>
              </select>

              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 cursor-pointer"
              >
                <option value="all">All Categories (કેટેગરી)</option>
                <option value="GEN">GEN</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50 p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white shadow-2xs text-rose-700 font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-md cursor-pointer ${
                    viewMode === 'table' ? 'bg-white shadow-2xs text-rose-700 font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Table List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(searchTerm || timeSlotFilter !== 'all' || genderFilter !== 'all' || categoryFilter !== 'all' || selectedCourseTab !== 'all') && (
            <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-400 font-medium">Active filters:</span>
              {selectedCourseTab !== 'all' && (
                <span className="bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                  Course: {selectedCourseTab}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCourseTab('all')} />
                </span>
              )}
              {searchTerm && (
                <span className="bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                  &ldquo;{searchTerm}&rdquo;
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchTerm('')} />
                </span>
              )}
              {timeSlotFilter !== 'all' && (
                <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                  {timeSlotFilter}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setTimeSlotFilter('all')} />
                </span>
              )}
              {genderFilter !== 'all' && (
                <span className="bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                  {genderFilter}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setGenderFilter('all')} />
                </span>
              )}
              {categoryFilter !== 'all' && (
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                  Cat: {categoryFilter}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setCategoryFilter('all')} />
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCourseTab('all')
                  setSearchTerm('')
                  setTimeSlotFilter('all')
                  setGenderFilter('all')
                  setCategoryFilter('all')
                }}
                className="text-rose-600 hover:text-rose-800 font-bold ml-1 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* LOADING & ERROR STATES */}
        {/* ============================================================ */}
        {loading && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-2xs space-y-4">
            <RefreshCw className="w-10 h-10 text-rose-600 animate-spin mx-auto" />
            <p className="text-base font-bold text-slate-800">Loading Enrolled Students...</p>
            <p className="text-xs text-slate-400">Fetching records from Supabase database &amp; local storage...</p>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200 text-center space-y-3">
            <AlertTriangle className="w-10 h-10 text-red-600 mx-auto" />
            <h3 className="text-base font-bold text-red-900">Failed to load students</h3>
            <p className="text-xs text-red-700">{error}</p>
            <button
              onClick={fetchStudents}
              className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-bold cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filteredStudents.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-2xs space-y-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No Enrolled Students Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              No applications match your selected filters. Try clearing your search term or register a new student using the admission form.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedCourseTab('all')
                  setSearchTerm('')
                  setTimeSlotFilter('all')
                  setGenderFilter('all')
                  setCategoryFilter('all')
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold cursor-pointer"
              >
                Clear Filters
              </button>
              <Link
                href="/admission-form"
                className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" /> Fill New Form
              </Link>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* GRID VIEW (CARDS) */}
        {/* ============================================================ */}
        {!loading && !error && viewMode === 'grid' && filteredStudents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredStudents.map((student, idx) => {
              const cName = (student.course_name || '').toLowerCase()
              const isFashion = cName.includes('fashion')
              const isBoutique = cName.includes('boutique')
              const borderColor = isFashion ? 'hover:border-rose-400' : isBoutique ? 'hover:border-amber-400' : 'hover:border-blue-400'
              const tagBadge = isFashion ? 'bg-rose-50 text-rose-700 border-rose-200' : isBoutique ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-blue-50 text-blue-700 border-blue-200'
              const docsCount = getStudentDocsCount(student)

              return (
                <div
                  key={student.id || student.form_no || idx}
                  className={`bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${borderColor} group relative`}
                >
                  <div className="space-y-3">
                    {/* Card Top: Numbers & Course Tag */}
                    <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-mono font-bold text-xs bg-slate-900 text-white px-2 py-0.5 rounded-md">
                            {student.form_no || 'NO_FORM_NO'}
                          </span>
                          <span className="font-mono font-bold text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                            {student.registration_no || 'NO_REG'}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 block">
                          Applied: {student.application_date || new Date(student.created_at || Date.now()).toLocaleDateString('en-GB')}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase shrink-0 ${tagBadge}`}>
                        {isFashion ? 'Fashion Designer' : isBoutique ? 'Boutique Manager' : 'Electronics'}
                      </span>
                    </div>

                    {/* Student Photo & Name Row */}
                    <div className="flex items-center gap-3">
                      {/* Photo slot with hover preview & download actions */}
                      <div className="w-16 h-20 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shrink-0 relative flex items-center justify-center group/photo">
                        {student.passport_photo_url ? (
                          <>
                            <img
                              src={student.passport_photo_url}
                              alt={student.full_name}
                              className="w-full h-full object-cover"
                            />
                            {/* Hover overlay with See & Download */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 p-1">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setViewingDoc({
                                    title: 'Passport Photo',
                                    url: student.passport_photo_url,
                                    type: 'image',
                                    studentName: student.full_name,
                                    formNo: student.form_no,
                                    filename: getStudentPhotoFilename(student),
                                  })
                                }}
                                className="w-6 h-6 rounded bg-white text-slate-900 flex items-center justify-center text-[10px] hover:bg-rose-50"
                                title="See Photo Full View"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  downloadFile(student.passport_photo_url, getStudentPhotoFilename(student))
                                }}
                                className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] hover:bg-emerald-700"
                                title="Download Photo"
                              >
                                <Download className="w-3 h-3" />
                              </button>
                            </div>
                          </>
                        ) : (
                          <User className="w-8 h-8 text-slate-300" />
                        )}
                      </div>

                      {/* Name & Basic details */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-sm text-slate-900 leading-snug truncate group-hover:text-rose-700 transition-colors">
                          {student.full_name || 'STUDENT NAME'}
                        </h3>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          Father: {student.fathers_name || '-'}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap text-[10px] font-semibold text-slate-600">
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded-sm">
                            {student.gender || 'Male'}
                          </span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded-sm">
                            Age: {student.calculated_age || '-'}
                          </span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded-sm">
                            Cat: {student.category || 'GEN'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata items */}
                    <div className="bg-slate-50 rounded-lg p-2.5 space-y-1.5 text-xs text-slate-600 border border-slate-200/60">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-mono font-bold text-slate-800">{student.contact_number || '-'}</span>
                      </div>

                      <div className="flex items-center gap-1.5 truncate">
                        <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{student.email || '-'}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="truncate">{student.time_slot || 'Regular Batch'}</span>
                      </div>

                      <div className="flex items-start gap-1.5 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight line-clamp-1">
                          {[student.area_village, student.city, student.pincode].filter(Boolean).join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* Education level & Documents badge */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                      <span className="truncate">Edu: <strong className="text-slate-700">{student.education_level || '10th/12th'}</strong></span>
                      <button
                        type="button"
                        onClick={() => setSelectedStudent(student)}
                        className="shrink-0 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200 text-[10px] flex items-center gap-1 cursor-pointer transition-colors"
                        title="Click to view all uploaded documents"
                      >
                        <FileCheck className="w-3 h-3 text-emerald-600" />
                        <span>{docsCount} Doc(s)</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Action Buttons (View, Edit, Delete, Print, Download) */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 flex-wrap">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="text-xs font-bold text-slate-700 hover:text-rose-700 flex items-center gap-1 transition-colors cursor-pointer"
                      title="View Student Profile & Documents"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-1">
                      {/* Direct Edit Button */}
                      <button
                        onClick={() => handleOpenEdit(student)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors cursor-pointer"
                        title="Edit Student Application"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>

                      {/* Download All Student Files Button */}
                      <button
                        onClick={() => downloadAllStudentFiles(student)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                        title="Download All Student Documents & Photo"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => setDeletingStudent(student)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete Student Record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Print Form */}
                      <button
                        onClick={() => printStudentApplication(student)}
                        className="text-xs font-bold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer ml-1"
                        title="Print Official Admission Form"
                      >
                        <Printer className="w-3 h-3" />
                        <span>Print</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ============================================================ */}
        {/* TABLE VIEW */}
        {/* ============================================================ */}
        {!loading && !error && viewMode === 'table' && filteredStudents.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3">Photo</th>
                    <th className="p-3">Form &amp; Reg No</th>
                    <th className="p-3">Student Full Name</th>
                    <th className="p-3">Course</th>
                    <th className="p-3">Batch Time</th>
                    <th className="p-3">Contact</th>
                    <th className="p-3">City / Area</th>
                    <th className="p-3">Documents</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((s, idx) => {
                    const docsCount = getStudentDocsCount(s)
                    return (
                      <tr key={s.id || s.form_no || idx} className="hover:bg-slate-50 transition-colors">
                        {/* Photo */}
                        <td className="p-3">
                          <div className="w-10 h-12 rounded-md bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center relative group/tblphoto">
                            {s.passport_photo_url ? (
                              <>
                                <img src={s.passport_photo_url} alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/tblphoto:opacity-100 transition-opacity flex items-center justify-center gap-1">
                                  <button
                                    onClick={() => setViewingDoc({
                                      title: 'Passport Photo',
                                      url: s.passport_photo_url,
                                      type: 'image',
                                      studentName: s.full_name,
                                      formNo: s.form_no,
                                      filename: getStudentPhotoFilename(s),
                                    })}
                                    className="p-1 rounded bg-white text-slate-900"
                                    title="See Photo"
                                  >
                                    <Eye className="w-3 h-3" />
                                  </button>
                                  <button
                                    onClick={() => downloadFile(s.passport_photo_url, getStudentPhotoFilename(s))}
                                    className="p-1 rounded bg-emerald-600 text-white"
                                    title="Download Photo"
                                  >
                                    <Download className="w-3 h-3" />
                                  </button>
                                </div>
                              </>
                            ) : (
                              <User className="w-5 h-5 text-slate-400" />
                            )}
                          </div>
                        </td>

                        {/* Form No & Reg */}
                        <td className="p-3 font-mono">
                          <span className="font-bold text-slate-900 block">{s.form_no}</span>
                          <span className="text-[11px] text-slate-500">{s.registration_no}</span>
                        </td>

                        {/* Name & Gender */}
                        <td className="p-3">
                          <span className="font-bold text-slate-900 block">{s.full_name}</span>
                          <span className="text-[11px] text-slate-500">
                            {s.gender} • Age: {s.calculated_age || '-'}
                          </span>
                        </td>

                        {/* Course */}
                        <td className="p-3">
                          <span className="capitalize font-semibold text-slate-800 block">{s.course_name}</span>
                          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                            Free Training
                          </span>
                        </td>

                        {/* Batch Time */}
                        <td className="p-3 text-slate-600 font-medium">
                          {s.time_slot}
                        </td>

                        {/* Contact */}
                        <td className="p-3 font-mono">
                          <span className="text-emerald-700 font-bold block">{s.contact_number}</span>
                          <span className="text-[11px] text-slate-500 truncate max-w-[120px] block">{s.email}</span>
                        </td>

                        {/* City / Area */}
                        <td className="p-3 text-slate-600">
                          <span className="font-medium block">{s.city}</span>
                          <span className="text-[11px] text-slate-400">{s.area_village}</span>
                        </td>

                        {/* Documents count */}
                        <td className="p-3">
                          <button
                            type="button"
                            onClick={() => setSelectedStudent(s)}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded text-xs border border-emerald-200 flex items-center gap-1 cursor-pointer"
                          >
                            <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{docsCount} Docs</span>
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedStudent(s)}
                              className="p-1.5 rounded-lg text-slate-600 hover:text-rose-700 hover:bg-rose-50 cursor-pointer"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleOpenEdit(s)}
                              className="p-1.5 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 cursor-pointer"
                              title="Edit Student"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => downloadAllStudentFiles(s)}
                              className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 cursor-pointer"
                              title="Download All Documents & Photo"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => printStudentApplication(s)}
                              className="p-1.5 rounded-lg text-slate-600 hover:text-rose-700 hover:bg-rose-50 cursor-pointer"
                              title="Print Official Admission Form"
                            >
                              <Printer className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeletingStudent(s)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                              title="Delete Student"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STUDENT FULL DETAILS MODAL */}
        {/* ============================================================ */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:hidden">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-darkred via-rose-700 to-orange-600 text-white p-4 sm:p-5 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold">
                      Student Admission Profile: {selectedStudent.full_name}
                    </h2>
                    <p className="text-rose-100 text-xs font-mono">
                      Form No: {selectedStudent.form_no} | Reg No: {selectedStudent.registration_no}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(selectedStudent)}
                    className="bg-white/20 hover:bg-white text-white hover:text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                    title="Edit Student Details"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => downloadAllStudentFiles(selectedStudent)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                    title="Download All Documents & Photo"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download All</span>
                  </button>
                  <button
                    onClick={() => printStudentApplication(selectedStudent)}
                    className="bg-white/20 hover:bg-white text-white hover:text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                    title="Print Official Admission Form"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Print Form</span>
                  </button>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs text-slate-700">

                {/* Top Profile Summary Card with Photo actions */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="space-y-2 shrink-0 flex flex-col items-center">
                    <div className="w-28 h-36 rounded-lg bg-white overflow-hidden border-2 border-slate-300 shadow-sm flex items-center justify-center relative group/modalphoto">
                      {selectedStudent.passport_photo_url ? (
                        <>
                          <img
                            src={selectedStudent.passport_photo_url}
                            alt={selectedStudent.full_name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/modalphoto:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => setViewingDoc({
                                title: 'Passport Photo',
                                url: selectedStudent.passport_photo_url,
                                type: 'image',
                                studentName: selectedStudent.full_name,
                                formNo: selectedStudent.form_no,
                                filename: getStudentPhotoFilename(selectedStudent),
                              })}
                              className="p-1.5 rounded bg-white text-slate-900 hover:bg-rose-50 shadow-sm"
                              title="See Photo"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => downloadFile(selectedStudent.passport_photo_url, getStudentPhotoFilename(selectedStudent))}
                              className="p-1.5 rounded bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                              title="Download Photo"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <User className="w-12 h-12 text-slate-300" />
                      )}
                    </div>

                    {/* Direct Photo Action Buttons */}
                    {selectedStudent.passport_photo_url && (
                      <div className="flex items-center gap-1 w-full justify-center">
                        <button
                          type="button"
                          onClick={() => setViewingDoc({
                            title: 'Passport Photo',
                            url: selectedStudent.passport_photo_url,
                            type: 'image',
                            studentName: selectedStudent.full_name,
                            formNo: selectedStudent.form_no,
                            filename: getStudentPhotoFilename(selectedStudent),
                          })}
                          className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                        >
                          <Eye className="w-3 h-3 text-rose-600" />
                          <span>See Photo</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => downloadFile(selectedStudent.passport_photo_url, getStudentPhotoFilename(selectedStudent))}
                          className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                        >
                          <Download className="w-3 h-3 text-emerald-600" />
                          <span>Download</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 text-center sm:text-left flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="bg-slate-900 text-white font-mono font-bold px-2 py-0.5 rounded-md text-xs">
                        {selectedStudent.form_no}
                      </span>
                      <span className="bg-indigo-100 text-indigo-900 font-mono font-bold px-2 py-0.5 rounded-md text-xs border border-indigo-200">
                        {selectedStudent.registration_no}
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md text-xs">
                        100% Free Training
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 pt-1">
                      {selectedStudent.full_name}
                    </h3>
                    <p className="text-xs text-rose-700 font-bold capitalize">
                      Course: {selectedStudent.course_name} ({selectedStudent.course_duration})
                    </p>
                    <p className="text-xs text-slate-600">
                      Batch Time: <strong>{selectedStudent.time_slot}</strong>
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Date of Application: {selectedStudent.application_date} | Place: {selectedStudent.application_place || 'Ahmedabad'}
                    </p>
                  </div>
                </div>

                {/* Personal & Family Details */}
                <div className="border border-slate-200 rounded-xl p-4 space-y-3">
                  <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <User className="w-3.5 h-3.5 text-rose-600" /> 1. Personal &amp; Family Details
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Date of Birth:</span>
                      <strong className="text-slate-800">{selectedStudent.date_of_birth}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Age:</span>
                      <strong className="text-slate-800">{selectedStudent.calculated_age} Years</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Gender:</span>
                      <strong className="text-slate-800">{selectedStudent.gender}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Category:</span>
                      <strong className="text-slate-800">{selectedStudent.category}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Marital Status:</span>
                      <strong className="text-slate-800">{selectedStudent.marital_status}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Father&#39;s Name:</span>
                      <strong className="text-slate-800">{selectedStudent.fathers_name || '-'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Mother&#39;s Name:</span>
                      <strong className="text-slate-800">{selectedStudent.mothers_name || '-'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Father&#39;s Occupation:</span>
                      <strong className="text-slate-800">{selectedStudent.fathers_occupation || '-'}</strong>
                    </div>
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="border border-slate-200 rounded-xl p-4 space-y-3">
                  <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" /> 2. Contact &amp; Residential Address
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Student Mobile:</span>
                      <strong className="text-slate-800 font-mono text-sm text-emerald-700">{selectedStudent.contact_number}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Father / Guardian Phone:</span>
                      <strong className="text-slate-800 font-mono">{selectedStudent.father_number || '-'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Email ID:</span>
                      <strong className="text-slate-800">{selectedStudent.email}</strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-400 block text-[10px]">Postal Address:</span>
                      <strong className="text-slate-800">
                        {[
                          selectedStudent.flat_society,
                          selectedStudent.street_road,
                          selectedStudent.landmark,
                          selectedStudent.area_village,
                          selectedStudent.city,
                          selectedStudent.state,
                          selectedStudent.pincode,
                        ]
                          .filter(Boolean)
                          .join(', ')}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Aadhaar Number:</span>
                      <strong className="text-slate-800 font-mono tracking-widest">{selectedStudent.aadhaar_no}</strong>
                    </div>
                  </div>
                </div>

                {/* Education Details */}
                <div className="border border-slate-200 rounded-xl p-4 space-y-3">
                  <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-rose-600" /> 3. Education Qualification &amp; History
                  </h4>
                  <div className="flex items-center justify-between pb-1">
                    <span>
                      Highest Qualification: <strong className="text-slate-900">{selectedStudent.education_level}</strong>
                    </span>
                    <span>
                      Passing Year: <strong className="text-slate-900">{selectedStudent.year_of_passing}</strong>
                    </span>
                  </div>

                  {Array.isArray(selectedStudent.education_history) && selectedStudent.education_history.length > 0 && (
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                      <table className="w-full text-left">
                        <thead className="bg-slate-100 text-slate-700 font-bold text-[11px]">
                          <tr>
                            <th className="p-2">Exam / Standard</th>
                            <th className="p-2">Board / University</th>
                            <th className="p-2">Passing Year</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {selectedStudent.education_history.map((row, rIdx) => (
                            <tr key={rIdx}>
                              <td className="p-2 font-bold">{row.exam || '-'}</td>
                              <td className="p-2">{row.board || '-'}</td>
                              <td className="p-2 font-mono">{row.year || row.passing_year || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* ============================================================ */}
                {/* 4. UPLOADED DOCUMENTS WITH DIRECT "SEE" AND "DOWNLOAD" */}
                {/* ============================================================ */}
                <div className="border border-slate-200 rounded-xl p-4 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 flex-wrap gap-2">
                    <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-rose-600" /> 4. Uploaded Student Documents &amp; Certificates
                    </h4>
                    <button
                      type="button"
                      onClick={() => downloadAllStudentFiles(selectedStudent)}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download All Documents</span>
                    </button>
                  </div>

                  {/* Render Document Groups */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Helper to render document cards */}
                    {[
                      { title: 'Aadhaar Card (આધાર કાર્ડ)', docs: selectedStudent.aadhaar_photos, icon: ShieldCheck, badgeColor: 'bg-orange-50 text-orange-800' },
                      { title: 'School Leaving Certificate (LC)', docs: selectedStudent.school_leaving_certificates, icon: GraduationCap, badgeColor: 'bg-blue-50 text-blue-800' },
                      { title: '10th SSC Marksheet (૧૦મું ધોરણ)', docs: selectedStudent.marksheets_10th, icon: FileText, badgeColor: 'bg-emerald-50 text-emerald-800' },
                      { title: '12th HSC Marksheet (૧૨મું ધોરણ)', docs: selectedStudent.marksheets_12th, icon: FileText, badgeColor: 'bg-purple-50 text-purple-800' },
                      { title: 'Diploma Certificate', docs: selectedStudent.diploma_certificates, icon: FileText, badgeColor: 'bg-indigo-50 text-indigo-800' },
                      { title: 'UG Degree Certificate', docs: selectedStudent.ug_degree_certificates, icon: GraduationCap, badgeColor: 'bg-teal-50 text-teal-800' },
                      { title: 'PG Degree Certificate', docs: selectedStudent.pg_degree_certificates, icon: GraduationCap, badgeColor: 'bg-purple-50 text-purple-800' },
                      { title: 'Marriage Certificate', docs: selectedStudent.marriage_certificates, icon: FileText, badgeColor: 'bg-rose-50 text-rose-800' },
                    ].map((group, gIdx) => {
                      const hasFiles = Array.isArray(group.docs) && group.docs.length > 0
                      const IconComp = group.icon

                      return (
                        <div
                          key={gIdx}
                          className={`p-3 rounded-xl border ${hasFiles ? 'border-slate-300 bg-white' : 'border-slate-200 bg-slate-50/70'} space-y-2`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                              <IconComp className="w-3.5 h-3.5 text-rose-600" />
                              {group.title}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${hasFiles ? group.badgeColor : 'bg-slate-200 text-slate-500'}`}>
                              {hasFiles ? `${group.docs.length} Attached` : 'Not Attached'}
                            </span>
                          </div>

                          {/* List of files in this group */}
                          {hasFiles ? (
                            <div className="space-y-1.5 pt-1">
                              {group.docs.map((doc, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="flex items-center justify-between gap-2 p-2 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                                >
                                  <div className="min-w-0 flex-1 flex items-center gap-2">
                                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <div className="min-w-0">
                                      <p className="text-xs font-semibold text-slate-900 truncate">
                                        {doc.name || `${group.title} #${dIdx + 1}`}
                                      </p>
                                      <p className="text-[10px] text-slate-400">
                                        {doc.size ? `${(doc.size / 1024).toFixed(1)} KB` : 'Verified Document'}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-1.5 shrink-0">
                                    {/* SEE DOCUMENT BUTTON */}
                                    <button
                                      type="button"
                                      onClick={() => setViewingDoc({
                                        title: doc.name || group.title,
                                        url: doc.url,
                                        type: doc.type || 'document',
                                        studentName: selectedStudent.full_name,
                                        formNo: selectedStudent.form_no,
                                        filename: getDocumentFilename(selectedStudent, doc, group.title),
                                      })}
                                      className="px-2.5 py-1 bg-white hover:bg-rose-50 text-rose-700 hover:text-rose-800 border border-slate-200 hover:border-rose-200 rounded-md font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                                      title="See Document in Full Resolution"
                                    >
                                      <Eye className="w-3 h-3 text-rose-600" />
                                      <span>See</span>
                                    </button>

                                    {/* DOWNLOAD DOCUMENT BUTTON */}
                                    <button
                                      type="button"
                                      onClick={() => downloadFile(doc.url, getDocumentFilename(selectedStudent, doc, group.title))}
                                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                                      title="Download Document"
                                    >
                                      <Download className="w-3 h-3" />
                                      <span>Download</span>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-[11px] text-slate-400 italic">No document file submitted.</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0 flex-wrap">
                <span className="text-xs text-slate-500">
                  Data source: <strong className="uppercase">{selectedStudent.source || 'Database'}</strong>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(selectedStudent)}
                    className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    <span>Edit Profile</span>
                  </button>
                  <button
                    onClick={() => setDeletingStudent(selectedStudent)}
                    className="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Record</span>
                  </button>
                  <button
                    onClick={() => printStudentApplication(selectedStudent)}
                    className="px-3.5 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    title="Print Official Admission Form"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Form</span>
                  </button>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* DOCUMENT VIEWER LIGHTBOX MODAL (SEE & DOWNLOAD DOCUMENT) */}
        {/* ============================================================ */}
        {viewingDoc && (
          <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-hidden print:hidden">
            <div className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-slate-700 overflow-hidden animate-in fade-in zoom-in-95">

              {/* Viewer Header */}
              <div className="bg-slate-950 px-5 py-3.5 text-white flex items-center justify-between border-b border-slate-800 shrink-0 gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white truncate flex items-center gap-2">
                    <FileText className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{viewingDoc.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Candidate: {viewingDoc.studentName} ({viewingDoc.formNo})
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom controls */}
                  <button
                    type="button"
                    onClick={() => setDocZoom((prev) => Math.max(0.5, prev - 0.25))}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 w-12 text-center">
                    {Math.round(docZoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setDocZoom((prev) => Math.min(2.5, prev + 0.25))}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDocZoom(1)}
                    className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-semibold cursor-pointer"
                  >
                    Reset
                  </button>

                  {/* Direct Download Button */}
                  <button
                    type="button"
                    onClick={() => downloadFile(viewingDoc.url, viewingDoc.filename || `${viewingDoc.formNo}_${viewingDoc.title}`)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm ml-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>

                  {/* Close Viewer */}
                  <button
                    type="button"
                    onClick={() => {
                      setViewingDoc(null)
                      setDocZoom(1)
                    }}
                    className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer ml-1 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Viewer Content Area */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/70 min-h-[350px]">
                {viewingDoc.url ? (
                  <div
                    style={{ transform: `scale(${docZoom})`, transformOrigin: 'center center' }}
                    className="transition-transform duration-150 max-w-full flex items-center justify-center"
                  >
                    <img
                      src={viewingDoc.url}
                      alt={viewingDoc.title}
                      className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-slate-700 bg-white"
                    />
                  </div>
                ) : (
                  <p className="text-slate-400 text-sm">No preview available for this document.</p>
                )}
              </div>

              {/* Viewer Footer */}
              <div className="bg-slate-950 px-5 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Click &ldquo;Download&rdquo; to save an original high-resolution copy to your computer.</span>
                <button
                  type="button"
                  onClick={() => {
                    setViewingDoc(null)
                    setDocZoom(1)
                  }}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* EDIT STUDENT MODAL */}
        {/* ============================================================ */}
        {editingStudent && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:hidden">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden animate-in fade-in zoom-in-95">

              {/* Edit Header */}
              <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2.5">
                  <Edit className="w-5 h-5 text-indigo-400" />
                  <div>
                    <h3 className="text-base font-bold">Edit Student Application</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Form No: {editFormData.form_no} | ID: {editFormData.id}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingStudent(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Edit Form Body */}
              <form onSubmit={handleSaveEdit} className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs text-slate-700">

                {/* Course & Timing */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
                    Course &amp; Batch Assignment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Course Name *</label>
                      <select
                        value={editFormData.course_name}
                        onChange={(e) => {
                          const val = e.target.value
                          const matched = COURSES.find((c) => c.id === val)
                          setEditFormData((prev) => ({
                            ...prev,
                            course_name: val,
                            course_duration: matched?.duration || prev.course_duration,
                          }))
                        }}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium text-slate-900"
                        required
                      >
                        <option value="fashion designer">Fashion Designer (FD)</option>
                        <option value="boutique manager">Boutique Manager (BM)</option>
                        <option value="purchase coordinator electronics">Purchase Coordinator - Electronics (EPC)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Batch Time Slot *</label>
                      <select
                        value={editFormData.time_slot}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, time_slot: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium text-slate-900"
                        required
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Form No (Manual) *</label>
                      <input
                        type="text"
                        value={editFormData.form_no}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, form_no: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono font-bold text-rose-700"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Registration No (Manual) *</label>
                      <input
                        type="text"
                        value={editFormData.registration_no}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, registration_no: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono font-bold text-indigo-700"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
                    Personal Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={editFormData.full_name}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, full_name: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-bold text-slate-900 uppercase"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Gender *</label>
                      <select
                        value={editFormData.gender}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, gender: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Date of Birth (DD/MM/YYYY) *</label>
                      <input
                        type="text"
                        value={editFormData.date_of_birth}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, date_of_birth: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono"
                        placeholder="DD/MM/YYYY"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Calculated Age (Years)</label>
                      <input
                        type="number"
                        value={editFormData.calculated_age}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, calculated_age: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category *</label>
                      <select
                        value={editFormData.category}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, category: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium"
                      >
                        <option value="GEN">GEN</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Father&#39;s Name</label>
                      <input
                        type="text"
                        value={editFormData.fathers_name}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, fathers_name: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mother&#39;s Name</label>
                      <input
                        type="text"
                        value={editFormData.mothers_name}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, mothers_name: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Father&#39;s Occupation</label>
                      <input
                        type="text"
                        value={editFormData.fathers_occupation}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, fathers_occupation: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact & Residential Address */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
                    Contact &amp; Address
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={editFormData.contact_number}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, contact_number: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono font-bold text-emerald-700"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Father&#39;s Phone</label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={editFormData.father_number}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, father_number: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email ID *</label>
                      <input
                        type="email"
                        value={editFormData.email}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Aadhaar Number *</label>
                      <input
                        type="text"
                        maxLength={12}
                        value={editFormData.aadhaar_no}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, aadhaar_no: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Area / Village *</label>
                      <input
                        type="text"
                        value={editFormData.area_village}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, area_village: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">City / District *</label>
                      <input
                        type="text"
                        value={editFormData.city}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, city: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">State *</label>
                      <input
                        type="text"
                        value={editFormData.state}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, state: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Pincode *</label>
                      <input
                        type="text"
                        maxLength={6}
                        value={editFormData.pincode}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, pincode: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Flat / Society</label>
                      <input
                        type="text"
                        value={editFormData.flat_society}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, flat_society: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
                    Education
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Education Level *</label>
                      <input
                        type="text"
                        list="edu-level-options"
                        value={editFormData.education_level}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, education_level: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-medium"
                        placeholder="Select or enter qualification"
                        required
                      />
                      <datalist id="edu-level-options">
                        <option value="Below 10th pass" />
                        <option value="10th pass" />
                        <option value="12th pass" />
                        <option value="Diploma after 10th" />
                        <option value="Diploma after 12th" />
                        <option value="UG" />
                        <option value="PG" />
                      </datalist>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Passing Year</label>
                      <input
                        type="text"
                        value={editFormData.year_of_passing}
                        onChange={(e) => setEditFormData((prev) => ({ ...prev, year_of_passing: e.target.value }))}
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setEditingStudent(null)}
                    className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 font-bold text-xs cursor-pointer text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingEdit}
                    className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm disabled:opacity-60"
                  >
                    {isSavingEdit ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Saving Changes...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-3.5 h-3.5" />
                        <span>Save &amp; Update Record</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* DELETE CONFIRMATION MODAL */}
        {/* ============================================================ */}
        {deletingStudent && (
          <div className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 print:hidden">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-red-200 space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Confirm Deletion</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Are you sure you want to permanently delete the admission record for:
                </p>
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl font-medium text-xs text-red-900 space-y-1">
                  <p className="font-bold text-sm">{deletingStudent.full_name}</p>
                  <p className="font-mono">Form No: {deletingStudent.form_no} | Reg: {deletingStudent.registration_no}</p>
                  <p className="capitalize">Course: {deletingStudent.course_name}</p>
                </div>
                <p className="text-[11px] text-red-700 font-semibold">
                  ⚠️ This action will remove the record from both the Supabase database and local storage.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeletingStudent(null)}
                  disabled={isDeleting}
                  className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  disabled={isDeleting}
                  className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm disabled:opacity-60"
                >
                  {isDeleting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Yes, Permanently Delete</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
      )}

      {/* ============================================================ */}
      {/* OFFICIAL PRINTABLE ADMISSION FORM (VISIBLE ONLY IN PRINT) */}
      {/* ============================================================ */}
      {studentToPrint && (
        <div className="hidden print:block print:w-full print:m-0 print:p-0">
          <PrintableAdmissionForm student={studentToPrint} />
        </div>
      )}
    </div>
  )
}
