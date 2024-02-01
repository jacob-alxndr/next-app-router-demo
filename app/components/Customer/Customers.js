import Link from "next/link";
import Image from "next/image";
// import { customers } from "@/app/lib/placeholder-data";
import styles from "./index.module.scss";
export default function Customers({ data }) {
  return (
    data && (
      <ul
        style={{
          listStyle: "none",
        }}
        className={styles.list}
      >
        {data.map((q) => {
          var monthName = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" })
            .format;
          return (
            <li key={q.id}>
              <Link href={`/customers/${q.id}`} className={styles.link}>
                <div className={styles.imageContainer}>
                  <Image
                    placeholder="blur"
                    fill={true}
                    alt="user"
                    src="/user.jpg"
                    blurDataURL="/placeholder.jpeg"
                    loading="lazy"
                    sizes="5vw"
                    quality={100}
                  ></Image>
                </div>
                <div className={styles.copy}>
                  <div className={styles.title}>
                    <div>{q.name}</div>
                    <span>–</span>
                    <div>{q.email}</div>
                  </div>

                  <div className={styles.date}>
                    <span>{monthName(q.createdat)}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
}
