import React from "react";
import ReactDOM from "react-dom";
import "./firebase/firebase";
import "react-dates/lib/css/_datepicker.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

import { startSetExpenses } from "./actions/expenses";

const store = configureStore();

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
} else if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
}

// Providing the store to all components of our app
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p> Loading... </p>, document.getElementById("root"));

// When the expenses were already dispatched
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(app, document.getElementById("root"));
});
