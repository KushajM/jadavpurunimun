import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import { useState } from "react";
import "./ImageSlider.css";
import img5 from "../i5.jpg";
import {BsChevronCompactLeft} from 'react-icons/bs';
import {BsChevronCompactRight} from 'react-icons/bs';
import {BsChevronCompactUp} from 'react-icons/bs';
import {BsChevronCompactDown} from 'react-icons/bs';
import Text from "./Text.jsx";


function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  const defaultImageTexts = [
    "MODEL UNITED NATIONS",
    "Be Greater, Together.",
    "Have a query?",
    "Lights, camera, socials!",
    "",
  ];

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  const [itemActive, setItemActive] = useState(0);
  
  const nextClick = () => {
    setItemActive((prevItem) => (prevItem + 1) % countItem);
  };

  const prevClick = () => {
    setItemActive((prevItem) => (prevItem - 1 + countItem) % countItem);
  };


  return (
    <div style={{ position: "relative", width: "100%", height: "100%",zIndex:0,overflow:"hidden" }} id="home">
      
      <div className="img-slider-img-container" style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        {imageUrls.map((url, index) => (
          <div key={index} style={{ position: "absolute", width: "100%", height: "100vh", opacity: index === imageIndex ? 1 : 0, transition: "opacity 0.6s", objectFit: "cover" }}>
            <img src={url} className="img-slider-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <Text text={defaultImageTexts[index]} index={index} />
          </div>
        ))}
      </div>
      <button onClick={showPrevImage} className="img-slider-button" style={{ left: 0,width:"30px"}}>
        <BsChevronCompactLeft className="button-arrow-left" />
      </button>
      <button onClick={showNextImage} className="img-slider-button" style={{ right: 0, }}>
        <BsChevronCompactRight className="button-arrow-right"/>
      </button>

      <div className="img-circle-btn-container">
        {imageUrls.map((_, index) => (
          <button key={index} className="img-slider-circle-btn" style={{ bottom:0}} onClick={() => setImageIndex(index)}>
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
      
    </div>
    
  );
}

export default ImageSlider;
