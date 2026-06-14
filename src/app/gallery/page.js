'use client'
import React, { useState } from 'react'
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Eye, FolderOpen } from 'lucide-react'
import Link from 'next/link';

const galleryAlbums = [

  {
    folderName: "G01-Aatmnirbhar",
    heading: "Aatmanirbhar Programs (Self-Reliance Training)",
    description: "Self-reliance and employment-oriented skill enhancement workshops",
    photos: [
      { src: "/images/G01-Aatmnirbhar/img4.jpg", desc: "Photo 1" },
      { src: "/images/G01-Aatmnirbhar/img8.jpg", desc: "Photo 2" },
      { src: "/images/G01-Aatmnirbhar/img11.jpg", desc: "Photo 3" },
      { src: "/images/G01-Aatmnirbhar/img14.jpg", desc: "Photo 4" },
      { src: "/images/G01-Aatmnirbhar/img17.jpg", desc: "Photo 5" },
    ]
  },
  {
    folderName: "G03-relief-work-for-a-flood-affected-people",
    heading: "Flood Relief Work",
    description: "Distribution of relief and aid materials for flood-affected families",
    photos: [
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img4.jpg", desc: "Photo 1" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img8.jpg", desc: "Photo 2" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img11.jpg", desc: "Photo 3" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img14.jpg", desc: "Photo 4" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img17.jpg", desc: "Photo 5" },
      { src: "/images/G03-relief-work-for-a-flood-affected-people/img20.jpg", desc: "Photo 6" },
    ]
  },
  {
    folderName: "G05-Skill-Traiing-Programs",
    heading: "Skill-Training Program",
    description: "Vocational training and employment readiness initiative",
    photos: [
      { src: "/images/G05-Skill-Traiing-Programs/img4.jpg", desc: "Photo 1" },
      { src: "/images/G05-Skill-Traiing-Programs/img8.jpg", desc: "Photo 2" },
      { src: "/images/G05-Skill-Traiing-Programs/img11.jpg", desc: "Photo 3" },
      { src: "/images/G05-Skill-Traiing-Programs/img14.jpg", desc: "Photo 4" },
      { src: "/images/G05-Skill-Traiing-Programs/img17.jpg", desc: "Photo 5" },
      { src: "/images/G05-Skill-Traiing-Programs/img20.jpg", desc: "Photo 6" },
      { src: "/images/G05-Skill-Traiing-Programs/img23.jpg", desc: "Photo 7" },
      { src: "/images/G05-Skill-Traiing-Programs/img26.jpg", desc: "Photo 8" },
      { src: "/images/G05-Skill-Traiing-Programs/img29.jpg", desc: "Photo 9" },
      { src: "/images/G05-Skill-Traiing-Programs/img32.jpg", desc: "Photo 10" },
      { src: "/images/G05-Skill-Traiing-Programs/img35.jpg", desc: "Photo 11" },
      { src: "/images/G05-Skill-Traiing-Programs/img38.jpg", desc: "Photo 12" },
    ]
  },
  {
    folderName: "G02-General-awewrness",
    heading: "General Awareness Programs",
    description: "Social and educational public awareness campaigns",
    photos: [
      { src: "/images/G02-General-awewrness/img4.jpg", desc: "Photo 1" },
      { src: "/images/G02-General-awewrness/img8.jpg", desc: "Photo 2" },
      { src: "/images/G02-General-awewrness/img11.jpg", desc: "Photo 3" },
      { src: "/images/G02-General-awewrness/img14.jpg", desc: "Photo 4" },
      { src: "/images/G02-General-awewrness/img17.jpg", desc: "Photo 5" },
      { src: "/images/G02-General-awewrness/img20.jpg", desc: "Photo 6" },
      { src: "/images/G02-General-awewrness/img23.jpg", desc: "Photo 7" },
    ]
  },

  {
    folderName: "G04-other-activities-of-precident-Mkt",
    heading: "President's Activities",
    description: "Social leadership and activities through Manav Kalyan Trust",
    photos: [
      { src: "/images/G04-other-activities-of-precident-Mkt/img4.jpg", desc: "Photo 1" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img8.jpg", desc: "Photo 2" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img11.jpg", desc: "Photo 3" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img14.jpg", desc: "Photo 4" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img17.jpg", desc: "Photo 5" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img20.jpg", desc: "Photo 6" },
      { src: "/images/G04-other-activities-of-precident-Mkt/img23.jpg", desc: "Photo 7" },
    ]
  },
  {
    folderName: "our-projects",
    heading: "Our Key Welfare Projects",
    description: "Overview of various social welfare initiatives and campaigns.",
    photos: [
      { src: "/images/our-projects/05-Integrated-Skill-Development-Scheme.jpg", desc: "Photo 1" },
      { src: "/images/our-projects/06-Swajal-Dhara.png", desc: "Photo 2" },
      { src: "/images/our-projects/07-Woman-Empowerment-Creation.png", desc: "Photo 3" },
      { src: "/images/our-projects/08-Health-Care.png", desc: "Photo 4" },
      { src: "/images/our-projects/09-Namak-Mazdoor-Awas-Yojna.jpg", desc: "Photo 5" }
    ]
  },
  {
    folderName: "AHVY",
    heading: "Ambedkar Hastshilp Vikas Yojana (AHVY)",
    description: "Empowering artisans through financial, technological, and market support.",
    photos: [
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.01 PM.jpeg", desc: "Photo 1" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.02 PM (1).jpeg", desc: "Photo 2" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.02 PM.jpeg", desc: "Photo 3" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.03 PM (1).jpeg", desc: "Photo 4" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.03 PM (2).jpeg", desc: "Photo 5" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.03 PM.jpeg", desc: "Photo 6" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.04 PM (1).jpeg", desc: "Photo 7" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.04 PM.jpeg", desc: "Photo 8" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.05 PM (1).jpeg", desc: "Photo 9" },
      { src: "/images/our-projects/AHVY/WhatsApp Image 2026-06-12 at 7.37.05 PM.jpeg", desc: "Photo 10" }
    ]
  },
  {
    folderName: "Development-Commissioner-Handicrafts",
    heading: "Development Commissioner (Handicrafts) (DCH)",
    description: "Supporting and promoting Indian handicrafts through development schemes.",
    photos: [
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163050.jpg", desc: "Photo 1" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163112.jpg", desc: "Photo 2" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163122.jpg", desc: "Photo 3" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163130.jpg", desc: "Photo 4" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163138.jpg", desc: "Photo 5" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163155.jpg", desc: "Photo 6" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163218.jpg", desc: "Photo 7" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163224.jpg", desc: "Photo 8" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163729.jpg", desc: "Photo 9" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163734.jpg", desc: "Photo 10" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/20180807_163741.jpg", desc: "Photo 11" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/hand-embroidery-under-AHVY.jpg", desc: "Photo 12" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0000.jpg", desc: "Photo 13" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0001.jpg", desc: "Photo 14" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0002.jpg", desc: "Photo 15" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0003.jpg", desc: "Photo 16" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0004.jpg", desc: "Photo 17" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0005.jpg", desc: "Photo 18" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0006.jpg", desc: "Photo 19" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0007.jpg", desc: "Photo 20" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0008.jpg", desc: "Photo 21" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0009.jpg", desc: "Photo 22" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0010.jpg", desc: "Photo 23" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0011.jpg", desc: "Photo 24" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0012.jpg", desc: "Photo 25" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0013.jpg", desc: "Photo 26" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0014.jpg", desc: "Photo 27" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0015.jpg", desc: "Photo 28" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0016.jpg", desc: "Photo 29" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0017.jpg", desc: "Photo 30" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0018.jpg", desc: "Photo 31" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0019.jpg", desc: "Photo 32" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0020.jpg", desc: "Photo 33" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0021.jpg", desc: "Photo 34" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0022.jpg", desc: "Photo 35" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0023.jpg", desc: "Photo 36" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0024.jpg", desc: "Photo 37" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0025.jpg", desc: "Photo 38" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0026.jpg", desc: "Photo 39" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0027.jpg", desc: "Photo 40" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0028.jpg", desc: "Photo 41" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0029.jpg", desc: "Photo 42" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0030.jpg", desc: "Photo 43" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0031.jpg", desc: "Photo 44" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0032.jpg", desc: "Photo 45" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0033.jpg", desc: "Photo 46" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0034.jpg", desc: "Photo 47" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0035.jpg", desc: "Photo 48" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0036.jpg", desc: "Photo 49" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0037.jpg", desc: "Photo 50" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0038.jpg", desc: "Photo 51" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0039.jpg", desc: "Photo 52" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0040.jpg", desc: "Photo 53" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0041.jpg", desc: "Photo 54" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0042.jpg", desc: "Photo 55" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0043.jpg", desc: "Photo 56" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0044.jpg", desc: "Photo 57" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0045.jpg", desc: "Photo 58" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0046.jpg", desc: "Photo 59" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG-20180926-WA0047.jpg", desc: "Photo 60" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0649.JPG", desc: "Photo 61" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0663.JPG", desc: "Photo 62" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0664.JPG", desc: "Photo 63" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0665.JPG", desc: "Photo 64" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0671.JPG", desc: "Photo 65" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0672.JPG", desc: "Photo 66" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0673.JPG", desc: "Photo 67" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0675.JPG", desc: "Photo 68" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0677.JPG", desc: "Photo 69" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0679.JPG", desc: "Photo 70" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0685.JPG", desc: "Photo 71" },
      { src: "/images/our-projects/Development-Commissioner-Handicrafts/IMG_0686.JPG", desc: "Photo 72" }
    ]
  },
  {
    folderName: "Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM",
    heading: "Entrepreneurship Development Program (PMEGP)",
    description: "Credit-linked subsidy scheme for setting up micro-enterprises.",
    photos: [
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13333.JPG", desc: "Photo 1" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13338.JPG", desc: "Photo 2" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13347.JPG", desc: "Photo 3" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13354.JPG", desc: "Photo 4" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13357.JPG", desc: "Photo 5" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13367.JPG", desc: "Photo 6" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13372.JPG", desc: "Photo 7" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13380.JPG", desc: "Photo 8" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13397.JPG", desc: "Photo 9" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13430.JPG", desc: "Photo 10" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13433.JPG", desc: "Photo 11" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13447.JPG", desc: "Photo 12" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13469.JPG", desc: "Photo 13" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13482.JPG", desc: "Photo 14" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13504.JPG", desc: "Photo 15" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13562.JPG", desc: "Photo 16" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13586.JPG", desc: "Photo 17" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13633.JPG", desc: "Photo 18" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13644.JPG", desc: "Photo 19" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13660.JPG", desc: "Photo 20" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13665.JPG", desc: "Photo 21" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13686.JPG", desc: "Photo 22" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13696.JPG", desc: "Photo 23" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13723.JPG", desc: "Photo 24" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13748.JPG", desc: "Photo 25" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13765.JPG", desc: "Photo 26" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13767.JPG", desc: "Photo 27" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13782.JPG", desc: "Photo 28" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13818.JPG", desc: "Photo 29" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13828.JPG", desc: "Photo 30" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13831.JPG", desc: "Photo 31" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13864.JPG", desc: "Photo 32" },
      { src: "/images/our-projects/Entrepreneurship-development-program-under-pmegp-scheme-131SSCAM/SDC13865.JPG", desc: "Photo 33" }
    ]
  },
  {
    folderName: "Help_to_khedbrahma_general_hospital",
    heading: "Help to Khedbrahma General Hospital",
    description: "Supporting General Hospital with vital medical equipment donation.",
    photos: [
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/cover-photo-Khedbrahma.jpeg", desc: "Photo 1" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (1).jpeg", desc: "Photo 2" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (11).jpeg", desc: "Photo 3" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (13).jpeg", desc: "Photo 4" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (14).jpeg", desc: "Photo 5" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (18).jpeg", desc: "Photo 6" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (2).jpeg", desc: "Photo 7" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (26).jpeg", desc: "Photo 8" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (29).jpeg", desc: "Photo 9" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (3).jpeg", desc: "Photo 10" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (30).jpeg", desc: "Photo 11" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (31).jpeg", desc: "Photo 12" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (32).jpeg", desc: "Photo 13" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (33).jpeg", desc: "Photo 14" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (36).jpeg", desc: "Photo 15" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (37).jpeg", desc: "Photo 16" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (39).jpeg", desc: "Photo 17" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (4).jpeg", desc: "Photo 18" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (41).jpeg", desc: "Photo 19" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (42).jpeg", desc: "Photo 20" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (43).jpeg", desc: "Photo 21" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (44).jpeg", desc: "Photo 22" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (45).jpeg", desc: "Photo 23" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (46).jpeg", desc: "Photo 24" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (47).jpeg", desc: "Photo 25" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (48).jpeg", desc: "Photo 26" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (49).jpeg", desc: "Photo 27" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (50).jpeg", desc: "Photo 28" },
      { src: "/images/our-projects/Help_to_khedbrahma_general_hospital/Medical-eqipment-donate-to-Khedbrahma-General-Hospital (8).jpeg", desc: "Photo 29" }
    ]
  },
  {
    folderName: "ISDS",
    heading: "Integrated Skill Development Scheme (ISDS)",
    description: "Skill development training in Banking, Retail, and Garment Making.",
    photos: [
      { src: "/images/our-projects/ISDS/01-Photo 48.JPG", desc: "Photo 1" },
      { src: "/images/our-projects/ISDS/Photo 2.jpg", desc: "Photo 2" },
      { src: "/images/our-projects/ISDS/Photo 21.JPG", desc: "Photo 3" },
      { src: "/images/our-projects/ISDS/Photo 22.jpg", desc: "Photo 4" },
      { src: "/images/our-projects/ISDS/Photo 23.jpg", desc: "Photo 5" },
      { src: "/images/our-projects/ISDS/Photo 25.jpg", desc: "Photo 6" },
      { src: "/images/our-projects/ISDS/Photo 27.jpg", desc: "Photo 7" },
      { src: "/images/our-projects/ISDS/Photo 34.jpg", desc: "Photo 8" },
      { src: "/images/our-projects/ISDS/Photo 39.jpg", desc: "Photo 9" },
      { src: "/images/our-projects/ISDS/Photo 41.jpg", desc: "Photo 10" },
      { src: "/images/our-projects/ISDS/Photo 43.jpg", desc: "Photo 11" },
      { src: "/images/our-projects/ISDS/Photo 44.jpg", desc: "Photo 12" },
      { src: "/images/our-projects/ISDS/Photo 46.jpg", desc: "Photo 13" },
      { src: "/images/our-projects/ISDS/Photo 49.JPG", desc: "Photo 14" },
      { src: "/images/our-projects/ISDS/Photo 55.JPG", desc: "Photo 15" },
      { src: "/images/our-projects/ISDS/Photo 6.jpg", desc: "Photo 16" }
    ]
  },
  {
    folderName: "MULTI-PURPOSE-WOMEN-WELFARE-CENTER",
    heading: "Multi-Purpose Women Welfare Center",
    description: "Welfare, support, and skill training activities for women.",
    photos: [
      { src: "/images/our-projects/MULTI-PURPOSE-WOMEN-WELFARE-CENTER/03-MULTI-PURPOSE-WOMEN-WELFARE CENTER-01.jpg", desc: "Photo 1" },
      { src: "/images/our-projects/MULTI-PURPOSE-WOMEN-WELFARE-CENTER/03-MULTI-PURPOSE-WOMEN-WELFARE CENTER-02.jpg", desc: "Photo 2" },
      { src: "/images/our-projects/MULTI-PURPOSE-WOMEN-WELFARE-CENTER/03-MULTI-PURPOSE-WOMEN-WELFARE CENTER-03.jpg", desc: "Photo 3" },
      { src: "/images/our-projects/MULTI-PURPOSE-WOMEN-WELFARE-CENTER/03-MULTI-PURPOSE-WOMEN-WELFARE CENTER-04.jpg", desc: "Photo 4" },
      { src: "/images/our-projects/MULTI-PURPOSE-WOMEN-WELFARE-CENTER/03-MULTI-PURPOSE-WOMEN-WELFARE CENTER-05.jpg", desc: "Photo 5" },
      { src: "/images/our-projects/MULTI-PURPOSE-WOMEN-WELFARE-CENTER/03-MULTI-PURPOSE-WOMEN-WELFARE CENTER-06.jpg", desc: "Photo 6" }
    ]
  },
  {
    folderName: "PMKVY",
    heading: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    description: "Employment generation through placement and industrial development.",
    photos: [
      { src: "/images/our-projects/PMKVY/02-PRADHAN-MANTRI-KAUSHAL-VIKAS YOJANA-01.jpg", desc: "Photo 1" },
      { src: "/images/our-projects/PMKVY/02-PRADHAN-MANTRI-KAUSHAL-VIKAS YOJANA-02.jpg", desc: "Photo 2" },
      { src: "/images/our-projects/PMKVY/02-PRADHAN-MANTRI-KAUSHAL-VIKAS YOJANA-03.jpg", desc: "Photo 3" },
      { src: "/images/our-projects/PMKVY/02-PRADHAN-MANTRI-KAUSHAL-VIKAS YOJANA-04.jpg", desc: "Photo 4" }
    ]
  },
  {
    folderName: "Saksham-KVK-2",
    heading: "Saksham KVK 2.0",
    description: "Placement and industrial development training for employment.",
    photos: [
      { src: "/images/our-projects/Saksham-KVK-2/01-SAKSHAM-KVK-2-01.jpg", desc: "Photo 1" },
      { src: "/images/our-projects/Saksham-KVK-2/01-SAKSHAM-KVK-2-02.jpg", desc: "Photo 2" },
      { src: "/images/our-projects/Saksham-KVK-2/01-SAKSHAM-KVK-2-03.jpg", desc: "Photo 3" },
      { src: "/images/our-projects/Saksham-KVK-2/03-WhatsApp Image 2026-06-08 at 2.54.42 PM (1).jpeg", desc: "Photo 4" },
      { src: "/images/our-projects/Saksham-KVK-2/04-WhatsApp Image 2026-06-08 at 2.54.39 PM.jpeg", desc: "Photo 5" },
      { src: "/images/our-projects/Saksham-KVK-2/04-WhatsApp Image 2026-06-08 at 2.54.41 PM.jpeg", desc: "Photo 6" },
      { src: "/images/our-projects/Saksham-KVK-2/05-WhatsApp Image 2026-06-08 at 2.54.31 PM.jpeg", desc: "Photo 7" },
      { src: "/images/our-projects/Saksham-KVK-2/06-WhatsApp Image 2026-06-08 at 2.54.40 PM.jpeg", desc: "Photo 8" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.25 PM.jpeg", desc: "Photo 9" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.26 PM (1).jpeg", desc: "Photo 10" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.26 PM (2).jpeg", desc: "Photo 11" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.26 PM.jpeg", desc: "Photo 12" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.27 PM.jpeg", desc: "Photo 13" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.28 PM.jpeg", desc: "Photo 14" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.30 PM (1).jpeg", desc: "Photo 15" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.30 PM.jpeg", desc: "Photo 16" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.32 PM.jpeg", desc: "Photo 17" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.33 PM.jpeg", desc: "Photo 18" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.34 PM.jpeg", desc: "Photo 19" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.37 PM.jpeg", desc: "Photo 20" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.38 PM (1).jpeg", desc: "Photo 21" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.38 PM (2).jpeg", desc: "Photo 22" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.38 PM.jpeg", desc: "Photo 23" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.39 PM (1).jpeg", desc: "Photo 24" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.40 PM (1).jpeg", desc: "Photo 25" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.40 PM (2).jpeg", desc: "Photo 26" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.40 PM (3).jpeg", desc: "Photo 27" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.41 PM (1).jpeg", desc: "Photo 28" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.41 PM (2).jpeg", desc: "Photo 29" },
      { src: "/images/our-projects/Saksham-KVK-2/WhatsApp Image 2026-06-08 at 2.54.42 PM.jpeg", desc: "Photo 30" }
    ]
  },
  {
    folderName: "Training-under-scheme-06",
    heading: "Training under Scheme - 6",
    description: "Specialized training, liaison, and placement support for entrepreneurs.",
    photos: [
      { src: "/images/our-projects/Training-under-scheme-06/Training-under-scheme-06-01.jpg", desc: "Photo 1" },
      { src: "/images/our-projects/Training-under-scheme-06/Training-under-scheme-06-02.jpg", desc: "Photo 2" },
      { src: "/images/our-projects/Training-under-scheme-06/Training-under-scheme-06-03.jpg", desc: "Photo 3" },
      { src: "/images/our-projects/Training-under-scheme-06/Training-under-scheme-06-04.jpg", desc: "Photo 4" }
    ]
  },
  {
    folderName: "marketing-support-for-sustainability",
    heading: "Marketing Support for Sustainability",
    description: "Exhibitions, advertising, and direct sales support for women artisans.",
    photos: [
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (23).jpeg", desc: "Photo 1" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (24).jpeg", desc: "Photo 2" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (25).jpeg", desc: "Photo 3" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (26).jpeg", desc: "Photo 4" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (27).jpeg", desc: "Photo 5" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (28).jpeg", desc: "Photo 6" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (29).jpeg", desc: "Photo 7" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (30).jpeg", desc: "Photo 8" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (31).jpeg", desc: "Photo 9" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (32).jpeg", desc: "Photo 10" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-MARK (33).jpeg", desc: "Photo 11" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-01.jpg", desc: "Photo 12" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-02.jpg", desc: "Photo 13" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-03.jpg", desc: "Photo 14" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-04.jpg", desc: "Photo 15" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-05.jpg", desc: "Photo 16" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-06.jpg", desc: "Photo 17" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-07.jpg", desc: "Photo 18" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-08.jpg", desc: "Photo 19" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (1).jpeg", desc: "Photo 20" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (10).jpeg", desc: "Photo 21" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (11).jpeg", desc: "Photo 22" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (12).jpeg", desc: "Photo 23" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (13).jpeg", desc: "Photo 24" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (14).jpeg", desc: "Photo 25" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (15).jpeg", desc: "Photo 26" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (16).jpeg", desc: "Photo 27" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (17).jpeg", desc: "Photo 28" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (18).jpeg", desc: "Photo 29" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (19).jpeg", desc: "Photo 30" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (2).jpeg", desc: "Photo 31" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (20).jpeg", desc: "Photo 32" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (21).jpeg", desc: "Photo 33" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (22).jpeg", desc: "Photo 34" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (3).jpeg", desc: "Photo 35" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (4).jpeg", desc: "Photo 36" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (5).jpeg", desc: "Photo 37" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (6).jpeg", desc: "Photo 38" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (7).jpeg", desc: "Photo 39" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (8).jpeg", desc: "Photo 40" },
      { src: "/images/our-projects/marketing-support-for-sustainability/04-marketing-support-for-sustainability-09 (9).jpeg", desc: "Photo 41" }
    ]
  }
];

