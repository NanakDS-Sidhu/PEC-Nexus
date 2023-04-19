import React, { useState } from 'react'

import supabase from '@/lib/SupabaseConfig';
import { useForm } from 'react-hook-form';

export default function Chat() {
    const { register, handleSubmit} = useForm();
        // const [message,setMessage]=useState("");
        async function create_message(d){

            const { data: { user } } = await supabase.auth.getUser()

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
  return (
    <div>
    <form onSubmit={handleSubmit(create_message)}>
    <input type="text" {...register("Content")} ></input>
    <button type='submit'> Submit</button>
    </form>
    </div>
  )
}
