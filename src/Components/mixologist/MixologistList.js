import React from "react";
import MixologistItems from "./MixologistItems";
import classes from "./MixologistList.module.css";
const MixologistList = (props) => {
  return (
    <>
      {props.mixologists.map((mixologist) => (
        <MixologistItems
          className={classes.mixologist}
          key={mixologist.id}
          id={mixologist.id}
          mixologist1Name={mixologist.mixologist1Name}
          mixologist1Intro={mixologist.mixologist1Intro}
          mixologistImage1={mixologist.mixologistImage1}
        />
      ))}
    </>
  );
};

export default MixologistList;
