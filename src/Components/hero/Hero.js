import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Hero.module.css";

function Hero() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className={classes.hero_wrapper}>
      <div className={classes.hero}>
        {!isLoggedIn && (
          <>
            <Link to="/auth">
              <img
                className={classes.secret}
                src={process.env.PUBLIC_URL + "/images/Whiskey.png"}
                alt="wiskey"
              />
            </Link>
            <img
              src={process.env.PUBLIC_URL + "/images/Green.png"}
              alt="green margarita"
            />
          </>
        )}
        {isLoggedIn && (
          <>
            <img
              className={classes.whiskey}
              src={process.env.PUBLIC_URL + "/images/Whiskey.png"}
              alt="wiskey"
            />
            <img
              className={classes.margarita}
              src={process.env.PUBLIC_URL + "/images/Green.png"}
              alt="green margarita"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
