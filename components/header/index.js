"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className=" flex bg-gradient-to-b from-black to-transparent h-[96px] px-10 py-10">
      <div className=" flex flex-1 justify-between items-center  text-slate-200">
        <Link href="/" className=" flex items-center gap-2 text-2xl">
          <FaPlayCircle /> NEXTFLIX
        </Link>
        <section>
          <div
            className=" md:hidden block cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <FiMenu />
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className=" absolute top-5 right-5 cursor-pointer hover:scale-150"
              onClick={() => setIsNavOpen(false)}
            >
              <RiCloseFill />
            </div>
            <nav className=" flex flex-col items-center justify-between min-h-[200px] font-bold underline tracking-wider">
              <Link href="/movies">Movies</Link>
              <Link href="/Series">Series</Link>
              <Link href="/Kids">Kids</Link>
            </nav>
          </div>
        </section>
        <nav className=" hidden md:flex md:gap-12 font-bold tracking-wider">
          <Link href="/movies">Movies</Link>
          <Link href="/Series">Series</Link>
          <Link href="/Kids">Kids</Link>
        </nav>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50vw;
        height: 50vh;
        position: absolute;
        top: 0;
        right: 0;
        background: black;
        border-radius: 25px;
        z-index: 10;
      }
    `}</style>
    </header>
  );
};

export default Header;
