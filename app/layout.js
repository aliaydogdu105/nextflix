import { Inter } from "next/font/google";

import "../styles/reset.css";
import "../styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className=" flex flex-col h-screen bg-black text-base text-white">
        <Header />
        <main className=" flex-grow px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
