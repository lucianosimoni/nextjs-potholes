import Link from "next/link";

export default function Settings() {
  const buttons = [
    { name: "Home", href: "/", actual: false },
    { name: "Settings", href: "/settings", actual: true },
  ];

  return (
    <ul className="flex flex-col h-full w-[20%] gap-2 items-center bg-red-800">
      {buttons.map((button, index) => {
        return (
          <li
            key={index}
            className={`w-full bg-green-700 text-center ${
              button.actual && "border border-white"
            }`}
          >
            <Link href={button.href}>{button.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
