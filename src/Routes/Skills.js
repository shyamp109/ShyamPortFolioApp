import React from "react";
import { Fade } from "react-reveal";
import { SiTailwindcss } from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaReacteurope,
} from "react-icons/fa";
const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16" id="">
      <p className="text-gray-500 text-md sm:text-lg flex-wrap ">
        Areas Of Expertise
      </p>
      <h1 className="text-white text-2xl sm:text-3xl mt-1 md:text-4xl lg:text-5xl">
        Technologies
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap gap-10 mx-4 mt-16 mb-16">
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-orange-500/50">
            <FaHtml5 size={140} className="text-orange-500 p-4" />
          </div>
        </Fade>
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-blue-500/50">
            <FaCss3Alt size={140} className="text-blue-700 p-4" />
          </div>
        </Fade>
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-yellow-500/50">
            <FaJsSquare size={140} className="text-yellow-500 p-4" />
          </div>
        </Fade>
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-orange-200/50">
            <FaBootstrap size={140} className="text-indigo-500 p-4" />
          </div>
        </Fade>
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-blue-500/50">
            <FaReacteurope size={140} className="text-blue-500 p-4" />
          </div>
        </Fade>
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-orange-300/50">
            <SiTailwindcss size={140} className="text-blue-100 p-4" />
          </div>
        </Fade>
        <Fade >
          <div className="hover:opacity-70 opacity-100 bg-transparent border-orange-200 shadow-xl rounded-lg shadow-blue-500/50">
            <FaReact size={140} className="text-blue-500 p-4" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
