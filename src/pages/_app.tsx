import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useEffect, useState } from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

// Routes that don't require authentication
const publicRoutes = ['/auth']; 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  
  useEffect(() => {
    if (!loading) {
      const isProtectedRoute = !publicRoutes.includes(router.pathname);
      
      if (!user && isProtectedRoute) {
        router.push('/auth');
      } else {
        setPageLoading(false);
      }
    }
  }, [user, loading, router]);
  
  return (
    <RecoilRoot>
      <Head>
        <title>GeekCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="GeekCode - Your coding companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer/>
      {pageLoading ? (
        // Add a loading indicator here if desired
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-orange"></div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </RecoilRoot>
  );
}
