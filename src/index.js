import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./app/";
import { GlobalStyle } from "./global.styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppContainer />
  </React.StrictMode>
);
