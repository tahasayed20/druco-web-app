'use client'
import React from 'react'
import { useState , useEffect } from 'react';


    

    import { FaArrowUp } from "react-icons/fa6";


export default function UpToTop() {
        
    const [up, setup] = useState(false);
    
    useEffect(() => {
    const handleButton = () => {
      if (window.scrollY >= 1000) {
        setup(true);
      } else {
        setup(false);
      }
    };
    window.addEventListener('scroll', handleButton);
    }, []);
    

    return (
        <a
            href='#home'
            className={ up ? ' bg-orange-500 p-4 rounded-full shadow-2xl shadow-yellow-500/50  right-2 bottom-2 z-[99999] fixed ease-in-out duration-500 hover:bg-yellow-500    ' : 'hidden ease-in-out duration-500' }   
        >
            <FaArrowUp />
        </a>
    )
    }
