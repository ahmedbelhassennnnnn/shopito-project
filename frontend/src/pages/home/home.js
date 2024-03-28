import React from 'react'
import Slider from '../../components/slider/Slider';
import "./Home.scss" ; 
import HomeInfobox from './HomeInfobox';
import { productData } from '../../components/corousel/data';
import carouselItem from '../../components/corousel/carouselItem.js';


const PageHeading = ({heading, btnText}) => { 
  return (
<>
<div className="--flex-between">
<h2 className="--fw-thin"> {heading}</h2>
<button className="--btn">
  {btnText}
</button>
</div>
<div className="--hr"></div>
</>
    
  );
}; 

const Home = () => {
  const productss = productData.map((item, index)=>{
    <div key ={item.id}>
<carouselItem

/>
    </div>
  } )
  return (
    <>
      <Slider/>
      <section>
      <div className="container">
      <HomeInfobox />
      <PageHeading heading={"Latest Products"} btnText={"Shop Now "} />
      </div>
      </section>
    </>
  );
};

export default Home
