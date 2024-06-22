import React from "react";
import ArrivalContainer from "./ArrivalContainer";
import BookReservationHome from "./BookReservationHome";
import FleetHome from "./FleetHome";
import CarService from "../common/CarService";

const HomeContainer = () => {
  return (
    <div className=" text-white">
      <ArrivalContainer />
      <BookReservationHome />
      <FleetHome />
      <CarService />
    </div>
  );
};

export default HomeContainer;
