import React from 'react'

const AboutAssetUpdateComponent = () => {
  return (
    <>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:order-1 md:order-1 sm:order-2 p-8 bg-white shadow-custom rounded-lg gap-4">

            <div className="flex gap-2 items-center">
            <span className="font-medium text-gray-400 text-sm">Asset ID : </span>
            <span className="font-medium text-black text-sm">#348967</span>
            </div>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Asset Title</span>
              <input
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>


          </div>

          {/* label edit */}
          <div className="space-y-6 lg:order-2 md:order-2 sm:order-1">
            <div className="bg-white space-y-3 shadow-custom rounded-lg p-4">
                <span className="font-medium text-sm">Customer Info</span>

                {/* customer details */}
                <div className="">
                <span className="flex items-center justify-between font-medium text-sm text-gray-400">Name : <p className="text-black">Rishi Rathore</p></span>
                <span className="flex items-center justify-between font-medium text-sm text-gray-400">Email : <p className="text-black">George@gmail.com</p></span>
                <span className="flex items-center justify-between font-medium text-sm text-gray-400">ID : <p className="text-black">#348967</p></span>
                </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default AboutAssetUpdateComponent