import React from 'react'

const AssetOverviewProfitablity = () => {
  return (
    <>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <div className='bg-white p-4 rounded shadow-custom lg:col-span-2 md:col-span-2 sm:col-span-0 space-y-6'>
        <span className="text-sm font-medium text-gray-500">Admin Comments</span>
        
        
        <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-500">Update 1</span>

              <span className="flex items-center gap-4">
                <input
                id="location"
                type="text"
                placeholder="Comments"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
                <i className="bx bx-plus bg-[#D5404940] p-2 rounded-full text-white"></i>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
            Admin Update 1
              </span>
              <span className="flex items-center gap-4">
                <input
                id="location"
                type="text"
                placeholder="Comments"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
                <i className="bx bx-plus bg-[#D5404940] p-2 rounded-full text-white"></i>
              </span>
            </div>

        </div>

        <div className='bg-white p-4 rounded shadow-custom space-y-6'>
        <span className="text-sm font-medium text-gray-500">Interested for</span>
        
        <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
             Customer ID
              </span>
              <span className="flex items-center gap-1">
                <input
                id="location"
                type="text"
                placeholder="Comments"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
                <i className="bx bx-plus bg-[#D5404940] p-2 rounded-full text-white"></i>
                <i className="bx bx-minus bg-[#D5404940] p-2 rounded-full text-white"></i>

              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
            Customer ID
              </span>
              <span className="flex items-center gap-1">
                <input
                id="location"
                type="text"
                placeholder="Customer ID"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
                <i className="bx bx-plus bg-[#D5404940] p-2 rounded-full text-white"></i>
                <i className="bx bx-minus bg-[#D5404940] p-2 rounded-full text-white"></i>
              </span>
            </div>
        </div>

        <div className='bg-white p-4 rounded shadow-custom space-y-6'>
        <span className="text-sm font-medium text-gray-500">Sold for</span>
        
        <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
             Name
              </span>
              <span className="flex items-center gap-1">
                <input
                id="location"
                type="text"
                placeholder="Name"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
            ID
              </span>
              <span className="flex items-center gap-1">
                <input
                id="location"
                type="text"
                placeholder="ID"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
            Sold Price
              </span>
              <span className="flex items-center gap-1">
                <input
                id="location"
                type="text"
                placeholder="Sold Price.."
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-500">
            Sold Fee
              </span>
              <span className="flex items-center gap-1">
                <input
                id="location"
                type="text"
                placeholder="Sold Fee.."
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
              </span>
            </div>
        </div>


    </div>
    </>
  )
}

export default AssetOverviewProfitablity