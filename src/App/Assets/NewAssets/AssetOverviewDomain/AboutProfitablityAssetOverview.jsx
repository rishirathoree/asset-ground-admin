import React from 'react'

const AboutProfitablityAssetOverview = () => {
  return (
    <>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:order-1 md:order-1 sm:order-2 p-8 bg-white shadow-custom rounded-lg gap-4">

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Monetization Type</span>
              <input
                id="name"
                placeholder="Amazon FBM"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Employee Available</span>
              <input
                id="name"
                placeholder="Number of Employee.."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Inventory Status & Details</span>
              <textarea
                id="name"
                placeholder="Text.."
                type="text"
                className="w-full h-40 resize-none appearance-none p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Suppliers Status & Details</span>
              <textarea
                id="name"
                placeholder="Text.."
                type="text"
                className="w-full p-3 h-40 resize-none appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>
            
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Revenue from last 30 days</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Net Profit last 3 Months</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Revenue from last 6 Months</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Net Profit last 6 Months</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Revenue from last 12 Months</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Net Profit last 12 Months</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Asking Price</span>
              <input
                id="name"
                placeholder="USD.."
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Multiple</span>
              <input
                id="name"
                placeholder="Multiple..?"
                type="text"
                className="w-full p-3 appearance-none focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>
            </div>

            <label htmlFor="name" className="w-full items-center flex gap-2 ">
              <div class="slect-allchk">
                    <label>
                        <input type="checkbox" name="checkbox" />
                        <span></span>
                    </label>
                </div>
              <span className="text-sm font-medium text-gray-500">Pricing Help?</span>
            </label>

            
             


          </div>
        </div>
    </>
  )
}

export default AboutProfitablityAssetOverview

