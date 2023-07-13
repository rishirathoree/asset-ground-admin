import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const tabs = [
    [
      { label: 'Home',
        link: '',
    },
      { label: 'New Assets',
        link: 'NewAsset',
     },
      { label: 'Active Assets' },
      { label: 'Incomplete Assets' },
      { label: 'Rejected Assets' },
      { label: 'Inactive Assets' },
      { label: 'Processing Assets' },
      { label: 'Sold Assets' }
    ],
    [
      { label: 'Assets Update' },
      { label: 'Removed Assets' }
    ],
    [
      { label: 'Customers' },
    ],
    [
      { label: 'Info Center' },
      { label: 'Interested Center' },
      { label: 'Cancellation Center' }
    ],
    [
      { label: 'Contact Us' },
      { label: 'Users & Permissions' },
    ],
    [
      { label: 'Banner Control' }
    ]
  ];

  return (
    <>
    <div onClick={()=>{document.body.classList.remove('sidebar-collapse')}} className='sidebar-overlay duration-500 invisible opacity-0 fixed top-0 z-[888] right-0 bg-black bg-opacity-5 w-full h-screen'></div>
      <div className='aside lg:w-1/6 md:w-1/2 sm:w-1/6 lg:visible md:invisible sm:invisible lg:translate-x-0 md:-translate-x-full sm:-translate-x-full duration-500 lg:static md:fixed sm:fixed overflow-hidden overflow-y-auto bg-white'>
        {tabs.map((group, index) => (
          <ul key={index} className='w-full border-b-[1px] border-black/5'>
            {group.map((tab, tabIndex) => (
              <li
                key={tabIndex}
                className='w-full flex items-center justify-between py-3 my-2 pl-6 pr-4 relative before:w-1 before:h-full before:duration-500 hover:before:bg-red-500 before:absolute before:top-0 before:rounded-xl before:left-0 before:content-[""]'
              >
                <Link to={`/${tab.link}`}>{tab.label}</Link>
                <i className='bx bx-chevron-right'></i>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
