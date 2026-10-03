import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ReservationStatus = 'new' | 'pending' | 'confirmed' | 'rejected' | 'cancelled';

export type Reservation = {
  id?: string;
  date: string;
  start_time: string;
  end_time: string | null;
  guest_count: number;
  table_ids: number[];
  combination_id: string | null;
  customer_name: string;
  phone: string;
  comment?: string;
  status?: ReservationStatus;
  created_at?: string;
};

// Legacy types kept for backward compatibility
export type TableReservation = {
  id?: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  comment?: string;
  status?: string;
  created_at?: string;
};

export type EventRequest = {
  id?: string;
  name: string;
  phone: string;
  event_date?: string;
  guests?: number;
  event_type: string;
  comment?: string;
  status?: string;
  created_at?: string;
};
