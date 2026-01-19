import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import assets from "../assets/assets";

const Carousel = () => {

const images = [
    assets.cakefive,
    assets.cakefour,
    assets.cakeseven,
    assets.cakenine,
    assets.caketen, 
    assets.cake11,
    assets.cake12,
    assets.cake1

]

  return (
    <div className="mt-6">
    <Swiper 
    modules = {[Autoplay]}
    slidesPerView={1.2}
    spaceBetween={10}
    loop
    speed = {5000}
    autoplay = {{
        delay: 0, 
        disableOnInteraction:false,
    }}
    
//      breakpoints={{
//     640: { 
//       slidesPerView: 1.4,
//       spaceBetween: -15 
//     },
//     768: { 
//       slidesPerView: 1.5,
//       spaceBetween: -20 
//     },
//     1024: { 
//       slidesPerView: 1.6,
//       spaceBetween: -25 
//     },
//   }}

    allowTouchMove = {false}
    className="w-full"
    >
     {images.map((image, index) => (
        <SwiperSlide key={index}>
           <img
           src= {image} 
           autoPlay
           muted
           loop
           playsInline
           className="w-full h-80 md:w-80 max-sm:w-70 lg:w-140 lg:h-140  rounded-xl"
           
           />
        
        </SwiperSlide>
     ))}

    </Swiper>
    </div>
  )
}

export default Carousel



