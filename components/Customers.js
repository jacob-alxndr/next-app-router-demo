import Link from "next/link";
import { customers } from "@/app/lib/placeholder-data";
const customersList = () => {
  const customersData = customers;

  return (
    <ul>
      {customersData.map((q) => {
        return (
          <li key={q.id}>
            <Link href={`/customers/${q.id}`}>{q.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function Customers() {
  return <div>{customersList()}</div>;
}
