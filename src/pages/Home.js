import React from "react";
import Navigation from "../components/navbar/Navigation";
import Banner from "../components/banner/Banner";
import Hero from "../components/hero/Hero";
import AboutUs from "./AboutUs";
import Mixologist from "./Mixologist";
import OurDrinks from "../components/popular-drinks/ourDrinks";
import Footer from "../components/footer/Footer";
import FaqPage from "./FaqPage";

const Home = () => {
  return (
    <>
      <Navigation />,
      <Banner />,
      <Hero />,
      <AboutUs id="aboutUs" />,
      <Mixologist id="mixologist" />,
      <FaqPage id="faq" />
      <OurDrinks />,
      <Footer />
    </>
  );
};

export default Home;
