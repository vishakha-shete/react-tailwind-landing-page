import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Box from './Components/Box.jsx'
import Section from './Components/Section.jsx'
import Part from "./Components/Part.jsx";
import About from './Components/About.jsx'
import Mid from './Components/Mid.jsx'

const App = () => {
  return (
    <div className=" min-h-screen w-full bg-black ">
      <Navbar />
      <Hero />
      <Box />
      <Section />
      <Part />
      <About />
      <Mid />
    </div>
  )
}

export default App
