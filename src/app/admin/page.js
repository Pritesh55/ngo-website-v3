'use client'
import React, { useState, useEffect } from 'react'
import { useCMS } from '@/context/CMSContext'
import { 
  Save, 
  RotateCcw, 
  Upload, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  ChevronRight,
  Sparkles,
  LayoutGrid,
  FileText,
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Handshake,
  Heart,
  Mail,
  Milestone
} from 'lucide-react'

export default function AdminPage() {
  const { allContent, updateContent } = useCMS()
  
  // Step 06.01.01: Declare local states to hold copy of content, active tab index and save banners
  const [localContent, setLocalContent] = useState(null)
  const [activeTab, setActiveTab] = useState('branding')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [uploadingField, setUploadingField] = useState(null)

  // Step 06.01.02: Initialize localContent once CMSContext loads initial database content.json
  useEffect(() => {
    if (allContent && !localContent) {
      setLocalContent(JSON.parse(JSON.stringify(allContent)))
    }
  }, [allContent, localContent])

  if (!localContent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        <p className="mt-4 text-slate-600 font-medium">Loading CMS Content...</p>
      </div>
    )
  }

  const showStatus = (type, message) => {
    setStatus({ type, message })
    setTimeout(() => setStatus({ type: '', message: '' }), 5000)
  }

  // Step 06.01.03: Implement handleFieldChange to update nested properties in local state dynamically
  const handleFieldChange = (path, value) => {
    const newContent = { ...localContent }
    const keys = path.split('.')
    let current = newContent
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]]
    }
    current[keys[keys.length - 1]] = value
    setLocalContent(newContent)
  }

  // Step 06.01.04: Implement handleSave to POST updated localContent tree to /api/content endpoint
  const handleSave = async () => {
    setStatus({ type: 'info', message: 'Saving content...' })
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(localContent)
      })
      if (res.ok) {
        // Step 06.01.05: Sync state with Context once response returns success
        updateContent(localContent)
        showStatus('success', 'All website content saved and published successfully!')
      } else {
        throw new Error('Server error')
      }
    } catch (err) {
      console.error(err)
      showStatus('error', 'Failed to save changes. Please try again.')
    }
  }

  // Step 06.01.06: Implement handleDiscard to reset local content state back to initial database state
  const handleDiscard = () => {
    if (window.confirm('Are you sure you want to discard all unsaved edits?')) {
      setLocalContent(JSON.parse(JSON.stringify(allContent)))
      showStatus('info', 'Changes discarded. Loaded last saved state.')
    }
  }

  // Step 06.01.07: Implement handleFileUpload to parse, upload via API, and store image path
  const handleFileUpload = async (e, path, callback) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingField(path)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.success && data.url) {
        callback(data.url)
        showStatus('success', 'Image uploaded successfully!')
      } else {
        showStatus('error', data.error || 'Failed to upload image')
      }
    } catch (err) {
      console.error(err)
      showStatus('error', 'Error uploading file')
    } finally {
      setUploadingField(null)
    }
  }

  // Step 06.01.08: Define list updates utilities (update, add, remove items)
  const updateListItem = (listName, index, field, value) => {
    const newContent = { ...localContent }
    newContent[listName][index][field] = value
    setLocalContent(newContent)
  }

  const removeListItem = (listName, index) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const newContent = { ...localContent }
      newContent[listName].splice(index, 1)
      setLocalContent(newContent)
    }
  }

  const addListItem = (listName, template) => {
    const newContent = { ...localContent }
    newContent[listName].push(template)
    setLocalContent(newContent)
  }

  // Step 06.01.09: Define Rising Milestones specific item update helper functions
  const updateMilestoneItem = (sectionIndex, field, itemIndex, subfield, value) => {
    const newContent = { ...localContent }
    const section = newContent.risingMilestonesSections[sectionIndex]
    if (subfield) {
      section[field][itemIndex][subfield] = value
    } else {
      section[field][itemIndex] = value
    }
    setLocalContent(newContent)
  }

  const removeMilestoneItem = (sectionIndex, field, itemIndex) => {
    const newContent = { ...localContent }
    newContent.risingMilestonesSections[sectionIndex][field].splice(itemIndex, 1)
    setLocalContent(newContent)
  }

  const addMilestoneItem = (sectionIndex, field, template) => {
    const newContent = { ...localContent }
    newContent.risingMilestonesSections[sectionIndex][field].push(template)
    setLocalContent(newContent)
  }

  const tabs = [
    { id: 'branding', label: 'Branding & Logo', icon: Sparkles },
    { id: 'hero', label: 'Hero Section', icon: LayoutGrid },
    { id: 'projects', label: 'Welfare Projects', icon: Briefcase },
    { id: 'courses', label: 'Skill Courses', icon: GraduationCap },
    { id: 'team', label: 'Our Team', icon: Users },
    { id: 'awards', label: 'Awards & Legacy', icon: Award },
    { id: 'partners', label: 'Partners', icon: Handshake },
    { id: 'cta', label: 'CTA & Get Involved', icon: Heart },
    { id: 'contact', label: 'Contact Details', icon: Mail },
    { id: 'milestones', label: 'Rising Milestones', icon: Milestone }
  ]

  // Step 06.01.10: Render sidebar navigational layout alongside tabs panels content
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="bg-orange-600 text-white p-1 rounded-md text-xs uppercase tracking-widest font-extrabold">CMS</span>
            NGO Website Control Panel
          </h1>
          <p className="text-xs text-slate-500 mt-1">Easily update all copy, details, images and team sections in real-time.</p>
        </div>
        
        <div className="flex items-center gap-3">
          {status.message && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-305 ${
              status.type === 'success' ? 'bg-emerald-550/10 text-emerald-700 border border-emerald-205' :
              status.type === 'error' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
              'bg-blue-50 text-blue-700 border border-blue-200'
            }`}>
              {status.type === 'success' ? <CheckCircle className="w-4 h-4 animate-bounce" /> : <AlertCircle className="w-4 h-4" />}
              {status.message}
            </div>
          )}

          <button 
            onClick={handleDiscard}
            className="flex items-center gap-2 px-4 py-2 border border-slate-350 text-slate-700 rounded-xl hover:bg-slate-100 transition-all font-bold text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Discard
          </button>
          
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 hover:shadow-lg transition-all font-bold text-sm"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        <aside className="w-full md:w-72 bg-white border-r border-slate-200 p-4 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-left ${
                  activeTab === tab.id
                    ? 'bg-orange-50 text-orange-700 border border-orange-100'
                    : 'text-slate-650 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-orange-600' : 'text-slate-500'}`} />
                {tab.label}
                {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto text-orange-600" />}
              </button>
            )
          })}
        </aside>

        <main className="flex-1 p-6 md:p-8 max-w-5xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
            
            {/* Step 06.01.11: Render branding inputs panel */}
            {activeTab === 'branding' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Logo & Website Header Brand</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Logo Title</label>
                    <input 
                      type="text" 
                      value={localContent.logo.title} 
                      onChange={(e) => handleFieldChange('logo.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Logo Subtitle</label>
                    <input 
                      type="text" 
                      value={localContent.logo.subtitle} 
                      onChange={(e) => handleFieldChange('logo.subtitle', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.12: Render hero details input fields panel */}
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Hero Section Banner</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Brand/Tagline Badge</label>
                    <input 
                      type="text" 
                      value={localContent.hero.brand} 
                      onChange={(e) => handleFieldChange('hero.brand', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Hero Headline</label>
                    <input 
                      type="text" 
                      value={localContent.hero.title} 
                      onChange={(e) => handleFieldChange('hero.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Hero Description Paragraph</label>
                    <textarea 
                      rows="4"
                      value={localContent.hero.subtitle} 
                      onChange={(e) => handleFieldChange('hero.subtitle', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm leading-relaxed"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Stats Banner Cards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {localContent.hero.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 border border-slate-200 rounded-2xl bg-slate-50 flex gap-4">
                        <div className="w-1/3">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Number/Val</label>
                          <input 
                            type="text"
                            value={stat.number}
                            onChange={(e) => {
                              const statsCopy = [...localContent.hero.stats]
                              statsCopy[idx].number = e.target.value
                              handleFieldChange('hero.stats', statsCopy)
                            }}
                            className="w-full px-2 py-1 text-sm border border-slate-350 rounded-lg"
                          />
                        </div>
                        <div className="w-2/3">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Card Label</label>
                          <input 
                            type="text"
                            value={stat.label}
                            onChange={(e) => {
                              const statsCopy = [...localContent.hero.stats]
                              statsCopy[idx].label = e.target.value
                              handleFieldChange('hero.stats', statsCopy)
                            }}
                            className="w-full px-2 py-1 text-sm border border-slate-350 rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.13: Render projects section and lists editors */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Welfare Projects Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Sub-title</label>
                    <input 
                      type="text" 
                      value={localContent.projectsSection.subTitle} 
                      onChange={(e) => handleFieldChange('projectsSection.subTitle', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                    <input 
                      type="text" 
                      value={localContent.projectsSection.title} 
                      onChange={(e) => handleFieldChange('projectsSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Section Description</label>
                  <textarea 
                    rows="2"
                    value={localContent.projectsSection.description} 
                    onChange={(e) => handleFieldChange('projectsSection.description', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                  />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Manage Projects list</h3>
                    <button 
                      onClick={() => addListItem('projects', {
                        id: String(localContent.projects.length + 1).padStart(2, '0'),
                        slug: 'new-project',
                        name: 'New Project Title',
                        description: 'Short project description summary.',
                        description2: 'Supported details.',
                        supportType: 'FCRA/GSDM Supported',
                        images: [],
                        theme: 'from-blue-50/80 to-indigo-50/40',
                        border: 'border-blue-200',
                        tagClass: 'border-blue-200 bg-blue-100/60 text-blue-700',
                        btnClass: 'from-blue-500 to-indigo-600 text-white',
                        details: {}
                      })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Project
                    </button>
                  </div>

                  <div className="space-y-6">
                    {localContent.projects.map((project, idx) => (
                      <div key={project.id || idx} className="p-5 border border-slate-200 rounded-3xl bg-slate-50/60 relative">
                        <button 
                          onClick={() => removeListItem('projects', idx)}
                          className="absolute top-4 right-4 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Project Name</label>
                            <input 
                              type="text"
                              value={project.name}
                              onChange={(e) => updateListItem('projects', idx, 'name', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Support Tag</label>
                            <input 
                              type="text"
                              value={project.supportType}
                              onChange={(e) => updateListItem('projects', idx, 'supportType', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                          <textarea 
                            rows="2"
                            value={project.description}
                            onChange={(e) => updateListItem('projects', idx, 'description', e.target.value)}
                            className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-2">Project Images & Photo Slides</label>
                          <div className="flex flex-wrap gap-3 mb-2">
                            {project.images.map((img, imgIdx) => (
                              <div key={imgIdx} className="relative w-20 h-16 border rounded-lg overflow-hidden group bg-white">
                                <img src={img} alt="" className="object-cover w-full h-full" />
                                <button 
                                  onClick={() => {
                                    const copy = [...project.images]
                                    copy.splice(imgIdx, 1)
                                    updateListItem('projects', idx, 'images', copy)
                                  }}
                                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                            <label className="w-20 h-16 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-white text-slate-400">
                              {uploadingField === `projects.${idx}.images` ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
                              ) : (
                                <>
                                  <Upload className="w-4 h-4" />
                                  <span className="text-[9px] font-bold mt-1">Upload</span>
                                </>
                              )}
                              <input 
                                type="file" 
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileUpload(e, `projects.${idx}.images`, (url) => {
                                  updateListItem('projects', idx, 'images', [...project.images, url])
                                })}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.14: Render courses listings editors */}
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Skill Courses Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Sub-title</label>
                    <input 
                      type="text" 
                      value={localContent.coursesSection.subTitle} 
                      onChange={(e) => handleFieldChange('coursesSection.subTitle', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                    <input 
                      type="text" 
                      value={localContent.coursesSection.title} 
                      onChange={(e) => handleFieldChange('coursesSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Section Description</label>
                  <textarea 
                    rows="2"
                    value={localContent.coursesSection.description} 
                    onChange={(e) => handleFieldChange('coursesSection.description', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                  />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Manage Courses</h3>
                    <button 
                      onClick={() => addListItem('courses', {
                        name: 'New Course Name',
                        category: 'fee-based',
                        duration: '3 Months',
                        fee: 'Rs. 3000',
                        description: 'Vocational training course description.',
                        image: '/images/courses/img8.jpg',
                        link: '#',
                        theme: 'from-orange-50/80 to-red-50/40',
                        border: 'border-orange-200',
                        tagClass: 'border-orange-200 bg-orange-100/60 text-orange-700',
                        btnClass: 'from-orange-500 to-darkred text-white'
                      })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Course
                    </button>
                  </div>

                  <div className="space-y-6">
                    {localContent.courses.map((course, idx) => (
                      <div key={idx} className="p-5 border border-slate-200 rounded-3xl bg-slate-50/60 relative">
                        <button 
                          onClick={() => removeListItem('courses', idx)}
                          className="absolute top-4 right-4 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Course Name</label>
                            <input 
                              type="text"
                              value={course.name}
                              onChange={(e) => updateListItem('courses', idx, 'name', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Duration</label>
                            <input 
                              type="text"
                              value={course.duration}
                              onChange={(e) => updateListItem('courses', idx, 'duration', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Fees</label>
                            <input 
                              type="text"
                              value={course.fee}
                              onChange={(e) => updateListItem('courses', idx, 'fee', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Category (fee-based or govt-schemes)</label>
                            <select
                              value={course.category}
                              onChange={(e) => updateListItem('courses', idx, 'category', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 bg-white rounded-lg text-sm"
                            >
                              <option value="fee-based">Fee Based (Paid)</option>
                              <option value="govt-schemes">Govt Schemes (Free)</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Course Description</label>
                          <textarea 
                            rows="2"
                            value={course.description}
                            onChange={(e) => updateListItem('courses', idx, 'description', e.target.value)}
                            className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                          />
                        </div>

                        <div className="flex gap-4 items-center">
                          <div className="w-20 h-16 border rounded-lg bg-white overflow-hidden flex-shrink-0">
                            {course.image ? (
                              <img src={course.image} alt="" className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                                <ImageIcon className="w-5 h-5" />
                              </div>
                            )}
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Course Banner Image</label>
                            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-350 rounded-lg text-xs font-bold cursor-pointer hover:bg-slate-50 bg-white text-slate-700">
                              {uploadingField === `courses.${idx}.image` ? (
                                <>
                                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-orange-600"></div>
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <Upload className="w-3.5 h-3.5" />
                                  Choose Image
                                </>
                              )}
                              <input 
                                type="file" 
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileUpload(e, `courses.${idx}.image`, (url) => {
                                  updateListItem('courses', idx, 'image', url)
                                })}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.15: Render team member list editor panel */}
            {activeTab === 'team' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Our Team Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Sub-title</label>
                    <input 
                      type="text" 
                      value={localContent.teamSection.subTitle} 
                      onChange={(e) => handleFieldChange('teamSection.subTitle', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                    <input 
                      type="text" 
                      value={localContent.teamSection.title} 
                      onChange={(e) => handleFieldChange('teamSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Section Description</label>
                  <textarea 
                    rows="2"
                    value={localContent.teamSection.description} 
                    onChange={(e) => handleFieldChange('teamSection.description', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                  />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Manage Members</h3>
                    <button 
                      onClick={() => addListItem('team', {
                        name: 'Member Name',
                        role: 'Member Role Title',
                        image: '/images/Team/poonamben-solanki.jpeg',
                        theme: 'from-blue-50/80 to-indigo-50/40',
                        border: 'border-blue-200'
                      })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Member
                    </button>
                  </div>

                  <div className="space-y-6">
                    {localContent.team.map((member, idx) => (
                      <div key={idx} className="p-5 border border-slate-200 rounded-3xl bg-slate-50/60 relative">
                        <button 
                          onClick={() => removeListItem('team', idx)}
                          className="absolute top-4 right-4 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Member Name</label>
                            <input 
                              type="text"
                              value={member.name}
                              onChange={(e) => updateListItem('team', idx, 'name', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Role Title</label>
                            <input 
                              type="text"
                              value={member.role}
                              onChange={(e) => updateListItem('team', idx, 'role', e.target.value)}
                              className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex gap-4 items-center">
                          <div className="w-20 h-20 border rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                            {member.image ? (
                              <img src={member.image} alt="" className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <Users className="w-6 h-6" />
                              </div>
                            )}
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 mb-1">Profile Photo</label>
                            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-350 rounded-lg text-xs font-bold cursor-pointer hover:bg-slate-50 bg-white text-slate-700">
                              {uploadingField === `team.${idx}.image` ? (
                                <>
                                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-orange-600"></div>
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <Upload className="w-3.5 h-3.5" />
                                  Choose Image
                                </>
                              )}
                              <input 
                                type="file" 
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileUpload(e, `team.${idx}.image`, (url) => {
                                  updateListItem('team', idx, 'image', url)
                                })}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.16: Render awards and legacy text editors */}
            {activeTab === 'awards' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Awards & Legacy Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Sub-title</label>
                    <input 
                      type="text" 
                      value={localContent.awardSection.subTitle} 
                      onChange={(e) => handleFieldChange('awardSection.subTitle', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                    <input 
                      type="text" 
                      value={localContent.awardSection.title} 
                      onChange={(e) => handleFieldChange('awardSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Section Description</label>
                  <textarea 
                    rows="2"
                    value={localContent.awardSection.description} 
                    onChange={(e) => handleFieldChange('awardSection.description', e.target.value)}
                    className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                  />
                </div>

                <div className="p-5 border border-amber-250 rounded-2xl bg-amber-50/20 space-y-4">
                  <h3 className="text-md font-bold text-amber-900">Legacy Details</h3>
                  <div>
                    <label className="block text-xs font-bold text-amber-850 mb-1">Legacy Block Title</label>
                    <input 
                      type="text" 
                      value={localContent.awardSection.legacyTitle} 
                      onChange={(e) => handleFieldChange('awardSection.legacyTitle', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-350 rounded-lg bg-white text-sm font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-850 mb-1">Legacy First Paragraph</label>
                    <textarea 
                      rows="3"
                      value={localContent.awardSection.legacyDesc1} 
                      onChange={(e) => handleFieldChange('awardSection.legacyDesc1', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-350 rounded-lg bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-amber-850 mb-1">Legacy Second Paragraph</label>
                    <textarea 
                      rows="3"
                      value={localContent.awardSection.legacyDesc2} 
                      onChange={(e) => handleFieldChange('awardSection.legacyDesc2', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-350 rounded-lg bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Manage Awards & Certificates</h3>
                    <button 
                      onClick={() => addListItem('awards', {
                        id: localContent.awards.length + 1,
                        award_imgURL: 'https://web.archive.org/web/20170113210356im_/http://mktngo.org/sliders/award-3.jpg',
                        award_Name: 'Award of Excellence description.'
                      })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Award
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {localContent.awards.map((award, idx) => (
                      <div key={idx} className="p-4 border border-slate-200 rounded-2xl bg-slate-50/60 relative flex flex-col justify-between">
                        <button 
                          onClick={() => removeListItem('awards', idx)}
                          className="absolute top-2 right-2 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="mb-2">
                          <label className="block text-[10px] font-bold text-slate-500 mb-0.5">Award/Certificate Label Title</label>
                          <input 
                            type="text"
                            value={award.award_Name}
                            onChange={(e) => updateListItem('awards', idx, 'award_Name', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-slate-355 rounded-md"
                          />
                        </div>

                        <div className="flex gap-3 items-center">
                          <div className="w-16 h-12 border rounded bg-white overflow-hidden flex-shrink-0">
                            {award.award_imgURL ? (
                              <img src={award.award_imgURL} alt="" className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <Award className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                          <div>
                            <label className="inline-flex items-center gap-1 px-2 py-1 border border-slate-350 rounded-md text-[10px] font-bold cursor-pointer hover:bg-slate-50 bg-white text-slate-700">
                              {uploadingField === `awards.${idx}.award_imgURL` ? 'Uploading...' : 'Choose File'}
                              <input 
                                type="file" 
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileUpload(e, `awards.${idx}.award_imgURL`, (url) => {
                                  updateListItem('awards', idx, 'award_imgURL', url)
                                })}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.17: Render partners list editor */}
            {activeTab === 'partners' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Trusted Partners Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                    <input 
                      type="text" 
                      value={localContent.partnerSection.title} 
                      onChange={(e) => handleFieldChange('partnerSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Description</label>
                    <input 
                      type="text" 
                      value={localContent.partnerSection.description} 
                      onChange={(e) => handleFieldChange('partnerSection.description', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Manage Partner Logos</h3>
                    <button 
                      onClick={() => addListItem('partners', {
                        name: 'New Partner Name',
                        logo: '/images/partners-logo/nsdc-logo.webp'
                      })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Partner
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {localContent.partners.map((partner, idx) => (
                      <div key={idx} className="p-4 border border-slate-200 rounded-2xl bg-slate-50/60 relative flex flex-col justify-between">
                        <button 
                          onClick={() => removeListItem('partners', idx)}
                          className="absolute top-2 right-2 text-slate-400 hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="mb-2">
                          <label className="block text-[10px] font-bold text-slate-500 mb-0.5">Partner Name</label>
                          <input 
                            type="text"
                            value={partner.name}
                            onChange={(e) => updateListItem('partners', idx, 'name', e.target.value)}
                            className="w-full px-2 py-1 text-xs border border-slate-350 rounded-md"
                          />
                        </div>

                        <div className="flex gap-2 items-center">
                          <div className="w-16 h-12 border rounded bg-white overflow-hidden flex-shrink-0 flex items-center justify-center">
                            {partner.logo ? (
                              <img src={partner.logo} alt="" className="object-contain w-full h-full p-1" />
                            ) : (
                              <Handshake className="w-5 h-5 text-slate-300" />
                            )}
                          </div>
                          <div>
                            <label className="inline-flex items-center gap-1 px-2 py-1 border border-slate-350 rounded-md text-[10px] font-bold cursor-pointer hover:bg-slate-50 bg-white text-slate-700">
                              {uploadingField === `partners.${idx}.logo` ? '...' : 'Upload'}
                              <input 
                                type="file" 
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileUpload(e, `partners.${idx}.logo`, (url) => {
                                  updateListItem('partners', idx, 'logo', url)
                                })}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.18: Render CTA cards copy editor panels */}
            {activeTab === 'cta' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">CTA & Get Involved Cards</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Badge/Tag</label>
                    <input 
                      type="text" 
                      value={localContent.ctaSection.tag} 
                      onChange={(e) => handleFieldChange('ctaSection.tag', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Main Title</label>
                    <input 
                      type="text" 
                      value={localContent.ctaSection.title} 
                      onChange={(e) => handleFieldChange('ctaSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Main Description</label>
                    <textarea 
                      rows="2"
                      value={localContent.ctaSection.description} 
                      onChange={(e) => handleFieldChange('ctaSection.description', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-5 border border-slate-200 rounded-2xl bg-orange-50/10 space-y-3">
                    <h3 className="text-md font-bold text-slate-900 flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-red-500" />
                      Donate Card Copy
                    </h3>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Badge Tag</label>
                      <input 
                        type="text"
                        value={localContent.ctaSection.donateTag}
                        onChange={(e) => handleFieldChange('ctaSection.donateTag', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                      <input 
                        type="text"
                        value={localContent.ctaSection.donateTitle}
                        onChange={(e) => handleFieldChange('ctaSection.donateTitle', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea 
                        rows="3"
                        value={localContent.ctaSection.donateDesc}
                        onChange={(e) => handleFieldChange('ctaSection.donateDesc', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="p-5 border border-slate-200 rounded-2xl bg-blue-50/10 space-y-3">
                    <h3 className="text-md font-bold text-slate-900 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-500" />
                      Volunteer Card Copy
                    </h3>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Badge Tag</label>
                      <input 
                        type="text"
                        value={localContent.ctaSection.volunteerTag}
                        onChange={(e) => handleFieldChange('ctaSection.volunteerTag', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Title</label>
                      <input 
                        type="text"
                        value={localContent.ctaSection.volunteerTitle}
                        onChange={(e) => handleFieldChange('ctaSection.volunteerTitle', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                      <textarea 
                        rows="3"
                        value={localContent.ctaSection.volunteerDesc}
                        onChange={(e) => handleFieldChange('ctaSection.volunteerDesc', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.19: Render office details and numbers inputs */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Contact Details & Map Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Title</label>
                    <input 
                      type="text" 
                      value={localContent.contactSection.title} 
                      onChange={(e) => handleFieldChange('contactSection.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Section Description</label>
                    <input 
                      type="text" 
                      value={localContent.contactSection.description} 
                      onChange={(e) => handleFieldChange('contactSection.description', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-4">
                  <h3 className="text-md font-bold text-slate-800">Office & Communication details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Office Box Title</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.officeTitle} 
                        onChange={(e) => handleFieldChange('contactSection.officeTitle', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Office Address text (Supports linebreaks)</label>
                      <textarea 
                        rows="3"
                        value={localContent.contactSection.addressText} 
                        onChange={(e) => handleFieldChange('contactSection.addressText', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-slate-200/50">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Mobile No</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.phone} 
                        onChange={(e) => handleFieldChange('contactSection.phone', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Email ID</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.email} 
                        onChange={(e) => handleFieldChange('contactSection.email', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Call link URL (tel:...)</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.guidancePhone} 
                        onChange={(e) => handleFieldChange('contactSection.guidancePhone', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">WhatsApp 01 Link</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.whatsapp1} 
                        onChange={(e) => handleFieldChange('contactSection.whatsapp1', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">WhatsApp 02 Link</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.whatsapp2} 
                        onChange={(e) => handleFieldChange('contactSection.whatsapp2', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">Google Maps (Visit Link)</label>
                      <input 
                        type="text" 
                        value={localContent.contactSection.mapsLink} 
                        onChange={(e) => handleFieldChange('contactSection.mapsLink', e.target.value)}
                        className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 06.01.20: Render Rising Milestones activities tabs list editors */}
            {activeTab === 'milestones' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Rising Milestones page Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Milestones Page Title</label>
                    <input 
                      type="text" 
                      value={localContent.risingMilestones.title} 
                      onChange={(e) => handleFieldChange('risingMilestones.title', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Milestones Page Description</label>
                    <input 
                      type="text" 
                      value={localContent.risingMilestones.description} 
                      onChange={(e) => handleFieldChange('risingMilestones.description', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-350 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-8 pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800">Customize 6 Milestone Activity sections</h3>
                  {localContent.risingMilestonesSections.map((sec, secIdx) => (
                    <div key={sec.slug || secIdx} className="p-5 border border-slate-200 rounded-3xl bg-slate-50/60 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-extrabold tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                          Section {secIdx + 1} ({sec.title_name})
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Section Title Name</label>
                          <input 
                            type="text"
                            value={sec.title_name}
                            onChange={(e) => {
                              const copy = [...localContent.risingMilestonesSections]
                              copy[secIdx].title_name = e.target.value
                              handleFieldChange('risingMilestonesSections', copy)
                            }}
                            className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm font-bold text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Projects heading label</label>
                          <input 
                            type="text"
                            value={sec.projects_heading}
                            onChange={(e) => {
                              const copy = [...localContent.risingMilestonesSections]
                              copy[secIdx].projects_heading = e.target.value
                              handleFieldChange('risingMilestonesSections', copy)
                            }}
                            className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1">Description Paragraph</label>
                        <textarea 
                          rows="2"
                          value={sec.description}
                          onChange={(e) => {
                            const copy = [...localContent.risingMilestonesSections]
                            copy[secIdx].description = e.target.value
                            handleFieldChange('risingMilestonesSections', copy)
                          }}
                          className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                        />
                      </div>

                      {sec.bottom_description !== undefined && (
                        <div>
                          <label className="block text-xs font-bold text-slate-500 mb-1">Bottom Card Description</label>
                          <textarea 
                            rows="2"
                            value={sec.bottom_description}
                            onChange={(e) => {
                              const copy = [...localContent.risingMilestonesSections]
                              copy[secIdx].bottom_description = e.target.value
                              handleFieldChange('risingMilestonesSections', copy)
                            }}
                            className="w-full px-3 py-1.5 border border-slate-350 rounded-lg text-sm"
                          />
                        </div>
                      )}

                      {sec.initiatives && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="block text-xs font-bold text-slate-500">Initiatives list (Strings)</label>
                            <button 
                              onClick={() => addMilestoneItem(secIdx, 'initiatives', 'New Activity program description')}
                              className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5"
                            >
                              <Plus className="w-3.5 h-3.5" /> Add Item
                            </button>
                          </div>
                          <div className="space-y-2">
                            {sec.initiatives.map((init, initIdx) => (
                              <div key={initIdx} className="flex gap-2 items-center">
                                <input 
                                  type="text"
                                  value={init}
                                  onChange={(e) => updateMilestoneItem(secIdx, 'initiatives', initIdx, null, e.target.value)}
                                  className="w-full px-3 py-1 border border-slate-300 rounded-lg text-xs"
                                />
                                <button 
                                  onClick={() => removeMilestoneItem(secIdx, 'initiatives', initIdx)}
                                  className="text-slate-400 hover:text-rose-600"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {sec.projects && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="block text-xs font-bold text-slate-500">Projects list (Objects)</label>
                            <button 
                              onClick={() => addMilestoneItem(secIdx, 'projects', { name: 'New Initiative', description: '', icon: 'Activity' })}
                              className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-0.5"
                            >
                              <Plus className="w-3.5 h-3.5" /> Add Item
                            </button>
                          </div>
                          <div className="space-y-3">
                            {sec.projects.map((proj, projIdx) => {
                              const isString = typeof proj === 'string';
                              return (
                                <div key={projIdx} className="p-3 border border-slate-200 rounded-xl bg-white space-y-2 relative">
                                  <button 
                                    onClick={() => removeMilestoneItem(secIdx, 'projects', projIdx)}
                                    className="absolute top-2 right-2 text-slate-400 hover:text-rose-600"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>

                                  {isString ? (
                                    <div>
                                      <label className="block text-[10px] text-slate-400">Initiative Title</label>
                                      <input 
                                        type="text"
                                        value={proj}
                                        onChange={(e) => updateMilestoneItem(secIdx, 'projects', projIdx, null, e.target.value)}
                                        className="w-full px-2 py-1 border border-slate-350 rounded-lg text-xs"
                                      />
                                    </div>
                                  ) : (
                                    <>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <div>
                                          <label className="block text-[9px] text-slate-400">Name</label>
                                          <input 
                                            type="text"
                                            value={proj.name}
                                            onChange={(e) => updateMilestoneItem(secIdx, 'projects', projIdx, 'name', e.target.value)}
                                            className="w-full px-2 py-1 border border-slate-350 rounded-lg text-xs"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-[9px] text-slate-400">Icon (lucide component name)</label>
                                          <input 
                                            type="text"
                                            value={proj.icon}
                                            onChange={(e) => updateMilestoneItem(secIdx, 'projects', projIdx, 'icon', e.target.value)}
                                            className="w-full px-2 py-1 border border-slate-350 rounded-lg text-xs"
                                          />
                                        </div>
                                      </div>
                                      {proj.description !== undefined && (
                                        <div>
                                          <label className="block text-[9px] text-slate-400">Description</label>
                                          <input 
                                            type="text"
                                            value={proj.description}
                                            onChange={(e) => updateMilestoneItem(secIdx, 'projects', projIdx, 'description', e.target.value)}
                                            className="w-full px-2 py-1 border border-slate-350 rounded-lg text-xs"
                                          />
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold text-slate-500 mb-2">Activity Images Gallery</label>
                        <div className="flex flex-wrap gap-3">
                          {sec.activity_images.map((img, imgIdx) => (
                            <div key={imgIdx} className="relative w-20 h-16 border rounded-lg overflow-hidden group bg-white">
                              <img src={img} alt="" className="object-cover w-full h-full" />
                              <button 
                                onClick={() => {
                                  const copy = [...sec.activity_images]
                                  copy.splice(imgIdx, 1)
                                  const listCopy = [...localContent.risingMilestonesSections]
                                  listCopy[secIdx].activity_images = copy
                                  handleFieldChange('risingMilestonesSections', listCopy)
                                }}
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                          <label className="w-20 h-16 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-white text-slate-400">
                            {uploadingField === `milestones.${secIdx}.images` ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600"></div>
                            ) : (
                              <>
                                <Upload className="w-4 h-4" />
                                <span className="text-[9px] font-bold mt-1">Upload</span>
                              </>
                            )}
                            <input 
                              type="file" 
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, `milestones.${secIdx}.images`, (url) => {
                                const copy = [...sec.activity_images, url]
                                const listCopy = [...localContent.risingMilestonesSections]
                                listCopy[secIdx].activity_images = copy
                                handleFieldChange('risingMilestonesSections', listCopy)
                              })}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}
