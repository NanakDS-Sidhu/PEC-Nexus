import React, { useEffect, useState } from "react"
import Carousel from "@/components/Resources/Carousel"
import supabase from "@/lib/SupabaseConfig";
import { useAuth } from "@/context/AuthContext";
import Card from "@/components/Resources/Cards";


export default function College() {
    // Branch and year extraction
    const { batchInfo } = useAuth();
    let { Year: Year, Branch: Branch } = batchInfo

    // All useStates
    const [dataFromChild, setDataFromChild] = useState('');
    const [semActive, setSem] = useState(1);
    const [subjects , setSubjects ] = useState([]);

    useEffect(() => {
        if (Branch) {
            Branch = Branch.toUpperCase()
            let b = "";
            ///////////////////////////////////////////////////////////// Complete This//////////////////////////////// 
            if (Branch === "CSE") {
                b = "Computer Science Engineering";
            } else if (Branch === "ECE") {
                b = "Electronics and Communication Engineering";
            }

            const getSubjects = async () => {
                let { data: R_Branch, e1 } = await supabase
                    .from('R_Branch')
                    .select("branch_id")
                    .eq('branch_name', b)

                let { data: R_Subjects, e2 } = await supabase
                    .from('R_Subjects')
                    .select('*')
                    .eq('branch_id', R_Branch[0].branch_id)
                    .eq('semester',semActive);
                console.log(R_Subjects);
                setSubjects(R_Subjects);
            }
            
            getSubjects();
        }
    }, [Branch,semActive])

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
            {subjects?.map(s => {
                return (
                    <Card
                        key={s.subject_id}
                        subject={s.subject_name}
                        description={s.subject_code}
                    />)
            })}
        </div>
    )
}
