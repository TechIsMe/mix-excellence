import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const AdminNav = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li>
            <Link to="/admin-aboutus">Add About Us</Link>
          </li>
          <li>
            <Link to="admin-mixologist-form">Add Mixologist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminNav;
