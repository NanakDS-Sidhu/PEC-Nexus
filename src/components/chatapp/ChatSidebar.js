import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import supabase from '@/lib/SupabaseConfig';
import Link from 'next/link';

export default function ChatSidebar() {
  const { user, loading, signInWithGoogle, signOut}=useAuth()
  
  const [grps,setGrps]=useState([]);
  async function My_groups(){
    let { data: Chat_Members, error } = await supabase
    .from('Chat_Members')
    .select("*")
    .eq('User',user.id)
    if(error){
      console.log("Error!!",error)
    }else{
      // console.log(Chat_Members)
      setGrps(Chat_Members)
    }
  }

  async function Leave(group){
    const { data, error } = await supabase
    .from('Chat_Members')
    .delete()
    .eq('User',user.id)
    .eq('Group',group)
  }


  useEffect(()=>{
    My_groups()
  },[])


const Chat_Members = supabase.channel('custom-all-channel')
.on(
  'postgres_changes',
  { event: '*', schema: 'public', table: 'Chat_Members' },
  (payload) => {
    My_groups()
  }
)
.subscribe()

  return (
    <div className="h-full w-1/4">
            <h1><Link href="/group">Home</Link></h1>
      {
    grps.map((obj)=>{
      return(
        <div className='flex justify-between border-solid border-2 border-indigo-600 p-2'>
                <h1>
      <Link href={"/group/"+obj.Group.toString()}>{obj.Group}</Link>
      </h1>
      <button className="btn btn-active btn-accent" onClick={()=>{Leave(obj.Group)}}>Leave</button>
        </div>

      )
    })
    }
    </div>
  )
}
