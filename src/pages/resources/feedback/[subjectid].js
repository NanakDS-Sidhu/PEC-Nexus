import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import supabase from '@/lib/SupabaseConfig';
import FeedbackCard from '@/components/Resources/feedback/Card';
export default function Feedback() {
    const router = useRouter();
    const [text, setText] = useState("");
    const [feedbacks, setFeedbacks] = useState([]);
    const { user } = useAuth();
    const handleText = (e) => {
        setText(e.target.value);
    }
    const insertFeedback = () => {
        console.log(router.query.subjectid)
        async function supabaseInsert() {
            const { data, error } = await supabase
                .from('R_Feedback')
                .insert([
                    { "UserId": user.id, "SubjectId": router.query.subjectid, "Text": text },
                ])
        }
        supabaseInsert();
    }
    useEffect(() => {
        const getFeedbacks = async () => {
            let { data: R_Feedback, err1 } = await supabase
                .from('R_Feedback')
                .select('*')
                .eq("SubjectId", router.query.subjectid)

            let { data: Profiles, err2 } = await supabase
                .from('Profiles')
                .select('*')
                .in("User_id", R_Feedback.map(x => x.UserId))

            let mapping = {}
            Profiles.forEach(obj => {
                mapping[obj.User_id] = obj.User_name;
            });

            R_Feedback.map(x => {
                return (
                    x.UserId = mapping[x.UserId]
                )
            })
            console.log(R_Feedback)
            setFeedbacks(R_Feedback);
        }
        if (router.isReady){
            console.log(router.query);
            getFeedbacks();
        }
    },[router.isReady])
    return (
        <>
            <h1>{router.query.subjectid}</h1>
            <form onSubmit={insertFeedback}>
            <div className='flex items-center justify-center my-5' >
                
                    <input type="text" value={text} name="feedbackPost" onChange={handleText} className="input input-bordered input-accent w-full max-w-lg" />
                    <button className="btn btn-success" style={{ "marginLeft": "5px" }}>Post</button>
                
            </div>
            </form>
            {feedbacks.map(x => {
                return (
                    <FeedbackCard
                        key={x.id}
                        user={x.UserId}
                        text={x.Text}
                        likes={x.Likes}
                    />
                )
            })}
        </>

    );
}