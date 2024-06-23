import React from "react";
import HomeContainer from "../../components/home/HomeContainer";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContainer />
      <Footer />
    </div>
  );
};

export default Home;
