import React from "react";
import AboutUsItems from "./AboutUsItems";

const AboutUsList = (props) => {
  return (
    <>
      {props.aboutus.map((about) => (
        <AboutUsItems
          key={about.id}
          id={about.id}
          // image1Class={about.image1Class}
          // image2Class={about.image2Class}
          // image3Class={about.image3Class}
          // image4Class={about.image4Class}
          // introBackground={about.introBackground}
          // serviceBackground={about.serviceBackground}
          // introClass={about.introClass}
          // serviceClass={about.serviceClass}
          intro={about.intro}
          service={about.service}
          image1={about.image1}
          image2={about.image2}
          image3={about.image3}
          image4={about.image4}
        />
      ))}
    </>
  );
};

export default AboutUsList;
