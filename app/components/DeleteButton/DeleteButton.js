import React from "react";
import { customers } from "@/app/lib/schema";
import { revalidatePath } from "next/cache";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export default function DeleteButton() {
  async function deleteAction() {
    "use server";
    const db = drizzle(sql);
    await db.delete(customers);
    revalidatePath("/");
  }
  return (
    <form action={deleteAction}>
      <button style={{ marginTop: "3rem" }}>Clear Database</button>
    </form>
  );
}
