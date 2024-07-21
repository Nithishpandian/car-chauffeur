import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const AdminPanelTable = ({ bookingData }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(bookingData?.accept);
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async (newStatus) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/booking/update/${
          bookingData._id
        }`,
        {
          accept: newStatus,
          sessionId: bookingData.session,
          paymentIntentId: bookingData.paymentIntentId, // Ensure this is included
        }
      );
      console.log(response);
      if (response.data) {
        setStatus(newStatus);
        toast.success(
          `Booking ${
            newStatus === "true" ? "accepted" : "declined"
          } successfully`
        );
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Failed to update booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`text-sm md:text-lg grid grid-cols-6 sm:flex items-center gap-3 font-medium w-full`}
      >
        {status !== "true" && status !== "false" && !loading && (
          <>
            <button
              onClick={() => handleUpdateStatus("true")}
              className="col-span-3 sm:col-span-1 border border-[#5BFF6C] py-3 px-3 lg:px-5 rounded text-white bg-transparent"
            >
              Accept
            </button>
            <button
              onClick={() => handleUpdateStatus("false")}
              className="col-span-3 sm:col-span-1 border border-[#FF4141] py-3 px-3 lg:px-5 rounded text-white bg-transparent"
            >
              Decline
            </button>
          </>
        )}
        <div
          className={`col-span-5 sm:col-span-1 border border-backgroundGray bg-backgroundGray flex items-center justify-around py-3 px-3 md:px-5 ${
            status === "true" || status === "false"
              ? "gap-[44px] sm:gap-[133px] md:gap-[202px]"
              : "gap-3 md:gap-10"
          }`}
        >
          <h1>{bookingData?.name}</h1>
          <h1>${bookingData?.vehicle === "Toyota Sienna" ? 3 : 7}</h1>
          <h1>{bookingData?.vehicle}</h1>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center p-[14px] md:p-4 border border-[#333333] bg-[#333333] rounded text-white"
        >
          <FaChevronDown
            className={`${
              open ? "rotate-180" : "rotate-0"
            } text-[17px] md:text-[19px]`}
          />
        </button>
      </div>
      {open && (
        <div className="font-medium text-sm sm:text-base md:text-lg bg-backgroundGray rounded py-10 px-4 sm:px-5 md:px-7 lg:px-14 items-center justify-around gap-4 sm:gap-5 md:gap-9 lg:gap-10">
          <div>
            <h1>Location: {bookingData?.pickupLocation}</h1>
            <p className="underline cursor-pointer">Check it live</p>
          </div>
          <div>
            <h1>From {bookingData?.pickupLocation} to</h1>
            <p>{bookingData?.dropOffLocation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanelTable;
