import React from "react";
import classes from "./ContactUs.module.css";

export default function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    console.log(data);
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <>
      <section id="contactUs">
        <form
          className={classes.form}
          netlify="true"
          name="contact"
          onSubmit={handleSubmit}
        >
          <h1 className={classes.h1}>Contact Us</h1>
          <p>Feel free to drop us a line below!</p>
          <div className={classes.container}>
            <div className={classes.control}>
              <label htmlFor="name" className={classes.name_label}>
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please type full name"
                className={classes.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="email" className={classes.email_label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please type email address"
                className={classes.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="message" className={classes.message_label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave us a message"
                rows="5"
                className={classes.message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className={classes.actions}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
