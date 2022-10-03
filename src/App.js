import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminAboutPage from "./admin/aboutus/AdminAboutUs";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navbar/Navigation";
import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import OurDrinks from "./components/popular-drinks/ourDrinks";

import Footer from "./components/footer/Footer";
// import Testimony from "./components/testimony/Testimony";

import Mixologist from "./pages/Mixologist";
import TestimonialSliders from "./components/testimony/TestimonialSlider";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Banner />
        <Hero />
        {/* <Footer /> */}

        <Routes>
          {/* <Route path="/" exact element={<AboutUs id="aboutUs" />}></Route>
          <Route
            path="/mixologist"
            element={<Mixologist id="mixologist" />}
          ></Route> */}
          <Route path="/admin-aboutus" element={<AdminAboutPage />}></Route>
        </Routes>
        <AboutUs id="aboutUs" />
        <Mixologist id="mixologist" />
      <OurDrinks />
      <TestimonialSliders />
        {/* <AboutUs /> */}
        <Footer />

        
      </Layout>
      {/* <Testimony /> */}
    </div>
  );
}

export default App;
