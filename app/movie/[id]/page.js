import MovieContainer from "@/containers/movie";
import React from "react";
import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";

const MoviePage = async ({ params, searchParams }) => {
  
  const movieDetail = await getMovie(params.id);
  
  if (!movieDetail) {
    notFound();
  }


  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
};

export default MoviePage;
