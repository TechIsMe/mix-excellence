import React from "react";
import { useNavigate } from "react-router-dom";
import AdminAboutUsForm from "../components/aboutus/AdminAboutUsForm";
const AdminAboutPage = (props) => {
  const history = useNavigate();
  const addAboutusHandler = (aboutUsData) => {
    //return promise
    fetch("https://mixellence-bae0c-default-rtdb.firebaseio.com/aboutus.json", {
      method: "POST",
      body: JSON.stringify(aboutUsData),
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
    });
  };
  return (
    <section>
      <h1>Add About Us</h1>
      <AdminAboutUsForm onAddAboutUs={addAboutusHandler} />
    </section>
  );
};

export default AdminAboutPage;
