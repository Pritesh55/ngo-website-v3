import { NextResponse } from 'next/server'

// In-memory fast cache for instant responses
const pincodeCache = new Map()

// Pre-seeded popular Gujarat pincodes for 0ms offline/instant lookup
const LOCAL_GUJARAT_PINCODES = {
  '380061': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Ghatlodia'] },
  '380063': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Chandlodiya'] },
  '380060': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Sola', 'Science City'] },
  '380054': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Bodakdev', 'Thaltej'] },
  '380015': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Satellite', 'Vastrapur', 'Jodhpur'] },
  '380052': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Memnagar'] },
  '380013': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Naranpura', 'Navrangpura'] },
  '380005': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Ranip', 'Sabarmati'] },
  '382481': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Gota', 'New Ranip', 'Chenpur'] },
  '380058': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Bopal', 'South Bopal', 'Ghuma'] },
  '382110': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Sanand', 'Goraj', 'Kaneti', 'Mankol', 'Rethal'] },
  '382220': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Bavla', 'Adroda', 'Dhegam'] },
  '382225': { state: 'Gujarat', city: 'Ahmedabad', villages: ['Dholka'] },
  '382010': { state: 'Gujarat', city: 'Gandhinagar', villages: ['Sector 1-30 Gandhinagar'] },
  '382421': { state: 'Gujarat', city: 'Gandhinagar', villages: ['Chandkheda', 'Motera', 'Zundal'] },
  '382424': { state: 'Gujarat', city: 'Gandhinagar', villages: ['Kudasan', 'Raysan', 'Koba', 'Sargasan'] },
  '395006': { state: 'Gujarat', city: 'Surat', villages: ['Varachha', 'Kapodra'] },
  '395009': { state: 'Gujarat', city: 'Surat', villages: ['Adajan', 'Pal'] },
  '390001': { state: 'Gujarat', city: 'Vadodara', villages: ['Alkapuri', 'Sayajigunj'] },
  '360001': { state: 'Gujarat', city: 'Rajkot', villages: ['Yagnik Road', 'Dharmendranagar'] },
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code') || ''
    const cleanPin = code.replace(/\D/g, '')

    if (cleanPin.length !== 6) {
      return NextResponse.json(
        { success: false, error: 'Valid 6-digit PIN code required' },
        { status: 400 }
      )
    }

    // 1. Check in-memory cache
    if (pincodeCache.has(cleanPin)) {
      return NextResponse.json({ success: true, ...pincodeCache.get(cleanPin), cached: true })
    }

    // 2. Check local instant dictionary
    if (LOCAL_GUJARAT_PINCODES[cleanPin]) {
      const localData = LOCAL_GUJARAT_PINCODES[cleanPin]
      const responseData = {
        success: true,
        pincode: cleanPin,
        state: localData.state,
        city: localData.city,
        district: localData.city,
        villages: localData.villages,
        primaryVillage: localData.villages[0] || '',
        source: 'local',
      }
      pincodeCache.set(cleanPin, responseData)
      return NextResponse.json(responseData)
    }

    // 3. Query India Post open API
    const response = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`, {
      next: { revalidate: 86400 }, // Cache 24 hours
    })

    if (!response.ok) {
      throw new Error(`Postal API error: ${response.status}`)
    }

    const data = await response.json()
    if (!data || !Array.isArray(data) || data[0]?.Status !== 'Success') {
      return NextResponse.json({
        success: false,
        error: 'Pincode not found in Indian postal registry',
      })
    }

    const postOffices = data[0].PostOffice || []
    if (postOffices.length === 0) {
      return NextResponse.json({ success: false, error: 'No post offices found' })
    }

    // Sort post offices: Head Post Office / Sub Post Office first, then Branch Post Office alphabetically
    const sortedPOs = [...postOffices].sort((a, b) => {
      const typeRank = (t) => (t === 'Head Post Office' ? 1 : t === 'Sub Post Office' ? 2 : 3)
      const rankDiff = typeRank(a.BranchType) - typeRank(b.BranchType)
      if (rankDiff !== 0) return rankDiff
      return (a.Name || '').localeCompare(b.Name || '')
    })

    const primaryPO = sortedPOs[0] || postOffices[0]
    const state = primaryPO.State || 'Gujarat'
    const city = primaryPO.District || primaryPO.Division || primaryPO.Region || ''
    const villages = Array.from(new Set(sortedPOs.map((po) => po.Name).filter(Boolean)))

    const result = {
      pincode: cleanPin,
      state,
      city,
      district: primaryPO.District || city,
      villages,
      primaryVillage: primaryPO.Name || villages[0] || '',
    }

    // Cache the result
    pincodeCache.set(cleanPin, result)

    return NextResponse.json({ success: true, ...result })
  } catch (error) {
    console.error('Pincode lookup error:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Lookup failed' },
      { status: 500 }
    )
  }
}
