import { useRouter } from 'next/router'
import supabase from './Supabase_config'

export default function Login_func() {
    const router = useRouter()
    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
                redirectTo : "http://localhost:3000/"
            },
        })
    }
    async function signout() {
        const { error } = await supabase.auth.signOut()
        router.push("/")
    }
    return (
        <>
            <h1 onClick={signInWithGoogle}>Click Me </h1>
            <h2 onClick={signout}>Signout</h2>
        </>
    )
}