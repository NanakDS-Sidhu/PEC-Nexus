import { useRouter } from 'next/router';
import { useState, useEffect, use } from 'react';
import supabase from "@/lib/SupabaseConfig";
import CardRow from '@/components/Resources/PastYear/CardRow';

export default function Feedback() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [sortedYears, setSortedYears] = useState([]);
    const [groupedData, setGroupData] = useState([]);
    
    useEffect(() => {
        if (router.isReady) {

            let type;
            switch (router.query.type) {
                case 'endsem':
                    type = ['End Semester'];
                    break;
                case 'midsem':
                    type = ['Mid Semester'];
                    break;
                case 'assignquiz':
                    type = ['Assignment', 'Quiz'];
                    break;
                default:
                    type = []; // Default value if none of the cases match
                    break;
            }

            const getPapers = async () => {
                setLoading(true);

                let { data: R_Paper, e1 } = await supabase
                    .from('R_pastYearMaterial')
                    .select("*")
                    .eq('SubjectCode', router.query.subjectid)
                    .in('Type', type)

                const groupData = R_Paper.reduce((acc, item) => {
                    const year = item.Year;
                    if (!acc[year]) {
                        acc[year] = [];
                    }
                    acc[year].push(item);
                    return acc;
                }, {});

                const sortedYear = Object.keys(groupData).sort((a, b) => b - a);
                setGroupData(groupData);
                setSortedYears(sortedYear);
                setLoading(false);
            }
            getPapers();
        }
    }, [router.isReady]);

    return (
        <div>
            {loading && <button className="btn loading">loading</button>}
            {sortedYears?.map((year) => (
                <>
                    <h1>{year}</h1>
                    <CardRow papers={groupedData[year].map(x => x.url)} />
                </>
            ))}
        </div>
    );
}