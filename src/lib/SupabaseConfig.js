import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
const supabaseUrl = 'https://djwsvisvriprqmnebcmz.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqd3N2aXN2cmlwcnFtbmViY216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3ODg5NzksImV4cCI6MTk5NjM2NDk3OX0.QX8xElb8nrPmixK56kf0tQYUNnwIjWc95LmC3IWkD2I'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;