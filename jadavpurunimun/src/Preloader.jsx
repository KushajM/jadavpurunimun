"use client";
import React, { useEffect, useState } from "react";
import "./Preloader.css";
import {preLoaderAnim} from "./animations/index.js";

const Preloader = () => {

  
  useEffect(()=>{
    preLoaderAnim()

  },[]);

  return (
    <div className="preloader">
        <div className="texts-container" >
          
            <span>#Decade</span>
            <span>Of</span>
            <span>Diplomacy</span>
          </div>
      </div>
  );
};

export default Preloader;
