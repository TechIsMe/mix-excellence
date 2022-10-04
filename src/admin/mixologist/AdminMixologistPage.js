import React from "react";
import { useNavigate } from "react-router-dom";
import AdminMixologistForm from "../mixologist/AdminMixologistForm";
const AdminAboutPage = (props) => {
  const history = useNavigate();

  const addMixologistHandler = (mixologistData) => {
    //return promise
    const url = process.env.REACT_APP_API_MIXOLOGIST_URL;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(mixologistData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history("/", { replace: true });
      // if using for navitaging back or forward
      //   <button onClick={() => navigate(-2)}>
      //   Go 2 pages back
      // </button>
      // <button onClick={() => navigate(-1)}>Go back</button>
      // <button onClick={() => navigate(1)}>
      //   Go forward
      // </button>
      // <button onClick={() => navigate(2)}>
      window.location.reload();
    });
  };
  return (
    <section>
      <h1>Add Mixologist</h1>
      <AdminMixologistForm
        onAddMixologist={addMixologistHandler}
        onClick={() => history("/admin-mixologist")}
      />
    </section>
  );
};

export default AdminAboutPage;
