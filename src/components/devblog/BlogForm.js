import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "@/lib/SupabaseConfig";

export default function BlogForm() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  async function uploadFile(random_string, file) {
    console.log(file[0])
    const { data, error } = await supabase.storage
      .from('Post_Images/JK')
      .upload(random_string + file[0].name.toString(), file[0], {
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


  async function createPost(d) {
    setLoading(true)
    if (d.title === "") {
      alert("Title can not be empty")
    }
    else {
      const random_string = generateString(6)
      const { data: { user } } = await supabase.auth.getUser()
      const { data, error } = await supabase
        .from('Posts')
        .insert([
          { title: d.title, description: d.description, author_id: user.id },
        ]).select()
      if (d.image[0]) {
        uploadFile(random_string, d.image)

        // console.log(data)
        const { data2, error2 } = await supabase
          .from('Post_to_images')
          .insert([
            { Post_id: data[0].id, Image_url: "https://djwsvisvriprqmnebcmz.supabase.co/storage/v1/object/public/Post_Images/JK/" + random_string + d.image[0].name.toString() },
          ])
      }
    }
    setLoading(false)
  }

  return (<>
    <div className="flex items-center justify-center p-12 my-14">
      <form className="card w-96 bg-base-300 text-primary-content" onSubmit={handleSubmit(createPost)}>
        <h1 className="text-base-content text-center mt-4 text-xl text"> CREATE POST! </h1>
        <div className="card-body items-center text-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Title</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("title")} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Description</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("description")} />
          </div>
          <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs my-3" {...register("image")} />
          <button className="btn btn-primary w-3/4" disabled={loading} type="submit">{loading ? "Loading" : "Submit"}</button>
        </div>
      </form>
    </div>


  </>


  )
}
