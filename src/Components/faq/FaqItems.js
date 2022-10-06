import React, { useState } from "react";
import classes from "./FaqItems.module.css";
const FaqItems = (props) => {
  const [is1Active, setIs1Active] = useState(false);
  const [is2Active, setIs2Active] = useState(false);
  const [is3Active, setIs3Active] = useState(false);

  const toggle1Handler = (e) => {
    e.preventDefault();
    e.target(setIs1Active(!is1Active));
  };

  return (
    <div className={classes.accordion_item}>
      <div className={classes.accordion_toggle} onClick={toggle1Handler}>
        <h3>{props.question1}</h3>
        <span>
          {is1Active ? (
            <div className={classes.down_arrow}></div>
          ) : (
            <div className={classes.up_arrow}></div>
          )}
        </span>
      </div>
      {is1Active && (
        <div className={classes.accordion_content}>
          <p>{props.question1Answer}</p>
        </div>
      )}

      <div
        className={classes.accordion_toggle}
        onClick={() => setIs2Active(!is2Active)}
      >
        <h3>{props.question2}</h3>
        <span>
          {is2Active ? (
            <div className={classes.down_arrow}></div>
          ) : (
            <div className={classes.up_arrow}></div>
          )}
        </span>
      </div>
      {is2Active && (
        <div className={classes.accordion_content}>
          <p>{props.question2Answer}</p>
          <button>Contact Us</button>
        </div>
      )}
      <div
        className={classes.accordion_toggle}
        onClick={() => setIs3Active(!is3Active)}
      >
        <h3>{props.question3}</h3>
        <span>
          {is3Active ? (
            <div className={classes.down_arrow}></div>
          ) : (
            <div className={classes.up_arrow}></div>
          )}
        </span>
      </div>
      {is3Active && (
        <div className={classes.accordion_content}>
          <p>{props.question3Answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItems;
