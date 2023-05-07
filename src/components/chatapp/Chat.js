import React, { useState } from 'react'

import supabase from '@/lib/SupabaseConfig';
import { useForm } from 'react-hook-form';

export default function Chat() {
    const { register, handleSubmit} = useForm();
        // const [message,setMessage]=useState("");
        async function create_message(d){

            const { data: { user } } = await supabase.auth.getUser()
            if(!user){
                alert("U need to login")
            }
            else{
            const { data, error } = await supabase
            .from('Chat_Messages')
            .insert([
            { Content:d.Content,author_id:user.id},
            ])
            if(error){
                console.log(error)
            }else{
                console.log("success")
            }
            }
        }
  return (
    <div className>
    <form onSubmit={handleSubmit(create_message)} className='flex justify-around'>
    <input type="text" placeholder="Type here" className="input w-full m-2"  {...register("Content")}/>
    <button className="btn m-2" type='submit'>Submit</button>
    </form>
    </div>
  )
}
