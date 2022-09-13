import React from "react";
import AboutUsList from "../components/aboutus/AboutUsList";
import classes from "./AboutUs.module.css";

import { ABOUT_DATA } from "../data";

const AboutUs = (props) => {
  return (
    <div id="aboutUs" className={classes.content}>
      <h1 className={classes.h1}>About Us</h1>
      <AboutUsList aboutus={ABOUT_DATA} />
    </div>
  );
};

export default AboutUs;
