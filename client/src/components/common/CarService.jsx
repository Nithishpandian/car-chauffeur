import React from "react";
import carServiceIcon from "../../assets/icons/service-icon.png";
import { motion } from "framer-motion";

const CarService = () => {
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
      className="font-medium flex flex-col justify-center items-center gap-8 bg-backgroundSlate py-8 px-4 mt-2 mb-14"
    >
      <img src={carServiceIcon} className=" -mt-14 w-14" alt="" />
      <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
        Car Services
      </h1>
      <div className=" flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center text-center font-medium text-[13px] sm:text-[15px] md:text-[17px] md:leading-6 max-w-[1200px] ">
        <p>
          Accepting nothing less than stringent hospitality standards for our
          fleet and chauffeurs, EmpireCLS clients select us for our commitment
          to providing luxury, chauffeured black car and limousine service. Each
          trip with EmpireCLS means receiving the same professional hospitality
          service you expect from the world’s best airlines and five-star
          hotels. Here are a few ways we are more than just a “limo” company.
        </p>
        <p>
          With services available in over 1000 cities, we provide chauffeured
          transportation in cities as familiar as New York City and Boston, and
          as diverse as London, Tokyo and Barcelona, powered by a fleet of
          late-model luxury sedans, SUVs, limousines and professional
          chauffeurs.
        </p>
        <p>
          It is EmpireCLS’s standards of chauffeured hospitality and personal
          attention to detail for limousine and car trips that makes us the
          dedicated transportation provider for over 25 five-diamond hotels in
          New York City and Los Angeles.
        </p>
        <p>
          What separates EmpireCLS from other limo or black car companies is our
          standards of hospitality and attention to detail. We offer additional
          travel benefits, by request, based on your personal needs, including
          security detail to VIP airport concierge services. Professional
          chauffeurs must pass rigorous state and federal background, and are
          then trained to provide our standards of safe, personal
          transportation. Only the best become EmpireCLS chauffeurs.
        </p>
      </div>
    </motion.div>
  );
};

export default CarService;
