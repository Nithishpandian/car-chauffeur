import React from "react";

const AdminPanelAnalytics = () => {
  return (
    <div className=" bg-backgroundGray rounded py-8 px-4 sm:px-10 flex justify-around items-center gap-3 sm:gap-10">
      <div>
        <div className=" text-lg font-medium">Money in</div>
        <div className=" text-xl sm:text-2xl md:text-3xl font-semibold">$1,599.55</div>
      </div>
      <div>
        <div className=" text-lg font-medium">Money out</div>
        <div className=" text-xl sm:text-2xl md:text-3xl font-semibold">$341.30</div>
      </div>
      <div>
        <div className=" text-sm sm:text-base md:text-lg font-medium">Active rides</div>
        <div className=" text-xl sm:text-2xl md:text-3xl font-semibold">4</div>
      </div>
      {/* <div>
        <div className=" text-lg font-medium">Rides in 24h</div>
        <div className=" text-3xl font-semibold">39</div>
      </div>
      <div>
        <div className=" text-lg font-medium">Active drivers</div>
        <div className=" text-3xl font-semibold">19</div>
      </div> */}
    </div>
  );
};

export default AdminPanelAnalytics;
