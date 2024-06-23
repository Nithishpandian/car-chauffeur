import React from "react";
import BookNowContainer from "../../components/book-now/BookNowContainer";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const BookNow = () => {
  return (
    <div>
      <Navbar />
      <BookNowContainer />
      <Footer />
    </div>
  );
};

export default BookNow;
