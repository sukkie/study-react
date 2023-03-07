import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";
import { Main } from "@/components/Main";
import { Test } from "@/components/Test";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Test />
        <Logo
          title='About Page'
          code={<code className={styles.code}>about</code>}
          onClick={() => alert("about!!")}
        >
          <code className={styles.code}>about</code>
        </Logo>
        <Main />
        <Links />
      </main>
    </>
  );
}
