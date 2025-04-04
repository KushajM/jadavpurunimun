
import React, { useEffect, useState } from "react";
import "./Preloader.css";
import { Helmet } from "react-helmet";
import {preLoaderAnim} from "./animations/index.js";

const Preloader = () => {

  
  useEffect(()=>{
    preLoaderAnim()
    console.warn = () => {};
  },[]);

  


  return (
   
      
    <div className="preloader">
        <div className="texts-container" >
          
            <span>#Chaos</span>
            <span>To</span>
            <span>Consensus</span>
          </div>
      </div>
   
  );
};

export default Preloader;
