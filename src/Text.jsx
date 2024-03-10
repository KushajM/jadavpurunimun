import React from 'react';
import "./landing.css";
import "./Text.scss"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Text = ({ text, index }) => {
  const scrollToCommittees = (event) => {
    event.preventDefault();
  
    const committeesSection = document.getElementById("committees");
    if (committeesSection) {
      committeesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTocontact = (event) => {
    event.preventDefault();
  
    const committeesSection = document.getElementById("contact");
    if (committeesSection) {
      committeesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const redirectToYouTube = () => {
    window.location.href = "https://www.youtube.com";
  };
  

  const openForm = () => {
    const formUrl = 'https://forms.gle/QSvwZCY7o4WiWj898';
    window.open(formUrl, '_blank');
  };

  const openFormQuiz = () => {
    const formUrl = 'https://forms.gle/kHQMaH3ZKCYFoarGA';
    window.open(formUrl, '_blank');
  };

  const openSheet = () => {
    const formUrl = 'https://docs.google.com/spreadsheets/d/1jxrJ-QWJcVAysJjE1mUDmGM2QVaHNJoJ6gmFQ_DD1bw/edit?usp=sharing';
    window.open(formUrl, '_blank');
  };
  return (
    <div className="mega-img-container">
      {index === 0 && (
        <>
          
          
          
          <div className="index-0-div">
          
            <span className="first-span" >JADAVPUR UNIVERSITY</span>
            <span className="second-span" >{text}</span>
            <span className="third-span" >19-21st APRIL, 2024</span>
            
              {/* <button className="register-btn" style={{}}><h1>REGISTER</h1></button> */}
              <button className="btn"  onClick={openForm} >
              <div className="btn__bg">
                <span className="btn__bg__layer btn__bg__layer-first"></span>
                <span className="btn__bg__layer btn__bg__layer-second"></span>
                <span className="btn__bg__layer btn__bg__layer-third"></span>
              </div>

              <span className="btn__text-out">REGISTER AS DELEGATE</span>
              <span className="btn__text-in">REGISTER AS DELEGATE</span>
            </button>
           

            <span className="cmt-guesser"><a href="" onClick={openSheet} target="_blank" style={{textDecoration:"none",color:"#F8E8DA"}}>Click here to view allotment matrix</a></span>
          </div>

          
        </>
      )}

{index === 1 && (
        <>
          
         
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
          <span className="first-span" >{text}</span>
            <span className="second-span" >Check out <a href="#" onClick={scrollToCommittees} ><span className="index_1_link">committees</span></a> at JUMUN 2024</span>
            </div>
            
           
          

          
        </>
      )}

{index === 2 && (
        <>
          
          
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
          <span className="first-span-3" >{text }</span>
            <span className="second-span"  ><a href="#" onClick={scrollTocontact} ><span className="index_1_link">Contact us</span></a> and we will reach out to you!</span>
            
            
           
          </div>

          
        </>
      )}

{index === 3 && (
        <>
          
          
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
          <span className="first-span" >{text }</span>
            <span className="second-span" style={{fontSize:"25px",marginBottom:"40px"}} >Make sure to follow us on our social media<a href="/blog" ><span className="index_3_link"></span></a></span>
            <span className="third-span">
            <a href="https://www.facebook.com/JUModelUnitedNations/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{width:"auto",height:"50px",alignItems:"center",color:"#F8E8DA"}}/></a>
          <a href="https://www.instagram.com/judebatingsociety/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{width:"auto",height:"50px",alignItems:"center",color:"#F8E8DA",marginLeft:"20px"}}/></a>
            </span>
            
           
          </div>

          
        </>
      )}


{index === 4 && (
        <>
          
          
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
          <span className="first-span-4" ><span className="index_4_link">Stay tuned </span>for updates</span>
          <span className="regular" style={{ fontSize: "20px", fontFamily: "Montserrat", textAlign: "center", marginTop: "30px"}}>Apathy's a tragedy and boredom is a crime</span>
            
            
            
           
          </div>

          
        </>
      )}
     
     
    </div>
  );
};

export default Text;
