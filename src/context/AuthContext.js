import { createContext, useEffect, useState, useContext } from 'react'
import supabase from '../lib/SupabaseConfig'
import Router from 'next/router'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function setSession() {
      const { data: { session }, } = await supabase.auth.getSession();
      setUser(session?.user ?? null)
      setLoading(false)
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type:'offline',
          prompt: 'consent',
        },
        redirectTo: "https://pec-nexus.vercel.app/"
      },
    })

    if (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    Router.push('/')
  }

  let batchInfo = {
    Year : undefined,
    Branch : undefined
  };

  if (user) {
    const email = user.email;

    const matches1 = email.match(/^(?<name>.+)\.bt(?<year>\d{2})(?<branch>[a-zA-Z]+)@(?<domain>[a-zA-Z]+)\.edu\.in$/);
    if (matches1) {
      const { year, branch } = matches1.groups;
      batchInfo.Year = year;
      batchInfo.Branch = branch;
    }

    const matches2 = email.match(/^(?<name>.+)\.bt(?<branch>[a-zA-Z]+)(?<year>\d{2})@(?<domain>[a-zA-Z]+)\.edu\.in$/);
    if (matches2) {
      const { year, branch } = matches2.groups;
      batchInfo.Year = year;
      batchInfo.Branch = branch;
    }
    console.log(batchInfo);

  }

  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut,
    batchInfo
  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)
