import Image from "next/image";
import styles from "./page.module.css";
import Quizzes from "@/components/Quizzes";
export default function Home() {
  return (
    <main className={styles.main}>
      <Quizzes />
    </main>
  );
}
