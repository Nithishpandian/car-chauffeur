import React from "react";
import AdminPanelAnalytics from "./AdminPanelAnalytics";
import { FaChevronDown } from "react-icons/fa";
import AdminPanelTable from "./AdminPanelTable";

const AdminPanel = () => {
  return (
    <div className="bg-backgroundSlate flex flex-col items-center justify-center py-12  px-2 lg:px-6 ">
      <div className=" flex flex-col gap-3">
        <AdminPanelTable />
        <AdminPanelAnalytics />
      </div>
    </div>
  );
};

export default AdminPanel;
