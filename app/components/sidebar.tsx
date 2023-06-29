"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const buttons = [
    { name: "Home", href: "/" },
    { name: "Settings", href: "/settings" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
  ];

  return (
    <ul className="flex flex-col h-full w-[20%] gap-2 items-center bg-red-800">
      {buttons.map((button, index) => {
        const isActive = pathname == button.href;

        return (
          <li
            key={index}
            className={`w-full bg-green-700 text-center ${
              isActive && "border border-white"
            }`}
          >
            <Link href={button.href}>{button.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
