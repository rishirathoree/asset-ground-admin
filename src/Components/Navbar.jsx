import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
    <div className=' p-8 border-t-[6px] border-[#D54049] shadow-custom z-50 fixed w-full top-0 right-0 bg-white flex items-center justify-between'>
        <div className='w-40'><img src={logo} alt="" /></div>
        <span className='lg:hidden md:block sm:block' onClick={()=>{document.body.classList.toggle('sidebar-collapse')}}><i className='bx bx-menu-alt-right bx-sm'></i></span>
    </div>
    </>
  )
}

export default Navbar