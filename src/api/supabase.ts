import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.SUPABASE_HOST as string, process.env.SUPABASE_KEY as string)