import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Logo } from "@/components/Logo";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Logo />

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Links />
      </main>
    </>
  );
}
