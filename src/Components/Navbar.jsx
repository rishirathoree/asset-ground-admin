import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
    <div className=' p-8 border-t-[6px] border-[#D54049] shadow-custom z-50 fixed w-full top-0 right-0 bg-white flex items-center justify-between'>
        <div className='w-40'><img src={logo} alt="" /></div>
        <div className='flex items-center gap-4 '>
        <span className='lg:hidden md:block sm:block' onClick={()=>{document.body.classList.toggle('sidebar-collapse')}}><i className='bx bx-menu-alt-right bx-sm'></i></span>
        <span className='text-xsm pl-6 font-medium relative before:absolute before:-left-0 before:text-lg before:-top-1 before:content-["\eee1"] boxicons-left before:text-red-500'>My Account</span>
        </div>
    </div>
    </>
  )
}

export default Navbar