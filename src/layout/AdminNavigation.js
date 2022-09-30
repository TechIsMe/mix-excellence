import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./AdminNavigation.module.css";
import AuthContext from "../store/auth-context";

const AdminNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  // const navigate = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    // can useHistory to redirect too
  };
  return (
    <header className={classes.adminHeader}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {/* {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )} */}
          {isLoggedIn && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/admin-aboutus">Add About Us</Link>
              </li>
              <li>
                <Link to="admin-mixologist-form">Add Mixologist</Link>
              </li>
            </ul>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default AdminNavigation;
