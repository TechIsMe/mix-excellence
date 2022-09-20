import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminAboutPage from "./pages/AdminAboutUs";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Routes>
          {/* <Route path="/" exact element={<AboutUs />}></Route> */}
          <Route path="/admin-aboutus" element={<AdminAboutPage />}></Route>
        </Routes>
        <AboutUs />
      </Layout>
    </div>
  );
}

export default App;
