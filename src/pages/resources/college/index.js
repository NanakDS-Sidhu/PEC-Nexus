import React, { useEffect, useState } from "react"
import Carousel from "@/components/Resources/Carousel"
import supabase from "@/lib/SupabaseConfig";
import { useAuth } from "@/context/AuthContext";
import Card from "@/components/Resources/Cards";
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const { query } = context;
    const { branch } = query;
    let b = "";
    ///////////////////////////////////////////////////////////// Complete This 
    if (branch === "CSE"){
        b = "Computer Science Engineering";
    }else if (branch==="ECE"){
        b = "Electronics and Communication Engineering";
    }
    /////////////////////////////////////////////////////////////

    // From R_Branch Table 
    let { data: R_Branch, e1 } = await supabase
        .from('R_Branch')
        .select("branch_id")
    .eq('branch_name', b)

    let { data: R_Subjects, e2 } = await supabase
        .from('R_Subjects')
        .select('*')
    .eq('branch_id',R_Branch[0]);

    return {
        props: {R_Subjects}, // will be passed to the page component as props
    }
}

export default function College({R_Subjects}) {
    // Branch and year extraction
    console.log("college",R_Subjects);
    const { batchInfo } = useAuth();
    let { Year: Year, Branch: Branch } = batchInfo
    if (Branch) {
        Branch = Branch.toUpperCase()
    }
    const router = useRouter();
    useEffect(()=>{
        if (Branch){
            router.push(`college/?branch=${Branch}`);
        }
    },[Branch])


    // All useStates
    const [dataFromChild, setDataFromChild] = useState('');
    const [semActive, setSem] = useState(1);

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    }
    return (
        <div>
            <Carousel onData={handleDataFromChild} />
            {dataFromChild == 1 ?
                <h1>First Year</h1>
                : dataFromChild == 2 ? (
                    <h1>Second Year</h1>
                ) : dataFromChild == 3 ? (
                    <h1>Third Year</h1>
                ) : <h1>Fourth Year</h1>
            }
            <div className="tabs tabs-boxed">
                <a className={`tab ${semActive === 1 ? "tab-active" : ""}`} onClick={() => setSem(1)}>Sem {dataFromChild * 2 - 1}</a>
                <a className={`tab ${semActive === 2 ? "tab-active" : ""}`} onClick={() => setSem(2)}>Sem {dataFromChild * 2}</a>
            </div>
            {R_Subjects?.map(s => {
                return (
                    <Card
                        subject={s.subject_name}
                        description={s.subject_code}
                    />)
            })}
        </div>
    )
}
