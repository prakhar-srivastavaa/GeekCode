import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return 
  <>
  <head>
    <title>GeekCode</title>
    <meta name="description" content="A platform for geeks to share and discover code." />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

  <Component {...pageProps} />
  </>
}
