import React, { useEffect, useRef, useState } from 'react'
import banner from '../../../assets/banner.png'

const AssetUpdatePhotosDisplay = () => {
    const imagesMapped = [
        {image:banner},
        {image:banner},
        {image:banner},
        {image:banner},
    ]

    const containerRef = useRef(null)

    const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: -containerRef.current.offsetWidth, // Adjust the scroll amount as needed
            behavior: 'smooth', // Use 'auto' for instant scroll without animation
          });
        }
      };

      const scrollRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: containerRef.current.offsetWidth,
            behavior: 'smooth',
          });
        }
      };
      
  return (
    <>
    <div ref={containerRef} className='bg-white w-full h-[400px] duration-500 flex items-center overflow-hidden rounded shadow-custom'
      >
        {imagesMapped.map((item,index)=>{
            return(
                <div className={`flex-shrink-0  w-full h-full `}><img src={item.image} className='w-full h-full object-cover ' alt="" /></div>
            )
        })}
    </div>

    <div className='flex items-center justify-center gap-4'>
    <span onClick={scrollLeft}><i className={`bx bx-md p-2 rounded-full bg-[#D5404940] text-white bx-chevron-left`}></i></span>
    <span onClick={scrollRight}><i className='bx bx-md p-2 rounded-full bg-[#D5404940] text-white bx-chevron-right'></i></span>
    </div>

    </>
  )
}

export default AssetUpdatePhotosDisplay

// ${indexImage == index ? 'absolute translate-x-0 duration-1000 opacity-100 visible' : 'invisible translate-x-8 duration-0 opacity-0'}