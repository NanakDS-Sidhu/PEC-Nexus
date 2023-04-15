import NavBar from '../components/Navbar/Navbar'
import supabase from '@/lib/SupabaseConfig';
export default function Home() {
  async function fileDownload(){
    const { data, error } = await supabase.storage.from('public').download('Post_Images/JK/Predator_3840x2160.jpg?t=2023-04-12T11%3A53%3A47.589Z')
    https://djwsvisvriprqmnebcmz.supabase.co/storage/v1/object/public/Post_Images/JK/Predator_3840x2160.jpg?t=2023-04-12T11%3A53%3A47.589Z
    console.log(data);
  }
  return (
    <>
    <h1 onClick={fileDownload}>Home Page</h1>

    </>
  )
}
