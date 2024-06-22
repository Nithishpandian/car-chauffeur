import React from "react";
import motorImg from "../../assets/images/motor-arrival.png";
import sustainabilityImg from "../../assets/images/sustainability-arrival.png";
import meetingImg from "../../assets/images/meeting-arrival.png";

const ArrivalContainer = () => {
  return (
    <div className=" text-white flex flex-col items-center justify-center gap-3 py-16 px-4">
      <h1 className=" font-semibold text-6xl">Your Arrival</h1>
      <p className=" text-lg font-medium">
        Is much more than just a destination. It’s our signature
      </p>
      <div className=" font-medium grid grid-cols-2 items-center gap-1.5">
        <button className=" text-white bg-[#AA8B65] py-[10px] px-12 w-full rounded">
          Reserve a ride
        </button>
        <button className=" text-[#151515] bg-white py-[10px] px-12 w-full rounded">
          I have a question
        </button>
      </div>
      <div className="relative w-fit h-fit text-xl">
        <img src={motorImg} alt="" />
        <p className="font-medium absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          Luxury Motor Coaches
        </p>
      </div>
      <div className="relative w-fit h-fit text-xl">
        <img src={sustainabilityImg} alt="" />
        <p className="font-medium absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          Sustainability
        </p>
      </div>
      <div className="relative w-fit h-fit text-xl">
        <img src={meetingImg} alt="" />
        <p className="font-medium absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          Meetings and groups
        </p>
      </div>
    </div>
  );
};

export default ArrivalContainer;
