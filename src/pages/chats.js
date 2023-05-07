import Chat from '@/components/chatapp/Chat'
import ChatList from '@/components/chatapp/ChatList'
import React, { useEffect } from 'react'

export default function chats() {
  useEffect(()=>{
    window.scrollTo(0, document.body.scrollHeight)
  })
  return (
    <div>
      <ChatList></ChatList>
      <Chat></Chat>
    </div>
  )
}
