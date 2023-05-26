import GroupJoin from '@/components/chatapp/GroupJoin'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import ChatSidebar from '@/components/chatapp/ChatSidebar'

export default function index() {
    const { user, loading, signInWithGoogle, signOut} =useAuth()

  return (
<>
{user?<div className='flex'>
        <ChatSidebar></ChatSidebar>
        <div className="grow"><GroupJoin></GroupJoin>
      </div>
        </div>:    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error</h1>
          <p className="py-6"> Login to see the chats</p>
        </div>
      </div>
    </div>}
</>
  )
}