const Gallery_Page = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState({ open: false, src: '', index: 0, albumIndex: 0 });

  // Get flattened list of all photos for lightbox navigation when viewing 'all'
  const allPhotosFlattened = galleryAlbums.flatMap((album, albumIdx) =>
    album.photos.map((photo, photoIdx) => ({ ...photo, albumIndex: albumIdx, photoIndex: photoIdx }))
  );

  const openLightbox = (src, photoIdx, albumIdx) => {
    setLightbox({ open: true, src, index: photoIdx, albumIndex: albumIdx });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false });
  };

  const navigateLightbox = (direction) => {
    const album = galleryAlbums[lightbox.albumIndex];
    let nextIndex = lightbox.index + direction;

    if (nextIndex >= 0 && nextIndex < album.photos.length) {
      setLightbox({
        ...lightbox,
        src: album.photos[nextIndex].src,
        index: nextIndex
      });
    } else {
      // Loop albums if index exceeds bounds
      let nextAlbumIndex = lightbox.albumIndex + direction;
      if (nextAlbumIndex >= 0 && nextAlbumIndex < galleryAlbums.length) {
        const nextAlbum = galleryAlbums[nextAlbumIndex];
        const nextPhotoIndex = direction === 1 ? 0 : nextAlbum.photos.length - 1;
        setLightbox({
          open: true,
          src: nextAlbum.photos[nextPhotoIndex].src,
          albumIndex: nextAlbumIndex,
          index: nextPhotoIndex
        });
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="relative flex items-center justify-center px-4 py-20 bg-linear-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-100/50 backdrop-blur-xs">
            <ImageIcon className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold text-orange-700 tracking-wider">MKT GALLERY</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Our Activities &amp;
            <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent"> Moments</span>
          </h1>

          <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold">
            An overview of our various social welfare activities, training classes, and flood relief campaigns.
          </p>
        </div>
      </section>

      {/* Album Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10 border-b border-slate-200 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-all cursor-pointer ${activeTab === 'all'
              ? 'bg-linear-to-r from-orange-500 to-darkred text-white shadow-md'
              : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            All Folders
          </button>
          {galleryAlbums.map((album, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(album.folderName)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-all cursor-pointer ${activeTab === album.folderName
                ? 'bg-linear-to-r from-orange-500 to-darkred text-white shadow-md'
                : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {album.folderName}
            </button>
          ))}
        </div>

        {/* Albums Content */}
        <div className="space-y-16">
          {galleryAlbums.map((album, albumIdx) => {
            if (activeTab !== 'all' && activeTab !== album.folderName) return null;

            return (
              <div key={albumIdx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xs">
                {/* Folder Header */}
                <div className="flex items-start gap-4 mb-6 md:mb-8 border-b border-slate-100 pb-5">
                  <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl flex-shrink-0 mt-0.5 border border-orange-100">
                    <FolderOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block text-xxs md:text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full mb-2">
                      Folder: {album.folderName}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                      {album.heading}
                    </h2>
                    {album.description && (
                      <p className="text-sm md:text-base text-slate-500 mt-1 font-semibold">
                        {album.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grid of Photos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {album.photos.map((photo, photoIdx) => (
                    <div
                      key={photoIdx}
                      className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                      onClick={() => openLightbox(photo.src, photoIdx, albumIdx)}
                    >
                      <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 relative">
                        <Link href={photo.src}>
                          <img
                            src={photo.src}
                            alt={`${album.heading} - ${photo.desc}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                        </Link>

                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="p-2 bg-white/90 rounded-full text-slate-900 shadow-md">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs md:text-sm text-slate-650 font-bold tracking-wider">
                          Description: {photo.desc}
                        </span>
                        <span className="text-xxs font-bold text-slate-400 capitalize px-2 py-0.5 bg-slate-100 rounded-md">
                          #{photoIdx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xs px-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => navigateLightbox(-1)}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
            <Link href={lightbox.src}>
              <img
                src={lightbox.src}
                alt="Preview"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </Link>
            <div className="mt-4 text-center text-white">
              <p className="text-sm font-semibold tracking-wider text-slate-400">
                FOLDER: {galleryAlbums[lightbox.albumIndex].folderName}
              </p>
              <h3 className="text-lg font-bold mt-1">
                {galleryAlbums[lightbox.albumIndex].heading}
              </h3>
              <p className="text-sm text-orange-400 font-bold mt-1">
                Description: {galleryAlbums[lightbox.albumIndex].photos[lightbox.index].desc}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => navigateLightbox(1)}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery_Page