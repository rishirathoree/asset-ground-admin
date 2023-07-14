import React from 'react'

const ActiveAsset = () => {
    const dummy = Array(10).fill(1)
  return (
    <>
    <div className='space-y-6'>
    <div className='flex lg:items-center md:items-start sm:items-start gap-4 lg:flex-row md:flex-row sm:flex-col justify-between'>
        <label htmlFor="SearchByID" className='p-3 ring-[#D5404940] bg-none ring-1 bg-white flex items-center gap-2'>
        <i className='bx bx-search text-[#D54049]'></i>
        <input id='SearchByID' placeholder='Search By Title & ID' type="text" className='w-60 focus:outline-none outline-none text-[12px] text-gray-400 font-normal' />
        </label>

        <div className='flex items-center flex-wrap gap-2'>

        <label htmlFor="filterdate" className=' ring-[#D5404940] bg-none ring-1 bg-white flex items-center gap-2'>
        <select id='filterdate' type="text" className='text-[12px] p-3 text-gray-400 font-normal focus:outline-none outline-none'><option value="Fiter-by-date">Filter by Date</option></select>
        </label>

        <label htmlFor="filtertype" className=' ring-[#D5404940] bg-none ring-1 bg-white flex items-center gap-2'>
        <select id='filtertype' type="text" className='text-[12px] p-3 text-gray-400 font-normal focus:outline-none outline-none'><option value="Fiter-by-date">Filter by Date</option></select>
        </label>

        <label htmlFor="filterPrice" className=' ring-[#D5404940] bg-none ring-1 bg-white flex items-center gap-2'>
        <select id='filterPrice' type="text" className='text-[12px] p-3 text-gray-400 font-normal focus:outline-none outline-none'><option value="Fiter-by-date">Filter by Date</option></select>
        </label>

        </div>
    </div>

    {/* table */}
    <div className="relative overflow-x-auto ring-1 ring-black/5 bg-white lg:w-w-full md:w-full sm:w-full h-min">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr className='w-full'>
              <th className="p-4 text-left ring-1 ring-black/5"><p className="w-full font-medium text-gray-400">ID</p></th>
              <th className="p-4 text-left ring-1 ring-black/5"><p className="w-full font-medium text-gray-400">Type</p></th>
              <th className="p-4 text-left ring-1 ring-black/5"><p className="w-full font-medium text-gray-400">Asking Price</p></th>
              <th className="p-4 text-left ring-1 ring-black/5"><p className="w-full font-medium text-gray-400">Asset Title</p></th>
              <th className="p-4 text-left ring-1 ring-black/5"><p className="w-full font-medium text-gray-400">Active Days</p></th>
              <th className="p-4 text-center ring-1 ring-black/5"><p className="w-full font-medium text-gray-400">View</p></th>
              </tr>
            </thead>
            <tbody>
              {dummy.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white  "
                  >
                    <td className="p-4 ring-1 ring-black/5 text-black">{Math.floor(index * Math.random() * 99)}</td>
                    <td className="p-4 ring-1 ring-black/5 text-black  "><p className='w-max'>{index / 2 ? 'Youtube' : index / 3 ? 'Website Sell': 'Domain'}</p></td>
                    <td className="p-4 ring-1 ring-black/5 text-black"><p className='w-max'>600 USD</p></td>
                    <td className="p-4 ring-1 ring-black/5 text-black"><p className='w-max'>Ecommerce Website Dedicated For Flowers</p></td>
                    <td className="p-4 ring-1 ring-black/5 text-black"><p className='w-max'>2 Days</p></td>
                    <td className="p-4 ring-1 ring-black/5 w-full flex items-center justify-center"><span className='cursor-pointer p-2 rounded bg-gray-400/10 ring-2 ring-black/5'>Go</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* pagination button */}
        <div className='flex items-center justify-end'>
            <span className='bg-[#0E4B72] pl-6 text-white capitalize px-4 py-2 ring-1 ring-black/5 relative before:absolute before:left-1 before:top-2 before:content-["\ed38"] boxicons-left '>prev</span>
            <span className='bg-white px-4 py-2 ring-1 ring-black/5 hover:bg-slate-100 duration-500 transition-all ease-in-out cursor-pointer'>1</span>
            <span className='bg-white px-4 py-2 ring-1 ring-black/5 hover:bg-slate-100 duration-500 transition-all ease-in-out cursor-pointer'>2</span>
            <span className='bg-white px-4 py-2 ring-1 ring-black/5 hover:bg-slate-100 duration-500 transition-all ease-in-out cursor-pointer'>3</span>
            <span className='bg-white px-4 py-2 ring-1 ring-black/5 hover:bg-slate-100 duration-500 transition-all ease-in-out cursor-pointer'>4</span>
            <span className='bg-white px-4 py-2 ring-1 ring-black/5 hover:bg-slate-100 duration-500 transition-all ease-in-out cursor-pointer'>...</span>
            <span className='bg-[#0E4B72] text-white capitalize px-4 py-2 ring-1 pr-6 ring-black/5 relative after:absolute after:right-1 after:top-2 after:content-["\ed38"] boxicons-right after:scale-[-1]'>Next</span>
        </div>
    </div>
    
    </>
  )
}

export default ActiveAsset