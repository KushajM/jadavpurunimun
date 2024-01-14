import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Preloader from "./Preloader.jsx"
import Hero from "./Hero.jsx"
import Slider from "./Slider.jsx"
import Footer from "./Footer.jsx"
import RevealOnScroll from "./RevealOnScroll.jsx"
import AltHero from "./AltHero.jsx"
import Testing from "./Testing.jsx"
import Layer from "./Layer.jsx"
import SvgSection from "./SvgSection.jsx"
import About from "./About.jsx"
import Cmt from "./Cmt.jsx"
import Swastik from "./Swastik.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Preloader />
   <Slider />
   <About />
   <Cmt />
   
   
   
   {/* <SvgSection /> */}
 
   
  </React.StrictMode>,
)
