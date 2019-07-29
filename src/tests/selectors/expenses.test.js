import {getVisibleExpenses} from "../../selectors/expenses";
import {getExpenseTotal} from "../../selectors/expenses";

import moment from "moment";
import expenses from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    text: "c",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

// should filter by end date
test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };
  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

// should sort by date
test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// should sort by amount
test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test('should return 0 if no expenses', () => {
  const total = getExpenseTotal()

  expect(total).toBe(0)
})

test('should corrently add up a single expenses', () => {
  const total = getExpenseTotal(expenses[0].amount)

  expect(total).toBe(195)
})

test('should currently add up multiple expenses', () => {
  const total = getExpenseTotal(expenses)

  expect(total).toBe(34295)
})