import type { AppProps } from "next/app";
import "@/styles/globals-a.css";
import Sidebar from '@/components/sidebar';
import Cookie from '@/components/cookie';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <aside>
      <Sidebar />
    </aside>
    <main>
      {/* <Cookie /> */}
      <Component {...pageProps} />
    </main>
  </>;
}
