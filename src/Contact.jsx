// Contact.js

import React, { useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Text.scss" 
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

 // Import the CSS file
// npm i @emailjs/browser

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1600 });

    
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_blrqlmr",
        "template_b29nfls",
        form.current,
        "0goypKUXo5DRnQzbR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
    
        <div className="contact-container">
    <main className="row">
      {/* Left Section (Column) Starts */}
      <section className="col left" data-aos="fade-in">
        {/* Title Starts */}
        <div className="contactTitle">
          <h2>CONTACT US</h2>
          <p>Have something you want to tell us? 
            <br />
            
            Text us your query and we will get back to you as soon as we can!
            <br />
            <br />
            Do reach out to us on all of our socials!
            </p>
        </div>
        {/* Title Ends */}

        {/* Contact Info Starts */}
        <div className="contactInfo">
          <div className="iconGroup">
           
            <div className="details">
              <span>Phone</span>
              <span>+91 82354 704060 (Secretary General) <br /> +91 98540 05015 (Director General) <br />+91 82740 52513 (Deputy Dir. General) </span>
            </div>
          </div>

          <div className="iconGroup">
            
            <div className="details">
              <span>Email</span>
              <span>jadavpuruniversitymun2024@gmail.com</span>
            </div>
          </div>

          
        </div>
        {/* Contact Info Ends */}

        {/* Social Media Starts */}
        <div className="socialMedia">
          <a href="https://www.facebook.com/JUModelUnitedNations/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{width:"auto",height:"36px",alignItems:"center",color:"#660D39"}}/></a>
          <a href="https://www.instagram.com/judebatingsociety/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{width:"auto",height:"36px",alignItems:"center",color:"#660D39",marginLeft:"20px"}}/></a>
        </div>
        {/* Social Media Ends */}
      </section>
      {/* Left Section (Column) Ends */}

      {/* Right Section (Column) Starts */}
      <section className="col right" data-aos="fade-in">
        {/* Form Starts */}
        <form className="messageForm" ref={form} onSubmit={sendEmail}>
          <div className="inputGroup halfWidth">
            <input type="text" name="user_name" required />
            <label>Your Name</label>
          </div>

          <div className="inputGroup halfWidth">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>

          <div className="inputGroup fullWidth">
            <textarea name = "message" required ></textarea>
            <label>Say Something</label>
          </div>

          <div className="inputGroup fullWidth">
          <button class="btn">
              <div class="btn__bg">
                <span class="btn__bg__layer btn__bg__layer-first"></span>
                <span class="btn__bg__layer btn__bg__layer-second"></span>
                <span class="btn__bg__layer btn__bg__layer-third"></span>
              </div>

              <span class="btn__text-out" style={{fontSize:"1.36em"}}>SUBMIT</span>
              <span class="btn__text-in" style={{fontSize:"1.32em"}}>SUBMIT</span>
            </button>
          </div>
        </form>
        {/* Form Ends */}
      </section>
      {/* Right Section (Column) Ends */}
    </main>
  </div>
      </div>
   
  );
};

export default Contact;
