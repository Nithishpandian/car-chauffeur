import React, { useEffect, useState } from "react";

const AdminPanelAnalytics = ({ allBookingData }) => {
  const [moneyIn, setMoneyIn] = useState(0);
  const [activeRides, setActiveRides] = useState(0);

  useEffect(() => {
    let totalMoneyIn = 0;
    let totalActiveRides = 0;

    allBookingData?.forEach((item) => {
      if (item.accept === "true") {
        if (item?.vehicle === "Toyota Sienna") {
          totalMoneyIn += 3;
        } else if (item?.vehicle === "Chevrolet Suburban") {
          totalMoneyIn += 7;
        }
        totalActiveRides += 1;
      }
    });

    setMoneyIn(totalMoneyIn);
    setActiveRides(totalActiveRides);
  }, [allBookingData]);

  return (
    <div className=" bg-backgroundGray rounded py-8 px-4 sm:px-10 flex justify-around items-center gap-3 sm:gap-10">
      <div>
        <div className=" text-lg font-medium">Money in</div>
        <div className=" text-xl sm:text-2xl md:text-3xl font-semibold">
          ${moneyIn}
        </div>
      </div>
      {/* <div>
        <div className=" text-lg font-medium">Money out</div>
        <div className=" text-xl sm:text-2xl md:text-3xl font-semibold">$341.30</div>
      </div> */}
      <div>
        <div className=" text-sm sm:text-base md:text-lg font-medium">
          Active rides
        </div>
        <div className=" text-xl sm:text-2xl md:text-3xl font-semibold">
          {activeRides}
        </div>
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
