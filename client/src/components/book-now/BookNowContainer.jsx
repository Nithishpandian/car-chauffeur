import React from "react";
import BookNowForm from "./BookNowForm";
import CarService from "../common/CarService";

const BookNowContainer = () => {
  return (
    <div className=" text-white">
      <div className=" flex flex-col items-center justify-center gap-2 py-16 px-4">
        <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">Book Now</h1>
        <p className=" text-sm sm:text-base md:text-lg font-medium">Book your preferred chauffeur</p>
      </div>
      <BookNowForm />
      <div className=" mt-32">
        <CarService />
      </div>
    </div>
  );
};

export default BookNowContainer;
