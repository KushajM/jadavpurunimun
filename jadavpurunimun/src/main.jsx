import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Preloader from "./Preloader.jsx"
import Slider from "./Slider.jsx"
import About from "./About.jsx"
import Cmt from "./Cmt.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Preloader />
   <Slider />
   <About />
   <Cmt />
   
   
   
   {/* <SvgSection /> */}
 
   
  </React.StrictMode>,
)
