import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    descriptoin:
      "Find in-depth information about Next.js features and API.\u2192 \u6161",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    descriptoin: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    descriptoin: "Discover and deploy boilerplate example Next.js& projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    descriptoin:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Links() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.href}
              href='{item.title}'
              className={styles.card}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className={inter.className}>
                {item.title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{item.descriptoin}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
