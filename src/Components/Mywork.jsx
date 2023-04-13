import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";

const Skills = ({ img, text1, text2 }) => {
  return (
    <>
      <div class="relative group">
        <img class="w-full rounded-lg" src={img} alt="YourImage" />

        <div class="absolute flex flex-col justify-center items-center p-4 inset-0 bg-black hover:bg-gray-800 hover:duration-700 rounded-lg opacity-0 group-hover:opacity-95">
          
            <h1 className="text-blue-500 text-center text-lg sm:text-xl md:text-xl xl:text-3xl flex-wrap">
              {text1}
            </h1>
            
            <div className="flex mt-4 gap-3 flex-wrap">
              <Link
                to="/project"
                className="px-5 py-1 text-blue-500 hover:text-white text-md border-blue-500 hover hover:bg-blue-500 border-2"
              >
                VIEW
              </Link>
              <Link
                to="/contact"
                className="px-5 py-1 text-blue-500 hover:text-white text-md border-blue-500 hover hover:bg-blue-500 border-2"
              >
                SOURCE
              </Link>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Skills;
