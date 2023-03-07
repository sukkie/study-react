import styles from "@/styles/Home.module.css";
import Image from "next/image";

export function Logo(props) {
  console.log(props);
  return (
    <>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          {props.code}
        </p>
        <button onClick={props.onClick}>button</button>
      </div>
    </>
  );
}
