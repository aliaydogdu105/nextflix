import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className=" flex flex-col gap-6 my-14">
      <h1 className=" text-7xl uppercase tracking-tight font-black max-w-[25ch]">
        {title}
      </h1>
      <p className=" text-xl max-w-[60ch]">{overview}</p>
      <div className=" flex gap-3">
        <Link
          href={`/movie/${movie.id}`}
          className=" flex items-center justify-center bg-slate-100 text-slate-700 w-80 rounded-full text-xl font-bold"
        >
          Play
        </Link>
        <button className=" flex items-center justify-center outline rounded-full w-16 h-16 text-[#eee]">
          <FaPlus />
        </button>
      </div>
      <div className=" !h-auto -z-20 max-h-screen object-cover">
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black -z-10"></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className=" !h-auto -z-20 max-h-screen object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
