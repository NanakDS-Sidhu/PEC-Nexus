import React, { useEffect} from "react";
import supabase from "@/lib/SupabaseConfig";
export default function devblogs() {
    async function handleUpload(event) {
        const postFile = event.target.files[0]
        console.log(postFile);
        const { data, error } = await supabase.storage
            .from('public')
            .upload('Post_Images/JK/hello.jpeg', postFile)
        if (!error){
            console.log(data);
        }else{
            console.log(error);
        }
    }
    return (
        <>
            <h1>Dev Blogs</h1>
            <input type="file" onChange={handleUpload} />
            <h1 onClick={async ()=>{
                const { data, error } = await supabase.storage.createBucket('avatars');
                console.log(data);
            }}>Create Bucket</h1>
        </>
    )
}