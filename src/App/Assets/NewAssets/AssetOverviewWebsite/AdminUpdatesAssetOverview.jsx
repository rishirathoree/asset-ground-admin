import React from 'react'

const AdminUpdatesAssetOverview = () => {
  return (
    <>
    <div className='grid grid-cols-4 gap-4'>
        <div className='bg-white p-4 rounded col-span-2'>
        <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">First Name</span>
              <input
                id="name"
                placeholder="First Name"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>
        </div>
    </div>
    </>
  )
}

export default AdminUpdatesAssetOverview