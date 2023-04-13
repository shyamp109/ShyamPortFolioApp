import React, { createContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contactus from "./Routes/Contactus";
import { Route, Routes } from "react-router-dom";
import Heroimg from "./Components/Heroimg";
import SocialIcon from "./Components/SocialIcon";
import Fade from "react-reveal/Fade";
import Portfolio from "./Routes/Portfolio";
import Skills from "./Routes/Skills";
import ScrollToTopButton from "./Components/ScrollTop";
export const UserContext = createContext();
function App() {
  return (
    <Fade>
      <div id="home" className="bg-gradient-to-t to-gray-950 from-gray-800 ">
        <Navbar />
        <Heroimg />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <SocialIcon />
        <ScrollToTopButton />
        <Footer />
      </div>
    </Fade>
  );
}

export default App;
