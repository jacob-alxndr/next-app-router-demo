import { fetchCustomer } from "@/app/lib/data";

export default async function QuizzesPage({ params }) {
  const customerData = await fetchCustomer(params.id);

  return <div>Customer: {customerData.id}</div>;
}
