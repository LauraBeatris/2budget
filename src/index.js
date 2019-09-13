import React from "react";
import ReactDOM from "react-dom";
import "./firebase/firebase";
import "react-dates/lib/css/_datepicker.css";
import ClipLoader from "react-spinners/ClipLoader";
import { Provider } from "react-redux";
import { Loading } from "./styles/loading";
import { firebase } from "./firebase/firebase";
import { history } from "./routers/AppRouter";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

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

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(
  <Loading>
    <ClipLoader sizeUnit={"px"} size={100} color={"#6dbfcc"} loading={true} />
  </Loading>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged(user => {
  // Redirecting the user and fetching data
  if (user) {
    // Log in
    console.log("login");
    // Sending the id of the user to the authReducer
    store.dispatch(login(user.uid));

    // Fetching expenses and rendering the app
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });

    // Redirecting
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    // Log out
    console.log("logout");
    store.dispatch(logout());

    renderApp();
    history.push("/");
  }
});
