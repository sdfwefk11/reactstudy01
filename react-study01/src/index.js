import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const datkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={datkTheme}>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
