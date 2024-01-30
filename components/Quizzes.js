import Link from "next/link";

const QuizList = () => {
  const Quizzes = [
    { id: 1, name: "Quix 1" },
    { id: 2, name: "Quix 2" },
    { id: 3, name: "Quix 3" },
  ];

  return (
    <ul>
      {Quizzes.map((q) => {
        return (
          <li key={q.id}>
            <Link href={`/quizzes/${q.id}`}>{q.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function Quizzes() {
  return <div>{QuizList()}</div>;
}
