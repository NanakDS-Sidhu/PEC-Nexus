import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import Drawer from '@/components/drawer/Drawer'
import Layout from '@/components/layout/layout'
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Drawer>
        <Component {...pageProps} />
      </Drawer>
    </AuthProvider>
  )
}
