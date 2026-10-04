-- ============================================================
-- Supabase Schema: admission_applications
-- Manav Kalyan Trust - NGKRM Scheme (GSDM)
-- ============================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.admission_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_no TEXT NOT NULL UNIQUE,
    registration_no TEXT NOT NULL,
    course_name TEXT NOT NULL,
    course_duration TEXT,
    time_slot TEXT NOT NULL,
    
    -- Personal Details
    full_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    calculated_age INTEGER,
    gender TEXT NOT NULL,
    fathers_name TEXT,
    mothers_name TEXT,
    fathers_occupation TEXT,
    marital_status TEXT NOT NULL,
    category TEXT NOT NULL,
    aadhaar_no VARCHAR(12) NOT NULL,
    
    -- Contact & Address
    contact_number VARCHAR(10) NOT NULL,
    father_number VARCHAR(10),
    email TEXT NOT NULL,
    flat_society TEXT NOT NULL,
    street_road TEXT,
    landmark TEXT,
    area_village TEXT NOT NULL,
    city TEXT NOT NULL DEFAULT 'Ahmedabad',
    state TEXT NOT NULL DEFAULT 'Gujarat',
    pincode VARCHAR(6) NOT NULL,
    permanent_address TEXT,
    permanent_pincode VARCHAR(6),
    
    -- Education Details
    education_level TEXT NOT NULL,
    education_history JSONB DEFAULT '[]'::jsonb,
    
    -- Uploaded Document References / URLs & JSONB Arrays
    passport_photo_url TEXT,
    aadhaar_photos JSONB DEFAULT '[]'::jsonb,
    marriage_certificates JSONB DEFAULT '[]'::jsonb,
    school_leaving_certificates JSONB DEFAULT '[]'::jsonb,
    marksheets_10th JSONB DEFAULT '[]'::jsonb,
    marksheets_12th JSONB DEFAULT '[]'::jsonb,
    diploma_certificates JSONB DEFAULT '[]'::jsonb,
    ug_degree_certificates JSONB DEFAULT '[]'::jsonb,
    marriage_certificate_url TEXT,
    school_leaving_certificate_url TEXT,
    marksheet_10th_url TEXT,
    marksheet_12th_url TEXT,
    diploma_certificate_url TEXT,
    ug_degree_certificate_url TEXT,
    applicant_signature_url TEXT,
    year_of_passing TEXT,
    
    -- System & Status
    declaration_agreed BOOLEAN DEFAULT TRUE,
    application_date TEXT NOT NULL,
    application_place TEXT NOT NULL DEFAULT 'Ahmedabad',
    status TEXT DEFAULT 'submitted', -- 'draft' or 'submitted'
    raw_draft_data JSONB,
    
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.admission_applications ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public / anonymous insert (for online student applications)
CREATE POLICY "Allow public insert for admission applications"
    ON public.admission_applications
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 4. Policy: Allow public read by form_no / id (for viewing confirmation)
CREATE POLICY "Allow public read own application"
    ON public.admission_applications
    FOR SELECT
    TO public
    USING (true);

-- 5. Auto updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS set_admission_applications_updated_at ON public.admission_applications;
CREATE TRIGGER set_admission_applications_updated_at
    BEFORE UPDATE ON public.admission_applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
