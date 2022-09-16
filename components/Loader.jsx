import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[220px] lg:h-[490px] w-full">
      <div className="animate-spin shadow-lg w-6 h-6 border border-black rounded-md" />
    </div>
  );
};

export default Loader;
