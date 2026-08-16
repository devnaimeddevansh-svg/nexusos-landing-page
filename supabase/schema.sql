-- NexusOS Waitlist Database Schema
-- Run this in your Supabase SQL Editor

-- Registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  referral_source TEXT DEFAULT 'direct',
  is_founding_member BOOLEAN DEFAULT FALSE NOT NULL
);

-- Index for fast email lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations (email);

-- Index for founding member counts
CREATE INDEX IF NOT EXISTS idx_registrations_founding ON registrations (is_founding_member) WHERE is_founding_member = TRUE;

-- Page visits table
CREATE TABLE IF NOT EXISTS page_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  referrer TEXT,
  user_agent TEXT
);

-- Index for visit counting
CREATE INDEX IF NOT EXISTS idx_page_visits_created_at ON page_visits (created_at);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

-- No public policies — all access goes through API routes using the service role key
