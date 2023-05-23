import React, { useEffect, useState } from 'react'
import Message from './Message'
import supabase from '@/lib/SupabaseConfig'

export default function ChatList() {
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        get_messages()
    },[])
    async function get_messages(){
        let { data: Chat_Messages, error } = await supabase
        .from('Chat_Messages')
        .select('*')
        setMessages(Chat_Messages)
        if(error){
            console.log(error)
        }
    }

    supabase
    .channel('any')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'Chat_Messages' }, payload => {
      get_messages()
    })
    .subscribe()
  return (
    <div className='py-16 px-4 from-primary to-secondary bg-gradient-to-br' >
        {messages.map((message)=>{
            return (
                <Message message={message}></Message>
            )
        })}
    </div>
  )
}
