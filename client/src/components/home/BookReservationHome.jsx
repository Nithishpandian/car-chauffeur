import React from "react";
import reservationIcon from "../../assets/icons/reservation-icon.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookReservationHome = () => {
  
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
      className="font-medium flex flex-col justify-center items-center gap-4 bg-backgroundSlate py-8 px-3 mt-2"
    >
      <img src={reservationIcon} className=" -mt-14 w-14" alt="" />
      <div className=" flex flex-col justify-center items-center gap-4 max-w-[620px]">
        <h1 className=" text-2xl sm:text-3xl">Book a reservation</h1>
        <div className=" grid grid-cols-2 items-center gap-1.5 sm:gap-3 w-full text-sm sm:text-base">
          <button className=" text-white bg-backgroundLightSlate py-2 sm:py-[10px] px-3 w-full rounded">
            Reserve a ride
          </button>
          <Link to={"/contact"} className=" text-center text-white bg-backgroundLightSlate py-2 sm:py-[10px] px-3 w-full rounded">
            I have a question
          </Link>
        </div>
        <div className=" text-[13px] sm:text-base md:text-lg grid grid-cols-2 sm:items-center justify-center gap-5 text-center w-full ">
          <p>Quick Book a reservation as a guest without creating an account</p>
          <p>Online personal account application for working</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BookReservationHome;
