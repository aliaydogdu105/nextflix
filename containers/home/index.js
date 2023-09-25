import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  selectedCategory,
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
}) => {
  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[7]} />
      <Categories categories={categories} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 9)} />
      <MoviesSection
        title="Your Favorites"
        movies={topRatedMovies.slice(1, 9)}
      />
    </div>
  );
};

export default HomeContainer;
