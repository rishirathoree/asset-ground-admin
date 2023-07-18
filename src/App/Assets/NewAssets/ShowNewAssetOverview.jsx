import React, { useState } from 'react'
import AssetOverviewYoutube from './AssetOverviewYoutubeChannel/AssetOverviewYoutube'

const ShowNewAssetOverview = () => {
    const [activeOverview,setActiveOverview] = useState('Youtube') 
  return (
    <>
    {activeOverview === 'Youtube' && <AssetOverviewYoutube /> }
    {/* {activeOverview === 'Website' && <AssetOverviewWebsite /> }
    {activeOverview === 'Domain' && <AssetOverviewDomain /> } */}
    </>
  )
}

export default ShowNewAssetOverview