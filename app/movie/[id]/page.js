import MovieContainer from "@/containers/movie";
import React from "react";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

const MoviePage = ({ params, searchParams }) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error happenned");
  }

  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  );
};

export default MoviePage;
