import React from 'react';
import "./landing.css";
import "./Text.scss"


const Text = ({ text, index }) => {
  const scrollToCommittees = (event) => {
    event.preventDefault();
  
    const committeesSection = document.getElementById("committees");
    if (committeesSection) {
      committeesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  const redirectToYouTube = () => {
    window.location.href = "https://www.youtube.com";
  };
  
  return (
    <div className="mega-img-container">
      {index === 0 && (
        <>
          
          
          
          <div className="index-0-div">
            <span className="first-span" >JADAVPUR UNIVERSITY</span>
            <span className="second-span" >{text} 2024</span>
            
            <a href="https://www.youtube.com/" >
              {/* <button className="register-btn" style={{}}><h1>REGISTER</h1></button> */}
              <button class="btn" >
              <div class="btn__bg">
                <span class="btn__bg__layer btn__bg__layer-first"></span>
                <span class="btn__bg__layer btn__bg__layer-second"></span>
                <span class="btn__bg__layer btn__bg__layer-third"></span>
              </div>

              <span class="btn__text-out">REGISTER</span>
              <span class="btn__text-in">REGISTER</span>
            </button>
            </a>
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
          <span className="first-span" >{text }</span>
            <span className="second-span" ><a href="#" onClick={scrollToCommittees} ><span className="index_1_link">Click here</span></a> to know more</span>
            
            
           
          </div>

          
        </>
      )}

{index === 4 && (
        <>
          
          
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px"}}>
          <span className="first-span-4" ><span className="index_4_link">Stay tuned </span>for updates</span>
          <span className="regular" style={{ fontSize: "20px", fontFamily: "Montserrat", textAlign: "center", marginTop: "30px",width:"1000px"}}>Apathy's a tragedy and boredom is a crime</span>
            
            
            
           
          </div>

          
        </>
      )}
     
     
    </div>
  );
};

export default Text;
