import React from "react";
import classes from "./AboutUsItems.module.css";

const AboutUsItems = (props) => {
  return (
    <>
      {/* only use for dummy data -> className={classes[props.serviceBackground]} */}
      <section className={classes.introBackground}>
        <p className={classes.intro}>{props.intro}</p>
        <img
          className={classes.introImage1}
          src={props.image1}
          alt="About-Us-1"
        />
        <img
          className={classes.introImage2}
          src={props.image2}
          alt="About-Us-2"
        />
      </section>

      <section className={classes.serviceBackground}>
        <p className={classes.service}>{props.service}</p>
        <img
          className={classes.serviceImage1}
          src={props.image3}
          alt="About-Us-3"
        />
        <img
          className={classes.serviceImage2}
          src={props.image4}
          alt="About-Us-4"
        />
      </section>
    </>
  );
};

export default AboutUsItems;
