import React from "react";
import carImg from "../../assets/images/car-home.png";
const FleetHome = () => {
  return (
    <div className=" py-16 flex flex-col gap-14 items-center justify-center text-white">
      <div className=" flex flex-col items-center justify-center gap-2">
        <h1 className=" font-semibold text-6xl">Find Your Fleet</h1>
        <p className=" text-lg font-medium">
          From those who live and breathe luxury
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <img src={carImg} className=" w-[80%]" alt="" />
      </div>
      <div className=" grid grid-cols-3 items-center gap-3 w-full max-w-[730px]">
        <button className=" border border-[#54493C] text-white bg-[#54493C] py-[10px] px-4 w-full rounded">
          Cadillac Escalade
        </button>
        <button className=" border border-white text-white bg-[#AA8B65] py-[10px] px-4 w-full rounded">
          Mercendes Benz s550
        </button>
        <button className=" border border-[#54493C] text-white bg-[#54493C] py-[10px] px-4 w-full rounded">
          Cadillac Escalade
        </button>
      </div>
    </div>
  );
};

export default FleetHome;
