# Step 04.00.00: Homepage Components Integration

This document details how the homepage sections were refactored to fetch content dynamically.

---

### 📂 File Reference
- Logo Component: [Mkt_Company_Logo.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/header/logo/Mkt_Company_Logo.jsx)
- Hero Banner: [hero.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/hero.jsx)
- Projects Section: [our_projects_cards_section.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/our_projects_cards_section.jsx)
- Courses Section: [Our_Cource_Cards_Section.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/Our_Cource_Cards_Section.jsx)
- Team Section: [Our_team.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/Our_team.jsx)
- Awards & Legacy: [Award_Cards_Section.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/Award_Cards_Section.jsx) & [awards_list.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/awards/awards_list.jsx)
- Partner logos: [our-partners.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/our-partners.jsx)
- CTA Cards: [CTA_Donate_or_vol.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/CTA_Donate_or_vol.jsx)
- Contact Panel: [contact_us.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/sections/contact_us.jsx)

---

### 🛠️ Integration Steps

#### ◼️ Step 04.01.01: Add Client-Side Directive
Next.js Server Components cannot access React context or hooks. We added `'use client'` at the top of each component file to convert them into Client Components.

#### ◼️ Step 04.01.02: Import useCMS custom hook
Imported the `useCMS` hook from `@/context/CMSContext`. Within the component function, we extract `t` (the lookup helper) and `allContent` (the content database).

#### ◼️ Step 04.01.03: Refactor static strings
Replaced hardcoded headings and descriptions with lookup calls. For example, in `hero.jsx`:
```javascript
// Before:
<h1>Transforming Dreams Into Thriving Enterprises</h1>

// After:
<h1>{t('hero.title') || "Transforming Dreams Into Thriving Enterprises"}</h1>
```

#### ◼️ Step 04.01.04: Refactor loops & maps
For components mapping over arrays (like team members or project listings), we modified the array source to prioritize CMS context values with a static fallback:
```javascript
// Resolve the list from context or fallback to import
const projectsList = allContent?.projects || projects;

// Map over the resolved list
projectsList.map((project) => ( ... ))
```
This ensures that any changes to items (adding/editing/removing) in the admin panel are rendered on the site.
