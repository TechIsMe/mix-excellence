import React from "react";
import MixologistItems from "./MixologistItems";

const MixologistList = (props) => {
  return (
    <>
      {props.mixologists.map((mixologist) => (
        <MixologistItems
          key={mixologist.id}
          id={mixologist.id}
          mixologist1Name={mixologist.mixologist1Name}
          mixologist2Name={mixologist.mixologist2Name}
          mixologist3Name={mixologist.mixologist3Name}
          mixologist4Name={mixologist.mixologist4Name}
          mixologist1Intro={mixologist.mixologist1Intro}
          mixologist2Intro={mixologist.mixologist2Intro}
          mixologist3Intro={mixologist.mixologist3Intro}
          mixologist4Intro={mixologist.mixologist4Intro}
          mixologistImage1={mixologist.mixologistImage1}
          mixologistImage2={mixologist.mixologistImage2}
          mixologistImage3={mixologist.mixologistImage3}
          mixologistImage4={mixologist.mixologistImage4}
        />
      ))}
    </>
  );
};

export default MixologistList;
