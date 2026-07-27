# Step 01.00.00: CMS Content Database (`content.json`)

This document details how the centralized data store was created to convert hardcoded fields into editable values.

---

### 📂 File Reference
- Database File: [content.json](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/data/content.json)
- Original Projects File: [projects.js](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/data/projects.js)

---

### 🛠️ Implementation Steps

#### ◼️ Step 01.01.01: Consolidate Static Strings
All website sections were audited to collect hardcoded text headings, descriptions, office addresses, phone numbers, and default settings. 

#### ◼️ Step 01.01.02: Define JSON Schema Structure
The audited variables were structured into key-value sections inside a single `content.json` file. The top-level blocks are:
- `logo`: Branding texts (title, subtitle)
- `hero`: Tagline banner, headlines, statistics list
- `projectsSection`: Headers for the projects grids
- `coursesSection`: Vocational courses headers
- `teamSection`: Team section headings
- `awardSection`: Awards legacy descriptions and headers
- `partnerSection`: Partner section descriptive texts
- `ctaSection`: Support/volunteer call-to-action details
- `contactSection`: Multi-line office addresses, phone numbers, and maps URLs
- `risingMilestones`: Rising Milestones page headers

#### ◼️ Step 01.01.03: Import List Arrays
The static list arrays in the codebase were merged completely to ensure data persistence:
- **Projects**: Merged all 13 active welfare projects containing dynamic slider image paths, theme colors, borders, and supportive metadata.
- **Courses**: Ported all 6 courses with category categories (paid vs free) and image paths.
- **Team**: Ported 5 active management team members.
- **Awards & Partners**: Transferred 12 awards and 9 partner logos.
- **Milestone Sections**: Structured all 6 milestone activities containing nested initiatives and image galleries.
