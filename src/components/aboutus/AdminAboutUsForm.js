import React, { useRef } from "react";
import classes from "./AdminAboutUsForm.module.css";
const AdminAboutUsForm = (props) => {
  const introInputRef = useRef();
  const image1InputRef = useRef();
  const image2InputRef = useRef();
  const serviceInputRef = useRef();
  const image3InputRef = useRef();
  const image4InputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredIntro = introInputRef.current.value;
    const enteredImage1 = image1InputRef.current.value;
    const enteredImage2 = image2InputRef.current.value;
    const enteredService = serviceInputRef.current.value;
    const enteredImage3 = image3InputRef.current.value;
    const enteredImage4 = image4InputRef.current.value;

    const aboutUsData = {
      intro: enteredIntro,
      image1: enteredImage1,
      image2: enteredImage2,
      service: enteredService,
      image3: enteredImage3,
      image4: enteredImage4,
    };
    props.onAddAboutUs(aboutUsData);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="intro">About Us Intro</label>
          <textarea
            type="text"
            required
            id="intro"
            rows="5"
            ref={introInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="image1">About Us Image 1</label>
          <input type="text" required id="image1" ref={image1InputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image2">About Us Image 2</label>
          <input type="text" required id="image2" ref={image2InputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="service">About Service</label>
          <textarea
            type="text"
            required
            id="service"
            rows="5"
            ref={serviceInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="image3">About Us Image 3</label>
          <input type="text" required id="image3" ref={image3InputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image4">About Us Image 4</label>
          <input type="text" required id="image4" ref={image4InputRef} />
        </div>

        <div className={classes.actions}>
          <button>Add </button>
        </div>
      </form>
    </>
  );
};

export default AdminAboutUsForm;
