import React from "react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const tabs = [
    [
      { label: "Home", link: "" },
      { label: "New Assets", link: "NewAsset" },
      { label: "Active Assets", link: "ActiveAsset" },
      { label: "Incomplete Assets", link: "IncompleteAsset" },
      { label: "Rejected Assets", link: "RejectedAssets" },
      { label: "Inactive Assets", link: "InactiveAsset" },
      { label: "Processing Assets", link: "ProcessingAsset" },
      { label: "Sold Assets", link: "SoldAsset" },
    ],
    [
      { label: "Assets Update",link:'AssetUpdate' }, { label: "Removed Assets",link:'RemovedAsset' }
    ],
    [
      { label: "Customers", link: "Customer" }
    ],
    [
      { label: "Chat Room", link: "Chatroom" }
    ],
    [
      { label: "Info Center",link:'Infocenter' },
      { label: "Interested Center",link:'Interestedcenter' },
      { label: "Cancellation Center",link:'Cancellationcenter' },
    ],
    [
      { label: "Contact Us",link:"ContactUs" }, { label: "Users & Permissions" }
    ],
    [
      { label: "Banner Control", link:'BannerControl' }
    ],
  ];
  const location = useLocation();
  const routing = location.pathname.split("/");

  return (
    <>
      <div
        onClick={() => {
          document.body.classList.remove("sidebar-collapse");
        }}
        className="sidebar-overlay duration-500 invisible opacity-0 fixed top-0 z-[888] right-0 bg-black bg-opacity-5 w-full h-screen"
      ></div>
      <div className="aside lg:w-1/6 md:w-1/2 lg:opacity-100 md:opacity-0 sm:opacity-0 sm:w-1/6 lg:visible md:invisible sm:invisible lg:translate-x-0 md:-translate-x-full sm:-translate-x-full duration-500 lg:static md:fixed sm:fixed overflow-hidden overflow-y-auto bg-white">
        {tabs.map((group, index) => (
          <ul key={index} className="w-full border-b-[1px] border-black/5">
            {group.map((tab, tabIndex) => (
              <li
                key={tabIndex}
                className={`w-full flex items-center justify-between py-3 my-2 pl-6 pr-4 relative before:rounded-xl before:absolute before:w-1 before:left-0   before:h-full before:duration-500 ${
                  routing.some((path) => tab.link && path === tab.link)
                    ? "before:bg-red-500"
                    : "before:bg-white"
                }`}
              >
                <Link to={`/${tab.link}`}>{tab.label}</Link>
                <i className="bx bx-chevron-right"></i>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
