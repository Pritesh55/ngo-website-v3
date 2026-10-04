# Online Admission Form Implementation (Documentation Record)

**Date:** 04 October 2026  
**Project:** NGO Website v3  
**Module:** Online Admission Form Facility (NGKRM Scheme - GSDM / Manav Kalyan Trust)  
**Route URL:** `/admission-form`  

---

## 📋 सारांश (Overview)

इस document में physical admission form (NGKRM Scheme - GSDM / Manav Kalyan Trust) को पूरी तरह digitalize करके online admission form facility बनाने के सभी steps, components, validation rules, storage logic और Supabase integration का संपूर्ण record दर्ज किया गया है।

---

## 📂 बनाई और संशोधित की गई Files (Files Affected)

1. **[`src/app/admission-form/page.js`](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/admission-form/page.js)**  
   नया page component जिसमें physical form के हूबहू layout, photo slot, real-time validations, conditional uploads, dynamic age calculation, unique atom comments और printable view शामिल है।

2. **[`src/app/api/admission/submit/route.js`](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/api/admission/submit/route.js)**  
   Next.js API route जो form submit होने पर sequential `Form No` और `Registration No` calculate करता है, data को Supabase table में insert करता है और local backup भी सुरक्षित रखता है।

3. **[`src/app/api/admission/draft/route.js`](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/app/api/admission/draft/route.js)**  
   API endpoint जो user द्वारा browser tab close करने पर `navigator.sendBeacon` के माध्यम से draft data को server पर सुरक्षित sync करता है।

