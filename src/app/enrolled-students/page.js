'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  List
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
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    headerGradient: 'from-rose-600 via-rose-700 to-orange-600',
    tagColor: 'from-rose-500 to-orange-500',
  },
  {
    id: 'boutique manager',
    shortName: 'Boutique Manager',
    name: 'Boutique Manager (બુટિક મેનેજર)',
    prefix: 'BM',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    headerGradient: 'from-amber-600 via-amber-700 to-orange-600',
    tagColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'purchase coordinator electronics',
    shortName: 'Purchase Coordinator',
    name: 'Purchase Coordinator - Electronics (પરચેઝ કો-ઓર્ડિનેટર)',
    prefix: 'EPC',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    headerGradient: 'from-blue-600 via-indigo-700 to-cyan-700',
    tagColor: 'from-blue-600 to-cyan-600',
  },
]

export default function EnrolledStudentsPage() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCourseTab, setSelectedCourseTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [timeSlotFilter, setTimeSlotFilter] = useState('all')
  const [genderFilter, setGenderFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'table'
  const [selectedStudent, setSelectedStudent] = useState(null)

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

  useEffect(() => {
    fetchStudents()
  }, [])

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
      if (timeSlotFilter !== 'all' && s.time_slot !== timeSlotFilter) {
        return false
      }

      // 4. Gender Filter
      if (genderFilter !== 'all' && (s.gender || '').toLowerCase() !== genderFilter.toLowerCase()) {
        return false
      }

      // 5. Category Filter
      if (categoryFilter !== 'all' && s.category !== categoryFilter) {
        return false
      }

      return true
    })
  }, [students, selectedCourseTab, searchTerm, timeSlotFilter, genderFilter, categoryFilter])

  // Helper for Exporting to CSV
  const exportToCSV = () => {
    if (!filteredStudents.length) return alert('No students to export!')

    const headers = [
      'Form No',
      'Registration No',
      'Course Name',
      'Full Name',
      'Gender',
      'Age',
      'DOB',
      'Category',
      'Contact Phone',
      'Father Phone',
      'Email',
      'Time Slot',
      'Education Level',
      'Passing Year',
      'Aadhaar No',
      'Address',
      'City',
      'State',
      'Pincode',
      'Application Date',
    ]

    const rows = filteredStudents.map((s) => [
      `"${s.form_no || ''}"`,
      `"${s.registration_no || ''}"`,
      `"${s.course_name || ''}"`,
      `"${s.full_name || ''}"`,
      `"${s.gender || ''}"`,
      `"${s.calculated_age || ''}"`,
      `"${s.date_of_birth || ''}"`,
      `"${s.category || ''}"`,
      `"${s.contact_number || ''}"`,
      `"${s.father_number || ''}"`,
      `"${s.email || ''}"`,
      `"${s.time_slot || ''}"`,
      `"${s.education_level || ''}"`,
      `"${s.year_of_passing || ''}"`,
      `"${s.aadhaar_no || ''}"`,
      `"${(s.flat_society || '')} ${(s.street_road || '')} ${(s.area_village || '')}"`.trim(),
      `"${s.city || ''}"`,
      `"${s.state || ''}"`,
      `"${s.pincode || ''}"`,
      `"${s.application_date || ''}"`,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `enrolled_students_${selectedCourseTab}_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Print Student Form
  const printStudentApplication = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ============================================================ */}
        {/* TOP BAR / NAVIGATION */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs print:hidden">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-rose-700 hover:text-rose-900 flex items-center gap-1"
            >
              ← Home
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/admission-form"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
            >
              Admission Form
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchStudents}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-bold text-xs shadow-2xs cursor-pointer active:scale-95 transition-all"
              title="Refresh student list"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-rose-600' : 'text-slate-500'}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={!filteredStudents.length}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs shadow-2xs cursor-pointer transition-all"
              title="Export filtered students as CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Export CSV</span>
            </button>

            <Link
              href="/admission-form"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs shadow-xs hover:shadow transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>+ New Admission</span>
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PAGE HEADER */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-darkred via-rose-700 to-orange-600 text-white p-5 sm:p-7 rounded-xl shadow-md relative overflow-hidden print:hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-slate-950 px-3 py-0.5 rounded-sm text-xs font-black uppercase tracking-wider shadow-xs">
              <Users className="w-3.5 h-3.5 fill-current" />
              <span>Enrolled Students Directory • વિદ્યાર્થીઓની યાદી</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
              Course-wise Enrolled Students Records
            </h1>
            <p className="text-rose-100 text-xs sm:text-sm font-medium max-w-3xl">
              માનવ કલ્યાણ ટ્રસ્ટ દ્વારા સંચાલિત સરકારી માન્ય વ્યાવસાયિક કોર્સમાં ઓનલાઇન પ્રવેશ મેળવેલ તમામ વિદ્યાર્થીઓની વિગતવાર યાદી.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* KPI STATS CARDS */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 print:hidden">
          {/* Card 1: All Students */}
          <div
            onClick={() => setSelectedCourseTab('all')}
            className={`p-4 rounded-xl border bg-white shadow-2xs hover:shadow-sm cursor-pointer transition-all ${
              selectedCourseTab === 'all' ? 'border-slate-800 ring-2 ring-slate-800/20' : 'border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Total Enrolled</span>
              <span className="p-2 rounded-lg bg-slate-100 text-slate-700">
                <Users className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{courseCounts.all}</p>
            <span className="text-[11px] text-slate-500 font-medium">Across all courses</span>
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
                <option value="all">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="GEN">General (GEN)</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>

              {/* View Switcher: Grid vs Table */}
              <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Grid / Card View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                    viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Table List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Info Strip */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredStudents.length}</strong> of{' '}
              <strong className="text-slate-900 font-bold">{students.length}</strong> enrolled students
            </span>
            {(searchTerm || timeSlotFilter !== 'all' || genderFilter !== 'all' || categoryFilter !== 'all' || selectedCourseTab !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setTimeSlotFilter('all')
                  setGenderFilter('all')
                  setCategoryFilter('all')
                  setSelectedCourseTab('all')
                }}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* LOADING & ERROR STATES */}
        {/* ============================================================ */}
        {loading && (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
            <RefreshCw className="w-8 h-8 text-rose-600 animate-spin mx-auto" />
            <p className="text-sm font-bold text-slate-700">Loading enrolled students records...</p>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center space-y-2">
            <p className="text-sm font-bold text-red-800">Error loading data: {error}</p>
            <button
              onClick={fetchStudents}
              className="px-4 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-bold"
            >
              Retry
            </button>
          </div>
        )}

        {/* ============================================================ */}
        {/* EMPTY STATE */}
        {/* ============================================================ */}
        {!loading && !error && filteredStudents.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">No Enrolled Students Found</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                {searchTerm || selectedCourseTab !== 'all'
                  ? 'No students match your active filters or search terms. Try clearing filters.'
                  : 'No student admissions have been registered yet. Fill out the admission form to register.'}
              </p>
            </div>
            <Link
              href="/admission-form"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Fill New Admission Form</span>
            </Link>
          </div>
        )}

        {/* ============================================================ */}
        {/* GRID VIEW (CARDS) */}
        {/* ============================================================ */}
        {!loading && !error && viewMode === 'grid' && filteredStudents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStudents.map((student, idx) => {
              const isFashion = (student.course_name || '').toLowerCase().includes('fashion')
              const isBoutique = (student.course_name || '').toLowerCase().includes('boutique')
              const isElectronics = !isFashion && !isBoutique

              const cardBorder = isFashion
                ? 'border-rose-200 hover:border-rose-400 hover:ring-2 hover:ring-rose-200/50'
                : isBoutique
                ? 'border-amber-200 hover:border-amber-400 hover:ring-2 hover:ring-amber-200/50'
                : 'border-blue-200 hover:border-blue-400 hover:ring-2 hover:ring-blue-200/50'

              const tagBadge = isFashion
                ? 'bg-rose-50 text-rose-700 border-rose-200'
                : isBoutique
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-blue-50 text-blue-700 border-blue-200'

              return (
                <div
                  key={student.id || student.form_no || idx}
                  className={`bg-white rounded-xl border ${cardBorder} p-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group`}
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
                      {/* Photo slot */}
                      <div className="w-16 h-20 rounded-md overflow-hidden bg-slate-100 border border-slate-200 shrink-0 relative flex items-center justify-center">
                        {student.passport_photo_url ? (
                          <img
                            src={student.passport_photo_url}
                            alt={student.full_name}
                            className="w-full h-full object-cover"
                          />
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

                    {/* Education level tag */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                      <span className="truncate">Edu: <strong className="text-slate-700">{student.education_level || '10th/12th'}</strong></span>
                      <span className="shrink-0 bg-emerald-100/80 text-emerald-800 font-bold px-2 py-0.5 rounded-sm text-[10px]">
                        ✓ Submitted
                      </span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="text-xs font-bold text-slate-700 hover:text-rose-700 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Printer className="w-3 h-3" />
                      <span>Print Form</span>
                    </button>
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
                    <th className="p-3">Education</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((s, idx) => (
                    <tr key={s.id || s.form_no || idx} className="hover:bg-slate-50 transition-colors">
                      {/* Photo */}
                      <td className="p-3">
                        <div className="w-10 h-12 rounded-md bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center">
                          {s.passport_photo_url ? (
                            <img src={s.passport_photo_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </td>

                      {/* Form & Reg */}
                      <td className="p-3 font-mono">
                        <span className="font-bold text-rose-700 block">{s.form_no}</span>
                        <span className="text-[11px] text-slate-500">{s.registration_no}</span>
                      </td>

                      {/* Student Name */}
                      <td className="p-3">
                        <strong className="text-slate-900 block font-bold">{s.full_name}</strong>
                        <span className="text-[11px] text-slate-500">{s.gender}, Age: {s.calculated_age}</span>
                      </td>

                      {/* Course */}
                      <td className="p-3">
                        <span className="font-bold text-slate-800 capitalize block">{s.course_name}</span>
                        <span className="text-[10px] text-slate-500">{s.course_duration}</span>
                      </td>

                      {/* Time */}
                      <td className="p-3 text-slate-600 font-medium">
                        {s.time_slot}
                      </td>

                      {/* Contact */}
                      <td className="p-3">
                        <span className="font-mono font-bold text-slate-800 block">{s.contact_number}</span>
                        <span className="text-[11px] text-slate-500 block truncate max-w-[140px]">{s.email}</span>
                      </td>

                      {/* City */}
                      <td className="p-3 text-slate-600">
                        <span className="block font-medium">{s.city}</span>
                        <span className="text-[10px] text-slate-400">{s.area_village} ({s.pincode})</span>
                      </td>

                      {/* Education */}
                      <td className="p-3 text-slate-600">
                        <span className="block font-medium">{s.education_level}</span>
                        <span className="text-[10px] text-slate-400">Pass: {s.year_of_passing}</span>
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right">
                        <button
                          onClick={() => setSelectedStudent(s)}
                          className="bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 px-3 py-1.5 rounded-lg font-bold text-xs cursor-pointer transition-colors"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STUDENT FULL DETAILS MODAL */}
        {/* ============================================================ */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
                    onClick={printStudentApplication}
                    className="bg-white/20 hover:bg-white text-white hover:text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
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

                {/* Top Profile Summary Card */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-24 h-32 rounded-lg bg-white overflow-hidden border-2 border-slate-300 shadow-sm shrink-0 flex items-center justify-center">
                    {selectedStudent.passport_photo_url ? (
                      <img
                        src={selectedStudent.passport_photo_url}
                        alt={selectedStudent.full_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 text-slate-300" />
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

                {/* Uploaded Documents */}
                <div className="border border-slate-200 rounded-xl p-4 space-y-3">
                  <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <FileText className="w-3.5 h-3.5 text-rose-600" /> 4. Uploaded Documents
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {/* Aadhaar */}
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">Aadhaar Card</span>
                      <span className="font-bold text-emerald-700 text-xs">
                        {Array.isArray(selectedStudent.aadhaar_photos) && selectedStudent.aadhaar_photos.length > 0
                          ? `✓ ${selectedStudent.aadhaar_photos.length} File(s) Attached`
                          : 'Pending'}
                      </span>
                    </div>

                    {/* School Leaving */}
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">School LC</span>
                      <span className="font-bold text-emerald-700 text-xs">
                        {Array.isArray(selectedStudent.school_leaving_certificates) && selectedStudent.school_leaving_certificates.length > 0
                          ? `✓ ${selectedStudent.school_leaving_certificates.length} File(s) Attached`
                          : 'Pending'}
                      </span>
                    </div>

                    {/* 10th/12th Marksheet */}
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block">Marksheets</span>
                      <span className="font-bold text-emerald-700 text-xs">
                        {Array.isArray(selectedStudent.marksheets_10th) && selectedStudent.marksheets_10th.length > 0
                          ? `✓ 10th Attached`
                          : Array.isArray(selectedStudent.marksheets_12th) && selectedStudent.marksheets_12th.length > 0
                          ? `✓ 12th Attached`
                          : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
                <span className="text-xs text-slate-500">
                  Data source: <strong className="uppercase">{selectedStudent.source || 'Database'}</strong>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={printStudentApplication}
                    className="px-4 py-2 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Student Form</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}
