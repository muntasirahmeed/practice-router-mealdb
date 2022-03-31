import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Headar = () => {
  return (
    <nav className="px-6 md:px-10  flex justify-between items-center bg-blue-200 py-2 text-normal md:text-xl md:py-4">
      <div>
        <CustomLink to='/'>Logo</CustomLink>
      </div>
      <div className="  flex space-x-3 md:space-x-5 justify-end">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/resturent">Resturent</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </nav>
  );
};

export default Headar;
