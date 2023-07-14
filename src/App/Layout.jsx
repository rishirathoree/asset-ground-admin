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
import InfoCenter from './Center/InfoCenter/InfoCenter'
import InfoCenterServices from './Center/InfoCenter/InfoCenterServices'
import InterestedCenter from './Center/InterestedCenter/InterestedCenter'
import InterestedCenterService from './Center/InterestedCenter/InterestedCenterService'
import CancellationCenter from './Center/CancellationCenter/CancellationCenter'
import CancellationService from './Center/CancellationCenter/CancellationService'
import RemovedAsset from './Assets/RemovedAsset/RemovedAsset'
import RemovedAssetService from './Assets/RemovedAsset/RemovedAssetService'
import ContactUs from './Contact Us/ContactUs'
import ContactusService from './Contact Us/ContactusService'

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
                <Route path="/Infocenter" element={<InfoCenter />} />
                <Route path="/InfoCenterService" element={<InfoCenterServices />} />
                <Route path="/customeroverview" element={<CustomerOverview />} />
                <Route path="/Chatroom" element={<Chatroom />} />
                <Route path="/Interestedcenter" element={<InterestedCenter />} />
                <Route path="/InterestedCenterService" element={<InterestedCenterService />} />
                <Route path="/Cancellationcenter" element={<CancellationCenter />} />
                <Route path="/CancellationService" element={<CancellationService />} />
                <Route path="/Removedasset" element={<RemovedAsset />} />
                <Route path="/RemovedAssetService" element={<RemovedAssetService />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/ContactusService" element={<ContactusService />} />
            </Routes>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Layout