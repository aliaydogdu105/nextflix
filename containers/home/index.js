import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import React from "react";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres} />
    </div>
  );
};

export default HomeContainer;
