import React from "react";
import heroimg from "../Assets/images/heroImg.jpg";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-reveal";
const Heroimg = () => {
  const spinnerStyle = {
    animation: "spin 2s linear infinite",
  };
  return (
    <Fade bottom cascade>
      <div className="h-full w-full">
        <div className="w-full h-screen relative">
          <img
            src={heroimg}
            alt="heroimg"
            className="w-full h-full bg-cover bg-center object-cover opacity-20"
          />
          <div className="absolute inset-0 flex flex-row justify-center">
            <Fade right cascade>
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-300 text-center text-lg sm:text-2xl flex-wrap ">
                  I'M SHYAM PATEL
                </p>

                <h1 className="text-gray-200 text-center flex flex-col flex-wrap sm:flex-row justify-center items-center text-2xl sm:text-4xl mt-3 md:text-6xl lg:text-6xl">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      strings: [" I'M SOFTWARE DEVELOPER"],
                    }}
                  />{" "}
                  <div className="flex  items-center">
                    <FaReact
                      style={spinnerStyle}
                      size={150}
                      className="text-blue-500 rounded-full animate-spin  duration-1000"
                    />
                  </div>
                </h1>

                <div className="flex mt-5 gap-3 flex-wrap">
                  <ScrollLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <Link
                      to="/portfolio"
                      className="px-6 py-2 text-blue-500 hover:text-white text-md border-blue-500 hover hover:bg-blue-500 border-2"
                    >
                      PortFolio
                    </Link>
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <Link
                      to="/contact"
                      className="px-6 py-2 text-blue-500 hover:text-white text-md border-blue-500 hover hover:bg-blue-500 border-2"
                    >
                      Contact
                    </Link>
                  </ScrollLink>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Heroimg;
