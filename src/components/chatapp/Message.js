import React, { useEffect } from 'react'
import supabase from '@/lib/SupabaseConfig'

export default function Message(props) {
    // console.log(props)
    // async function Usersget(){
    //     console.log("message.author_id  "+props.message.author_id.toString())
    //     const { data, error } = await supabase.auth.admin.getUserById(props.message.author_id)
    //     if(error){
    //         console.log(error)
    //     }else{
    //         console.log(data)
    //     }
    // }

    // useEffect(()=>{
    //     Usersget();
    // },[])

  return (
    <div>
        <div className="chat chat-start">
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
    <div className="chat-footer opacity-50">
        Delivered
    </div>
    </div>
    </div>
  )
}
