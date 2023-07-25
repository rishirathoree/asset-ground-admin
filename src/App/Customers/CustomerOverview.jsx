import React from "react";

const CustomerOverview = () => {
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
                  <option value="">Active</option>
                </select>
              </label>
            </span>
            <button className="py-2 px-6 text-xsm text-white bg-[rgba(213,64,74,0.7)]">
              Save
            </button>
          </div>
        </div>

        <p className="font-light text-sm text-right">Created Date & Time: 20/7/2023 - 12:45PM</p>


        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 lg:order-1 md:order-1 sm:order-2 p-8 bg-white shadow-custom rounded-lg gap-4">
            <label htmlFor="name" className="w-full flex-col flex gap-2">
              <span className="text-sm font-medium text-gray-500">
                First Name
              </span>
              <input
                id="name"
                placeholder="Enter First Name"
                type="text"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2">
              <span className="text-sm font-medium text-gray-500">
                Last Name
              </span>
              <input
                id="name"
                placeholder="Enter Last Name"
                type="text"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <input
                id="name"
                placeholder="Email"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <div className="">
              <span className="text-sm font-medium text-gray-500">Type</span>

              <div className="flex items-center gap-4 mt-2">
                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>Individual</i>
                    </span>
                  </label>
                </div>

                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>Company</i>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <span className="text-sm font-medium text-gray-500">
                Interested In?
              </span>

              <div className="flex items-center flex-wrap gap-4 mt-2">
                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>Buying Digital Asset</i>
                    </span>
                  </label>
                </div>

                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>Selling Digital Asset</i>
                    </span>
                  </label>
                </div>

                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>Both</i>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <label htmlFor="name" className="w-full flex-col  flex gap-2">
              <span className="text-sm font-medium text-gray-500">
               Location
              </span>
              <select
                id="location"
                type="text"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">Select Location</option>
              </select>
            </label>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-gray-500">
            Preferred Contact Time
              </span>
              <span className="flex items-center gap-4">
              <input
                id="location"
                type="date"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
                <select
                id="location"
                type="text"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              >
                <option value="">Select Timezone</option>
              </select>
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-gray-500">
            Phone Contact Number
              </span>
              <span className="flex items-center gap-4">
              <select
                id="location"
                type="date"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              ><option value="CountryCode">Country Code</option></select>
                <input
                id="location"
                type="text"
                placeholder="Phone Number"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
              </span>
            </div>

            <div className="">
              <span className="text-sm font-medium text-gray-500">
              Would you like to receive hot mails on email?
              </span>

              <div className="flex items-center gap-4 mt-2">
                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>Yes</i>
                    </span>
                  </label>
                </div>

                <div class="rdobtn-card">
                  <label>
                    <input type="radio" name="Activity" />
                    <span>
                      <em></em>
                      <i>No</i>
                    </span>
                  </label>
                </div>

              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-gray-500">
            Reset Password
              </span>
              <span className="flex items-center gap-4">
                <input
                id="location"
                type="text"
                placeholder="New Password"
                className="p-3 focus:ring-[#D5404940] w-full rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"/
              >
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-gray-500">
            Admin Comments
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

          </div>

          {/* label edit */}
          <div className="space-y-6 lg:order-2 md:order-2 sm:order-1">
            <div className="bg-white space-y-3 shadow-custom rounded-lg p-4">
                <span className="font-medium text-sm">Action</span>

                {/* listed Asset */}
                <div className="">
                    <span>Listed Asset</span>
                    <div className="grid grid-cols-4 gap-2">
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    </div>
                </div>

                {/* Interested Asset */}
                <div className="">
                    <span>Interested Asset</span>
                    <div className="grid grid-cols-4 gap-2">
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    <span className="p-2 rounded shadow-custom text-white bg-[#D5404940] text-center">#28373</span>
                    </div>
                </div>


            </div>
          </div>
        </div>

        <div>
        <button className='py-2 px-6 text-xsm text-white bg-[rgba(213,64,74,0.7)]'>Save</button>
        <button className='py-2 px-6 text-xsm text-[rgba(213,64,74,0.7)]'>Cancel</button>
        </div>

      </div>
    </>
  );
};

export default CustomerOverview;
