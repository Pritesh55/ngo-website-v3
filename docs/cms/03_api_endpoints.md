# Step 03.00.00: API Endpoints (Content Read/Write & File Upload)

This document details the Next.js Route Handlers created to read, save, and upload assets.

---

### 📂 File Reference
- Read/Write API: [route.js](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/api/content/route.js)
- File Upload API: [route.js](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/api/upload/route.js)

---

### 🛠️ Implementation Steps

#### ◼️ Step 03.01.01: Implement Content GET Router
The GET method resolves the path to `src/data/content.json` using `path.join` and reads the file asynchronously using Node's `fs/promises`. It responds with a clean JSON payload.

#### ◼️ Step 03.01.02: Implement Content POST Router
The POST method receives the new JSON content payload sent by the Admin Panel, validates that it is a valid object, and writes it back to `content.json` using `fs.writeFile`, immediately refreshing the local content database.

#### ◼️ Step 03.01.03: Implement Upload POST Router
Created a file upload route to handle image uploads from file inputs:
1. Parses standard multi-part request payloads using `request.formData()`.
2. Extracted files are converted to memory buffers using `Buffer.from(arrayBuffer)`.
3. Ensures that the static folder path `public/uploads` exists via `fs.mkdir({ recursive: true })`.

#### ◼️ Step 03.01.04: Sanitize Filenames
Uploaded filenames are sanitized of special characters. We prepend a UNIX timestamp (`Date.now()`) to prevent conflicts if two images have the same name.

#### ◼️ Step 03.01.05: Write file to static directory
The buffer is written to the destination file. The API returns a success response with the relative URL `/uploads/filename`, which can be saved directly in `content.json`.
