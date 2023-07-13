import React, { useEffect, useRef } from 'react'

const Footer = () => {
  const foot = useRef(null)
  useEffect(()=>{
    if(foot.current){
      console.log(foot.current.offsetHeight)
    }
  },[])
  return (
    <>
    <div ref={foot} className='lg:w-5/6 md:w-full sm:w-full fixed bottom-0 right-0 p-4 bg-white shadow-custom z-50 text-sm text-gray-400'>
      Copyright@2023
    </div>
    </>
  )
}

export default Footer