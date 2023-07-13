import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Breadcurmps from '../Components/Breadcurmps'
import NewAssets from './Assets/NewAssets/NewAssets'
import Footer from '../Components/Footer'

const Layout = () => {
    return (
        <>
    <div className='layoutHeight w-full mt-[89px]  flex bg-[#F9FAFD]'>
        <Sidebar />
        <div className='lg:w-5/6 md:w-full sm:w-full pb-[60px] p-4 h-full overflow-hidden overflow-y-auto'>
            <Breadcurmps />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/NewAsset" element={<NewAssets />} />
            </Routes>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Layout