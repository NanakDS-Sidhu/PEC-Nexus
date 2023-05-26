import React, { useState } from 'react'
import supabase from '@/lib/SupabaseConfig';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/context/AuthContext';

export default function Chat(props) {
    const { register, handleSubmit,resetField} = useForm();
    const { user, loading, signInWithGoogle, signOut}=useAuth()
        // const [message,setMessage]=useState("");
        async function create_message(d){
            const { data: { user } } = await supabase.auth.getUser()
            if(d.content!=""){
                const { data, error } = await supabase
                .from('Chat_Messages')
                .insert([
                { Content:d.Content,author_id:user.id,Group:props.group},
                ])
                if(error){
                    console.log(error)
                }else{
                    resetField("Content");
                }
                }else{
                alert("Empty message")
                }
        }
  return (
    <div className="glass">
    <form onSubmit={handleSubmit(create_message)} className='flex justify-around'>
    <input type="text" placeholder="Type here" className="input w-full m-2"  {...register("Content")}/>
    <button className="btn m-2" type='submit'>Submit</button>
    </form>
    </div>
  )
}
