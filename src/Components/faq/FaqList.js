import React from "react";
import FaqItems from "./FaqItems";
import classes from "./FaqList.module.css";
const FaqList = (props) => {
  return (
    <section className={classes.faq}>
      {props.faqs.map((faq) => (
        <FaqItems
          key={faq.id}
          id={faq.id}
          question1={faq.question1}
          question1Answer={faq.question1Answer}
          question2={faq.question2}
          question2Answer={faq.question2Answer}
          question3={faq.question3}
          question3Answer={faq.question3Answer}
        />
      ))}
    </section>
  );
};

export default FaqList;
