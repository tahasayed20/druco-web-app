"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


import Image from 'next/image';

import photo1 from '../../public/images/image1.jpg'
import photo2 from '../../public/images/image2.jpg'
import photo3 from '../../public/images/image4.jpg'

export default function Slider() {
  return (
    <div className='bg-white'>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        effect={"cub"}
        cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      <SwiperSlide>
        <div className='bg-black relative'>
            <Image className='w-full h-full opacity-50'
                src={photo1} 
                width={1200}
                height={800}
                alt="Druco"/>
            <div className=' absolute top-[50%] left-[0] translate-x-[0] translate-y-[-50%] md:flex justify-between items-center max-w-[1240px] mx-auto px-20 w-full '>
                <div className='hidden md:block bg-white w-[40%] text-center rounded-xl p-7'>
                    <h1 className='text-black font-bold text-3xl'>SEARCH BY VEICLE</h1>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Make</option>
                            <option value="car-batteries">BMW</option>
                            <option value="brake">Ford</option>
                            <option value="electric-brakes">Hyundai</option>
                            <option value="emergency-brakes">Lexus</option>
                            <option value="hydraulic-brakes">Mazda</option>
                            <option value="mechanical-brakes">Mercerdess</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Model</option>
                            <option value="car-batteries">124 GT</option>
                            <option value="brake">124 SPIDER</option>
                            <option value="electric-brakes">500</option>
                            <option value="emergency-brakes">500C</option>
                            <option value="hydraulic-brakes">595</option>
                            <option value="mechanical-brakes">595C</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Year</option>
                            <option value="car-batteries">2019</option>
                            <option value="brake">2020</option>
                            <option value="electric-brakes">2021</option>
                            <option value="emergency-brakes">2022</option>
                            <option value="hydraulic-brakes">2023</option>
                            <option value="mechanical-brakes">2024</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Engine</option>
                            <option value="car-batteries">1.2</option>
                            <option value="brake">1.3</option>
                            <option value="electric-brakes">1.4</option>
                            <option value="emergency-brakes">1.5</option>
                        </select>
                    </div>
                    <button className='text-black bg-yellow-400 py-3 font-bold px-10 rounded-3xl hover:bg-black hover:text-yellow-400 ease-in-out duration-500'>Go</button>
                </div>
                <div className='md:text-start text-center md:w-[50%]'>
                    <h6 className='text-xs text-yellow-400 font-bold md:text-lg mb-2 '>NEVER MISS A SALE</h6>
                    <h1 className='text-xl text-white font-bold md:text-5xl mb-2'>Rocket Racing Wheels</h1>
                    <p className='hidden md:block text-white mb-6 font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio corrupti pariatur velit dolores nemo </p>
                    <a href='#product' className='px-8 text-sm text-black bg-white py-3 font-bold md:px-10 rounded-3xl hover:bg-yellow-400 hover:text-black ease-in-out duration-500'>SHOP NOW</a>
                </div>
            </div>    
        </div>    
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-black">
        <Image className='w-full h-full opacity-50'
            src={photo2} 
            width={1200}
            height={800}
            alt="Druco"/>
            <div className=' absolute top-[50%] left-[0] translate-x-[0] translate-y-[-50%] md:flex justify-between items-center max-w-[1240px] mx-auto px-20 w-full '>
                <div className='hidden md:block bg-white w-[40%] text-center rounded-xl p-7'>
                    <h1 className='text-black font-bold text-3xl'>SEARCH BY VEICLE</h1>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Make</option>
                            <option value="car-batteries">BMW</option>
                            <option value="brake">Ford</option>
                            <option value="electric-brakes">Hyundai</option>
                            <option value="emergency-brakes">Lexus</option>
                            <option value="hydraulic-brakes">Mazda</option>
                            <option value="mechanical-brakes">Mercerdess</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Model</option>
                            <option value="car-batteries">124 GT</option>
                            <option value="brake">124 SPIDER</option>
                            <option value="electric-brakes">500</option>
                            <option value="emergency-brakes">500C</option>
                            <option value="hydraulic-brakes">595</option>
                            <option value="mechanical-brakes">595C</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Year</option>
                            <option value="car-batteries">2019</option>
                            <option value="brake">2020</option>
                            <option value="electric-brakes">2021</option>
                            <option value="emergency-brakes">2022</option>
                            <option value="hydraulic-brakes">2023</option>
                            <option value="mechanical-brakes">2024</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Engine</option>
                            <option value="car-batteries">1.2</option>
                            <option value="brake">1.3</option>
                            <option value="electric-brakes">1.4</option>
                            <option value="emergency-brakes">1.5</option>
                        </select>
                    </div>
                    <button className='text-black bg-yellow-400 py-3 font-bold px-10 rounded-3xl hover:bg-black hover:text-yellow-400 ease-in-out duration-500'>Go</button>
                </div>
                <div className='md:text-start text-center md:w-[50%]'>
                    <h6 className='text-xs text-yellow-400 font-bold md:text-lg mb-2'>BIG SALE</h6>
                    <h1 className='text-xl text-white font-bold md:text-5xl mb-2'>40% off Sale Is Back</h1>
                    <p className='hidden md:block text-white mb-6 font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio corrupti pariatur velit dolores nemo </p>
                    <a href='#product' className='px-8 text-sm text-black bg-white py-3 font-bold md:px-10 rounded-3xl hover:bg-yellow-400 hover:text-black ease-in-out duration-500'>SHOP NOW</a>
                </div>
            </div>
        </div>    
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-black '>
        <Image className='w-full h-full opacity-50'
            src={photo3} 
            width={1200}
            height={800}
            alt="Druco"/>
            <div className=' absolute top-[50%] left-[0] translate-x-[0] translate-y-[-50%] md:flex justify-between items-center max-w-[1240px] mx-auto px-20 w-full '>
                <div className='hidden md:block bg-white w-[40%] text-center rounded-xl p-7'>
                    <h1 className='text-black font-bold text-3xl'>SEARCH BY VEICLE</h1>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Make</option>
                            <option value="car-batteries">BMW</option>
                            <option value="brake">Ford</option>
                            <option value="electric-brakes">Hyundai</option>
                            <option value="emergency-brakes">Lexus</option>
                            <option value="hydraulic-brakes">Mazda</option>
                            <option value="mechanical-brakes">Mercerdess</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Model</option>
                            <option value="car-batteries">124 GT</option>
                            <option value="brake">124 SPIDER</option>
                            <option value="electric-brakes">500</option>
                            <option value="emergency-brakes">500C</option>
                            <option value="hydraulic-brakes">595</option>
                            <option value="mechanical-brakes">595C</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Year</option>
                            <option value="car-batteries">2019</option>
                            <option value="brake">2020</option>
                            <option value="electric-brakes">2021</option>
                            <option value="emergency-brakes">2022</option>
                            <option value="hydraulic-brakes">2023</option>
                            <option value="mechanical-brakes">2024</option>
                        </select>
                    </div>
                    <div className='p-5'>
                        <select className='outline-0 hidden md:flex w-full border-2 p-5 rounded-md text-gray-400'>
                            <option value>Select Engine</option>
                            <option value="car-batteries">1.2</option>
                            <option value="brake">1.3</option>
                            <option value="electric-brakes">1.4</option>
                            <option value="emergency-brakes">1.5</option>
                        </select>
                    </div>
                    <button className='text-black bg-yellow-400 py-3 font-bold px-10 rounded-3xl hover:bg-black hover:text-yellow-400 ease-in-out duration-500'>Go</button>
                </div>
                <div className='md:text-start text-center md:w-[50%]'>
                    <h6 className='text-xs text-yellow-400 font-bold md:text-lg mb-2'>EXTRA 25%</h6>
                    <h1 className='text-xl text-white font-bold md:text-5xl mb-2'>Check and Maintain</h1>
                    <p className='hidden md:block text-white mb-6 font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio corrupti pariatur velit dolores nemo </p>
                    <a href='#product' className='px-8 text-sm text-black bg-white py-3 font-bold md:px-10 rounded-3xl hover:bg-yellow-400 hover:text-black ease-in-out duration-500'>SHOP NOW</a>
                </div>
            </div>
        </div>    
      </SwiperSlide>
    </Swiper>
    </div>
  );
};