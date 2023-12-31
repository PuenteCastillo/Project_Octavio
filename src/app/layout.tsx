import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar/Sidebar";
import MainLayout from "./components/layouts/MainLayout";
import Providers from "./providers";
import ThemeButton from "./components/ThemeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <ThemeButton />
        </Providers>
      </body>
    </html>
  );
}
