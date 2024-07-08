import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AdminPanelTable = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex flex-col gap-2">
      <div className=" text-sm md:text-lg grid grid-cols-6 sm:flex items-center gap-3 font-medium">
        <button className=" col-span-3 sm:col-span-1 border border-[#5BFF6C] py-3 px-3 lg:px-5 rounded text-white bg-transparent">
          Accept
        </button>
        <button className="col-span-3 sm:col-span-1 border border-[#FF4141] py-3 px-3 lg:px-5 rounded text-white bg-transparent">
          Decline
        </button>
        <div className="col-span-5 sm:col-span-1 border border-backgroundGray bg-backgroundGray flex items-center justify-around py-3 px-3 md:px-5 gap-3 md:gap-10">
          <h1>Patrick Johanson</h1>
          <h1>$55.5</h1>
          <h1>Mercendes Benz s550</h1>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className=" flex items-center justify-center p-[14px] md:p-4 border border-[#333333] bg-[#333333] rounded text-white"
        >
          <FaChevronDown
            className={` ${open ? " rotate-180" : " rotate-0"} text-[17px] md:text-[19px]`}
          />
        </button>
      </div>
      <div
        className={` ${
          open ? " flex" : "hidden"
        } font-medium text-sm sm:text-base md:text-lg bg-backgroundGray rounded py-10 px-4 sm:px-5 md:px-7 lg:px-14 items-center justify-around gap-4 sm:gap-5 md:gap-9 lg:gap-10`}
      >
        <div>
          <h1>Location: Cherry Hill, New Jersey</h1>
          <p className=" underline cursor-pointer">Check it live</p>
        </div>
        <div>
          <h1>From Cherry Hill, New Jersey to</h1>
          <p>Washington, DC</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelTable;
