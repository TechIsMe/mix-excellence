import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminAboutPage from "./pages/AdminAboutUs";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AboutUs />}></Route>
        <Route path="/admin-aboutus" element={<AdminAboutPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
