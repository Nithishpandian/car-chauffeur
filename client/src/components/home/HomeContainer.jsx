import React from "react";
import ArrivalContainer from "./ArrivalContainer";
import BookReservationHome from "./BookReservationHome";
import FleetHome from "./FleetHome";
import CarServiceHome from "./CarServiceHome";

const HomeContainer = () => {
  return (
    <div className=" text-white">
      <ArrivalContainer />
      <BookReservationHome />
      <FleetHome />
      <CarServiceHome />
    </div>
  );
};

export default HomeContainer;
