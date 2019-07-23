import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../pages/AddExpensePage/AddExpensePage";
import expenses from "../fixtures/expenses";

let onSubmit, history, wrapper;

// Jest lifecycle method -> will run this code before each test
beforeEach(() => {
  // Setting values to the test spies
  history = {
    push: jest.fn()
  };
  onSubmit = jest.fn();

  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  // Finding the element and calling the props with a expense
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);

  // Checking if they were called with the correctly data
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
});
