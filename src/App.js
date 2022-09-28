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

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Banner />
        <Hero />

        <Routes>
          <Route path="/admin-aboutus" element={<AdminAboutPage />}></Route>
        </Routes>
        <AboutUs id="aboutUs" />
        <Mixologist id="mixologist" />
        <OurDrinks />
        {/* <Testimony /> */}
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
