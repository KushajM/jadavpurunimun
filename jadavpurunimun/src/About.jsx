import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Big from "./Big.jsx";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'; // Import BrowserRouter
import ReactDOM from 'react-dom/client';
import {useNavigate} from "react-router-dom";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1600 });

    
  }, []);


  const navigate = useNavigate();
  
 

  return (
    <div className="about-container" id="about" >

<div className="custom-shape-divider-top-1704527554">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="content-wrapper" data-aos="fade-up">
        <div className="text-container" >
          <h1>ABOUT JU MUN</h1>
          <h2>
            
            Jadavpur University's global recognition derives from its academic goals and commitment to critical thinking. The JU Model United Nations embodies these aspirations, serving as a platform for global students to envision a brighter future. This initiative reflects the synergy between our instincts and the pull towards a collective, impactful future
            <a href="www.youtube.com" className="link">...</a>
          </h2> 
          <Link to="/big" target="_blank" className="about-a">
        View
      </Link>
        </div>
        <div className="image-container" >
            <a href="www.youtube.com"> <img src="../img/landingimg1.jpeg" alt="JUMUN Image" className="img" /></a>
         
        </div>
      </div>


      
    </div>
  );
}

export default About;
