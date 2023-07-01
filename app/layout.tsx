import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Map from "./components/googleMap";
import ThemeProvider from "./components/themeProvider";

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
          <ThemeProvider initialTheme="dark">
            {/* ⚒️ Side Menu */}
            <div className="flex flex-col h-full w-[20dvw]">
              <span>Is user logged in? </span>

              {children}
            </div>

            {/* 🗺️ Map */}
            <Map />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
