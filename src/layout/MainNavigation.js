import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div>
        <img
          className={classes.logo}
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="logo"
        />
      </div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link to="/" href="aboutus">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/admin-aboutus">Add About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
