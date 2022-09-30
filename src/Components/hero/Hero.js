import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Hero.module.css";
function Hero() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className="hero-wrapper">
      <div className="hero">
        {!isLoggedIn && (
          <Link to="/auth" className={classes.hero}>
            <img
              src={process.env.PUBLIC_URL + "/images/Whiskey image.png"}
              alt="wiskey"
            />
          </Link>
        )}
        <img
          src={process.env.PUBLIC_URL + "/images/pngegg 3.png"}
          alt="wiskey"
        />
      </div>
    </div>
  );
}

export default Hero;
