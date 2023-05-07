import React, { useEffect, useState } from 'react'
import supabase from '@/lib/SupabaseConfig'
import { useAuth } from '@/context/AuthContext'

export default function Message(props) {
  const { user, loading, signInWithGoogle, signOut} =useAuth()
  const[mine,setMine]=useState(false)

  useEffect(()=>{
    if(props.message.author_id===user.id){
      setMine(true)
    }
  },[])
  // console.log(props.message,user)
  return (
    <div>
        <div className={mine?"chat chat-end":"chat chat-start"}>
    <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img src="https://images.unsplash.com/photo-1548291616-bfccc8db731d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
        </div>
    </div>
    <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
    </div>
    <div className="chat-bubble">{props.message.Content}</div>
    </div>
    </div>
  )
}
