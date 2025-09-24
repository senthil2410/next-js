'use client';

import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation,Pagination} from "swiper/modules";

const Gallery=()=>
{
    const images:string[]=[
        '/images/chennai.jpg',
        '/images/chennai.jpg'
    ]

    return(
        <div style={{width:'400px',margin:'auto'}}>

        <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        >

        {images.map((photo,index)=>(
           <SwiperSlide key={index}>
            <img
              src={photo}
              alt="Index"
              style={{width:'100%',height:'auto'}}
            />
          </SwiperSlide>

        ))}
      </Swiper>
        </div>
    );

}

export default Gallery;