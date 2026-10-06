-- ============================================================
-- Fix RLS Policies for admission_applications
-- Enables DELETE and UPDATE operations for enrolled students management
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- ============================================================

-- 1. Allow DELETE policy for admission_applications
DROP POLICY IF EXISTS "Allow public delete for admission applications" ON public.admission_applications;
CREATE POLICY "Allow public delete for admission applications"
    ON public.admission_applications
    FOR DELETE
    TO public
    USING (true);

-- 2. Allow UPDATE policy for admission_applications
DROP POLICY IF EXISTS "Allow public update for admission applications" ON public.admission_applications;
CREATE POLICY "Allow public update for admission applications"
    ON public.admission_applications
    FOR UPDATE
    TO public
    USING (true)
    WITH CHECK (true);

-- 3. Verify policies on admission_applications
SELECT policyname, cmd, roles, qual, with_check 
FROM pg_policies 
WHERE tablename = 'admission_applications';
