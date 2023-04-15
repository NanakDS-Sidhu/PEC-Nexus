import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import supabase from "@/lib/SupabaseConfig";
import BlogList from "@/components/devblog/BlogList";

export default function devblogs(){
    const { register, handleSubmit} = useForm();

    async function uploadFile(file) {
        console.log(file[0])
        const { data, error } = await supabase.storage
        .from('Post_Images/JK')
        .upload(file[0].name.toString(),file[0],{
            upsert: false
          })
        if (error) {
          // Handle error
          console.log(error)
        } else {
          // Handle success
          console.log("success")
        }
      }


    async function createPost(d){
        const { data: { user } } = await supabase.auth.getUser()
        const { data, error } = await supabase
        .from('Posts')
        .insert([
        { title: d.title , description: d.description,author_id:user.id},
            ]).select()
        uploadFile(d.image)

        // console.log(data)
        const { data2, error2 } = await supabase
        .from('Post_to_images')
        .insert([
            { Post_id:data[0].id, Image_url:"https://djwsvisvriprqmnebcmz.supabase.co/storage/v1/object/public/Post_Images/JK/"+d.image[0].name.toString()},
        ])

    }

    return (
        <>
            <h1>Dev Blogs</h1>
            <form onSubmit={handleSubmit(createPost)}>
                <input type="text" placeholder="title"  {...register("title")}></input>
                <input type="text" placeholder="description" {...register("description")}></input>
                <input type="file" {...register("image")}></input>
                <button type="submit">Submit</button>
            </form>
            <BlogList></BlogList>
        </>
    )
}