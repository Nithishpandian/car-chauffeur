import React from "react";
import BookNowForm from "./BookNowForm";
import CarService from "../common/CarService";
import { motion } from "framer-motion";

const BookNowContainer = () => {
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
    <div className=" text-white">
      <motion.div
        variants={animationVariantFadeIn}
        initial="initial"
        whileInView={"animate"}
        viewport={{
          once: true,
        }}
      >
        <div className=" flex flex-col items-center justify-center gap-2 py-16 px-4">
          <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
            Book Now
          </h1>
          <p className=" text-sm sm:text-base md:text-lg font-medium">
            Book your preferred chauffeur
          </p>
        </div>
        <BookNowForm />
      </motion.div>
      <div className=" mt-32">
        <CarService />
      </div>
    </div>
  );
};

export default BookNowContainer;
