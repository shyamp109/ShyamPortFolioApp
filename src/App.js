import React, { createContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contactus from "./Routes/Contactus";
import { Route, Routes, useLocation } from "react-router-dom";
import Heroimg from "./Components/Heroimg";
import SocialIcon from "./Components/SocialIcon";
import Fade from "react-reveal/Fade";
import Portfolio from "./Routes/Portfolio";
import Skills from "./Routes/Skills";
import Error from "./Routes/Error";

export const UserContext = createContext();
function App() {
  const location = useLocation();
  const validRoutes = ["/", "/about", "/portfolio", "/skills", "/contact"];

  const isRouteValid = validRoutes.some((route) => route === location.pathname);

  return (
    <Fade>
      <div id="home" className="bg-gradient-to-t to-gray-950 from-gray-800 ">
        {isRouteValid && (
          <>
            <Navbar />
            <Heroimg />
          </>
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contactus />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {isRouteValid && (
          <>
            <SocialIcon />
            <Footer />
          </>
        )}
      </div>
    </Fade>
  );
}

export default App;
