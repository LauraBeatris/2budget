import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);

  // Expecting no changes
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "123456",
    description: "Macbook",
    note: "Very expense",
    amount: 10000,
    createdAt: moment()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    update: {
      note: "Very expensive"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe("Very expensive");
});

test("should not edit an expense if not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    update: {
      note: "Very expensive"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
