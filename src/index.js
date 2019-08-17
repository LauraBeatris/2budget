import React from "react";
import ReactDOM from "react-dom";
import "./firebase/firebase";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

if (process.env.NODE_ENV === "test") {
  // For default it looks for a .env file so we need to set up others with a
  // path
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

// Providing the store to all components of our app
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
