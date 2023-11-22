import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

function NavbarSearch() {
  return (
    <div className='  flex bg-slate-100 md:bg-white py-2 justify-between max-w-[1240px] mx-auto w-full px-5 '>
        <div className='w-[40%]'>
            <select className='outline-0 flex-auto bg-slate-100 md:hidden'>
              <option value>All Categories</option>
              <option value="car-batteries">Batteries</option>
              <option value="brake">Brake</option>
              <option value="electric-brakes">Electric-Brakes</option>
              <option value="emergency-brakes">Emergency-Brakess</option>
              <option value="hydraulic-brakes">Hydraulic-Brakes</option>
              <option value="mechanical-brakes">Mechanical-Brakes</option>
            </select>
        </div>
        <div className='w-[40%]'>
            <form className='justify-center items-center flex-auto  md:hidden'>
              <input type='text' placeholder='Search for products' className='w-[40%] md:outline-0 bg-slate-100 rounded-2xl'/>
              <div className=' inline-flex justify-center items-center relative '>
                <input type='submit' title='search' value='search' className=' opacity-0 z-10 cursor-pointer '/>
                <AiOutlineSearch size={25} className=' absolute right-0 bg-yellow-400 rounded-full p-1 cursor-pointer '/>
              </div>
            </form>
        </div>
            
    </div>
  )
}

export default NavbarSearch