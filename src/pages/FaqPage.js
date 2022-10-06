import React, { useState, useEffect } from "react";
import classes from "./FaqPage.module.css";
import FaqList from "../components/faq/FaqList";

const FaqPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFaq, setLoadedFaq] = useState([]);
  // send request to add meetups to home page
  useEffect(() => {
    setIsLoading(true);
    // place request in useEffect to prevent infinite loop by add dependencies in [] as second argument
    const url = process.env.REACT_APP_API_FAQ_URL;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // convert the obj data into array and push in setLoadedMeetups
        const faqsObj = [];
        for (const key in data) {
          const faq = {
            id: key,
            ...data[key],
          };
          faqsObj.push(faq);
        }
        // can add error handling here
        setIsLoading(false);
        setLoadedFaq(faqsObj);
      });

    // if second arguement was omitted, react will run the useEffect whenever the function component executes. That is why second aregument is needed because react will check the values added to array and compare to its last execution. IF its empty, react will then run the fetch function
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading FAQ's... </p>
      </section>
    );
  }
  return (
    <div id="faq" className={classes.content}>
      <h1 className={classes.h1}>FAQ's</h1>
      <FaqList faqs={loadedFaq} />
    </div>
  );
};

export default FaqPage;
