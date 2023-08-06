import Link from "next/link";
import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className=" flex h-16 gap-6 overflow-x-auto overflow-y-hidden">
      {categories.map((category) => (
        <Link
          className=" flex items-center justify-center bg-slate-700 bg-opacity-50 px-8 border border-solid border-gray-700 shadow-md w-full h-full rounded-md font-bold touch-auto"
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