4. **[`docs/supabase/02_admission_applications_schema.sql`](file:///c:/04-Github/ngo-websites/ngo-website-v3/docs/supabase/02_admission_applications_schema.sql)**  
   Supabase PostgreSQL table `admission_applications` की complete SQL schema, RLS policies और trigger script.

5. **[`src/components/header/menubar/menubar_v1.jsx`](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/header/menubar/menubar_v1.jsx)** & **[`src/components/header/Nav_btn.jsx`](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/components/header/Nav_btn.jsx)**  
   Navigation header और menubar में "Apply Online (Admission Form)" button और dropdown link जोड़ा गया ताकि user आसानी से page access कर सकें।

---

## 🛠️ Step-by-Step Details: क्या-क्या लागू किया गया

### ◼️ 1. Header & Live Metadata
* **Live Date & Place:**  
  Form के top पर live date (`dd/mm/yyyy`) और place `Ahmedabad` auto-fill होकर प्रदर्शित होते हैं।
* **Logos (144px x 144px) & Title:**  
  * **Left Logo:** Gujarat Skill Development Mission (GSDM) logo (`/images/partners-logo/gsdc-logo.png`) exact `144px x 144px` size में.
  * **Center Logo:** Manav Kalyan Trust Logo (`/Mkt-logo.svg`) exact `144px x 144px` size में.
  * Boxed title: `ADMISSION FORM`.
* **Passport Size Photo Slot:**  
  Desktop screens पर right side में और mobile screens पर center में photo upload slot रखा गया है, जिसमें live preview और delete/replace button उपलब्ध है।

---

### ◼️ 2. Automated Form No. & Registration No.
Course select करने पर Form No का prefix स्वचालित रूप से बदलता है:
* **Fashion Designer:** Prefix `FD_` (e.g. `FD_001`)
* **Boutique Manager:** Prefix `BM_` (e.g. `BM_001`)
* **Purchase Coordinator - Electronics:** Prefix `EPC_` (e.g. `EPC_001`)
* **Registration No:** Auto-increment format `MKT_001`, `MKT_002` आदि।

---

### ◼️ 3. Course Details & Automation
* **Course Selection:** Single select dropdown (Fashion Designer, Boutique Manager, Purchase Coordinator - Electronics).
* **Course Duration Automation:**
  * Fashion Designer => **6 Months (570 Hours)**
  * Boutique Manager => **6 Months (600 Hours)**
  * Purchase Coordinator - Electronics => **6 Months (510 Hours)**
* **Time Slot Dropdown:**
  1. `7:30 AM to 11:30 AM`
  2. `11:30 AM to 3:30 PM`
  3. `3:30 PM to 7:30 PM`

---

### ◼️ 4. Personal Details & Dynamic Age Validation
* **Full Name:** Text field जो input करते ही automatically **BLOCK LETTERS (Uppercase)** में convert होता है।
* **Date of Birth (DD/MM/YYYY):**  
  Field में direct typing और calendar icon दोनों से `DD/MM/YYYY` format में date दर्ज होती है (e.g. `15/08/2000`).
* **Dynamic Age Calculation:**  
  DOB enter होते ही exact age calculate होकर course validation rules से match होती है:
  * **Fashion Designer:** Minimum **20+ Years** आवश्यक
  * **Boutique Manager:** Minimum **23+ Years** आवश्यक
  * **Purchase Coordinator - Electronics:** Minimum **16+ Years** आवश्यक
* **Gender:** Default रूप से **Male** selected रहता है (dropdown options: Male, Female, Transgender).
* **Marital Status & Multiple Files Upload:**  
  यदि status "Married" चुना जाता है, तो "Upload Marriage Certificate Documents" का multiple upload component प्रकट होता है जिसमें multiple photos, PDFs या scanned documents upload किए जा सकते हैं।
* **Student Aadhaar Number & Multiple Files Upload:**  
  12 digit numeric validation. इसके नीचे "Upload Aadhaar Card Documents" field है जिसमें front, back या multi-page PDFs upload की जा सकती हैं।
* **Email & Phone Validation:**  
  * Email में `@gmail.com` होना अनिवार्य है।
  * Phone number में 10 digits होना अनिवार्य है।
* **Postal & Permanent Address (All-India Autocomplete with Gujarat Priority):**  
  * **State:** भारत का कोई भी State / UT टाइप किया जा सकता है। टाइप करते ही dropdown suggestions आते हैं, जिसमें **Gujarat (Priority #1)** सबसे ऊपर प्रदर्शित होता है।
  * **City:** भारत की कोई भी City टाइप की जा सकती है। Dropdown में Gujarat के सभी प्रमुख शहरों (Ahmedabad, Surat, Vadodara, Rajkot आदि) को **Gujarat Priority** के साथ शीर्ष पर रखा गया है।
  * **Area / Village:** छात्र अपने गांव या क्षेत्र का नाम टाइप कर सकते हैं। Ahmedabad और Gujarat के गांवों/इलाकों (Ghatlodia, Chandlodiya, Bopal, Sola आदि) की suggestions शीर्ष पर आती हैं।
  * **Pincode:** 6-digit numeric validation.
  * **Permanent Address:** "Same as Postal Address" checkbox.

---

### ◼️ 5. Education Qualification & Multiple Proofs Upload Facility
Single select dropdown options:
* `Level 1) 10th pass`
* `Level 2) 12th pass`
* `Level 3) Diploma (03 years) after 10th`
* `Level 4) UnderGraduate Degree (UG) (3 years or 4 years)`

**Validation Rules vs Course:**
* Fashion Designer => Minimum Level 2 (12th Pass) या Level 3 (Diploma) आवश्यक.
* Boutique Manager => Minimum Level 4 (UnderGraduate Degree UG) आवश्यक.
* Purchase Coordinator - Electronics => Minimum Level 1 (10th pass) आवश्यक.

**Multiple Proofs Upload (Photos, PDFs, Documents):**
प्रत्येक proof के लिए user **multiple files** (images, PDF files, marksheets, certificates) एक साथ या एक-एक करके upload कर सकते हैं:
* **Level 1:** Multiple School leaving certificate files + Multiple 10th marksheet files + Year of passing.
* **Level 2:** Multiple School leaving certificate files + Multiple 10th marksheet files + Multiple 12th marksheet files + Year of passing.
* **Level 3:** Multiple School leaving certificate files + Multiple 10th marksheet files + Multiple Diploma marksheets & passing certificates + Year of passing.
* **Level 4:** Multiple School leaving certificate files + Multiple 10th marksheet files + Multiple 12th marksheet files + Multiple UG Degree certificates / marksheets + Year of passing.
* **Uploaded Files List & Preview:**  
  हर uploaded file का preview thumbnail (images के लिए) या PDF badge, filename, file size और delete button प्रदर्शित होता है।
* **Education History Table:**  
  Physical form के अनुसार अंतिम column (Division / Grade) को हटा दिया गया है। अब table में केवल 3 columns हैं:  
  `Exam Passed` | `Board / University` | `Year of Passing`

---

### ◼️ 6. Terms, Declaration & Signatures
* **Physical Required Documents Checklist:** Physical verification के समय ले जाने वाले 7 documents की सूची का clear visual box.
* **Terms and Conditions:** Physical form के सभी 8 नियम व शर्तें।
* **Mandatory Declaration Checkbox:**  
  *"I hereby declare that the information given in this application form is true to the best of my knowledge and belief. And I have read all the rules and regulation and promise to abide by it."*  
  बिना इस checkbox को टिक किए form submit नहीं किया जा सकता.
* **Signatures (Both Physical):**  
  * **Signature of Parents / Guardians:** `(Sign physically upon verification)`
  * **Signature of Applicant:** `(Sign physically upon verification)`

---

### ◼️ 7. Unique Atom Comments & Code Structure
Page के प्रत्येक element / component / field को unique comment और `data-atom-id` attribute दिया गया है ताकि browser DevTools से Inspect Element करके code में उस atom को 1 second में ढूँढा जा सके:
* `data-atom-id="TOP_BANNER_NAVIGATION"`
* `data-atom-id="SUCCESS_MODAL_SCREEN"`
* `data-atom-id="HEADER_SECTION"`
* `data-atom-id="HEADER_LIVE_METADATA_DATE_PLACE"`
* `data-atom-id="LOGO_GSDM_LEFT"` (144px x 144px)
* `data-atom-id="LOGO_MKT_CENTER_AND_TITLES"` (144px x 144px)
* `data-atom-id="PASSPORT_PHOTO_BOX"`
* `data-atom-id="FIELD_FORM_NO"`
* `data-atom-id="FIELD_REGISTRATION_NO"`
* `data-atom-id="FIELD_COURSE_NAME"`
* `data-atom-id="FIELD_COURSE_DURATION"`
* `data-atom-id="FIELD_TIME_SLOT"`
* `data-atom-id="FIELD_FULL_NAME"`
* `data-atom-id="FIELD_DATE_OF_BIRTH"`
* `data-atom-id="FIELD_GENDER"`
* `data-atom-id="FIELD_FATHERS_NAME"`
* `data-atom-id="FIELD_MOTHERS_NAME"`
* `data-atom-id="FIELD_FATHERS_OCCUPATION"`
* `data-atom-id="FIELD_MARITAL_STATUS"`
* `data-atom-id="FIELD_MARRIAGE_CERTIFICATE_UPLOAD"`
* `data-atom-id="FIELD_CAST_CATEGORY"`
* `data-atom-id="FIELD_AADHAAR_NO"`
* `data-atom-id="FIELD_AADHAAR_PHOTOS_UPLOAD"`
* `data-atom-id="FIELD_CONTACT_NUMBER"`
* `data-atom-id="FIELD_FATHER_NUMBER"`
* `data-atom-id="FIELD_EMAIL"`
* `data-atom-id="FIELD_ADDRESS_FLAT_SOCIETY"`
* `data-atom-id="FIELD_ADDRESS_STREET_ROAD"`
* `data-atom-id="FIELD_ADDRESS_LANDMARK"`
* `data-atom-id="FIELD_ADDRESS_AREA_VILLAGE"`
* `data-atom-id="FIELD_ADDRESS_CITY"`
* `data-atom-id="FIELD_ADDRESS_PINCODE"`
* `data-atom-id="FIELD_ADDRESS_AREA_VILLAGE"`
* `data-atom-id="FIELD_ADDRESS_CITY"`
* `data-atom-id="FIELD_ADDRESS_STATE_WRAPPER"`
* `data-atom-id="FIELD_ADDRESS_STATE"`
* `data-atom-id="FIELD_ADDRESS_PERMANENT"`
* `data-atom-id="FIELD_EDUCATION_LEVEL"`
* `data-atom-id="FIELD_YEAR_OF_PASSING"`
* `data-atom-id="CONDITIONAL_PROOFS_UPLOAD_CARDS"`
* `data-atom-id="TABLE_EDUCATION_HISTORY"`
* `data-atom-id="BOX_PHYSICAL_DOCUMENTS_CHECKLIST"`
* `data-atom-id="SECTION_TERMS_AND_CONDITIONS"`
* `data-atom-id="CHECKBOX_DECLARATION"`
* `data-atom-id="SIGNATURE_PARENTS"`
* `data-atom-id="SIGNATURE_APPLICANT"`
* `data-atom-id="FOOTER_DATE_PLACE"`
* `data-atom-id="BUTTON_SUBMIT"`

---

## ⚡ All-India Smart Pincode Auto-Detection Feature
### 1. API Endpoint: `/api/pincode?code=[6-digit-pin]`
- **Indian Postal Registry Integration**: India Post open postal database (`https://api.postalpincode.in/pincode/[pin]`) से भारत के सभी ~19,000+ PIN codes का data fetch करता है।
- **Local Fast Cache**: Gujarat के मुख्य PIN codes (Ahmedabad, Surat, Vadodara, Rajkot, Sanand, Gandhinagar) के लिए 0ms instant local dictionary।
- **In-Memory Cache Layer**: Re-lookups के लिए fast in-memory `Map` cache।
- **Smart Sorting**: Head Post Office और Sub Post Office को priority देकर primary village/city select करता है, और branch post offices (गाँव) को list में जोड़ता है।

### 2. Frontend Automation & Contextual Dropdowns:
- **Instant Auto-Fill from PIN Code**: जैसे ही user 6 digits type करता है:
  1. `state` (राज्य) automatically select हो जाता है।
  2. `city` (जिला / शहर) automatically select हो जाता है।
  3. `area_village` (गाँव / क्षेत्र) automatically primary post office name से fill हो जाता है।
- **No Priority Announcement**: User interface में किसी भी प्रकार का "Priority" badge या text announce नहीं किया गया है। यह पूरी तरह internal smart sorting के तहत कार्य करता है।
- **Scrollable State Dropdown**: State dropdown open करने पर भारत के सभी 36 States व Union Territories scrollable list में उपलब्ध हैं:
  1. Gujarat (सबसे पहले)
  2. Gujarat के निकटवर्ती राज्य (Maharashtra, Rajasthan, Madhya Pradesh, Dadra & Nagar Haveli & Daman & Diu, Goa)
  3. अन्य सभी राज्य व UTs (वर्णमाला / alphabetical क्रम में)
- **Cascading Contextual City Suggestions**: जब कोई State select किया जाता है, तो City dropdown में सबसे पहले उस selected State के सभी शहर / जिले suggest होते हैं, उसके बाद अन्य राज्यों के शहर आते हैं।
- **Cascading Contextual Village Suggestions**: जब कोई City select की जाती है, तो Village dropdown में सबसे पहले उस City के सभी गाँव / क्षेत्र suggest होते हैं, उसके बाद उस State के अन्य गाँव, फिर शेष भारत।
- **Pincode Specific Villages**: PIN code enter करने पर उस विशिष्ट PIN code के सभी डाकघर/गाँव Village dropdown में सबसे शीर्ष पर प्रदर्शित होते हैं।

---

## 📌 Status Checklist
- [x] Middle logo को `public/Mkt-logo.svg` से replace किया गया
- [x] Both logos का size exact `144px x 144px` set किया गया
- [x] Date of birth format `dd/mm/yyyy` set किया गया (with calendar picker helper)
- [x] Default Gender `Male` किया गया
- [x] Education table से `Division / Grade` column हटा दिया गया (3 columns remaining)
- [x] Signature of Applicant को `(Sign physically upon verification)` किया गया
- [x] Multiple documents upload (Aadhaar, Marriage Certificate, Education marksheets/degrees) enable किया गया
- [x] All-India Pincode auto-detection API (`/api/pincode`) implement किया गया
- [x] Pincode enter करते ही State, City और Village auto-select होने की functionality implement की गई
- [x] User interface से सभी 'Priority' badges/announcements हटा दिए गए (silent background sorting)
- [x] State dropdown में सभी 36 States/UTs scrollable list में Gujarat व निकटवर्ती राज्यों की internal priority के साथ जोड़े गए
- [x] State select होने पर City dropdown में उस राज्य के शहर पहले suggest होने की cascading logic जोड़ी गई
- [x] City select होने पर Village dropdown में उस शहर/जिले के गाँव पहले suggest होने की cascading logic जोड़ी गई
- [x] All-India Cities/Districts dataset ([`src/data/all_india_cities.json`](file:///c:/04-Github/ngo-websites/ngo-website-v3/src/data/all_india_cities.json)) create किया गया (843 cities/districts across 36 States/UTs, जिसमें Uttar Pradesh के सभी 79 शहर व जिले शामिल हैं)
- [x] सभी elements को unique atom comments और `data-atom-id` से tag किया गया
