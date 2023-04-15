import React, { useState } from "react"
import Card from "@/components/Resources/Card"
import supabase from "@/lib/SupabaseConfig";
import { useAuth } from "@/context/AuthContext";
export default function College() {
    const {batchInfo} = useAuth();
    let {Year:Year, Branch:Branch } = batchInfo
    if (Branch){
        Branch=Branch.toUpperCase()
    }

    const [url, seturl] = useState("");
    const [dataFromChild, setDataFromChild] = useState('');
    const [semActive, setSem] = useState(1);

    async function createNewBucket() {
        const { data, error } = await supabase
            .storage
            .getBucket('CollegeResources')

        console.log(data, error);
    }
    async function fileUpload(event) {
        const avatarFile = event.target.files[0]
        console.log(avatarFile)
        const { data, error } = await supabase.storage
            .from('avatars')
            .upload('public/avatar1.png', avatarFile)
        console.log(data, error);

    }
    const handleBlob = (blob) => {
        const reader = new FileReader();
        reader.onload = () => seturl(reader.result);
        reader.readAsDataURL(blob);
    };

    async function fileDownload() {
        let sem ;
        if (semActive===1){
            sem = dataFromChild * 2 - 1 ;
        }else{
            sem = dataFromChild * 2;
        }
        const path ="CollegeResources/"+ Branch + "/Sem"+ sem + "/" ;
        console.log(await supabase.storage.listBuckets(path))
        console.log(path);
        // const { data, error } = await supabase.storage.from('CollegeResources').download('public/avatar1.png')
        // console.log(data);
        // handleBlob(data);
    }

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    }
    return (
        <>
            <Card onData={handleDataFromChild} />
            {dataFromChild == 1 ?
                <h1>First Year</h1>
                : dataFromChild == 2 ? (
                    <h1>Second Year</h1>
                ) : dataFromChild == 3 ? (
                    <h1>Third Year</h1>
                ) : <h1>Fourth Year</h1>
            }
            <h2>{Branch}</h2>
            <div className="tabs tabs-boxed">
                <a className={`tab ${semActive === 1 ? "tab-active" : ""}`} onClick={() => setSem(1)}>Sem {dataFromChild * 2 - 1}</a>
                <a className={`tab ${semActive === 2 ? "tab-active" : ""}`} onClick={() => setSem(2)}>Sem {dataFromChild * 2}</a>
            </div>
            <h1 onClick={createNewBucket}>Create</h1>
            <input type="file" onChange={fileUpload} />
            <h1 onClick={fileDownload}>Download</h1>
            <img src={url} alt="hello" />
        </>
    )
}

