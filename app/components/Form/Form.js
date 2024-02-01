import React from "react";
import styles from "./index.module.scss";
import { v4 } from "uuid";
import { customers } from "@/app/lib/schema";
import { revalidatePath } from "next/cache";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
export default function Form() {
  async function createCustomer(formData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    if (name && email) {
      const id = v4();
      const db = drizzle(sql);
      await db.insert(customers).values({ id, name, email });
      revalidatePath("/");
    }
  }

  return (
    <form action={createCustomer} className={styles.form}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>
      <button>Add Customer</button>
    </form>
  );
}
