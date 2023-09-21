import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className=" flex items-center h-20 space-x-6 overflow-y-hidden bg-slate-900 p-2 rounded-lg">
      {categories.map((category) => (
        <Link
          className=" flex items-center justify-center bg-slate-700 bg-opacity-50 px-8 border border-solid border-gray-700 shadow-md w-full h-full rounded-md font-bold touch-auto hover:bg-slate-400 active:scale-95 duration-150 hover:text-slate-900"
          key={category.id}
          href={`/${category.id}`}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
