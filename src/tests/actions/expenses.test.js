import { removeExpense, addExpense, editExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

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
  const expenseData = {
    description: "Some description",
    amount: 103,
    createdAt: 1000,
    note: "This was last month rent"
  };

  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});
