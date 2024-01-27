import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./BigAbout.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Big = () => {

  useEffect(() => {
    AOS.init({ duration: 1600 });

    
  }, []);

  // const scrollTosec2 = (event) => {
  //   event.preventDefault();
  
  //   const committeesSection = document.getElementById("section2");
  
  //   if (committeesSection) {
  //     committeesSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollTosec3 = (event) => {
  //   event.preventDefault();
  
  //   const committeesSection = document.getElementById("section3");
  
  //   if (committeesSection) {
  //     committeesSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollTosec4 = (event) => {
  //   event.preventDefault();
  
  //   const committeesSection = document.getElementById("section4");
  
  //   if (committeesSection) {
  //     committeesSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollTosec1 = (event) => {
  //   event.preventDefault();
  
  //   const committeesSection = document.getElementById("section1");
  
  //   if (committeesSection) {
  //     committeesSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // return (
  //   <div className="bigabout" id="extended">
  //      <div className="big-container">
  //     {/* Section 1 */}
  //     <h1>ABOUT US</h1>
  //     <div className="big-section" id="section1" >
        
  //       <div className="big-column big-image"  data-aos="fade-up" >
  //         <img src="../img/Rapido.jpg" alt="Image 1" />
  //       </div>
  //       <div className="big-column big-text" data-aos="fade-up">
  //         <p>
  //         JU has gained global recognition for its commitment to academic excellence and critical thinking. The JU Model United Nations, a brainchild of this vision, serves as a platform for students worldwide to collaborate on shaping a brighter future. Since its inception in 2015, inaugurated by Mr. Yuri Kolobanov, Consulate General of the Russian Federation to India, the MUN has evolved into a prominent event. With its debut featuring three committees and three days of spirited debate, it has become a flagship in the East India circuit. The successive editions, including 2016, attracted international board members, fostering discussions on crucial political issues.
  //         </p>
  //       </div>
  //       <div className="arrow bounce" >
  //       <a onClick={(event) => scrollTosec2(event)}>↓</a>
  //       </div>
  //     </div>

  //     {/* Section 2 */}
  //     <div className="big-section" id="section2">
  //       <div className="big-column big-text" data-aos="fade-up">
  //         <p>
        
  //         The third edition in 2017 hosted around 5000 participants from all around the country and beyond, featuring agendas dealing with Sustainable Development, the need for a comprehensive healthcare policy in India, etc. In 2018, JUMUN decided to play the odds with diverse forums like the Fifth World Conference on Women, Intergovernmental Panel on Climate Change, and the flagship committee - the Department for Exiting the European Union.
  //         The year 2018 expanded our ambit as we realised the need for Civil Society Initiatives under which we campaigned to spread education to underprivileged children in various NGOs and to ensure greater access to sanitary pads to promote women's healthcare.
  //         </p>
  //       </div>
  //       <div className="big-column big-image" data-aos="fade-up">
  //         <img src="../img/DISEC5.jpg" alt="Image 2" />
  //       </div>
  //       <div className="arrow bounce" >
  //       <a onClick={(event) => scrollTosec3(event)}>↓</a>
  //       </div>
  //     </div>

  //     {/* Section 3 */}
  //     <div className="big-section" id="section3">
  //       <div className="big-column big-image" data-aos="fade-up">
  //         <img src="../img/T2.jpg" alt="Image 3" />
  //       </div>
  //       <div className="big-column big-text" data-aos="fade-up">
  //         <p>
         
  //         This spirit was carried over into our 5th edition in 2019, when JUMUN began the JUMUN Junior's Initiative with the vision of equipping students with the knowledge and experience of public speaking and nuances of global politics. With a footfall of 5000+, we hosted conferences like the Seneca Falls Convention, the Asian Security and Cooperation Summit, and the UNCTAD. We relayed this spirit to conduct our 7th edition in 2021. Adjusting to the health dynamics back in 2021, for the first time, JUMUN was hosted in an online mode where we had the online presence of more than 2000 active participants who deliberated on issues ranging from the Afghanistan crisis to the implementation of the Paris Climate Agreement.

  //         </p>
  //       </div>
  //       <div className="arrow bounce" >
  //       <a onClick={(event) => scrollTosec4(event)}>↓</a>
  //       </div>
  //     </div>

  //     {/* Section 4 */}
  //     <div className="big-section" id="section4" data-aos="fade-up">
  //       <div className="big-column big-text">
  //         <p>
  //         With a legacy this strong, we as a team only aim to expand our ambit further by extending the conversation to people in this country and abroad. We understand our role and responsibility in addressing the real issues that lie outside committee rooms and we only aim to extend this in our 9th edition by aspiring to diversify our dialogue and endeavour.

  //         </p>
  //       </div>
  //       <div className="big-column big-image" data-aos="fade-up">
  //         <img src="../img/unicef.jpg" alt="Image 4" />
          
  //       </div>
  //       <div className="arrow" style={{fontFamily:"Montserrat",fontSize:"20px"}} >
  //       <a onClick={(event) => scrollTosec1(event)} >Back to top</a>
  //       </div>
  //     </div>
  //   </div>


    
     
  
  // </div>

 

  return (
    <div className="bigabout" id="extended">
      <div className="top-section">
      
          <div className="animation_layer" id="landingimg1" data-aos="fade-in"><h1 className="heading" >ABOUT US</h1>
           
          </div>
      </div>

          <div className="text-con" data-aos="fade-up">

            
        <h2 className="text" ><span>Jadavpur University Model United Nations (JUMUN)</span> is an embodiment of Jadavpur University's global vision and commitment to fostering critical thinking. Established in 2015 and inaugurated by Mr. Yuri Kolobanov, Consulate General of the Russian Federation to India, JUMUN has evolved into a <span> prestigious platform for students worldwide.</span> <br /><br /> The inaugural edition featured three committees and set the stage for its reputation as <span>one of the finest in East India.</span> Over the years, JUMUN's influence expanded, hosting diverse forums such as the Fifth World Conference on Women and the Department for Exiting the European Union. <br /> <br/>The 2018 edition marked a pivotal moment as JUMUN recognized the need for Civil Society Initiatives, advocating for education in underprivileged communities and promoting women's healthcare.

In 2019, JUMUN introduced the JUMUN Junior's Initiative, focusing on <span>equipping students with public speaking skills and global political awareness.</span> The 7th edition in 2021, adapting to health dynamics, went online, drawing over 2000 active participants addressing issues from the Afghanistan crisis to the Paris Climate Agreement.<br /> <br />

With a robust legacy, JUMUN aims to further expand its reach in the 9th edition, engaging in diverse dialogues and endeavors. Beyond committee rooms, JUMUN acknowledges its role and responsibility in addressing real-world issues, aspiring to make a <span>meaningful impact both nationally and internationally.</span></h2>
        </div>
        
    
      
    </div>
  );
};



      
    


export default Big;
