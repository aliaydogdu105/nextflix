import React from "react";
import Skeleton from "@/components/skeleton";

const MovieSectionLoading = () => {
  return (
    <div className=" mt-9">
      <Skeleton width={128} height={36} />
      <div className=" flex items-center justify-center md:justify-start flex-wrap gap-8 m-8">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={350} width={250} />
          ))}
      </div>
    </div>
  );
};

export default MovieSectionLoading;
