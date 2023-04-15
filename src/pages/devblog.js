import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import supabase from "@/lib/Supabase_config";
import BlogList from "@/components/devblog/BlogList";

export default function devblogs(){
    const { register, handleSubmit} = useForm();
    async function createPost(d){
        try{
            
        const { data: { user } } = await supabase.auth.getUser()
        const { data, error } = await supabase
        .from('Posts')
        .insert([
        { title: d.title , description: d.description,author_id:user.id},
            ])}
        catch(e){
            console.log(e)
        }
        
    }

    return (
        <>
            <h1>Dev Blogs</h1>
            <form onSubmit={handleSubmit(createPost)}>
                <input type="text" placeholder="title"  {...register("title")}></input>
                <input type="text" placeholder="description" {...register("description")}></input>
                <button type="submit">Submit</button>
            </form>
            <BlogList></BlogList>
        </>
    )
}