import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import GlobalStyles from "./GlobalStyle";
import AdminNavigation from "./AdminNavigation";
import classes from "./Layout.module.css";
const Layout = (props) => {
  // const [isDesktop, setDesktop] = useState(window.innerWidth > 1440);

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 1275);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // });
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <GlobalStyles />
      {isLoggedIn && <AdminNavigation />}
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
