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
import Swal from 'sweetalert2'
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
        "service_yzah8x4",
        "template_7msa69t",
        form.current,
        "9Fe9BK0IEQ0RBOEHb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message submitted!",
            showConfirmButton: false,
            timer: 1500,
            color:"#FAEEE3",
            background:"#5C012E",
            iconColor: '#FAEEE3',
           
          });
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
      <section className="col left" data-aos="fade-in" >
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
              <span className="phonetext">Phone</span>
              <span className="phonenos">+91 82354 70406 (Secretary General) <br /> +91 98540 05015 (Director General) <br />+91 75959 03202 (Director General) </span>
            </div>
          </div>

          <div className="iconGroup">
            
            <div className="details">
              <span className="emailtext">Email</span>
              <span className="mailid">jadavpuruniversitymun2024@gmail.com</span>
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
          <button className="btn">
              <div className="btn__bg">
                <span className="btn__bg__layer btn__bg__layer-first"></span>
                <span className="btn__bg__layer btn__bg__layer-second"></span>
                <span className="btn__bg__layer btn__bg__layer-third"></span>
              </div>

              <span className="btn__text-out" style={{fontSize:"1.36em"}}>SUBMIT</span>
              <span className="btn__text-in" style={{fontSize:"1.32em"}}>SUBMIT</span>
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
