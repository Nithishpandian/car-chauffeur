import React from "react";
import { motion } from "framer-motion";
import CarService from "../common/CarService";
import AdminPanel from "./AdminPanel";
const AdminContainer = () => {
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
            Admin Panel
          </h1>
          <p className=" text-sm sm:text-base md:text-lg font-medium">
            For admin only
          </p>
        </div>
        <AdminPanel />
      </motion.div>
      <div className=" mt-32">
        <CarService />
      </div>
    </div>
  );
};

export default AdminContainer;
