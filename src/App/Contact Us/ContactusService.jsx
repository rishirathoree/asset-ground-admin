import React from "react";

const ContactusService = () => {
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


        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4">
          <div className="grid grid-cols-2 p-8 bg-white shadow-custom rounded-lg gap-4">

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">First Name</span>
              <input
                id="name"
                placeholder="First Name"
                value={'Website for role'}
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Last Name</span>
              <input
                id="name"
                placeholder="Last Name"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Email</span>
              <input
                id="name"
                placeholder="Email"
                type="Email"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Phone Number</span>
              <input
                id="name"
                placeholder="Phone Number"
                type="text"
                className="w-full p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

            <label htmlFor="name" className="w-full col-start-1 col-end-3 flex-col flex gap-2 ">
              <span className="text-sm font-medium text-gray-500">Comment</span>
              <textarea
                id="name"
                placeholder="Reason.."
                type="text"
                className="lg:w-1/2 md:w-1/2 sm:w-full appearance-none resize-none h-40 p-3 focus:ring-[#D5404940] rounded ring-1 ring-black/5 focus:ring-1 duration-500 focus:outline-none outline-none text-[12px] text-gray-400 font-normal"
              />
            </label>

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

          </div>
        </div>

        <div>
        <button className='py-2 px-6 text-xsm text-white bg-[rgba(213,64,74,0.7)]'>Save</button>
        </div>

      </div>
    </>
  );
};

export default ContactusService;



