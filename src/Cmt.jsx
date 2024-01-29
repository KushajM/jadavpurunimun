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
      
        <h1 data-aos="fade-up">COMMITTEES</h1>
       
    <div className="container" data-mouse-down-at="0" data-prev-percentage="0" id="image-track" >
        
      <div className="card" >
        <div className="content">
          <h2>UNGA DISEC</h2>
          <p>Disarmament and 
            <br />
            International Security 
            Committee</p>
            <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../DISEC.png" className="image" draggable="false"  />
      </div>
      <div className="card" >
        <div className="content">
          <h2>UNCSW</h2>
          <p>Commission on Status of <br /> Women</p>
          <a href="/bigcmt" className="agenda">
        Agenda
      </a>
        </div>
        <img src="../UNW.png" className="image" draggable="false" />
      </div>
      <div className="card"  >
        <div className="content">
          <h2>LOK SABHA</h2>
          <p>Lok Sabha</p>
          <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../LOKSABHA.png" className="image" draggable="false" />
      </div>
      
        <div className="card"  >
        <div className="content">
          <h2>VPC</h2>
          <p>Viceroy's Partition Council</p>
          <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../VPC.png" className="image" draggable="false" />
      </div>
     
      <div className="card">
        <div className="content">
          <h2>UNHCR</h2>
          <p>United Nations High 
            <br />Commissioner of Refugee</p>
            <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../HCR.png" className="image" draggable="false" />
      </div>
     

      <div className="card" >
        <div className="content">
          <h2>UNODC</h2>
          <p>United Nations Office on Drugs and Crime</p>
          <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../odc2.png" className="image" draggable="false" />
      </div>

      <div className="card" >
        <div className="content">
          <h2>UNICEF</h2>
          <p>United Nations Children's Fund</p>
          <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../unicef2.png" className="image" draggable="false" />
      </div>
      <div className="card" >
        <div className="content">
          <h2>IP</h2>
          <p>International Press</p>
          <a href="/bigcmt"  className="agenda">
        Agenda
      </a>
        </div>
        <img src="../IP.png" className="image" draggable="false" />
      </div>
     
      
      </div>
      <h2 className="swipe-text">(Click and swipe left to view)</h2>
      </div>
  );
};

export default Cmt;
