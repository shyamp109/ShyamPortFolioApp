import React from "react";
import img2 from "../Assets/images/2.jpg";
import img3 from "../Assets/images/3.jpg";
import img4 from "../Assets/images/4.jpg";
import img5 from "../Assets/images/5.png";
import img6 from "../Assets/images/6.jpg";
import crypto from "../Assets/images/crypto.jpg";
import Skills from "../Components/Mywork";
import { Fade,  } from "react-reveal";

const Portfolio = () => {
  return (
    <Fade>
    <section id="portfolio">
    
      <div className="flex flex-col justify-center items-center mt-12">
        <p className="text-gray-500 text-md sm:text-lg flex-wrap ">
          My Recent Work
        </p>
        <h1 className="text-gray-200 text-2xl sm:text-3xl mt-1 md:text-4xl lg:text-5xl">
          PortFolio
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-6  sm:mx-8 md:mx-14 lg:mx-24 mt-12 mb-8">
      <Skills
          img={crypto}
          text1="Crypto Currency Dashboard & Financial Visualization"
        />
        <Skills
          img={img2}
          text1="Crypto Currency Dashboard & Financial Visualization"
        />
        <Skills
          img={img3}
          text1="Crypto Currency Dashboard & Financial Visualization"
        />
        <Skills
          img={img4}
          text1="Crypto Currency Dashboard & Financial Visualization"
        />
        <Skills
          img={img5}
          text1="Crypto Currency Dashboard & Financial Visualization"
        />
        <Skills
          img={img6}
          text1="Crypto Currency Dashboard & Financial Visualization"
        />
      </div>
    </section>
    </Fade>
  );
};

export default Portfolio;
