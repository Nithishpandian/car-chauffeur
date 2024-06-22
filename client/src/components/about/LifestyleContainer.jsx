import React from "react";
import gpsIcon from "../../assets/icons/gps-icon.png";
import wifiIcon from "../../assets/icons/wifi-icon.png";
import cameraIcon from "../../assets/icons/camera-icon.png";

const LifestyleContainer = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 pt-12 pb-16 px-4">
      <h1 className=" font-semibold text-6xl">The true lifestyle</h1>
      <p className=" text-lg font-medium text-opacity-50 text-white">
        Every detail of your experience is personalized before you even step
        into one of our vehicles.
      </p>
      <div className=" flex flex-col gap-3 font-medium text-lg mt-1">
        <div className=" bg-[#252525] flex items-center gap-4 rounded py-7 pl-8 pr-28">
          <img src={gpsIcon} className=" w-8" alt="" />
          <p>
            GPS integration allows seamless tracking and reservation processes
          </p>
        </div>
        <div className=" bg-[#252525] flex items-center gap-4 rounded py-7 pl-8 pr-28">
          <img src={wifiIcon} className=" w-8" alt="" />
          <p>
            Secure WiFi hotspot in every vehicle through our owned locations
          </p>
        </div>
        <div className=" bg-[#252525] flex items-center gap-4 rounded py-7 pl-8 pr-28">
          <img src={cameraIcon} className=" w-8" alt="" />
          <p>
            Onboard drive cam and silent passenger for quality control and
            safety
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifestyleContainer;
