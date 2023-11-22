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





function SmallSliderBrand() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear"
    
  };
  return (
    // This Is Slide For Desktop Screen
    <div className='hidden md:block overflow-hidden max-w-[1240px] mx-auto px-8 relative left-[40%] translate-x-[-50%] py-7'>
    <Slider {...settings}>
      <div>
        <Image src={bmw} width={100} height={100} alt='pic1'/>
      </div>
      <div>
        <Image src={mini} width={200} height={200} alt='pic2' className='pr-5'/>
      </div>
      <div>
        <Image src={merci} width={110} height={110} alt='pic3'/>
      </div>
      <div>
        <Image src={kia} width={150} height={150} alt='pic4'/>
      </div>
      <div>
        <Image src={jag} width={150} height={150} alt='pic5'/>
      </div>
      <div>
        <Image src={toyota} width={130} height={130} alt='pic6'/>
      </div>
      <div>
        <Image src={hyunda} width={160} height={160} alt='pic7'/>
      </div>
      
    </Slider>
    </div>
  )
}

export default SmallSliderBrand