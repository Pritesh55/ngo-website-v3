# Step 05.00.00: Rising Milestones Page Integration

This document details how the Rising Milestones page was refactored to support CMS values.

---

### 📂 File Reference
- Activity Page: [page.js](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/(about-us)/our-activity/page.js)

---

### 🛠️ Integration Steps

#### ◼️ Step 05.01.01: Audited Subcomponents
The milestones page loads 6 distinct activity sections (Employment generation, Women Empowerment, Socio-Economic, Community Health, Science & Innovation, and Salt Workers Welfare) as individual subcomponents. These components already accept data as props.

#### ◼️ Step 05.01.02: Setup Lucide Icons Map
Because React icon components cannot be saved as strings in JSON files, we created an icon mapping lookup within the parent page:
```javascript
import { BarChart3, Users, Heart, Activity, Stethoscope, Lightbulb, Home, Shield } from 'lucide-react'

const iconMap = { BarChart3, Users, Heart, Activity, Stethoscope, Lightbulb, Home, Shield }
```

#### ◼️ Step 05.01.03: Resolve Icon Strings to Components
Created a helper mapping function `mapMilestoneData(slug)` inside the page component. This function reads a milestone block from `allContent.risingMilestonesSections`, maps the text icon fields (like `"Heart"`) to their actual Lucide component instances (`iconMap["Heart"]`), and returns a copy of the section data.

#### ◼️ Step 05.01.04: Pass Mapped Objects through Props
The mapped milestone objects are passed directly into the subcomponent props:
```javascript
const communityHealthData = mapMilestoneData("community-health-programme")

return (
  ...
  {communityHealthData && <CommunityHealthSection Community_Health_activity_data={communityHealthData} />}
)
```
This enables full customization of section titles, description paragraphs, nested projects/initiatives, and image slider galleries directly from the Admin Panel.
