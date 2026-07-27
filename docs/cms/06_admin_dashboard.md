# Step 06.00.00: Admin Dashboard Panel (`admin/page.js`)

This document details how the premium glassmorphism Admin Dashboard was built to control all content.

---

### 📂 File Reference
- Admin Page: [page.js](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/admin/page.js)

---

### 🛠️ Implementation Steps

#### ◼️ Step 06.01.01: Setup localContent state
To prevent unsaved edits from showing on the website in real-time, the Admin Panel manages its edits in a `localContent` state. It loads values from the `useCMS` hook on mount.

#### ◼️ Step 06.01.02: Implement dynamic key-value update helper
Implemented `handleFieldChange(path, value)`. This helper splits a string path (e.g. `'hero.brand'`), traverses `localContent`, and updates the target field.

#### ◼️ Step 06.01.03: POST updates to `/api/content`
When the administrator clicks the **Save Changes** button, the panel performs a POST request to `/api/content` containing the `localContent` state. On success, it calls `updateContent(localContent)` to refresh the active site context in real-time.

#### ◼️ Step 06.01.04: Implement file upload handlers
Implemented a file input handler that posts selected images to `/api/upload`. The API returns the saved public URL, which is written to the image path field in state.

#### ◼️ Step 06.01.05: Add/Remove List Items
Created add and remove helpers to manage dynamic arrays (such as team members, partners, or project slides):
- `addListItem(listName, templateObject)`: pushes a blank data structure to the target list array.
- `removeListItem(listName, index)`: splices the item array, removing the selected item index.

#### ◼️ Step 06.01.06: Design UI Sidebar & Layout
The interface is styled using Tailwind CSS and Lucide React icons. It includes a responsive sidebar that toggles active editor tabs for all 10 areas of the site.
