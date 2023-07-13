import React from "react";
import { useLocation } from "react-router-dom";

const Breadcurmps = () => {
  const location = useLocation();
  const routeLocation = location.pathname.split("/")
  return (
    <>
      <div className="mb-4 w-full">
        {routeLocation.map((item,index)=>{
            return(
                <span key={index}><p className="">{item}</p></span>
            )
        })}
      </div>
    </>
  );
};

export default Breadcurmps;
