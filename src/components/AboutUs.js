import React from "react";
import classes from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div id="aboutUs" className={classes.content}>
      <h1 className={classes.h1}>About Us</h1>
      <section className={classes.leaf_1}>
        <p className={classes.excerpt1}>
          Hello, my name is Roel Aurelio Prado founder of Mixellence Mobile Pop
          up Bar. I'm Native American & Mexican. My people are from the Kickapoo
          tribe. What we strive to do here at Mixellence is give EXCELLENT
          service and drinks of course.
        </p>
        <img
          className={classes.aboutUs1}
          src={process.env.PUBLIC_URL + "/images/About-Us-Image-1.png"}
          alt="About-Us-1"
        />
        <img
          className={classes.aboutUs2}
          src={process.env.PUBLIC_URL + "/images/About-Us-Image-2.png"}
          alt="About-Us-2"
        />
      </section>

      <section className={classes.leaf_2}>
        <p className={classes.excerpt2}>
          We supply everything that a bar would require except the alcohol
          itself. (Cups, napkins, straws, juices, mixers, garnishes ice, ect.)
          Along with great service and a fun and professional experience.
        </p>
        <img
          className={classes.aboutUs3}
          src={process.env.PUBLIC_URL + "/images/About-Us-Image-3.png"}
          alt="About-Us-3"
        />
        <img
          className={classes.aboutUs4}
          src={process.env.PUBLIC_URL + "/images/About-Us-Image-4.png"}
          alt="About-Us-4"
        />
      </section>
    </div>
  );
};

export default AboutUs;
