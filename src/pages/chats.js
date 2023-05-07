import Chat from '@/components/chatapp/Chat'
import ChatList from '@/components/chatapp/ChatList'
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'

export default function chats() {
  const { user, loading, signInWithGoogle, signOut} =useAuth()
  return (
    <div>
      {user?<>
        <ChatList></ChatList>
      <Chat></Chat>
      </>:    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error</h1>
          <p className="py-6"> Login to see the chats</p>
        </div>
      </div>
    </div>}
    </div>
  )
}
