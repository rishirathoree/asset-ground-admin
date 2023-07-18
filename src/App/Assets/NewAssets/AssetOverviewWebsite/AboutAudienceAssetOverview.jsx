import React from 'react'

const AboutAudienceAssetOverview = () => {
  return (
    <>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:order-1 md:order-1 sm:order-2 p-8 bg-white shadow-custom rounded-lg gap-4">

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Countries of the Majority of users?</span>
              <input
                id="name"
                placeholder="Country Name..."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Which Language?</span>
              <input
                id="name"
                placeholder="Language.."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Analytic Tool Available?</span>
              <span className='flex items-center gap-2'>
              <div class="rdobtn-card">
              <label>
              <input type="radio" name="Activity" />
              <span><em></em>
              <i>Yes</i>
              </span>
              </label>
              </div>

              <div class="rdobtn-card">
              <label>
              <input type="radio" name="Activity" />
              <span><em></em>
              <i>No</i>
              </span>
              </label>
              </div>
              </span>
            </label>

              

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Avg. Monthly Page Views</span>
              <input
                id="name"
                placeholder="Average Monthly Page View.."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Avg. Monthly Users</span>
              <input
                id="name"
                placeholder="Average Monthly Users.."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Reason for sale</span>
              <input
                id="name"
                placeholder="Seeking to have capital.."
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>
             


          </div>
        </div>
    </>
  )
}

export default AboutAudienceAssetOverview
