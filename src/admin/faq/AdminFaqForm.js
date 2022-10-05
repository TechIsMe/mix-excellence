import React, { useRef } from "react";
import classes from "./AdminFaqForm.module.css";

const AdminFaqForm = (props) => {
  const question1InputRef = useRef();
  const question1AnswerInputRef = useRef();

  const question2InputRef = useRef();
  const question2AnswerInputRef = useRef();

  const question3InputRef = useRef();
  const question3AnswerInputRef = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();

    const question1 = question1InputRef.current.value;
    const question1Answer = question1AnswerInputRef.current.value;
    const question2 = question2InputRef.current.value;
    const question2Answer = question2AnswerInputRef.current.value;
    const question3 = question3InputRef.current.value;
    const question3Answer = question3AnswerInputRef.current.value;

    const faqData = {
      question1: question1,
      question1Answer: question1Answer,
      question2: question2,
      question2Answer: question2Answer,
      question3: question3,
      question3Answer: question3Answer,
    };
    props.onAddFaq(faqData);
    console.log(faqData);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="question1">Question 1</label>
          <textarea
            type="text"
            required
            id="question1"
            rows="1"
            ref={question1InputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="question1Anwswer">Answer 1</label>
          <textarea
            type="text"
            required
            id="question1Anwswer"
            rows="5"
            ref={question1AnswerInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="question2">Question 2</label>
          <textarea
            type="text"
            required
            id="question2"
            rows="1"
            ref={question2InputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="question2Anwswer">Answer 2</label>
          <textarea
            type="text"
            required
            id="question2Anwswer"
            rows="5"
            ref={question2AnswerInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="question3">Question 3</label>
          <textarea
            type="question3"
            required
            id="intro"
            rows="1"
            ref={question3InputRef}
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="question3Anwswer">Answer 3</label>
          <textarea
            type="text"
            required
            id="question3Anwswer"
            rows="5"
            ref={question3AnswerInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add </button>
        </div>
      </form>
    </>
  );
};

export default AdminFaqForm;
