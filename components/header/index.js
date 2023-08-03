import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" flex bg-gradient-to-b from-black via-transparent to-transparent h-[96px] px-10">
      <div className=" flex flex-1 justify-between items-center  text-slate-200">
        <Link href="/" className=" flex items-center gap-2 text-2xl">
          <FaPlayCircle /> NEXTFLIX
        </Link>
        <nav className=" flex gap-12 font-bold tracking-wider">
          <Link href="/movies">Movies</Link>
          <Link href="/Series">Series</Link>
          <Link href="/Kids">Kids</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
