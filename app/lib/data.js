import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { customers } from "./schema";
export async function fetchCustomers() {
  try {
    const db = drizzle(sql);
    const results = await db
      .select({
        id: customers.id,
        name: customers.name,
        email: customers.email,
        createdat: customers.createdat,
      })
      .from(customers);

    return results;
    // const results = await sql`
    //   SELECT
    //     id,
    //     name,
    //     email,
    //     createdAt
    //   FROM customers
    //   ORDER BY name ASC
    // `;
    // // const customers = data.rows;
    // console.log(results);
    // return results.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchCustomer(id) {
  try {
    const results = await fetchCustomers();
    const customer = results.find((c) => c.id === id);
    return customer;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}
