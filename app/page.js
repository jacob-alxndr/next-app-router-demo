import Image from "next/image";
import styles from "./page.module.css";
import Customers from "@/components/Customers";
export default function Home() {
  return (
    <main className={styles.main}>
      <Customers />
    </main>
  );
}
