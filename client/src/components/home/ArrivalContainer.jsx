import React from "react";
import motorImg from "../../assets/images/motor-arrival.png";
import sustainabilityImg from "../../assets/images/sustainability-arrival.png";
import meetingImg from "../../assets/images/meeting-arrival.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ArrivalContainer = () => {
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
      className=" text-white flex flex-col items-center justify-center gap-3 py-16 px-4"
    >
      <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your Arrival
      </h1>
      <p className=" text-sm sm:text-base md:text-lg text-center font-medium">
        Is much more than just a destination. It’s our signature
      </p>
      <div className=" text-sm sm:text-base font-medium grid grid-cols-2 items-center gap-1.5">
        <Link
          to={"/book-now"}
          className=" text-white bg-lightCholocate py-2 sm:py-[10px] px-5 sm:px-12 w-full rounded"
        >
          Reserve a ride
        </Link>
        <button className=" text-backgroundBlack bg-white py-2 sm:py-[10px] px-5 sm:px-12 w-full rounded">
          I have a question
        </button>
      </div>
      <div className="relative w-fit h-fit text-lg sm:text-xl">
        <img src={motorImg} alt="" />
        <p className="font-medium absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
          Luxury Motor Coaches
        </p>
      </div>
      <div className="relative w-fit h-fit text-lg sm:text-xl">
        <img src={sustainabilityImg} alt="" />
        <p className="font-medium absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          Sustainability
        </p>
      </div>
      <div className="relative w-fit h-fit text-lg sm:text-xl">
        <img src={meetingImg} alt="" />
        <p className="font-medium absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
          Meetings and groups
        </p>
      </div>
    </motion.div>
  );
};

export default ArrivalContainer;
