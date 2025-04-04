
import ImageSlider from "./ImageSlider.jsx"
import img1 from "../img/backgroundblue4.png"
import img2 from "../img/imagebg1.jpg"
import img3 from "../img/blogbackground.jpg"
import img4 from "../img/contactbg4.jpg"
import img5 from "../img/imagebg2.jpg"
import "./Slider.css"

const IMAGES = [img1,img2,img3,img4,img5]

export default function Slider(){

    return (
    

    <div style={{width:"100%",
      height:"100vh",
      top:"0",
      margin:"0 auto",
    }}
    >

      <ImageSlider imageUrls={IMAGES} className="img-slider" />
    </div>

    )
}

