import "./App.css";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import AuthPage from "./pages/AuthPage";

import { Route, Routes, Navigate } from "react-router-dom";
import AdminAboutPage from "./admin/aboutus/AdminAboutUs";
import AdminFaqPage from "./admin/faq/AdminFaqPage";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminMixologistPage from "./admin/mixologist/AdminMixologistPage";
import Home from "./pages/Home";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          {authCtx.isLoggedIn && (
            <>
              <Route
                path="/admin-aboutus-form"
                element={
                  !authCtx.isLoggedIn ? <Navigate to="/" /> : <AdminAboutPage />
                }
              ></Route>
              <Route
                path="/admin-mixologist-form"
                element={
                  !authCtx.isLoggedIn ? (
                    <Navigate to="/" />
                  ) : (
                    <AdminMixologistPage />
                  )
                }
              ></Route>
              <Route
                path="/admin-faq-form"
                element={
                  !authCtx.isLoggedIn ? <Navigate to="/" /> : <AdminFaqPage />
                }
              ></Route>
              {!authCtx.isLoggedIn && <Navigate to="/" />}
            </>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
