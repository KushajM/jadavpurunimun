import React, {useState, useEffect} from 'react'
import "./Cmt.css"
import {cmtMenu} from "./animations/cmt.js"
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


const Cmt = () => {
  
    useEffect(()=>{
        cmtMenu();
        
        AOS.init({ duration: 1200 });
      },[]);
    
  
  return (
    
    <div className="committee-page" id="committees">
      
        <h1 data-aos="fade-in">COMMITTEES</h1>
       
    <div className="container" data-mouse-down-at="0" data-prev-percentage="0" id="image-track" >
        
      <div className="card" >
        <div className="content">
          <h2>UNGA DISEC</h2>
          <p>Disarmament and 
            <br />
            International Security 
            Committee</p>
            <a href="/bigcmt#UNGADISEC"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../UNGA_FINAL.png" className="image" draggable="false"  />
      </div>

      <div className="card" >
        <div className="content">
          <h2>UNCSW</h2>
          <p>Commission on Status of <br /> Women</p>
          <a href="/bigcmt#UNCSW" className="agenda">
        Agenda
      </a>
        </div>
        <img src="../UNCSW_FINAL.png" className="image" draggable="false" />
      </div>
      <div className="card"  >
        <div className="content">
          <h2>LOK SABHA</h2>
          <p>Lok Sabha</p>
          <a href="/bigcmt#LOKSABHA"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../LOKSABHA_FINAL.png" className="image" draggable="false" />
      </div>
      
        <div className="card"  >
        <div className="content">
          <h2>WHA</h2>
          <p>World Health Assembly</p>
          <a href="/bigcmt#WHA"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../WHA_FINAL.png" className="image" draggable="false" />
      </div>
     
      <div className="card">
        <div className="content">
          <h2>UNHCR</h2>
          <p>United Nations  
            <br />Human Rights Council (Online)</p>
            <a href="/bigcmt#UNHRC"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../UNHRC_FINAL.png" className="image" draggable="false" />
      </div>
     

      <div className="card" >
        <div className="content">
          <h2>ICTY</h2>
          <p>International Criminal Tribunal 
            <br />for Yugoslavia</p>
          <a href="/bigcmt#ICTY"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../ICTY_FINAL.png" className="image" draggable="false" />
      </div>

      <div className="card" >
        <div className="content">
          <h2>COP 30</h2>
          <p></p>
          <a href="/bigcmt#COP30"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../COP30_FINAL.png" className="image" draggable="false" />
      </div>
      <div className="card" >
        <div className="content">
          <h2>IP</h2>
          <p>International Press</p>
          <a href="/bigcmt#IP"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../IP_FINAL.png" className="image" draggable="false" />
      </div>
     
      
      </div>
      <h2 className="swipe-text">(Click and swipe left to view)</h2>
      </div>
  );
};

export default Cmt;
