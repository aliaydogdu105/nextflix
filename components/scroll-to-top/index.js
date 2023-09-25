"use client";
import React, { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className=" fixed bottom-5 right-5 p-4 bg-[#E50914] hover:bg-red-700 text-2xl"
      style={{
        display: visible ? "inline" : "none",
      }}
      onClick={scrollToTop}
    >
      <span>&#8593;</span>
    </button>
  );
};

export default ScrollToTop;
