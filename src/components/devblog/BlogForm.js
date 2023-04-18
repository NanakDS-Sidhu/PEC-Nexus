import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import supabase from "@/lib/SupabaseConfig";

export default function BlogForm() {
  const { register, handleSubmit} = useForm();

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      function generateString(length) {
          let result = ' ';
          const charactersLength = characters.length;
          for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
      }

    async function uploadFile(random_string,file) {
        console.log(file[0])
        const { data, error } = await supabase.storage
        .from('Post_Images/JK')
        .upload(random_string+file[0].name.toString(),file[0],{
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
        const random_string=generateString(6)
        const { data: { user } } = await supabase.auth.getUser()
        const { data, error } = await supabase
        .from('Posts')
        .insert([
        { title: d.title , description: d.description,author_id:user.id},
            ]).select()
        if(d.image[0]){
          uploadFile(random_string,d.image)
          
        // console.log(data)
        const { data2, error2 } = await supabase
        .from('Post_to_images')
        .insert([
            { Post_id:data[0].id, Image_url:"https://djwsvisvriprqmnebcmz.supabase.co/storage/v1/object/public/Post_Images/JK/"+random_string+d.image[0].name.toString()},
        ])}
        }

  return (<>
<div className="flex items-center justify-center p-12">

  <div className="mx-auto w-full max-w-[550px] shadow-2xl">
    <form
      className="py-6 px-9"
      onSubmit={handleSubmit(createPost)}
    >
      <div className="mb-5">
        <label
          htmlFor="text"
          className="mb-3 block text-xl font-semibold text-[#07074D] text-left "
        >
          Title
        </label>
        <input type="text" placeholder="title" className="input input-bordered input-primary w-full max-w-xs" {...register("title")}/>
      </div>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="mb-3 block text-xl font-semibold text-[#07074D] text-left "
        >
          Description
        </label>
        <input type="text" placeholder="title" className="input input-bordered input-primary w-full max-w-xs" {...register("title")}/>
      </div>

      <div className="mb-6 pt-4">
        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
          Upload File
        </label>

        <div className="mb-8">
          <input type="file" name="file" id="file" {...register("image")} className="sr-only"/>
          <label
            htmlFor="file"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>



      </div>

      <button className="text-center text-base font-semibold btn btn-primary px-32" type="submit">Submit</button>
    </form>
  </div>
</div>
  </>

    
  )
}
