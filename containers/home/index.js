import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import React from "react";
import MoviesSection from "@/components/movies-section";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres} />
      <MoviesSection
        title = "Popular Films"
        movies = {Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title = "Your Favorites"
        movies = {Movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
