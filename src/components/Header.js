import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { AiOutlineHeart , AiOutlineShoppingCart , AiOutlineMenu , AiOutlineSearch , AiOutlineUser, AiOutlineClose , AiOutlineMail
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


export default function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart)
  const pathname = usePathname()

  // start NavbarLogo
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ffffff');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 250) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  // End NavbarLogo

  return (
    <header
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 justify-between shadow-xl z-[100] ease-in-out duration-500 top-0'
          : 'w-full h-20 z-[100] ease-in-out duration-300'
      }
    >
      <nav className="max-w-[1240px] mx-auto flex justify-between py-4 px-4">
        <Link href="/" className="">
          <Image
                  className='cursor-pointer md:w-[140px]'
                  src={Logo}
                  width={100}
                  height={100}
                  alt="Druco"
              />
        </Link>
        <select className='outline-0 hidden md:flex'>
          <option value>All Categories</option>
          <option value="car-batteries">Batteries</option>
          <option value="brake">Brake</option>
          <option value="electric-brakes">Electric-Brakes</option>
          <option value="emergency-brakes">Emergency-Brakess</option>
          <option value="hydraulic-brakes">Hydraulic-Brakes</option>
          <option value="mechanical-brakes">Mechanical-Brakes</option>
        </select>
        <form className='justify-center items-center hidden md:flex'>
          <input type='text' placeholder='Search for products' className='outline-0'/>
          <div className='flex justify-center items-center relative '>
            <input type='submit' title='search' value='search' className=' opacity-0 z-10 cursor-pointer '/>
            <AiOutlineSearch size={35} className=' absolute right-5 bg-yellow-400 rounded-full p-1 cursor-pointer '/>
          </div>
        </form>

        <div className='ml-6 flex justify-between items-center '>
          <div className=' relative group'>
          <Link href="/my-account">
          <AiOutlineUser size={20} className='mr-5 cursor-pointer hover:text-yellow-400  ' title='My-Account'/>
          </Link>
          <div className='hidden group-hover:md:block w-80 h-60 bg-white absolute right-[-80px] z-50 top-5 rounded-b-lg border-2 border-t-yellow-500 drop-shadow-xl'>
            <form className='p-5'>
              <input type='email' placeholder='Username or email Address*' className='w-full p-2 rounded-2xl mb-6 border border-yellow-500 placeholder:text-sm outline-none'/>
              <input type='password' placeholder='Password*'               className='w-full p-2 rounded-2xl mb-6 border border-yellow-500 placeholder:text-sm outline-none'/>
              <input type='Submit' value='SIGN IN' className=' text-sm font-semibold bg-yellow-500 text-black py-2 px-6 rounded-full mr-4 cursor-pointer hover:bg-black hover:text-yellow-500 ease-in-out duration-500'/>
              <input type="checkbox"  className='mr-2'/>
              <label  className='text-gray-500 font-medium text-sm'>REMEMBER ME</label>
              
            </form>
          </div>
          
          </div>
          <div className='relative'>
            <AiOutlineHeart size={20} title='Wishlist' className='hover:text-yellow-400 cursor-pointer' />
            <span className='absolute bottom-2 left-2 bg-yellow-400 rounded-full w-6 h-6 text-center text-md'>0</span>
          </div>

          <span className="relative bottom-2 bg-yellow-400 rounded-full w-6 h-6 text-center text-md left-9">
            {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart" className="">
            <AiOutlineShoppingCart size={20} title='View Shopping Cart' className='hover:text-yellow-400 cursor-pointer' />
          </Link>
          {!loading && cartItems.length > 0 && pathname !== '/cart' && (
            <div className=""></div>
          )}
          <AiOutlineMenu onClick={handleNav} size={20} className=' hover:text-yellow-400 cursor-pointer ml-6 md:hidden' />
        </div>
      </nav>

      {/* Start sidebar menu */}
      <div
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50' : ''}
      >
        {/* Side Drawer Menu */}
        <div
          className={nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-150%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                
                  <Image
                    src={Logo}
                    width='87'
                    height='35'
                    alt='logo'
                  />
                
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer '
              >
                <AiOutlineClose size={20} className='hover:text-yellow-400 cursor-pointer'/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-1'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-yellow-300 ease-in-out duration-500 hover:ml-2'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-yellow-300 ease-in-out duration-500 hover:ml-2'>
                  PAGES
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-yellow-300 ease-in-out duration-500 hover:ml-2'>
                  SERVICE PARTS
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-yellow-300 ease-in-out duration-500 hover:ml-2'>
                  BRAKE
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-yellow-300 ease-in-out duration-500 hover:ml-2'>
                  CAR BATTERIES
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:text-yellow-300 ease-in-out duration-500 hover:ml-2'>
                  TOOLS & GARAGE
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link
                  href='https://www.linkedin.com/in/taha-sayed-3852281bb/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='https://github.com/tahasayed98ts'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='mailto:taha17temo@gmail.com'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='https://drive.google.com/drive/my-drive'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End sidebar menu */}

    </header>
  )
}