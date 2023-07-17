import React from 'react'

const AssetUpdateAdminUpdates = () => {
  return (
    <>
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

            <div>
        <button className='py-2 px-6 text-xsm text-white bg-[rgba(213,64,74,0.7)]'>Save</button>
        </div>
    </>
  )
}

export default AssetUpdateAdminUpdates