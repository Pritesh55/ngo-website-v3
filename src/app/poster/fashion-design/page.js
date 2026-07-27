"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Printer, ChevronLeft, Sparkles, Phone, Scissors } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   A4 Poster - Fashion Designer Course (Manav Kalyan Trust)
   Canvas: 794 × 1123 px  (A4 @ 96 dpi)
   Reference: user-provided Figma/design JPEG (682 × 1024 px)
   Scale factor: 794/682 ≈ 1.164 (x),  1123/1024 ≈ 1.097 (y)
───────────────────────────────────────────────────────────────────────────────*/

export default function FashionDesignPosterPage() {
  const [zoom, setZoom] = useState(0.85);

  return (
    <div
      className="min-h-screen bg-slate-900 py-6 px-4 flex flex-col items-center"
      style={{ fontFamily: "var(--font-noto-serif-gujarati), Georgia, serif" }}
    >
      {/* ── Print CSS ── */}
      <style jsx global>{`
        @media print {
          header, footer, nav, .no-print { display: none !important; }
          html, body {
            background: #fff !important;
            margin: 0 !important; padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          main { width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
          @page { size: A4 portrait; margin: 0mm; }
          #poster-a4 { transform: none !important; transform-origin: top left !important; box-shadow: none !important; border-radius: 0 !important; }
          .poster-wrap { transform: scale(1) !important; margin: 0 !important; }
        }
        .poster-icon-badge {
          width: 32px; height: 32px; border-radius: 50%;
          background: #6d0119;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          border: 1.5px solid #d4af37;
        }
      `}</style>

      {/* ── Toolbar ── */}
      <div className="no-print w-full max-w-[794px] bg-slate-800 border border-slate-700 rounded-xl p-4 mb-5 flex flex-wrap gap-3 items-center justify-between text-white shadow-xl">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-slate-700/60 px-3 py-1.5 rounded-lg border border-slate-600 transition">
            <ChevronLeft className="w-4 h-4" /> Home
          </Link>
          <span className="text-sm font-semibold text-amber-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> A4 Poster — Fashion Designer Course
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-700/80 border border-slate-600 rounded-lg p-1 text-xs">
            <button onClick={() => setZoom(z => Math.max(0.4, z - 0.05))} className="px-2 py-1 text-slate-300 hover:text-white rounded hover:bg-slate-600 cursor-pointer">−</button>
            <span className="px-2 text-slate-300 font-mono">{Math.round(zoom * 100)}%</span>
            <button onClick={() => setZoom(z => Math.min(1.4, z + 0.05))} className="px-2 py-1 text-slate-300 hover:text-white rounded hover:bg-slate-600 cursor-pointer">+</button>
            <button onClick={() => setZoom(0.85)} className="px-2 py-1 text-amber-300 hover:text-white rounded hover:bg-slate-600 ml-1 border-l border-slate-600 cursor-pointer">Fit</button>
          </div>
          <button onClick={() => window.print()} className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-amber-700 hover:from-red-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow cursor-pointer active:scale-95 transition">
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Poster Zoom Wrapper ── */}
      <div className="poster-wrap origin-top transition-transform duration-200" style={{ transform: `scale(${zoom})` }}>

        {/*
          ════════════════════════════════════════════════════════════════
          A4 POSTER CANVAS  794 × 1123 px
          ════════════════════════════════════════════════════════════════
        */}
        <div
          id="poster-a4"
          style={{
            width: 794,
            height: 1123,
            minWidth: 794,
            minHeight: 1123,
            maxWidth: 794,
            maxHeight: 1123,
            backgroundColor: "#fdfaf5",
            border: "3.5px solid #6d0119",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* ── Inner Gold Frame ── */}
          <div style={{ position: "absolute", inset: 5, border: "2px solid #d4af37", pointerEvents: "none", zIndex: 5 }} />
          <div style={{ position: "absolute", inset: 8, border: "0.5px solid rgba(109,1,25,0.2)", pointerEvents: "none", zIndex: 5 }} />

          {/* ═══════════════════════════════════════════════════════════
              SECTION 1 — HEADER  (y: 0 → ~210)
          ═══════════════════════════════════════════════════════════ */}
          {/* Background cream — poster bg already serves */}

          {/* Logo emblem — left, vertically centered in header */}
          <div style={{
            position: "absolute",
            top: 12, left: 12,
            width: 150, height: 150,
            zIndex: 10,
          }}>
            <Image
              src="/images/courses/p_logo.png"
              alt="Manav Kalyan Trust Emblem"
              width={164} height={158}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              priority
            />
          </div>

          {/* Organization Name */}
          <div style={{
            position: "absolute",
            top: 14,
            left: 168, right: 178,
            textAlign: "center",
            zIndex: 10,
          }}>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 27,
              fontWeight: 900,
              color: "#5c0010",
              letterSpacing: "0.01em",
              lineHeight: 1.1,
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              Manav Kalyan Trust
            </h1>
            {/* Gold divider */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "6px 0 5px" }}>
              <div style={{ height: 2, width: 70, background: "linear-gradient(to right,transparent,#d4af37)" }} />
              <span style={{ fontSize: 12, color: "#d4af37" }}>◆ 🪷 ◆</span>
              <div style={{ height: 2, width: 70, background: "linear-gradient(to left,transparent,#d4af37)" }} />
            </div>
            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 4, fontSize: 11.5, fontWeight: 700, color: "#1a0f0f", lineHeight: 1.5 }}>
              <svg width="13" height="16" viewBox="0 0 24 24" fill="#6d0119" style={{ flexShrink: 0, marginTop: 2 }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              <span>
                ૪૨૭, ચોથો માળ, કલાસાગર શોપિંગ મોલ, સાંઇબાબા મંદિર સામે,<br />
                સતાધાર ક્રોસ રોડ પાસે, ઘાટલોડિયા, અમદાવાદ-૩૬૦ ૦૬૧.
              </span>
            </div>
          </div>

          {/* Top-right: Mannequin + fashion art illustration */}
          <div style={{
            position: "absolute",
            top: 4, right: 8,
            width: 165, height: 152,
            zIndex: 10,
          }}>
            <Image
              src="/images/courses/p_mannequin_top_right.png"
              alt="Fashion Illustration"
              width={210} height={195}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>

          {/* ── Contact Pill Banner ── */}
          <div style={{
            position: "absolute",
            top: 170, left: 14, right: 14,
            height: 32,
            background: "linear-gradient(to right, #5c0010, #860018, #5c0010)",
            borderRadius: 16,
            border: "2px solid #d4af37",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            zIndex: 10,
          }}>
            {/* Phone icon badge */}
            <div style={{
              width: 22, height: 22,
              borderRadius: "50%",
              background: "#d4af37",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#5c0010">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <span style={{ fontSize: 12.5, fontWeight: 800, color: "#ffe5b0", letterSpacing: "0.06em" }}>
              સંપર્ક : 9316824712 &nbsp;|&nbsp; 6355552491 &nbsp;|&nbsp; 9714360243 &nbsp;|&nbsp; 9714918134
            </span>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              SECTION 2 — COURSE TITLE BANNER  (y: 215 → 290)
          ═══════════════════════════════════════════════════════════ */}
          <div style={{
            position: "absolute",
            top: 210, left: 14, right: 14,
            height: 76,
            background: "linear-gradient(135deg, #5c0010 0%, #860018 50%, #5c0010 100%)",
            borderRadius: 14,
            border: "2px solid #d4af37",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 14,
            paddingRight: 6,
            overflow: "hidden",
            zIndex: 10,
          }}>
            {/* Left: Scissors + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Scissors icon badge */}
              <div style={{
                width: 48, height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "2px solid #d4af37",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {/* Scissors SVG */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#d4af37">
                  <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "0.01em" }}>
                  ફેશન ડિઝાઇનર કોર્સ
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f3c549", marginTop: 2 }}>
                  (Fashion Designer Course)
                </div>
              </div>
            </div>

            {/* Right: Fashion lady illustration inside banner */}
            <div style={{ position: "relative", width: 130, height: 76, flexShrink: 0, overflow: "hidden" }}>
              <Image
                src="/images/courses/p_course_banner_lady.png"
                alt="Fashion Lady"
                width={130} height={76}
                style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              SECTION 3 — 3 STAT BADGES  (y: 302 → 390)
          ═══════════════════════════════════════════════════════════ */}
          <div style={{
            position: "absolute",
            top: 295, left: 14, right: 14,
            height: 88,
            display: "flex",
            gap: 10,
            zIndex: 10,
          }}>
            {/* Badge 1 — Duration */}
            <div style={{
              flex: 1,
              background: "#fefcf6",
              border: "1.5px solid #d4af37",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              padding: "6px 4px",
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "#6d0119",
                border: "1.5px solid #d4af37",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Graduation cap */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4af37">
                  <path d="M12 3L1 9l4 2.18V15s0 3 7 3 7-3 7-3v-3.82L23 9 12 3zm0 14.82c-4.54 0-5.94-1.08-5.99-1.2V12.31L12 15l5.99-2.69v4.31c-.05.12-1.45 1.2-5.99 1.2zM12 13L3.27 9 12 5l8.73 4L12 13z" />
                </svg>
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#1a0f0f", lineHeight: 1 }}>અવધિ:</div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#6d0119", lineHeight: 1 }}>3 મહિના</div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#444", lineHeight: 1 }}>(570 કલાક)</div>
            </div>

            {/* Badge 2 — Course Fee */}
            <div style={{
              flex: 1,
              background: "#fefcf6",
              border: "1.5px solid #d4af37",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              padding: "6px 4px",
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "#6d0119",
                border: "1.5px solid #d4af37",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Award/medal */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4af37">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#1a0f0f", lineHeight: 1 }}>કોર્સ ફી:</div>
              <div style={{ fontSize: 17, fontWeight: 900, color: "#6d0119", lineHeight: 1 }}>રૂ. 0/-</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#b91c1c", lineHeight: 1 }}>(પૂર્ણ મફત / Free)</div>
            </div>

            {/* Badge 3 — NCVET */}
            <div style={{
              flex: 1,
              background: "#fefcf6",
              border: "1.5px solid #d4af37",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              padding: "6px 4px",
              textAlign: "center",
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "#6d0119",
                border: "1.5px solid #d4af37",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Book */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4af37">
                  <path d="M18 2h-8L4 8v14h14V2zM6 4.83L10.17 1H16v19H6V4.83z" /><path d="M9 13H7v2h2v-2zm0-3H7v2h2v-2zm0-3H7v2h2V7zm4 6h-2v2h2v-2zm0-3h-2v2h2v-2zm0-3h-2v2h2V7zm4 6h-2v2h2v-2zm0-3h-2v2h2v-2zm0-3h-2v2h2V7z" />
                </svg>
              </div>
              <div style={{ fontSize: 10, fontWeight: 900, color: "#6d0119", lineHeight: 1.35 }}>
                યુનિવર્સિટી & NCVET<br />
                ગવર્નમેન્ટ પેટર્ન અલાઇન્ડ<br />
                સર્ટીફાઇડ તાલીમ
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              SECTION 4 — QUALIFICATION  (y: 397 → ~498)
              Left column only
          ═══════════════════════════════════════════════════════════ */}
          <div style={{
            position: "absolute",
            top: 392, left: 14,
            width: 374,
            background: "#fff",
            border: "1.5px solid rgba(109,1,25,0.3)",
            borderRadius: 10,
            zIndex: 10,
            overflow: "hidden",
          }}>
            {/* Header bar */}
            <div style={{
              background: "#6d0119",
              padding: "6px 10px",
              display: "flex", alignItems: "center", gap: 7,
              border: "none",
              borderBottom: "1px solid #d4af37",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#d4af37">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>
                લાયકાત (Minimum Qualification)
              </span>
            </div>
            <div style={{ padding: "8px 10px 10px" }}>
              {/* Row 1 */}
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#166534", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                </div>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#1a0f0f" }}>
                  12 પાસ (12th Pass)
                </span>
              </div>
              {/* OR divider */}
              <div style={{ textAlign: "center", margin: "4px 0" }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#fff", background: "#6d0119", borderRadius: 20, padding: "2px 12px", border: "1px solid #d4af37" }}>
                  અથવા (OR)
                </span>
              </div>
              {/* Row 2 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 7, marginTop: 6 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#166534", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                </div>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#1a0f0f", lineHeight: 1.5 }}>
                  10 પછી 3 વર્ષનો ડિપ્લોમા પૂર્ણ કરેલ<br />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#555" }}>(Completed 3-Year Diploma after 10<sup>th</sup>)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Fashion Designer at Desk — Right column top */}
          <div style={{
            position: "absolute",
            top: 392, right: 14,
            width: 374,
            height: 218,
            borderRadius: 10,
            border: "2px solid #d4af37",
            overflow: "hidden",
            zIndex: 10,
          }}>
            <Image
              src="/images/courses/p_designer_desk.png"
              alt="Fashion Designer at desk"
              width={375} height={215}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* ═══════════════════════════════════════════════════════════
              SECTION 5 — SYLLABUS  (left col, y: 505 → ~738)
          ═══════════════════════════════════════════════════════════ */}
          <SyllabusBox />

          {/* ═══════════════════════════════════════════════════════════
              SECTION 6 — SPECIAL ATTRACTIONS  (right col, y: 618 → 738)
          ═══════════════════════════════════════════════════════════ */}
          <AttractionsBox />

          {/* ═══════════════════════════════════════════════════════════
              SECTION 7 — DOCUMENTS REQUIRED  (y: 862 → 970)
          ═══════════════════════════════════════════════════════════ */}
          <DocumentsBox />

          {/* ═══════════════════════════════════════════════════════════
              SECTION 8 — FOOTER BANNER  (y: 850 → ~960)
          ═══════════════════════════════════════════════════════════ */}
          <FooterBanner />

        </div>
        {/* end poster-a4 */}
      </div>
      {/* end zoom wrapper */}
    </div>
  );
}

/* ────────── Sub-components ────────── */

function SyllabusBox() {
  const items = [
    { emoji: "🔍", text: "ડિઝાઇન કન્સેપ્ટ બનાવવા માટે રિસર્ચ કરવી" },
    { emoji: "✏️", text: "સ્કેચિંગ અને ડિઝાઇન બનાવવી" },
    { emoji: "👗", text: "પેટર્ન મેકિંગ (પેટર્ન તૈયાર કરવું)" },
    { emoji: "🧵", text: "ગારમેન્ટ કન્સ્ટ્રક્શન (પ્રોટોટાઇપ ગારમેન્ટ બનાવવું)" },
    { emoji: "💻", text: "CAD, CorelDRAW & Photoshop તાલીમ" },
    { emoji: "🎨", text: "ટાઇ એન્ડ ડાઇ & ફેબ્રિક પ્રિન્ટિંગ ટેકનિક" },
    { emoji: "🪡", text: "હેન્ડ & મશીન એમ્બ્રોઇડરી આર્ટ" },
    { emoji: "📋", text: "ટેક પેક (Tech Pack) તૈયાર કરવું" },
    { emoji: "🔍", text: "ડિઝાઇન ડેવલપમેન્ટ પ્રોસેસનું મૂલ્યાંકન કરવું" },
    { emoji: "✂️", text: "ગારમેન્ટમાં સુધારા કરવા" },
    { emoji: "🏢", text: "કમળ/બોલીની જાળવણી અને ગ્રીન વર્કપ્લેસ (Gender & PwD Sensitization)" },
    { emoji: "💼", text: "રોજગારક્ષમતા કૌશલ્ય (Employability Skills)" },
  ];
  return (
    <div style={{
      position: "absolute",
      top: 497, left: 14,
      width: 374,
      background: "#fff",
      border: "1.5px solid rgba(109,1,25,0.3)",
      borderRadius: 10,
      zIndex: 10,
      overflow: "hidden",
    }}>
      {/* Header bar */}
      <div style={{
        background: "#6d0119",
        padding: "6px 10px",
        display: "flex", alignItems: "center", gap: 7,
        borderBottom: "1px solid #d4af37",
      }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#d4af37">
          <path d="M18 2h-8L4 8v14h14V2zM6 4.83L10.17 1H16v19H6V4.83z" />
        </svg>
        <span style={{ fontSize: 11.5, fontWeight: 800, color: "#fff" }}>
          સંપૂર્ણ અભ્યાસક્રમ (Syllabus &amp; Practical Training)
        </span>
      </div>
      <div style={{ padding: "5px 8px 7px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 3.5 }}>
            <span style={{ fontSize: 11, flexShrink: 0, marginTop: 1 }}>{item.emoji}</span>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: "#1a0f0f", lineHeight: 1.4 }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AttractionsBox() {
  const items = [
    {
      icon: "💰",
      title: "સ્ટાઇપેન્ડ / આર્થિક સહાય:",
      text: "નિયમ મુજબ તાલીમ દરમિયાન આર્થિક પ્રોત્સાહન."
    },
    {
      icon: "💼",
      title: "ઇન્ડસ્ટ્રી ઓરિએન્ટેડ તાલીમ:",
      text: "પ્રેક્ટિકલ હેન્ડ્સ-ઓન ટ્રેનિંગ અને ઇન્ડસ્ટ્રી સંબંધિત કોર્સ."
    },
    {
      icon: "📜",
      title: "યુનિવર્સિટી માન્ય સર્ટિફિકેટ:",
      text: "યુનિ. માન્ય સર્ટિ. અને પોતાના વ્યવસાય શરૂ કરવા માર્ગદર્શન."
    },
    {
      icon: "👤",
      title: "રોજગારયોગ્યતા કૌશલ્ય (Employability Skills):",
      text: "કેરિયર વિકાસ માટે જરૂરી માર્ગદર્શન."
    },
    {
      icon: "👥",
      title: "કેરિયર & સ્વરોજગાર માર્ગદર્શન:",
      text: "પોતાનો વ્યવસાય/બુટીક શરૂ કરવા માર્ગદર્શન."
    },
  ];
  return (
    <div style={{
      position: "absolute",
      top: 614, right: 14,
      width: 374,
      background: "#fff",
      border: "1.5px solid rgba(109,1,25,0.3)",
      borderRadius: 10,
      zIndex: 10,
      overflow: "hidden",
    }}>
      <div style={{
        background: "#6d0119",
        padding: "6px 10px",
        display: "flex", alignItems: "center", gap: 7,
        borderBottom: "1px solid #d4af37",
      }}>
        <span style={{ fontSize: 13 }}>🎁</span>
        <span style={{ fontSize: 11.5, fontWeight: 800, color: "#fff" }}>
          ખાસ આકર્ષણ, પ્રોત્સાહન અને લાભો
        </span>
      </div>
      <div style={{ padding: "5px 8px 7px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: i < items.length - 1 ? 7 : 0, paddingBottom: i < items.length - 1 ? 6 : 0, borderBottom: i < items.length - 1 ? "1px solid #f0ede8" : "none" }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: "#6d0119",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, marginTop: 1, fontSize: 11,
            }}>
              {item.icon}
            </div>
            <div style={{ fontSize: 10.5, lineHeight: 1.45 }}>
              <span style={{ fontWeight: 900, color: "#6d0119" }}>{item.title}</span>{" "}
              <span style={{ fontWeight: 600, color: "#1a0f0f" }}>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentsBox() {
  const docs = [
    { num: 1, text: "04 પાસપોર્ટ સાઇઝ ફોટો", icon: "🖼️" },
    { num: 2, text: "આધાર કાર્ડની નકલ", icon: "🪪" },
    { num: 3, text: "લેટેસ્ટ માર્કશીટ", icon: "📄" },
    { num: 4, text: "શાળા છોડવાનું પ્રમાણપત્ર (LC)", icon: "📜" },
    { num: 5, text: "બેંક પાસબુક પ્રથમ પાનાની નકલ", icon: "🏦" },
  ];
  return (
    <div style={{
      position: "absolute",
      top: 862, left: 14, right: 14,
      background: "#fff",
      border: "1.5px solid rgba(109,1,25,0.3)",
      borderRadius: 10,
      zIndex: 10,
      overflow: "hidden",
    }}>
      <div style={{
        background: "#6d0119",
        padding: "6px 10px",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        borderBottom: "1px solid #d4af37",
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#d4af37">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>
          એડમિશન માટેના જરૂરી પુરાવા (Documents Required)
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: 8, padding: "8px 10px 10px" }}>
        {docs.map((doc) => (
          <div key={doc.num} style={{
            background: "#fefcf6",
            border: "1px solid rgba(212,175,55,0.5)",
            borderRadius: 8,
            padding: "7px 5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            textAlign: "center",
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: "#6d0119",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 900, color: "#f3c549",
              flexShrink: 0,
            }}>
              {doc.num}
            </div>
            <div style={{ fontSize: 10, marginBottom: 2 }}>{doc.icon}</div>
            <span style={{ fontSize: 10, fontWeight: 800, color: "#1a0f0f", lineHeight: 1.4 }}>
              {doc.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterBanner() {
  return (
    <div style={{
      position: "absolute",
      bottom: 12, left: 14, right: 14,
      height: 72,
      background: "linear-gradient(to right, #5c0010, #860018 50%, #5c0010)",
      borderRadius: 12,
      border: "2px solid #d4af37",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 14px",
      overflow: "hidden",
      zIndex: 10,
    }}>
      {/* Left: 100% Free starburst seal */}
      <div style={{ width: 86, height: 68, position: "relative", flexShrink: 0, overflow: "visible" }}>
        <Image
          src="/images/courses/p_free_seal.png"
          alt="100% Free Seal"
          width={86} height={68}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>

      {/* Center: Arrow + Zero Course Fee */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, justifyContent: "center" }}>
        <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
          <path d="M0 8H27M27 8L20 2M27 8L20 14" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#f3c549", letterSpacing: "0.03em" }}>
            Zero Course Fee (રૂ. 0/-)
          </div>
        </div>
      </div>

      {/* Right: CTA box */}
      <div style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(243,197,73,0.4)",
        borderRadius: 8,
        padding: "7px 10px",
        textAlign: "right",
        flexShrink: 0,
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#ffe5b0", lineHeight: 1.5 }}>
          હવે જ સંપર્ક કરો અને
        </div>
        <div style={{ fontSize: 12, fontWeight: 900, color: "#fff", lineHeight: 1.5 }}>
          તમારા ભવિષ્યને આપો નવી દિશા!
        </div>
      </div>
    </div>
  );
}
