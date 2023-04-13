import React from 'react'

import About from './About'
import Project from './Portfolio'
import Contactus from './Contactus'
import { Fade } from 'react-reveal'
import Skills from './Skills'



const Home = () => {

  return (
    <Fade>
      <Project />
      <About /> 
      <Skills />
      <Contactus />
    </Fade>
  )
}

export default Home