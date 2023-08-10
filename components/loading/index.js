import React from "react";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center min-h-full min-w-full ">
      <div className=" inline-block w-12 h-12 border-4 border-solid border-gray-300 border-t-blue-600 rounded-full ease-in-out animate-spin "></div>
    </div>
  );
};

export default Loading;
