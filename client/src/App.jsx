import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BookNow from "./pages/book-now/BookNow";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import ProtectedRouteAdmin from "./pages/auth/ProtectedRouteAdmin";
import { useEffect, useState } from "react";
import api from "./utils/api";
import TermsServices from "./pages/terms-services/TermsServices";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await api.get("/user/me");
        setUser(response.data);

        if (response.data.admin === true) {
          sessionStorage.setItem("adminToken", response.data.token);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="font-Outfit bg-backgroundBlack">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-services" element={<TermsServices />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/book-now" element={<BookNow />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
