import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { responsive } from "./data";


const ProductCarousel = ({ products }) => {
  return (
    <div>
        <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
        >
        { products }

</Carousel>
    </div>
  );
};

export default ProductCarousel