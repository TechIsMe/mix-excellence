import React from "react";
import classes from "./AboutUsItems.module.css";

const AboutUsItems = (props) => {
  return (
    <div className={classes.aboutus}>
      {/* only use for dummy data -> className={classes[props.serviceBackground]} */}
      <section className={classes.introBackground}>
        <img
          className={classes.introImage1}
          src={props.image1.url}
          alt="About-Us-1"
        />
        <img
          className={classes.introImage2}
          src={props.image2.url}
          alt="About-Us-2"
        />
        <p className={`${classes.text} ${classes.intro}`}>{props.intro}</p>
      </section>

      <section className={classes.serviceBackground}>
        <p className={`${classes.text} ${classes.service}`}>{props.service}</p>
        <div>
          <img
            className={classes.serviceImage1}
            src={props.image3.url}
            alt="About-Us-3"
          />
          <img
            className={classes.serviceImage2}
            src={props.image4.url}
            alt="About-Us-4"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUsItems;
