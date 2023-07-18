import React from 'react'

const AboutBusinessAssetOverview = () => {
  return (
    <>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:order-1 md:order-1 sm:order-2 p-8 bg-white shadow-custom rounded-lg gap-4">

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Asset Title</span>
              <input
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Asset Type</span>
              <input
                id="name"
                placeholder="Asset Type"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Website URL</span>
              <input
                id="name"
                placeholder="Website URL"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Asset Title</span>
              <select
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">eCommerce</option>
                </select>
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Starting Date</span>
              <span className='flex items-center gap-2'>
              <select
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">May</option>
                </select>

                <select
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">2023</option>
                </select>
              </span>
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">How many hours you work in a days?</span>
              <input
                id="name"
                placeholder="Hours..."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label> 

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Describe your business</span>
              <textarea
                id="name"
                placeholder="Hours..."
                type="text"
                className="w-full h-40 appearance-none resize-none p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label> 

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Asset Included</span>
              <input id="name" placeholder="Text..." type="text" className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/>
              <input id="name" placeholder="Text..." type="text" className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/>
            </label> 


          </div>
        </div>
    </>
  )
}

export default AboutBusinessAssetOverview
