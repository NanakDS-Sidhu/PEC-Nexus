import Chat from '@/components/chatapp/Chat'
import ChatList from '@/components/chatapp/ChatList'
import React from 'react'

export default function chats() {
  return (
    <div>
      <ChatList></ChatList>
      <Chat></Chat>
    </div>
  )
}
