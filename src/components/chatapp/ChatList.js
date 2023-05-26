import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import supabase from '@/lib/SupabaseConfig'

export default function ChatList(props) {
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        get_messages()
    })
    async function get_messages(){
        let { data: Chat_Messages, error } = await supabase
        .from('Chat_Messages')
        .select('*')
        .eq("Group",props.group)
        setMessages(Chat_Messages)
        if(error){
            console.log(error)
        }
    }

    supabase
    .channel('any')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Chat_Messages' }, payload => {
      get_messages()
      goToBottom()
    })
    .subscribe()

  return (
    <>
    {messages?<div className=' px-4 from-primary to-secondary bg-gradient-to-br h-screen' >
    {messages.map((message)=>{
        return (
            <Message message={message}></Message>
        )
    })}
    </div>:"Loading"}</>
  )
}
