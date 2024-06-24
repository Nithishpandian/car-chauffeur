import React from "react";
import globalIcon from "../../assets/icons/global-icon.png";

const Footer = () => {
  return (
    <div className=" text-base md:text-lg bg-backgroundSlate text-white font-medium py-5 px-3 lg:px-7 xl:px-14 flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-2">
      <div className="flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-5">
        <h1>COMPANY LOGO</h1>
        <p className=" text-white text-opacity-50">
          Company Stamping LTD. 2024
        </p>
      </div>
      <div>
        <h1 className=" text-lightCholocate underline">Get in contact</h1>
      </div>
      <div className=" flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-5">
        <h1>All social connects</h1>
        <div className=" hidden lg:flex h-6 w-1 rounded-lg bg-white bg-opacity-10"></div>
        <h1 className=" flex items-center gap-1">
          <img src={globalIcon} className=" w-6" alt="" />
          <h1>English</h1>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
