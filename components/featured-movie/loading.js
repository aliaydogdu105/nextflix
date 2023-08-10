import React from "react";
import Loading from "@/components/loading";

const FeaturedMovieLoading = () => {
  return (
    <div style={{ height: 278 }} className=" flex flex-col gap-6 my-14" >
      <Loading />
    </div>
  );
};

export default FeaturedMovieLoading;
