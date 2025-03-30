import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./BigAbout.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Big = () => {

  useEffect(() => {
    AOS.init({ duration: 1600 });

    
  }, []);

   const scrollTotextsec = (event) => {
    event.preventDefault();
  
    const committeesSection = document.getElementById("textsec");
  
    if (committeesSection) {
      committeesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    
    return () => {
      // Re-enable scrolling when leaving the page
      document.body.style.overflow = "auto";
    };
  }, []);
 
  return (
    <div className="bigabout" id="extended">
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img
              src="../jumunabout2.jpg"
              width="808"
              height="458"
              alt="Lobby Image"
            />
          </div>
          <div className="about-us-info">
            <h2>ABOUT JUMUN</h2>
            <p>
            Jadavpur University's global renounce comes for what it collectively wishes to achieve as an academic institution and a space for critical thinking. The JU Model United Nations is the manifestation of that desire. It is a platform by the University for students across the world to construct a vision for a better tomorrow. 
            <br />
            <br />
            Since its inception in 2015, Jadavpur University Model United Nations (JUMUN) has evolved into a prominent platform for diplomatic discourse and international awareness. Inaugurated by Mr. Yuri Kolobanov, Consulate General of the Russian Federation to India, the inaugural edition marked the beginning of a legacy renowned in the East India circuit. Subsequent editions, such as the impactful 2017 gathering of 5000 participants, delved into crucial issues like Sustainable Development and healthcare policies. JUMUN's commitment extended in 2018 with initiatives addressing social concerns, advocating education for underprivileged children, and promoting women's healthcare. The initiative continued to flourish, introducing the JUMUN Junior's Initiative in 2019 and successfully transitioning to an online format in 2021 amidst global health dynamics. With diverse forums and a global presence, JUMUN consistently fosters informed discussions on matters ranging from geopolitical crises to environmental agreements.
            <br />
            <br />
            With a legacy this strong, we as a team only aim to expand our ambit further by extending the conversation to people in this country and abroad. We understand our role and responsibility in addressing the real issues that lie outside committee rooms and we only aim to extend this in our 11th edition by aspiring to diversify our dialogue and endeavour.
            </p>
           
          </div>
        </div>
        
      </div>
    </div>
  );
};


      
    


export default Big;
