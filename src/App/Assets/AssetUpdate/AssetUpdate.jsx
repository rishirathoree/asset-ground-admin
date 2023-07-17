import React, { useState } from "react";
import AboutAssetUpdateComponent from "./AboutAssetUpdateComponent";
import AssetUpdateEditedComponent from "./AssetUpdateEditedComponent";
import AssetUpdatePhotosDisplay from "./AssetUpdatePhotosDisplay";
import AssetUpdateAdminUpdates from "./AssetUpdateAdminUpdates";

const AssetUpdate = () => {
    const switches = ['About','Edited Item','Photos','Admin Updates']
    const [currentActiveSwitch,setCurrentActiveSwitches] = useState('About')
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={()=>{history.back()}} className="py-2 px-6 text-xsm text-white bg-[rgba(213,64,74,0.7)]">
              Back
            </button>
            <span className="text-sm text-gray-500 font-medium">
              <b className="text-black">ID</b> #389476
            </span>
          </div>

          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-normal">
                Update Status
              </span>
              <label
                htmlFor="updateStatus"
                className=" ring-[#D5404940] bg-none ring-1 bg-white flex items-center gap-2"
              >
                <select
                  id="updateStatus"
                  type="text"
                  className="text-[12px] p-2 text-gray-400 font-normal focus:outline-none outline-none ring-1 ring-[#D5404940] rounded"
                >
                  <option value="">New</option>
                </select>
              </label>
            </span>
            <button className="py-2 px-6 text-xsm text-white bg-[rgba(213,64,74,0.7)]">
              Save
            </button>
          </div>
        </div>

        <p className="font-light text-sm text-right">Created Date & Time: 20/7/2023 - 12:45PM</p>
        
        <ul className="flex flex-wrap items-center">
            {switches.map((item, index) => {
              return (
                <li
                key={index}
                  onClick={() => {
                    setCurrentActiveSwitches(item);
                  }}
                  className={`block lg:px-6 md:px-6 sm:px-4 py-4 cursor-pointer text-sm font-semibold ${
                    currentActiveSwitch === item
                      ? "bg-red-600 text-white"
                      : "bg-[#D540491A] text-red-500"
                  }`}
                >
                  <p className="w-max lg:text-sm md:text-sm sm:text-[14px]">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>


        {currentActiveSwitch === 'About' && <AboutAssetUpdateComponent /> }
        {currentActiveSwitch === 'Edited Item' && <AssetUpdateEditedComponent /> }
        {currentActiveSwitch === 'Photos' && <AssetUpdatePhotosDisplay /> }
        {currentActiveSwitch === 'Admin Updates' && <AssetUpdateAdminUpdates /> }

        

      </div>
    </>
  );
};

export default AssetUpdate;


