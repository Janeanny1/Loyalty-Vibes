import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://chznfjglrqyabfkadcgz.supabase.co', 
  'enter your-supabase-anon-key-here' 
)

