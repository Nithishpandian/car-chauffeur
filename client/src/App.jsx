import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import BookNow from "./pages/book-now/BookNow";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className=" font-Outfit bg-[#151515]">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
