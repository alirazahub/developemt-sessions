import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import NavBar from './NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
