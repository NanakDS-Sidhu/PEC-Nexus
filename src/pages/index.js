import { useAuth } from '@/context/AuthContext';
import NavBar from '../components/Navbar/Navbar'
import supabase from '@/lib/SupabaseConfig';
import { useEffect } from 'react';
export default function Home() {
  const { user, loading, signInWithGoogle, signOut} =useAuth()
  
  async function checkUserProfile(user){
    let { data: Profiles, error } = await supabase
    .from('Profiles')
    .select("*")
    .eq('User_id',user.id)

    if (error) {
      console.log('Error checking user profile:', error);
      return;
    }

    if (Profiles.length === 0) {
      const { data, error } = await supabase
      .from('Profiles')
      .insert([
        { User_id : user.id , User_name : user.email, Profile_image:user.user_metadata.avatar_url},
      ])

      // Replace 'user_id' with the actual column name in your user profile table
        // Replace additionalData with any additional columns and values you want to insert
      if (error) {
        console.log('Error creating user profile:', error);
        return;
      }
      console.log('User profile created successfully!');
    } else {
      console.log('User profile already exists.');
    }
  }

  useEffect(()=>{
    if(user){
      checkUserProfile(user)
      // console.log(user)
    }else{
      console.log("waiting for user")
    }
  })

  return (
    <>
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </>
  )
}
// locolhost:3000/
