import FeaturedMovie from "@/components/featured-movie";
import Movies from "@/mocks/movies.json";
import React from "react";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies} />
    </div>
  );
};

export default HomeContainer;
