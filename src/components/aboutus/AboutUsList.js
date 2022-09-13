import React from "react";
import AboutUsItems from "./AboutUsItems";

const AboutUsList = (props) => {
  return (
    <div>
      {props.aboutus.map((about) => (
        <AboutUsItems
          key={about.id}
          id={about.id}
          image1Class={about.image1Class}
          image2Class={about.image2Class}
          leafBackground={about.leafBackground}
          introClass={about.introClass}
          intro={about.intro}
          image1={about.image1}
          image2={about.image2}
        />
      ))}
    </div>
  );
};

export default AboutUsList;
