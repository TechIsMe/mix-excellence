import React, { useRef } from "react";
import classes from "./AdminMixologistForm.module.css";
import { uploadToStorage } from "../../utils/firebase";

const AdminMixologistForm = (props) => {
  const mixologist1NameRef = useRef();
  const mixologist1ImageRef = useRef();
  const mixologist1InroRef = useRef();

  const mixologist2NameRef = useRef();
  const mixologist2ImageRef = useRef();
  const mixologist2InroRef = useRef();

  const mixologist3NameRef = useRef();
  const mixologist3ImageRef = useRef();
  const mixologist3InroRef = useRef();

  const mixologist4NameRef = useRef();
  const mixologist4ImageRef = useRef();
  const mixologist4InroRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredMixologist1Name = mixologist1NameRef.current.value;
    const enteredMixologist2Name = mixologist2NameRef.current.value;
    const enteredMixologist3Name = mixologist3NameRef.current.value;
    const enteredMixologist4Name = mixologist4NameRef.current.value;

    const enteredMixologist1Intro = mixologist1InroRef.current.value;
    const enteredMixologist2Intro = mixologist2InroRef.current.value;
    const enteredMixologist3Intro = mixologist3InroRef.current.value;
    const enteredMixologist4Intro = mixologist4InroRef.current.value;

    const enteredImage1 = mixologist1ImageRef.current.files[0];
    const enteredImage2 = mixologist2ImageRef.current.files[0];
    const enteredImage3 = mixologist3ImageRef.current.files[0];
    const enteredImage4 = mixologist4ImageRef.current.files[0];

    const imageResponse1 = await uploadToStorage(
      enteredImage1,
      "images/mixologist/mixologist1.png"
    );
    const imageResponse2 = await uploadToStorage(
      enteredImage2,
      "images/mixologist/mixologist2.png"
    );
    const imageResponse3 = await uploadToStorage(
      enteredImage3,
      "images/mixologist/mixologist3.png"
    );
    const imageResponse4 = await uploadToStorage(
      enteredImage4,
      "images/mixologist/mixologist4.png"
    );

    const mixologistData = {
      mixologist1Name: enteredMixologist1Name,
      mixologist1Intro: enteredMixologist1Intro,

      mixologist2Name: enteredMixologist2Name,
      mixologist2Intro: enteredMixologist2Intro,

      mixologist3Name: enteredMixologist3Name,
      mixologist3Intro: enteredMixologist3Intro,

      mixologist4Name: enteredMixologist4Name,
      mixologist4Intro: enteredMixologist4Intro,

      mixologistImage1: {
        url: imageResponse1.url,
        fileLocation: imageResponse1.fileDestination,
      },
      mixologistImage2: {
        url: imageResponse2.url,
        fileLocation: imageResponse2.fileDestination,
      },
      mixologistImage3: {
        url: imageResponse3.url,
        fileLocation: imageResponse3.fileDestination,
      },
      mixologistImage4: {
        url: imageResponse4.url,
        fileLocation: imageResponse4.fileDestination,
      },
    };
    props.onAddMixologist(mixologistData);
    console.log(mixologistData);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
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
        <div className={classes.control}>
          <label htmlFor="mixologistImage2">Mixologist 2 photo</label>
          <input
            type="file"
            required
            id="mixologistImage2"
            ref={mixologist2ImageRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist2Name">Mixologist 2 Name</label>
          <input
            type="text"
            required
            id="mixologist2Name"
            ref={mixologist2NameRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist2Intro">Mixologist 2 Intro</label>
          <textarea
            type="text"
            required
            id="mixologist2Intro"
            rows="5"
            ref={mixologist2InroRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="mixologistImage3">Mixologist 3 photo</label>
          <input
            type="file"
            required
            id="mixologistImage3"
            ref={mixologist3ImageRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist3Name">Mixologist 3 Name</label>
          <input
            type="text"
            required
            id="mixologist3Name"
            ref={mixologist3NameRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist3Intro">Mixologist 3 Intro</label>
          <textarea
            type="text"
            required
            id="mixologist3Intro"
            rows="5"
            ref={mixologist3InroRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="mixologistImage3">Mixologist 4 photo</label>
          <input
            type="file"
            required
            id="mixologistImage3"
            ref={mixologist4ImageRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist4Name">Mixologist 4 Name</label>
          <input
            type="text"
            required
            id="mixologist4Name"
            ref={mixologist4NameRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mixologist1Intro">Mixologist 4 Intro</label>
          <textarea
            type="text"
            required
            id="mixologist1Intro"
            rows="5"
            ref={mixologist4InroRef}
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
