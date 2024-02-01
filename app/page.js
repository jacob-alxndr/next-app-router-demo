import styles from "./page.module.css";
import Customers from "@/app/components/Customer/Customers";
import Form from "@/app/components/Form/Form";
import { fetchCustomers } from "@/app/lib/data";
import { Suspense } from "react";
import Link from "next/link";
import DeleteButton from "./components/DeleteButton/DeleteButton";
function Loading() {
  return <h1>Loading...</h1>;
}
export default async function Home() {
  const customersData = await fetchCustomers();
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <Customers data={customersData} />
        <Form />
        <DeleteButton />
        {/* {customersData && (
          <ul>
            {customersData.map((q) => {
              return (
                <li key={q.id}>
                  <Link href={`/customers/${q.id}`}>{q.name}</Link>
                </li>
              );
            })}
          </ul>
        )} */}
      </Suspense>
    </main>
  );
}
