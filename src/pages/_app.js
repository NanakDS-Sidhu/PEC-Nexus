import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
