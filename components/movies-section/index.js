import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className=" mt-9">
      <h3 className=" mb-3 uppercase text-2xl tracking-tight"> {title}</h3>
      <div className=" flex justify-center items-center flex-wrap gap-8 m-8">
        {movies.map((movie) => (
          <div
            className=" overflow-hidden rounded-lg relative shadow-lg shadow-black hover:z-50 hover:scale-110 transition ease-in-out delay-150 "
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                height={350}
                width={250}
                unoptimized
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
