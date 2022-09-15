import React, { useState, useEffect } from "react";
import AboutUsList from "../components/aboutus/AboutUsList";
import classes from "./AboutUs.module.css";
import { ABOUT_DATA } from "../data";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAboutUs, setLoadedAboutUs] = useState([]);
  // send request to add meetups to home page
  useEffect(() => {
    setIsLoading(true);
    // place request in useEffect to prevent infinite loop by add dependencies in [] as second argument
    const url = process.env.REACT_APP_API_URL;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // convert the obj data into array and push in setLoadedMeetups
        const aboutUs = [];
        for (const key in data) {
          const about = {
            id: key,
            ...data[key],
          };
          aboutUs.push(about);
        }
        // can add error handling here
        setIsLoading(false);
        setLoadedAboutUs(aboutUs);
      });

    // if second arguement was omitted, react will run the useEffect whenever the function component executes. That is why second aregument is needed because react will check the values added to array and compare to its last execution. IF its empty, react will then run the fetch function
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    );
  }

  return (
    <div id="aboutUs" className={classes.content}>
      <h1 className={classes.h1}>About Us</h1>
      <AboutUsList aboutus={loadedAboutUs} />
    </div>
  );
};

export default AboutUs;
