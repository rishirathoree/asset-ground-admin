import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import AccountPopUp from './AccountPopUp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className=' p-8 border-t-[6px] border-[#D54049] shadow-custom z-50 fixed w-full top-0 right-0 bg-white flex items-center justify-between'>
        <Link to="/"><div className='w-40'><img src={logo} alt="" /></div></Link>
        <div className='flex items-center gap-4 '>
        <AccountPopUp />
        <span className='lg:hidden md:block sm:block' onClick={()=>{document.body.classList.toggle('sidebar-collapse')}}><i className='bx bx-menu-alt-right bx-sm'></i></span>
        </div>
    </div>
    </>
  )
}

export default Navbar