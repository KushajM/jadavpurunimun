
import React, { useEffect } from "react";
import "./Scroller.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Scroll = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1400 });

    
  }, []);


  return (
    <div className="outer-container-scroll">
     
      <h1 className="heading1" data-aos="fade-up">Past collaborators </h1>

{/* <div className="scroller" data-speed="fast">
  <ul className="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>SSG</li>
    <li>webdev</li>
    <li>animation</li>
    <li>UI/UX</li>
  </ul>
</div>  */}


    <div className="images" >
      <img src="../img/USConsulate.jpg" alt="" />
      <img src="../img/MUNRefugeeChallenge.png" alt="" />
      <img src="../img/Child.png" alt="" />
    </div>
  
    <h1 className="heading1" data-aos="fade-up" style={{marginBottom:"30px",marginTop:"60px"}}>Past partners</h1>
  
<div className="scroller" data-direction="right" data-speed="fast" >
  <div className="scroller__inner">
    <img src="../img/SBI.png" alt="" />
    <img src="../img/classNamemate.jpg" alt=""  />
    <img src="../img/Telegraph.jpg" alt="" />
    <img src="../img/FriendsFM.jpg" alt=""  />
    <img src="../img/IMS.png" alt="" />
    <img src="../img/Sporjo.png" alt="" />
  </div>
</div>


<div className="scroller" data-direction="left" data-speed="fast" style={{marginBottom:"100px"}}>
    <div className="scroller__inner">
      <img src="../img/Decathlon.png" alt="" />
      <img src="../img/Rapido.jpg" alt=""  />
      <img src="../img/T2.jpg" alt="" />
      <img src="../img/Kwikpic.jpg" alt=""  />
      <img src="../img/BBA.jpg" alt=""   />
      <img src="../img/VaniInstitute.png" alt="" />
     <img src="../img/Educrat.png" alt="" />
    </div>
  </div>

    </div>
  );
};

export default Scroll;
