/*
# Create booking tables for Basilic restaurant

1. New Tables
- `table_reservations` — table booking requests from the website
  - id (uuid, primary key)
  - name (text, guest name)
  - phone (text, contact phone)
  - date (date, reservation date)
  - time (time, reservation time)
  - guests (int4, number of guests)
  - comment (text, optional comment)
  - status (text, default 'new')
  - created_at (timestamptz)
- `event_requests` — banquet/event booking requests
  - id (uuid, primary key)
  - name (text, contact name)
  - phone (text, contact phone)
  - event_date (date, event date)
  - guests (int4, number of guests)
  - event_type (text, type of event: wedding, birthday, etc.)
  - comment (text, optional comment)
  - status (text, default 'new')
  - created_at (timestamptz)
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated to INSERT (public booking form, no sign-in).
- No SELECT/UPDATE/DELETE for anon (only server-side management).
*/

CREATE TABLE IF NOT EXISTS table_reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  guests int4 NOT NULL DEFAULT 2,
  comment text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE table_reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_table_reservations" ON table_reservations;
CREATE POLICY "anon_insert_table_reservations"
ON table_reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS event_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  event_date date,
  guests int4,
  event_type text NOT NULL,
  comment text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE event_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_event_requests" ON event_requests;
CREATE POLICY "anon_insert_event_requests"
ON event_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
