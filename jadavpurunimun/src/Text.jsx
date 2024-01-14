import React from 'react';
import "./landing.css";


const Text = ({ text, index }) => {
  const scrollToCommittees = () => {
    const committeesSection = document.getElementById("committees");
    if (committeesSection) {
      committeesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div style={{ zIndex: 1, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", textAlign: "left", display: "flex", flexDirection: "row", alignItems: "center" }}>
      {index === 0 && (
        <>
          
          
          
          <div className="index-0-div" >
            <span className="first-span" >JADAVPUR UNIVERSITY</span>
            <span className="second-span" >{text} 2024</span>
            
            <a href="youtube.com">
              <button className="register-btn" style={{}}><h1>REGISTER</h1></button>
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
