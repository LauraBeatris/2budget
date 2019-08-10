import React from "react";
import ReactDOM from "react-dom";
import "./firebase/firebase";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

// Providing the store to all components of our app
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
