import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./BigAbout.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Big = () => {
  useEffect(() => {
    const scrollLimit = 10;

    const handleScroll = () => {
      if (document.documentElement.scrollTop > scrollLimit) {
        document.documentElement.scrollTop = scrollLimit;
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bigabout" id="extended">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="landingimg1">
            <div className="gradient"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <h1 className="heading">ABOUT US</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} >
          <div className="text-con">
        <h2 className="text" ><span>Jadavpur University Model United Nations (JUMUN)</span> is an embodiment of Jadavpur University's global vision and commitment to fostering critical thinking. Established in 2015 and inaugurated by Mr. Yuri Kolobanov, Consulate General of the Russian Federation to India, JUMUN has evolved into a <span> prestigious platform for students worldwide.</span> <br /><br /> The inaugural edition featured three committees and set the stage for its reputation as <span>one of the finest in East India.</span> Over the years, JUMUN's influence expanded, hosting diverse forums such as the Fifth World Conference on Women and the Department for Exiting the European Union. <br /> <br/>The 2018 edition marked a pivotal moment as JUMUN recognized the need for Civil Society Initiatives, advocating for education in underprivileged communities and promoting women's healthcare.

In 2019, JUMUN introduced the JUMUN Junior's Initiative, focusing on <span>equipping students with public speaking skills and global political awareness.</span> The 7th edition in 2021, adapting to health dynamics, went online, drawing over 2000 active participants addressing issues from the Afghanistan crisis to the Paris Climate Agreement.<br /> <br />

With a robust legacy, JUMUN aims to further expand its reach in the 9th edition, engaging in diverse dialogues and endeavors. Beyond committee rooms, JUMUN acknowledges its role and responsibility in addressing real-world issues, aspiring to make a <span>meaningful impact both nationally and internationally.</span></h2>
        </div>
        </ParallaxLayer>
      </Parallax>
      
    </div>
  );
};

export default Big;
