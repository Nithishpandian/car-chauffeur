import React from "react";
import applicantIcon from "../../assets/icons/applicants-icon.png";
import bulletinImage from "../../assets/icons/bulletin-icon.png";

const ApplicantsAbout = () => {
  return (
    <div className="font-medium flex flex-col justify-center items-center gap-4 bg-[#1C1C1C] py-8 px-4 mt-2">
      <img src={applicantIcon} className=" -mt-14 w-14" alt="" />
      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col justify-center items-center gap-1 ">
          <h1 className=" text-3xl">
            The Most Committed and Trustworthy Applicants
          </h1>
          <p className=" text-opacity-50 text-white">
            Get to call themselves BRAND NAME chauffeurs
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4">
          <h1 className=" text-3xl">Our Evaluation</h1>
          <div className=" flex flex-col gap-1">
            <div className=" flex items-center gap-3">
              <img src={bulletinImage} alt="" />
              <div>Extensive Federal, State, and DMV background checks</div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={bulletinImage} alt="" />
              <div>Drug & alcohol zero tolerance podivcy</div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={bulletinImage} alt="" />
              <div>
                Psychometrics Exam to assess each candidates personadivty
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <img src={bulletinImage} alt="" />
              <div>Recurring service training</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsAbout;
