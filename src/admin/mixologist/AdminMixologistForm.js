import React, { useRef } from "react";
import classes from "./AdminMixologistForm.module.css";
import { uploadToStorage } from "../../utils/firebase";
import { nanoid } from "nanoid";
const AdminMixologistForm = (props) => {
  const id = nanoid(10);
  const mixologist1NameRef = useRef();
  const mixologist1ImageRef = useRef();
  const mixologist1InroRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredMixologist1Name = mixologist1NameRef.current.value;

    const enteredMixologist1Intro = mixologist1InroRef.current.value;

    const enteredImage1 = mixologist1ImageRef.current.files[0];

    const imageResponse1 = await uploadToStorage(
      enteredImage1,
      `images/mixologist/${id}.png`
    );
    console.log(enteredImage1);
    const mixologistData = {
      id: id,
      mixologist1Name: enteredMixologist1Name,
      mixologist1Intro: enteredMixologist1Intro,

      mixologistImage1: {
        url: imageResponse1.url,
        fileLocation: imageResponse1.fileDestination,
      },
    };
    props.onAddMixologist(mixologistData);
    console.log(mixologistData);
  };

  return (
    <>
      <form
        id="admin-mixologist-form"
        className={classes.form}
        onSubmit={submitHandler}
      >
        <div className={classes.control}>
          <label htmlFor="mixologistImage1">Mixologist 1 photo</label>
          <input
            type="file"
            required
            id="mixologistImage1"
            ref={mixologist1ImageRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="mixologist1Name">Mixologist 1 Name</label>
          <input
            type="text"
            required
            id="mixologist1Name"
            ref={mixologist1NameRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist1Intro">Mixologist 1 Intro</label>
          <textarea
            type="text"
            required
            id="mixologist1Intro"
            rows="5"
            ref={mixologist1InroRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add </button>
        </div>
      </form>
    </>
  );
};

export default AdminMixologistForm;
