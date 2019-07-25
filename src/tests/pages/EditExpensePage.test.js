import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../pages/EditExpensePage/EditExpensePage";
import expenses from "../fixtures/expenses";

let wrapper, expense, history, editExpense, removeExpense;

beforeEach(() => {
  history = {
    push: jest.fn()
  };
  expense = expenses[0];
  removeExpense = jest.fn();
  editExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      history={history}
      expense={expense}
      removeExpense={removeExpense}
      editExpense={editExpense}
    />
  );
});

test("should render EditExpansePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/dashboard");
});

test("should handle removeExpense", () => {
  wrapper.find("#remove-button").simulate("click");
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/dashboard");
});
