import React, { useEffect, useState } from 'react'
import supabase from '@/lib/SupabaseConfig';

export default function Card(props) {
    const [loading,setLoading]=useState(true);
    const [img,setImage]=useState("")
    async function getPostImage(){
        let { data: Post_to_images, error } = await supabase
            .from('Post_to_images')
            .select('Image_url')
            .eq('Post_id', props.post.id)
            if(error){
                console.log(error)
            }else{
                // console.log(Post_to_images)
                if(Post_to_images.length !== 0){
                    setImage(Post_to_images[0].Image_url)
                }
                setLoading(false)
            }
        }
        useEffect(()=>{
            getPostImage();
        },[])
    

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
    {loading?<h1>Loading</h1>:<figure><img src={img} alt="Shoes" /></figure>}
    <div className="card-body">
        <h2 className="card-title">{props.post.title}</h2>
        <p>{props.post.description}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary" >Read More</button>
        </div>
    </div>
    </div>
  )
}
