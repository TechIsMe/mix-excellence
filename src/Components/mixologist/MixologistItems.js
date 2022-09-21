import React from "react";
import classes from "./MixologistItems.module.css";

const MixologistItems = (props) => {
  return (
    <div className={classes.mixologists}>
      {/* only use for dummy data -> className={classes[props.serviceBackground]} */}
      <section className={classes.content}>
        <img
          className={classes.image}
          src={props.mixologistImage1.url}
          alt="Mixologist-1"
        />
        <p className={classes.name}>{props.mixologist1Name}</p>
        <p className={classes.intro}>{props.mixologist1Intro}</p>
      </section>
      <section className={classes.content}>
        <img
          className={classes.image}
          src={props.mixologistImage2.url}
          alt="Mixologist-2"
        />
        <p className={classes.name}>{props.mixologist2Name}</p>
        <p className={classes.intro}>{props.mixologist2Intro}</p>
      </section>
      <section className={classes.content}>
        <img
          className={classes.image}
          src={props.mixologistImage3.url}
          alt="Mixologist-3"
        />
        <p className={classes.name}>{props.mixologist3Name}</p>
        <p className={classes.intro}>{props.mixologist3Intro}</p>
      </section>
      <section className={classes.content}>
        <img
          className={classes.image}
          src={props.mixologistImage4.url}
          alt="Mixologist-4"
        />
        <p className={classes.name}>{props.mixologist4Name}</p>
        <p className={classes.intro}>{props.mixologist4Intro}</p>
      </section>
    </div>
  );
};

export default MixologistItems;
