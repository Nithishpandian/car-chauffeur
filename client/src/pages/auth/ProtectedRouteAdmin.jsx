import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouteAdmin() {
  const token = sessionStorage.getItem("adminToken");

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteAdmin;
