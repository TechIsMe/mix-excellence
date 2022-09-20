import React, { useState, useEffect } from "react";
import GlobalStyles from "../components/aboutus/GlobalStyle";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1275);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1275);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <GlobalStyles />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
