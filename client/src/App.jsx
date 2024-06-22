import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/common/Navbar";
import About from "./pages/about/About";

function App() {
  return (
    <div className=" font-Outfit bg-[#151515]">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
