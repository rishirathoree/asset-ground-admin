import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8'>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>New Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Active Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Incomplete Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Rejected Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Inactive Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Processing Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Total Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Costumers</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Sold Assets</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Sold Assets Total</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Sold Fee Total</p><p className='font-semibold text-4xl'>100</p></span>
      <span className='bg-white p-4 space-y-6 shadow-custom'><p className='font-medium text-gray-500 text-sm'>Contact Us</p><p className='font-semibold text-4xl'>100</p></span>
    </div>
    </>
  )
}

export default Dashboard