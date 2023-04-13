import React from "react";
import aboutself from "../Assets/images/1680521393068.JPEG";

import { FaHistory, FaRProject,  } from "react-icons/fa";

import { Fade } from "react-reveal";

const About = () => {
  return (
    <Fade bottom cascade>
    <div id="about">
    
      <div className="flex flex-col justify-center items-center mt-16 mb-16">
        <p className="text-gray-500 text-md sm:text-lg flex-wrap">
          Get To Know
        </p>
        <h1 className="text-white text-2xl sm:text-3xl mt-1 md:text-4xl lg:text-5xl">
          About Me
        </h1>
        <div className="flex flex-col mt-16 sm:flex-row md:flex-row gap-3 mx-4 md:mx-16 lg:mx-24">
          <img
            className="w-full sm:w-4/12 md:w-4/12 lg:w-3/12 rounded-lg border-orange-200 shadow-xl shadow-blue-500"
            src={aboutself}
            alt="about"
          />
          <div className="flex justify-center items-center flex-col mt-8">
            <Fade right cascade>
            <div className="flex w-full justify-center flex-row  gap-4">
              <div className="w-full  bg-transparent text-center text-white rounded-lg   md:w-32 lg:w-36 xl:w-56 xl:h-40 flex flex-col justify-center items-center p-4 border-orange-200 shadow-lg shadow-blue-500/50">
                <FaHistory size={30} />
                <p className="mt-2">Experience</p>
                <p>1+ Years</p>
              </div>
              <div className=" w-full  bg-transparent text-center text-white rounded-lg   md:w-32 lg:w-36 xl:w-56 xl:h-40 flex flex-col justify-center items-center p-4 border-orange-200 shadow-lg shadow-blue-500/50">
                <FaRProject size={30} />
                <p className="mt-2">Projects</p>
                <p>15+ completed</p>
              </div>
            </div>
            <p className="mt-4 text-gray-200 text-lg text-left p-2 md:p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              praesentium, quia modi, quis ipsum explicabo quibusdam, odio amet
              voluptate et eos numquam odit asperiores obcaecati pariatur
              repudiandae accusantium porro delectus est animi iure. Culpa
              obcaecati ex quia consequatur similique ipsum dolore cupiditate
              reprehenderit accusantium deserunt laborum sit vel, incidunt
              quidem.
            </p>
            </Fade>
           
          </div>
        </div>
      </div>
      
    </div>
    </Fade>
  );
};

export default About;
