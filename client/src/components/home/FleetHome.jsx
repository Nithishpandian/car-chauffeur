import React from "react";
import carImg from "../../assets/images/car-home.png";
import { motion } from "framer-motion";

const FleetHome = () => {
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
      className=" py-16 px-2 flex flex-col gap-14 items-center justify-center text-white"
    >
      <div className=" flex flex-col items-center justify-center gap-2">
        <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
          Find Your Fleet
        </h1>
        <p className=" text-sm sm:text-base md:text-lg text-center font-medium">
          From those who live and breathe luxury
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <img src={carImg} className=" sm:w-[80%]" alt="" />
      </div>
      <div className=" text-sm min-[560px]:text-base grid grid-cols-1 min-[502px]:grid-cols-3 items-center gap-1.5 sm:gap-2 md:gap-3 w-full max-w-[730px] px-2 min-[502px]:px-0">
        <button className=" border border-darkCholocate text-white bg-darkCholocate py-2 sm:py-[10px] px-2 sm:px-4 w-full rounded">
          Cadillac Escalade
        </button>
        <button className=" border border-white text-white bg-lightCholocate py-2 sm:py-[10px] px-2 sm:px-4 w-full rounded">
          Mercendes Benz s550
        </button>
        <button className=" border border-darkCholocate text-white bg-darkCholocate py-2 sm:py-[10px] px-2 sm:px-4 w-full rounded">
          Cadillac Escalade
        </button>
      </div>
    </motion.div>
  );
};

export default FleetHome;
