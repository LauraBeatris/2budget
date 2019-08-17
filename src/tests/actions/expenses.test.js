import {
  addExpenseRequest,
  removeExpense,
  addExpense,
  editExpense
} from "../../actions/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expenses from "../fixtures/expenses";
import { create } from "istanbul-reports";

// Creating the configuration of the mock store for the tests cases create the
// same mock store everytime
// Passing an array with the middlewares that we'll gonna use
const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "abc123" });

  // toBe (===) and objects and arrays are not equal
  // {} === {} -> false
  // [] === [] -> false
  // So we have to use toEqual, that will se every item of a array or a object
  // When we're using objects or arrays we wanna use toEqual
  // When we're using booleans, numbers or strings, we wanna use toBe

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("abc123", { description: 123 });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    update: {
      description: 123
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore();
  const expenseData = {
    description: "Mouse",
    rent: "3000",
    note: "This one is better",
    createdAt: 1000
  };

  // Force Jest to wait -> done

  // We'll just make our associations when all the things will be ready
  // Promisse chaining
  store.dispatch(addExpenseRequest(expenseData)).then(() => {
    expect(1).toBe(2);
    done();
  });
});
