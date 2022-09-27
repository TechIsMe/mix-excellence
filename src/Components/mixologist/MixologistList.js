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
          mixologist1Intro={mixologist.mixologist1Intro}
          mixologistImage1={mixologist.mixologistImage1}
          // mixologist2Name={mixologist.mixologist2Name}
          // mixologist2Intro={mixologist.mixologist2Intro}
          // mixologistImage2={mixologist.mixologistImage2}
          // mixologist3Name={mixologist.mixologist3Name}
          // mixologist3Intro={mixologist.mixologist3Intro}
          // mixologistImage3={mixologist.mixologistImage3}
          // mixologist4Name={mixologist.mixologist4Name}
          // mixologist4Intro={mixologist.mixologist4Intro}
          // mixologistImage4={mixologist.mixologistImage4}
        />
      ))}
    </>
  );
};

export default MixologistList;
