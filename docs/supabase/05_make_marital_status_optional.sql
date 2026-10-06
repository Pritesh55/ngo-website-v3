-- ============================================================
-- Supabase Schema Update: Make marital_status Optional
-- Run in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- ============================================================

-- Make marital_status column optional (nullable)
ALTER TABLE public.admission_applications 
ALTER COLUMN marital_status DROP NOT NULL;
