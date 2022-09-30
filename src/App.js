import "./App.css";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import AuthPage from "./pages/AuthPage";

import { Route, Routes, Navigate } from "react-router-dom";
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
import AdminMixologistForm from "./admin/mixologist/AdminMixologistForm";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            exact
            element={[
              <Navigation />,
              <Banner />,
              <Hero />,
              <AboutUs id="aboutUs" />,
              <Mixologist id="mixologist" />,
              <OurDrinks />,
              <Footer />,
            ]}
          ></Route>
          {authCtx.isLoggedIn && (
            <>
              <Route path="/admin-aboutus-form" element={<AdminAboutPage />}>
                {!authCtx.isLoggedIn && <Navigate to="/" />}
              </Route>
              <Route
                path="/admin-mixologist-form"
                element={<AdminMixologistForm />}
              >
                {!authCtx.isLoggedIn && <Navigate to="/" />}
              </Route>
            </>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
