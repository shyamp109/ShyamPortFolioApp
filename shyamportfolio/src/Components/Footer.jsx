import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-t from-gray-950 to-gray-800 ">
      <div className="grid grid-cols-1 md:grid-cols-2  mx-4 sm:mx-20 md:mx-24 gap-10">
        <div className="flex flex-col ">
          <div className="flex gap-3">
            <FaHome size={20} className="text-white" />
            <div>
              <a href="https://www.google.com/maps/place/Indralok+Society,+New+Ranip/@23.085031,72.5619223,17z/data=!3m1!4b1!4m6!3m5!1s0x395e83a75451ee73:0xd414b44dd7e5d6d0!8m2!3d23.085031!4d72.5644972!16s%2Fg%2F11h1yf_0wp" className="text-gray-200">115 Indarlok Tenament</a>
              <a href="https://www.google.com/maps/place/Indralok+Society,+New+Ranip/@23.085031,72.5619223,17z/data=!3m1!4b1!4m6!3m5!1s0x395e83a75451ee73:0xd414b44dd7e5d6d0!8m2!3d23.085031!4d72.5644972!16s%2Fg%2F11h1yf_0wp" className="text-gray-200">Ahemdabad, India.</a>
            </div>
          </div>
          <div className="flex mt-2 gap-3">
            <FaPhone size={20} className="text-white " />
            <a href="tel:8487075767" className="text-gray-200">8487075767</a>
          </div>
          <div className="flex mt-4 gap-3">
            <FaMailBulk size={20} className="text-white" />
            <a href="mailto:shyamp.itpath@gmail.com" className="text-gray-200">shyamp.itpath@gmail.com</a>
          </div>
        </div>
        <div>
          <h4 className="text-gray-200 text-2xl">About My PortFolio</h4>
          <p className="text-gray-200 text-md mt-3">
            This is me shyam patel.I am software developer at ItPathSolutions.
            Currently I have completed my grudation from gujart technological
            univercity Ahmedbad.
          </p>
          <div className="text-gray-200 flex mt-4">
            <a href="https://www.facebook.com/profile.php?id=100008644306596" ><FaFacebook size={20} className="text-white mr-4" /></a>
            <a href="https://twitter.com/WpeopleOfficial" ><FaTwitter size={20} className="text-white mr-4" /></a>
            <a href="https://www.linkedin.com/in/shyam-patel-a49b101a9/" ><FaLinkedin size={20} className="text-white mr-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
