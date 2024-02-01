const { db } = require("@vercel/postgres");
const { customersData } = require("../app/lib/placeholder-data.js");
// const { customers } = require("../app/lib/schema.js");
// const { drizzle } = require("drizzle-orm/vercel-postgres");
// const bcrypt = require("bcrypt");

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customersData.map(
        (customer) => client.sql`
        INSERT INTO customers (name, email)
        VALUES (${customer.name}, ${customer.email})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Customers: ${insertedCustomers}`);
    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error("Error seeding customers:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCustomers(client);
  // await client.sql`DROP TABLE IF EXISTS customers;`;
  await client.end();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});
