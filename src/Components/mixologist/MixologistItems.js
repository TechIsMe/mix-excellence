import React from "react";
import classes from "./MixologistItems.module.css";

const MixologistItems = (props) => {
  return (
    <div className={classes.content}>
      {/* only use for dummy data -> className={classes[props.serviceBackground]} */}
      <section className={classes.mixologist} id={props.id}>
        <img
          className={classes.image}
          src={props.mixologistImage1.url}
          alt="Mixologist"
        />
        <p className={classes.name}>{props.mixologist1Name}</p>
        <p className={classes.intro}>{props.mixologist1Intro}</p>
      </section>
    </div>
  );
};

export default MixologistItems;
