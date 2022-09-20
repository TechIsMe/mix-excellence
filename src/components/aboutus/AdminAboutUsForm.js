import React, { useRef } from "react";
import classes from "./AdminAboutUsForm.module.css";
import { uploadToStorage } from "../../utils/firebase";

const AdminAboutUsForm = (props) => {
  const introInputRef = useRef();
  const image1InputRef = useRef();
  const image2InputRef = useRef();
  const serviceInputRef = useRef();
  const image3InputRef = useRef();
  const image4InputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredIntro = introInputRef.current.value;
    const enteredService = serviceInputRef.current.value;

    const enteredImage1 = image1InputRef.current.files[0];
    const enteredImage2 = image2InputRef.current.files[0];
    const enteredImage3 = image3InputRef.current.files[0];
    const enteredImage4 = image4InputRef.current.files[0];

    const imageResponse1 = await uploadToStorage(
      enteredImage1,
      "images/services/serivce1.png"
    );
    const imageResponse2 = await uploadToStorage(
      enteredImage2,
      "images/services/serivce2.png"
    );
    const imageResponse3 = await uploadToStorage(
      enteredImage3,
      "images/services/serivce3.png"
    );
    const imageResponse4 = await uploadToStorage(
      enteredImage4,
      "images/services/serivce4.png"
    );

    const aboutUsData = {
      intro: enteredIntro,
      service: enteredService,
      image1: imageResponse1.url,
      image2: imageResponse2.url,
      image3: imageResponse3.url,
      image4: imageResponse4.url,
    };
    props.onAddAboutUs(aboutUsData);
    console.log(aboutUsData);
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
          <input type="file" required id="image1" ref={image1InputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image2">About Us Image 2</label>
          <input type="file" required id="image2" ref={image2InputRef} />
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
          <input type="file" required id="image3" ref={image3InputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image4">About Us Image 4</label>
          <input type="file" required id="image4" ref={image4InputRef} />
        </div>

        <div className={classes.actions}>
          <button>Add </button>
        </div>
      </form>
    </>
  );
};

export default AdminAboutUsForm;
