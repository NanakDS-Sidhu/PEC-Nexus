import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react'
import supabase from '@/lib/SupabaseConfig';

export default function GroupJoin() {
    const { user, loading, signInWithGoogle, signOut} =useAuth()
    const [groups,setGroups]=useState([]);

    async function GroupsGet(){
        let { data: Chat_Groups, error } = await supabase
        .from('Chat_Groups')
        .select('*')
        setGroups(Chat_Groups);
    }

    async function Join(group){
        const { data, error } = await supabase
        .from('Chat_Members')
        .insert([
        { User: user.id, Group:group},
        ])

    }

    useEffect(()=>{
        GroupsGet()
    },[])
  return (
    <div className='grow grid grid-cols-2 -z-30'>
      {groups.map((group)=>{
        return(
            <div className='flex'>
                <div className="card lg:card-side bg-base-100 shadow-xl max-h-56 m-8 max-w-md min-w-min" >
                <figure><img src="https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{group.Group_Name}</h2>
                    <p>{group.Description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>(Join(group.id))}>Join</button>
                    </div>
  </div>
</div>
            </div>
        )
      })}
    </div>
  )
}
