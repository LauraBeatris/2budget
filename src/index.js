import React from "react";
import ReactDOM from "react-dom";
import "./Styles/styles.scss";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

const store = configureStore();

// Adding expenses
store.dispatch(
  addExpense({
    description: "Water bill",
    note: "Some bill",
    amount: 320
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "Some bill",

    amount: 420
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    note: "Some bill",
    createdAt: 1000,
    amount: 12000
  })
);

// Providing the store to all components of our app
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
