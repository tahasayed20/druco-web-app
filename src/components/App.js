'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/cartSlice'
import { usePathname } from 'next/navigation'

import CartSidebar from './CartSidebar'
import Header from './Header'
import Navbar from './Navbar'
import NavbarSearch from './NavbarSearch'
import Newsletter from './Newsletter'
import Footer from './Footer'
import FooterTwo from './FooterTwo'
import FooterThree from './FooterThree'
import Payment from './Payment'

export default function App({ children }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  const { cartItems, loading } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <div className=' overflow-hidden'>
      <div
        className={`${
          loading
            ? ''
            : cartItems.length > 0 &&
              (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'mr-32'
            : ''
        }`}
      >
        <Navbar />
        <Header />
        <NavbarSearch />
        
        
        
        <main className="">{children}</main>
        
        
        
        
        
        
        
        
        <Newsletter />
        <Footer />
        <FooterTwo />
        <FooterThree />
        <Payment />
      </div>
      <CartSidebar />
    </div>
  )
}