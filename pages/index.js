import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";
import { Main } from "@/components/Main";
import { Test } from "@/components/Test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Test />
        <Logo
          title='Index Page'
          code={<code className={styles.code}>index</code>}
          onClick={() => alert("index!!")}
        />
        <Main />
        <Links />
      </main>
    </>
  );
}
