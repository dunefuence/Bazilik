/*
# Create booking system tables for Basilic restaurant

This migration replaces the old simple table_reservations schema with a full
booking system that supports table selection, table combinations, and
admin-managed reservation statuses.

1. New Tables
- `restaurant_tables` — static configuration of each physical table in the hall
  - id (int4, primary key) — table number (1-12)
  - capacity (int4) — max guests at this table
  - default_duration_hours (int4, nullable) — standard booking duration; null means admin sets per-reservation
  - reservable (boolean) — whether this table can be booked (false for bar)
  - combinable_with (int4[]) — array of table IDs this table can be combined with
  - position_x (numeric) — X position on floor plan (percentage 0-100)
  - position_y (numeric) — Y position on floor plan (percentage 0-100)
  - shape (text) — visual shape: 'square', 'rectangle', 'circle', 'bar'
  - width (numeric) — visual width on floor plan (percentage)
  - height (numeric) — visual height on floor plan (percentage)
  - label (text) — display label, e.g. "Бар" for table 12
- `table_combinations` — predefined legal table groupings
  - id (uuid, primary key)
  - table_ids (int4[]) — array of table numbers in this combination
  - capacity_min (int4) — minimum guests for this combination
  - capacity_max (int4) — maximum guests for this combination
  - requires_admin_confirmation (boolean) — if true, guest request needs admin approval
  - label (text) — display label, e.g. "Столы 3+4+5"
- `reservations` — individual booking requests from guests
  - id (uuid, primary key)
  - date (date) — requested reservation date
  - start_time (text) — start time, e.g. "19:00"
  - end_time (text) — end time, e.g. "22:00" (admin can override)
  - guest_count (int4) — number of guests
  - table_ids (int4[]) — array of table numbers reserved
  - combination_id (uuid, nullable) — FK to table_combinations if a combo was selected
  - customer_name (text) — guest name
  - phone (text) — contact phone
  - comment (text, optional) — guest comment
  - status (text) — one of: new, pending, confirmed, rejected, cancelled
  - created_at (timestamptz)

2. Modified Tables
- `table_reservations` — kept for backward compatibility (old simple form data)
  No changes; new reservations go to the `reservations` table instead.

3. Security
- `restaurant_tables`: Enable RLS. Allow anon + authenticated SELECT (public info
  about table layout). No INSERT/UPDATE/DELETE for anon (admin-only).
- `table_combinations`: Enable RLS. Allow anon + authenticated SELECT. No writes for anon.
- `reservations`: Enable RLS. Allow anon + authenticated INSERT (public booking form).
  No SELECT/UPDATE/DELETE for anon (admin-only, prevents leaking other guests' data).

4. Seed Data
- Inserts all 12 tables with their real capacities, positions, shapes, and combinable_with arrays.
- Inserts the 4 legal combinations: 1+2, 8+9, 10+11, 3+4+5.
*/

-- ===== restaurant_tables =====
CREATE TABLE IF NOT EXISTS restaurant_tables (
  id int4 PRIMARY KEY,
  capacity int4 NOT NULL,
  default_duration_hours int4,
  reservable boolean NOT NULL DEFAULT true,
  combinable_with int4[] NOT NULL DEFAULT '{}',
  position_x numeric NOT NULL DEFAULT 50,
  position_y numeric NOT NULL DEFAULT 50,
  shape text NOT NULL DEFAULT 'square',
  width numeric NOT NULL DEFAULT 10,
  height numeric NOT NULL DEFAULT 10,
  label text
);

ALTER TABLE restaurant_tables ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_restaurant_tables" ON restaurant_tables;
CREATE POLICY "anon_select_restaurant_tables"
ON restaurant_tables FOR SELECT
TO anon, authenticated USING (true);

-- ===== table_combinations =====
CREATE TABLE IF NOT EXISTS table_combinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  table_ids int4[] NOT NULL,
  capacity_min int4 NOT NULL,
  capacity_max int4 NOT NULL,
  requires_admin_confirmation boolean NOT NULL DEFAULT false,
  label text NOT NULL
);

ALTER TABLE table_combinations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_table_combinations" ON table_combinations;
CREATE POLICY "anon_select_table_combinations"
ON table_combinations FOR SELECT
TO anon, authenticated USING (true);

-- ===== reservations =====
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  start_time text NOT NULL,
  end_time text,
  guest_count int4 NOT NULL,
  table_ids int4[] NOT NULL,
  combination_id uuid REFERENCES table_combinations(id) ON DELETE SET NULL,
  customer_name text NOT NULL,
  phone text NOT NULL,
  comment text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- ===== Seed: restaurant_tables =====
INSERT INTO restaurant_tables (id, capacity, default_duration_hours, reservable, combinable_with, position_x, position_y, shape, width, height, label) VALUES
  (1,  6, 4, true,  '{2}',       72, 78, 'square',    12, 10, NULL),
  (2,  6, 4, true,  '{1}',       72, 22, 'square',    12, 10, NULL),
  (3,  4, 3, true,  '{4,5}',     30, 12, 'square',    10, 10, NULL),
  (4,  4, 3, true,  '{3,5}',     48, 12, 'square',    10, 10, NULL),
  (5,  4, 3, true,  '{3,4}',     66, 12, 'square',    10, 10, NULL),
  (6,  2, NULL, true,  '{}',      28, 42, 'square',    8,  8,  NULL),
  (7,  2, NULL, true,  '{}',      42, 42, 'square',    8,  8,  NULL),
  (8,  4, 3, true,  '{9}',       58, 42, 'square',    10, 10, NULL),
  (9,  4, 3, true,  '{8}',       74, 42, 'square',    10, 10, NULL),
  (10, 4, 3, true,  '{11}',      28, 72, 'square',    10, 10, NULL),
  (11, 2, NULL, true,  '{10}',     44, 72, 'square',    8,  8,  NULL),
  (12, 0, NULL, false, '{}',       50, 92, 'rectangle', 60, 5,  'Бар')
ON CONFLICT (id) DO NOTHING;

-- ===== Seed: table_combinations =====
INSERT INTO table_combinations (table_ids, capacity_min, capacity_max, requires_admin_confirmation, label) VALUES
  ('{1,2}',      12, 13, false, 'Столы 1+2'),
  ('{8,9}',      8,  8,  false, 'Столы 8+9'),
  ('{10,11}',    6,  6,  false, 'Столы 10+11'),
  ('{3,4,5}',   14, 16, true,  'Столы 3+4+5')
ON CONFLICT DO NOTHING;
