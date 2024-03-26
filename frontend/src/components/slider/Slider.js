import React, { useEffect, useState } from 'react'
import "./Slider.scss" ;
import { AiOutlineArrowLeft , AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from './slider-data';
import { useNavigate } from 'react-router-dom';


const Slider = () => {
 const [currentSlide, setcurrentSlide] = useState(0)
const slideLength = sliderData.length
const autoScroll = true
let slideInterval ; 
const intervalRTime = 5000

 const Navigate= useNavigate ()
    const PrevSlide = () => {
setcurrentSlide( currentSlide ===  0 ? slideLength -1 : currentSlide -1)

    } ;

    useEffect(()=> {
setcurrentSlide(0)
    },[] )
   
   
    useEffect(()=> {
        if (autoScroll) { 
            const auto = () => {
                slideInterval = setInterval(nextslide, intervalRTime)
            }
            auto()
        }
        return () => clearInterval(slideInterval)
            },[currentSlide , intervalRTime, autoScroll] );

 const nextslide = () => {setcurrentSlide( currentSlide === slideLength  - 1 ? 0 : currentSlide + 1)} ;
   
 
 return (
    <div className="slider"> 
    <AiOutlineArrowLeft className="arrow prev" onClick={PrevSlide} />
    <AiOutlineArrowRight className="arrow next" onClick={nextslide} />
    

    {sliderData.map((slide, index ) => {
        const {image, heading, desc} = slide

        return (
            <div key={index} className={index === currentSlide ? "slide current" : "slide"}> 
{index === currentSlide && (
     <>
     <img src={image} alt="slide"/>
     <div className="content">
     <span className="span1"  ></span>
     <span className="span2"  ></span>
     <span className="span3"  ></span>
     <span className="span4"  ></span>
     <h2>{heading}</h2>
     <p>{desc}</p>
     <hr />
     <button className="--btn , --btn-primary" onClick={() => Navigate ("/shop")}>
     
     SHOP NOW 

     </button>
      
     
     
     </div>
     </>
)}
            </div>
        )
    })}
     </div>
  )
}

export default Slider