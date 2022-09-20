import React, { useState, useEffect } from "react";
import GlobalStyles from "../components/aboutus/GlobalStyle";
import Navigation from "../components/navbar/Navigation";
import MainNavigation from "../layout/MainNavigation";
import classes from "./Layout.module.css";
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
      {isDesktop && <MainNavigation />}
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
