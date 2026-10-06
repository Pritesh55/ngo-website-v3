-- ============================================================
-- Supabase Schema Update: Add PG Certificate Columns
-- Run in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- ============================================================

-- 1. Add pg_degree_certificates JSONB column
ALTER TABLE public.admission_applications 
ADD COLUMN IF NOT EXISTS pg_degree_certificates JSONB DEFAULT '[]'::jsonb;

-- 2. Add pg_degree_certificate_url TEXT column
ALTER TABLE public.admission_applications 
ADD COLUMN IF NOT EXISTS pg_degree_certificate_url TEXT;

-- 3. Verify columns added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'admission_applications' 
  AND column_name IN ('pg_degree_certificates', 'pg_degree_certificate_url');
