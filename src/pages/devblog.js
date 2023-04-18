import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import supabase from "@/lib/SupabaseConfig";
import BlogList from "@/components/devblog/BlogList";
import BlogForm from "@/components/devblog/BlogForm";


export default function devblogs(){
    return (
        <>
            <h1>Dev Blogs</h1>
            <BlogForm></BlogForm>
            <BlogList></BlogList>
        </>
    )
}