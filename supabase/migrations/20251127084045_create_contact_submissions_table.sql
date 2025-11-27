/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Contact person's full name
      - `email` (text, required) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `company_name` (text, optional) - Business/company name
      - `message` (text, required) - Message or inquiry details
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Status of the inquiry (new, in_progress, resolved)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert submissions
    - Add policy for authenticated admin users to view all submissions
  
  3. Notes
    - Anonymous users can submit contact forms
    - Only authenticated users (admin) can view submissions
    - Default status is 'new' for all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);