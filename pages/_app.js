import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import SnackbarController from "../components/snackbar";
import ShutdownNotice from "../components/shutdownNotice";

import stores from "../stores/index.js";

import { CONFIGURE } from "../stores/constants";

import "../styles/globals.css";

import lightTheme from "../theme/light";
import darkTheme from "../theme/dark";

function MyApp({ Component, pageProps }) {
  const [themeConfig, setThemeConfig] = useState(darkTheme);

  const changeTheme = (dark) => {
    setThemeConfig(dark ? lightTheme : darkTheme);
    localStorage.setItem("yearn.finance-dark-mode", dark ? "light" : "dark");
  };

  useEffect(function () {
    const localStorageDarkMode = window.localStorage.getItem(
      "yearn.finance-dark-mode"
    );
    changeTheme(localStorageDarkMode ? false : localStorageDarkMode === "dark");
  }, []);

  useEffect(function () {
    stores.dispatcher.dispatch({ type: CONFIGURE });
  }, []);

  const [shutdownNoticeOpen, setShutdownNoticeOpen] = useState(false);
  const closeShutdown = () => {
    setShutdownNoticeOpen(false);
  };

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Component {...pageProps} changeTheme={changeTheme} />
      <SnackbarController />
      {shutdownNoticeOpen && <ShutdownNotice close={closeShutdown} />}
    </ThemeProvider>
  );
}

export default MyApp;
