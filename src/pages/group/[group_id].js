import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import ChatList from '@/components/chatapp/ChatList';
import Chat from '@/components/chatapp/Chat';
import ChatSidebar from '@/components/chatapp/ChatSidebar';

export default function Group_page() {
    const router = useRouter()
    const group_id =router.query.group_id;
    const { user, loading, signInWithGoogle, signOut} =useAuth()

  return (
    <div>
      {user?<div className='flex'>
        <ChatSidebar></ChatSidebar>
        <div className="grow h-full overflow-scroll"><ChatList group={group_id}></ChatList>
        <Chat group={group_id}></Chat>
      </div>
        </div>:    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error</h1>
          <p className="py-6"> Login to see the chats</p>
        </div>
      </div>
    </div>}
    </div>)
}
