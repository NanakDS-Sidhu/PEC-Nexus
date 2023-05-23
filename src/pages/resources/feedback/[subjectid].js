import { useRouter } from 'next/router';

export default function Feedback() {
    const router = useRouter();
    return (
        <>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
            <p>Subject Code: {router.query.subjectid}</p>
        </>
    );
}