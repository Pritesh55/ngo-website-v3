# Step 02.00.00: CMS Context Provider (`CMSContext.jsx`)

This document details how the global context was implemented to load dynamic content and lookup variables in real-time.

---

### 📂 File Reference
- Context Provider: [CMSContext.jsx](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/context/CMSContext.jsx)
- Root Layout Wrapper: [layout.js](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/layout.js)

---

### 🛠️ Implementation Steps

#### ◼️ Step 02.01.01: Initialize Context Object
Created the context instance `CMSContext` using React's `createContext()` to share content state throughout the application.

#### ◼️ Step 02.01.02: Fetch Content on Mount
Within the `CMSProvider`, set up a `useEffect` hook to run once when the application mounts. It performs an asynchronous `fetch('/api/content')` call, which returns the current database state from `content.json`.

#### ◼️ Step 02.01.03: Declare Content States
Managed the fetched data in `allContent` state. We also defined an `updateContent()` callback function to let the Admin Dashboard push saved changes to the active screen context in real-time.

#### ◼️ Step 02.01.04: Implement lookup helper `t()`
Created the lookup helper function `t(path)` to drill down into the nested context object tree:
1. Splits path string by dots (`'hero.title'` -> `['hero', 'title']`).
2. Iterates through the keys on `allContent` database.
3. Returns the value or an empty string `""` fallback if the key path does not exist.

#### ◼️ Step 02.01.05: Wrap children globally
Passed values (`t`, `allContent`, `updateContent`) to the provider wrapper and integrated `<CMSProvider>` inside `layout.js` enclosing the root layout's `<body>`.
