import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>

    <head>
      <title>GeekCode</title>
      <meta name = "viewport" content = "width=device-width, initial-scale=1" />
      <meta name = "description" content = "GeekCode - Your coding companion" />
      <link rel = "icon" href = "/favicon.ico" />
    </head>
    <Component {...pageProps} />
  </>
}
