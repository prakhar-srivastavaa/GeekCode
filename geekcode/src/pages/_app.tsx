import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>GeekCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="GeekCode - Your coding companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer/>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
