import React from "react";
import ApplicantsAbout from "./ApplicantsAbout";
import bulletinImage from "../../assets/icons/bulletin-icon.png";
import LifestyleContainer from "./LifestyleContainer";
import CarService from "../common/CarService";

const AboutContainer = () => {
  return (
    <div className=" text-white text-center">
      <div className=" flex flex-col items-center justify-center gap-2 py-16 px-4">
        <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">
          About Us
        </h1>
        <p className=" text-sm sm:text-base md:text-lg text-center font-medium">
          Chauffeured Hospitality
        </p>
      </div>
      <ApplicantsAbout />
      <div className=" flex flex-col items-center justify-center gap-3 sm:gap-4 pt-16 pb-12 px-4">
        <h1 className=" font-semibold text-4xl sm:text-5xl md:text-6xl">Perfecting The Art</h1>
        <p className="text-sm sm:text-base md:text-lg font-medium text-opacity-50 text-white">
          The same hospitality training as five star hotels
        </p>
        <div className=" text-sm sm:text-base text-left flex flex-col gap-1">
          <div className=" flex items-center gap-3">
            <img src={bulletinImage} alt="" />
            <div>Daily vehicle preparation and preventative maintenance</div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={bulletinImage} alt="" />
            <div>
              Logistical planning ensures on-site arrival 15 minutes prior to
              pickup
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={bulletinImage} alt="" />
            <div>
              WiFi, bottled water and cell phone chargers available for all
              guests
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={bulletinImage} alt="" />
            <div>
              Etiquette and service standards for providing personalized service
            </div>
          </div>
          <div className=" flex items-center gap-3">
            <img src={bulletinImage} alt="" />
            <div>Safe and defensive driving training</div>
          </div>
        </div>
      </div>
      <LifestyleContainer />
      <CarService />
    </div>
  );
};

export default AboutContainer;
