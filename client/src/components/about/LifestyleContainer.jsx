import React from "react";
import gpsIcon from "../../assets/icons/gps-icon.png";
import wifiIcon from "../../assets/icons/wifi-icon.png";
import cameraIcon from "../../assets/icons/camera-icon.png";
import { motion } from "framer-motion";

const LifestyleContainer = () => {
  const animationVariantFadeIn = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={animationVariantFadeIn}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      className=" flex flex-col items-center justify-center gap-4 pt-12 pb-16 px-4"
    >
      <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
        The true lifestyle
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-medium text-opacity-50 text-white">
        Every detail of your experience is personalized before you even step
        into one of our vehicles.
      </p>
      <div className=" text-left flex flex-col gap-3 font-medium text-base md:text-lg mt-1">
        <div className=" bg-backgroundLightGray flex items-center gap-4 rounded py-3 sm:py-4 md:py-7 pl-4 pr-6 sm:pl-5 sm:pr-8 md:pl-8 md:pr-28">
          <img src={gpsIcon} className=" w-8" alt="" />
          <p>
            GPS integration allows seamless tracking and reservation processes
          </p>
        </div>
        <div className=" bg-backgroundLightGray flex items-center gap-4 rounded py-3 sm:py-4 md:py-7 pl-4 pr-6 sm:pl-5 sm:pr-8 md:pl-8 md:pr-28">
          <img src={wifiIcon} className=" w-8" alt="" />
          <p>
            Secure WiFi hotspot in every vehicle through our owned locations
          </p>
        </div>
        <div className=" bg-backgroundLightGray flex items-center gap-4 rounded py-3 sm:py-4 md:py-7 pl-4 pr-6 sm:pl-5 sm:pr-8 md:pl-8 md:pr-28">
          <img src={cameraIcon} className=" w-8" alt="" />
          <p>
            Onboard drive cam and silent passenger for quality control and
            safety
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LifestyleContainer;
