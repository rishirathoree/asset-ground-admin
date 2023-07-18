import React from 'react'

const ContactAssetOverview = () => {
  return (
    <>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:order-1 md:order-1 sm:order-2 p-8 bg-white shadow-custom rounded-lg gap-4">

          <span className="text-sm font-medium text-gray-500">User ID : 29348</span>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">First Name</span>
              <input
                id="name"
                placeholder="First Name"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Last Name</span>
              <input
                id="name"
                placeholder="Last Name"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <input
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <div>
              <span className="text-sm font-medium text-gray-500">Phone Number</span>
            <label htmlFor="name" className="w-full items-center flex gap-2 ">
              <select
                id="name"
                placeholder="Email"
                type="text"
                className="w-max p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">Phone Code</option>
                </select>
                <input
                id="name"
                placeholder="Enter 10 Digit Phone Number"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>
            </div>

            

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Message to us?</span>
              <textarea
                id="name"
                placeholder="Text..."
                type="text"
                className="w-full h-40 appearance-none resize-none p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label> 


          </div>
        </div>
    </>
  )
}

export default ContactAssetOverview
