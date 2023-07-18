import React, { useEffect, useRef, useState } from 'react'

const BannerControl = () => {
    const [bannerImage,setBannerImage] = useState(null)
    const [imageFileValue,setImageFileValue] = useState(null)

    const handleChangeInputImage = (e) => {
        const file = e.target.files[0]
        console.log(file)
        setImageFileValue(file.name)
        console.log(imageFileValue)
        if(file){
            const reader = new FileReader
            reader.onload = () => {
                setBannerImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    const fileInputRef = useRef(null)
    useEffect(()=>{
        if(fileInputRef.current){
            console.log(fileInputRef.current.value)
        }
    })
    const handleRemoveFile = () => {fileInputRef.current.value = null}
  return (
    <>
    <div className='grid grid-cols-3 gap-4 bg-white p-4'>

    <label htmlFor="name" className="w-full flex-col  flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Banner Title</span>
              <input
                id="Bannertitle"
                placeholder="Banner Title"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col  flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Alt Text</span>
              <input
                id="seotext"
                placeholder="SEO Alt Text"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Order</span>
              <select
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">1</option>
                </select>
            </label>

            <label htmlFor="name" className="w-full flex-col  flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Banner Text</span>
              <input
                id="bannertext"
                placeholder="Banner Text..."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Type</span>
              <select
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">Photo</option>
                </select>
            </label>

            <label htmlFor="uploadBanner" className='py-8 bg-red-500/20 flex items-center justify-center border-dashed border-2 flex-col border-red-400/30 rounded-lg col-span-2'>
                <i className='bx bx-upload text-center bx-md text-red-500/50'></i>
                <span className='text-sm font-medium  text-gray-500'>Upload Banner</span>
                <input ref={fileInputRef} onChange={handleChangeInputImage} type="file" name="" id="uploadBanner" className='hidden' />
            </label>

            {bannerImage && <div className={`relative shadow-lg overflow-hidden col-span-2 h-80 w-[350px] rounded-lg`}>
                <img src={bannerImage} className='w-full h-full object-cover' alt="" />
                <i onClick={handleRemoveFile} className='bx absolute top-0 right-0 z-50 cursor-pointer bx-md rounded-full text-white shadow-custom bx-x'></i>
            </div>}
        
    </div>
    </>
  )
}

export default BannerControl