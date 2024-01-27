import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; 
import Preloader from "./Preloader.jsx";
import Slider from "./Slider.jsx";
import About from "./About.jsx";
import Cmt from "./Cmt.jsx";
import Big from "./Big.jsx";
import {useNavigate} from "react-router-dom";
import Bigcmt from "./Bigcmt.jsx"
import Contact from "./Contact.jsx"
import Scroller from "./Scroller.jsx"
import Footer from "./Footer.jsx"
import Preloadertwo from "./PreloaderTwo.jsx"
import Navbar from "./Navbar.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [initialLoad, setInitialLoad] = useState(true);


  return (
    <Router>

     

      
   {/* <Preloadertwo /> */}
   <Navbar />
  <Preloader />
  <Slider />
  
  <Routes>
    
    <Route exact path ="/big"  element={<Big />} />
    <Route exact path ="/bigcmt" element={<Bigcmt />} />


    </Routes>
  <About />
  
  <Cmt />
  <Contact />
  <Scroller />
    <Footer />
    
    {/* <BigAbout /> */}
    {/* <SvgSection /> */}
    
  </Router>
  )
}

export default App

