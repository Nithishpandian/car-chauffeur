import React from "react";
import globalIcon from "../../assets/icons/global-icon.png";

const Footer = () => {
  return (
    <div className=" bg-[#1C1C1C] text-white font-medium py-5 px-14 flex justify-between items-center gap-2 text-lg">
      <div className=" flex items-center gap-5">
        <h1>COMPANY LOGO</h1>
        <p className=" text-white text-opacity-50">
          Company Stamping LTD. 2024
        </p>
      </div>
      <div>
        <h1 className=" text-[#AA8B65] underline">Get in contact</h1>
      </div>
      <div className=" flex items-center gap-5">
        <h1>All social connects</h1>
        <div className=" h-6 w-1 rounded-lg bg-white bg-opacity-10"></div>
        <h1 className=" flex items-center gap-1">
          <img src={globalIcon} className=" w-6" alt="" />
          <h1>English</h1>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
