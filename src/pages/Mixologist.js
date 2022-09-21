import React, { useState, useEffect } from "react";
import MixologistList from "../components/mixologist/MixologistList";
import classes from "./Mixologist.module.css";

// import { ABOUT_DATA } from "../data";

const Mixologist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMixologist, setLoadedMixologist] = useState([]);
  // send request to add meetups to home page
  useEffect(() => {
    setIsLoading(true);
    // place request in useEffect to prevent infinite loop by add dependencies in [] as second argument
    const url = process.env.REACT_APP_API_MIXOLOGIST_URL;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // convert the obj data into array and push in setLoadedMeetups
        const mixologistMembers = [];
        for (const key in data) {
          const mixologist = {
            id: key,
            ...data[key],
          };
          mixologistMembers.push(mixologist);
        }
        // can add error handling here
        setIsLoading(false);
        setLoadedMixologist(mixologistMembers);
      });

    // if second arguement was omitted, react will run the useEffect whenever the function component executes. That is why second aregument is needed because react will check the values added to array and compare to its last execution. IF its empty, react will then run the fetch function
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading Mixologist... </p>
      </section>
    );
  }

  return (
    <div id="mixologists" className={classes.content}>
      <h1 className={classes.h1}>Meet Our Mixologists</h1>
      <MixologistList mixologists={loadedMixologist} />
    </div>
  );
};

export default Mixologist;
