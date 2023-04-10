import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://djwsvisvriprqmnebcmz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqd3N2aXN2cmlwcnFtbmViY216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3ODg5NzksImV4cCI6MTk5NjM2NDk3OX0.QX8xElb8nrPmixK56kf0tQYUNnwIjWc95LmC3IWkD2I'

const supabase = createClient(supabaseUrl, supabaseKey)


export default function Home() {
  async function get_data(){
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
  }

  get_data()
  return (
    <>
    <h1 className=" bg-orange-300">HI </h1>
    <></>
    </>
  )
}
