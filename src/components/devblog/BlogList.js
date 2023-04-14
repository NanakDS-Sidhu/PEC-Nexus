import supabase from "@/lib/Supabase_config"
import { useEffect, useState } from "react"

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

            console.log(d)
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
                <div className="card w-96 bg-base-100 shadow-xl m-4">
                <figure><img src="https://images.unsplash.com/photo-1618359057154-e21ae64350b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
                </div>
            )
        })}
    </>
  )
}
