import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from '@/componets/navbar';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  )
}