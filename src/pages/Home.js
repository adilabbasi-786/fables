import React from "react";
import TopHeader from "../Components/TopHeader/TopHeader";
import Header2 from "../Components/header2.js/Header2";
import Video from "../Components/video/Video";
import Services from "../Components/services/Services";
import Teams from "../Components/Teams/Teams";
import Feedback from "../Components/feedback/Feedback";
import Products from "../Components/Products/Products";
import Partner from "../Components/Partner/Partner";
import Blogs from "../Components/Blogs/Blogs";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Video />
      <Services />
      <Feedback />
      <Teams />
      <Products />
      <Partner />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
