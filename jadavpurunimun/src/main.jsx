import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import Preloader from "./Preloader.jsx";
import Slider from "./Slider.jsx";
import About from "./About.jsx";
import Cmt from "./Cmt.jsx";
import Big from "./Big.jsx";
import {useNavigate} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      

      <Preloader />
      <Slider />
      <Routes>
        
        <Route exact path ="/big"  element={<Big />} />

        </Routes>
     <About />
      
      <Cmt />
      {/* <BigAbout /> */}
      {/* <SvgSection /> */}
      
    </Router>
  </React.StrictMode>,
);
