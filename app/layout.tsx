import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Map from "./components/googleMap";

export const metadata = {
  title: "Potholes Report",
  description: "Report potholes easily with your mobile!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row h-[100dvh] items-center justify-between">
          {children}
          <Map />
        </main>
      </body>
    </html>
  );
}
