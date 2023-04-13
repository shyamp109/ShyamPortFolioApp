import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {  
  const [nav, setNav] = useState(false);



  const handleMenuItemClick = () =>{
    setNav(false);
  }
  return (
    <>
      <div className="flex mx-auto bg-gradient-to-t to-gray-950 from-gray-800 justify-between items-center w-full h-20 px-4 text-white fixed z-10">
        <ScrollLink to="/">
          <h1 className="text-xl sm:text-3xl hover:text-gray-400 font-signature ml-2">PortFolio</h1>
        </ScrollLink>
        <ul className=" hidden md:flex">
          <li className="px-4 cursor-pointer capitalize font-medium hover:text-gray-400 text-gray-200 hover:scale-105 duration-200">
            <ScrollLink to="home"  spy={true} smooth={true} offset={-100} duration={500} ><Link to="/">Home</Link></ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium hover:text-gray-400 text-gray-200 hover:scale-105 duration-200">
            <ScrollLink to="portfolio" spy={true} smooth={true} offset={-100} duration={500} ><Link to="/portfolio">Portfolio</Link></ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium hover:text-gray-400 text-gray-200 hover:scale-105 duration-200">
            <ScrollLink to="skills" spy={true} smooth={true} offset={-150} duration={500} ><Link to="/skills">Skills</Link></ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium hover:text-gray-400 text-gray-200 hover:scale-105 duration-200">
            <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500} ><Link to="/about">About</Link></ScrollLink>
          </li>
          <li className="px-4 cursor-pointer capitalize font-medium hover:text-gray-400 text-gray-200 hover:scale-105 duration-200">
            <ScrollLink to="contact" spy={true} smooth={true} offset={-150} duration={500} ><Link to="/contact">Contact</Link></ScrollLink>
          </li>
        </ul>
        <div
          onClick={()=>setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
        >
          {nav ? <FaTimes className="w-8 h-6" size={30} /> : <FaBars className="w-8 h-6" size={30} />}
        </div>
        {nav && (
          <ul  className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b  from-black to-gray-800 text-gray-200">
            <li className="px-4 hover:text-gray-400 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200">
            <ScrollLink to="home" onClick={handleMenuItemClick}  spy={true} smooth={true} offset={-100} duration={500} ><Link to="/">Home</Link></ScrollLink>
            </li>
            <li className="px-4 hover:text-gray-400 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200">
            <ScrollLink to="portfolio" onClick={handleMenuItemClick} spy={true} smooth={true} offset={-100} duration={500} ><Link to="/portfolio">Portfolio</Link></ScrollLink>
            </li>
            <li className="px-4 hover:text-gray-400 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200">
            <ScrollLink to="skills" onClick={handleMenuItemClick} spy={true} smooth={true} offset={-100} duration={500} ><Link to="/skills">Skills</Link></ScrollLink>
            </li>
            <li className="px-4 hover:text-gray-400 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200">
            <ScrollLink to="about" onClick={handleMenuItemClick} spy={true} smooth={true} offset={-100} duration={500} ><Link to="/about">About</Link></ScrollLink>
            </li>
            <li className="px-4 hover:text-gray-400 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-200">
            <ScrollLink to="contact" onClick={handleMenuItemClick} spy={true} smooth={true} offset={-150} duration={500} ><Link to="/contact">Contact</Link></ScrollLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
