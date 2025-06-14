import type { AppProps } from "next/app";
import "@/styles/globals-a.css";
import Sidebar from '@/components/sidebar';
import Cookie from '@/components/cookie';
import GridBackground from "@/components/grid-bg";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <aside>
      <Sidebar />
    </aside>
    <main>
      {/* <Cookie /> */}
      <GridBackground />
      <Component {...pageProps} />
    </main>
  </>;
}
