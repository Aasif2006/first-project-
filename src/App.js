import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Nextfooter from './Nextfooter'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <div><Navbar/>
    <Hero/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Nextfooter/>
    <Footer/>
    </div>
    </BrowserRouter>
    </>
    
  )
}

export default App