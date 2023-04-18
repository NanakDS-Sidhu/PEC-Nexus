import supabase from "@/lib/SupabaseConfig";
import { useEffect, useState } from "react"
import Card from "./Card";

export default function BlogList() {
    const [d,setd]=useState([])
    async function get_images(post){
        let { data: Post_to_images, error } = await supabase
        .from('Post_to_images') 
        .select("Image_url")
        .eq('Post_id',post.id)
    }

    async function getposts(){
            let { data: Posts, error } = await supabase
            .from('Posts')
            .select('*');
            setd(Posts)
            if(error){
                console.log(error)
            }
    }
    useEffect(() => {
        getposts();
    },[]);


  return (
    <>
        {d.map((post)=>{
            return(
                <>
                <Card post={post}></Card>
                </>
            )
        })}
    </>
  )
}
