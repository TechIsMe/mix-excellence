import React from "react";
import { useNavigate } from "react-router-dom";
import AdminFaqForm from "./AdminFaqForm";

const AdminFaqPage = (props) => {
  const history = useNavigate();
  const addFaqHandler = (faqData) => {
    //return promise
    const url = process.env.REACT_APP_API_FAQ_URL;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(faqData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history("/", { replace: true });
      window.location.reload();
    });
  };

  return (
    <section style={{ width: "50%", margin: "0 auto" }}>
      <h1>Add Faq</h1>
      <AdminFaqForm onAddFaq={addFaqHandler} />
    </section>
  );
};

export default AdminFaqPage;
