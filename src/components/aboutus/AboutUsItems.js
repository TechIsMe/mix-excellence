import React from "react";
import classes from "./AboutUs.module.css";

const AboutUsItems = (props) => {
  return (
    <div>
      <section className={classes[props.leafBackground]}>
        <p className={classes[props.introClass]}>{props.intro}</p>
        <img
          className={classes[props.image1Class]}
          src={props.image1}
          alt="About-Us-1"
        />
        <img
          className={classes[props.image2Class]}
          src={props.image2}
          alt="About-Us-2"
        />
      </section>
    </div>
  );
};

export default AboutUsItems;