import supabase from "@/lib/SupabaseConfig";
import { useEffect, useState } from "react"
import Card from "./Card";

export default function BlogList() {
    const [d,setd]=useState([])
    
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
