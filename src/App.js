import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminAboutPage from "./pages/AdminAboutUs";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navbar/Navigation";
import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Banner />
        <Hero />
        <Routes>
          <Route path="/" exact element={<AboutUs id="aboutUs" />}></Route>
          <Route path="/admin-aboutus" element={<AdminAboutPage />}></Route>
        </Routes>
        {/* <AboutUs /> */}
        <Footer />

      </Layout>
    </div>
  );
}

export default App;
