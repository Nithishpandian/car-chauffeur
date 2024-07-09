import React, { useEffect, useState } from "react";
import AdminPanelAnalytics from "./AdminPanelAnalytics";
import AdminPanelTable from "./AdminPanelTable";
import api from "../../utils/api";

const AdminPanel = () => {
  const [allBookingData, setAllBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllBookingData = async () => {
      try {
        const response = await api.get("/booking/all");
        setAllBookingData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllBookingData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-backgroundSlate flex flex-col items-center justify-center py-12 px-2 lg:px-6">
      <div className="flex flex-col gap-3">
        {allBookingData
          .filter((item) => item?.accept !== "false")
          .map((item, index) => (
            <AdminPanelTable key={index} bookingData={item} />
          ))}
        <AdminPanelAnalytics allBookingData={allBookingData} />
      </div>
    </div>
  );
};

export default AdminPanel;
