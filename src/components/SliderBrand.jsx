"use client"


import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';

import bmw from '../../public/images/bmw.png'
import mini from '../../public/images/mini.png'
import merci from '../../public/images/merci.png'
import kia from '../../public/images/kia.png'
import jag from '../../public/images/jag.png'
import toyota from '../../public/images/toyota.png'
import hyunda from '../../public/images/hyundai.png'




function SliderBrand() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear"
    
  };
  return (
    <div className=' md:hidden overflow-hidden max-w-[1240px] mx-auto content-center px-5 relative left-[55%] translate-x-[-50%]'>
    <Slider {...settings}>
      <div>
        <Image src={bmw} width={50} height={50} alt='pic'/>
      </div>
      <div>
        <Image src={mini} width={100} height={100} alt='pic' className='left-[-25px] relative'/>
      </div>
      <div>
        <Image src={merci} width={55} height={55} alt='pic'/>
      </div>
      <div>
        <Image src={kia} width={70} height={70} alt='pic' className=' relative top-[5px]'/>
      </div>
      <div>
        <Image src={jag} width={70} height={70} alt='pic'/>
      </div>
      <div>
        <Image src={toyota} width={60} height={60} alt='pic'/>
      </div>
      <div>
        <Image src={hyunda} width={75} height={75} className=' relative ' alt='pic'/>
      </div>
      
    </Slider>
    </div>
  )
}

export default SliderBrand