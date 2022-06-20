import React from 'react'
import Navbar from '../Components/Navbar/Index'
import Sidebar from '../Components/Sidebar/Index'
import { useState } from 'react'
import HeroSection from '../Components/Heroo/Index'
import Info from '../Components/Infosection/Index'
import Contact from '../Components/Contact/Index'
import { numberone, numberthree, numbertwo } from '../Components/Infosection/Data'
import Footer from '../Components/Footer/Index'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
 

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <Info {...numberone} />
      <Info {...numbertwo} />
      <Info {...numberthree} />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
