import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Breadcurmps from '../Components/Breadcurmps'
import NewAssets from './Assets/NewAssets/NewAssets'
import Footer from '../Components/Footer'
import Chatroom from './Chatroom/Chatroom'
import ActiveAsset from './Assets/ActiveAsset/ActiveAsset'
import IncompleteAsset from './Assets/IncompleteAssets/IncompleteAsset'
import RejectedAsset from './Assets/RejectedAsset/RejectedAsset'
import InactiveAsset from './Assets/InactiveAsset.jsx/InactiveAsset'
import ProcessingAsset from './Assets/ProcessingAsset/ProcessingAsset'
import SoldAsset from './Assets/SoldAsset/SoldAsset'
import Customers from './Customers/Customers'
import CustomerOverview from './Customers/CustomerOverview'

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
                <Route path="/ActiveAsset" element={<ActiveAsset />} />
                <Route path="/IncompleteAsset" element={<IncompleteAsset />} />
                <Route path="/RejectedAssets" element={<RejectedAsset />} />
                <Route path="/InactiveAsset" element={<InactiveAsset />} />
                <Route path="/ProcessingAsset" element={<ProcessingAsset />} />
                <Route path="/SoldAsset" element={<SoldAsset />} />
                <Route path="/customer" element={<Customers />} />
                <Route path="/customeroverview" element={<CustomerOverview />} />
                <Route path="/Chatroom" element={<Chatroom />} />
            </Routes>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Layout