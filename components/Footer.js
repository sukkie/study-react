import styles from "@/styles/Home.module.css";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered By{" "}
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </>
  );
}
