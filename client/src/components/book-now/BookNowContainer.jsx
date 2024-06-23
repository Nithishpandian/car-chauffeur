import React from "react";
import BookNowForm from "./BookNowForm";
import CarService from "../common/CarService";

const BookNowContainer = () => {
  return (
    <div className=" text-white">
      <div className=" flex flex-col items-center justify-center gap-2 py-16 px-4">
        <h1 className=" font-semibold text-6xl">Book Now</h1>
        <p className=" text-lg font-medium">Book your preferred chauffeur</p>
      </div>
      <BookNowForm />
      <div className=" mt-32">
        <CarService />
      </div>
    </div>
  );
};

export default BookNowContainer;
