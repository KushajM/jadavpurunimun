import {React, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 1600 });

    
  }, []);
    const scrollToCommittees = (event) => {
        event.preventDefault();
      
        const committeesSection = document.getElementById("committees");
      
        if (committeesSection) {
          committeesSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      const scrollToTop = (event) => {
        event.preventDefault();
      
        const committeesSection = document.getElementById("home");
      
        if (committeesSection) {
          committeesSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      const scrollToAbout = (event) => {
        event.preventDefault();
      
        const committeesSection = document.getElementById("about");
      
        if (committeesSection) {
          committeesSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      const scrollToContact = (event) => {
        event.preventDefault();
      
        const committeesSection = document.getElementById("contact");
      
        if (committeesSection) {
          committeesSection.scrollIntoView({ behavior: "smooth" });
        }
      };

     
      
  return (
    <div className="outer-footer-container" >


 <footer className="footer" >
      <div className="footer-container" >
        <div className="footer-content" >
          <div className="footer-logo" ><span>JUMUN2024</span></div>
          <div className="footer-links">
            <ul className="footer-menu">
              <li><a href="#" onClick={(event) => scrollToTop(event)}>Home</a></li>
              <li><a href="#" onClick={(event) => scrollToAbout(event)}>About</a></li>
              <li><a href="#" onClick={(event) => scrollToCommittees(event)}>Committees</a></li>


              <li><a href="#">Blog</a></li>
              <li><a href="#" onClick={(event) => scrollToContact(event)}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <ul className="social-icons">
              <li> <a href="https://www.facebook.com/JUModelUnitedNations/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{width:"auto",height:"30px",color:"#F8E8DA"}}/></a></li>
              <li><a href="https://www.instagram.com/judebatingsociety/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{width:"auto",height:"30px",color:"#F8E8DA",marginLeft:"20px"}}/></a></li>
              
            </ul>
          </div>
        </div>
        <div className="footer-bottom" >
          <p>Made with love by JUMUN 2024 Tech Team</p>
        </div>
      </div>
    </footer>


    </div>
  )
}

export default Footer