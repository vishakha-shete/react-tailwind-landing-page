import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Box from './Components/Box.jsx'
const App = () => {
  return (
    <div className=" min-h-screen w-full bg-black ">
      <Navbar />
      <Hero />
      <Box />
    </div>
  )
}

export default App
