import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Global } from "@emotion/react";

import { GlobalStyles } from "./styles/GlobalStyles";

import { App } from "./components/App";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Global styles={GlobalStyles} />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
