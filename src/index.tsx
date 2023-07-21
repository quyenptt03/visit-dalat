import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <App />
      </SnackbarProvider>
    </Router>
  </Provider>
);
