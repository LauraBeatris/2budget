import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  // Before the changes
  expect(wrapper).toMatchSnapshot();

  // Finding the form and simulating the submit event
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });

  // Checking if the error state changed
  expect(wrapper.state("error").length).toBeGreaterThan(0);

  // Making sure that the error always render correctly
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "Some fun description";
  // Matching the first input
  // Simulating the change event
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });

  // Checking if the state changed
  expect(wrapper.state("description")).toBe(value);
});

// should set note on textarea change

test("should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "Fun note";

  // Matching the element and simulating the change event
  wrapper.find("textarea").simulate("change", {
    target: {
      value
    }
  });

  // Checking if the state changed
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "23.50";

  // Matching the element and simulating the change event
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: {
        value
      }
    });

  // Checking if the state changed
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid input", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "20.202";

  // Matching the element and simulating the change event
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: {
        value
      }
    });

  // Checking if the state changed
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  // Creating a new spy -> jest.fn() -> and storing on a variable
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]} />
  );

  // Simulating the form submission
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  // Checking if the error state was cleared
  expect(wrapper.state("error")).toBe("");

  // Checking if the spy was called with the specific args
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt.valueOf()
  });
});

test("should set new date on date changes", () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();

  // Matching the element
  // Accessing props to get the handler and calling it with a moment instance
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);

  // Checking the state
  expect(wrapper.state("createdAt")).toBe(now);
});

test("should set calendar focus on change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;

  // Matching the element
  // Accessing props to get the handler and calling it with a focused object
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });

  // Checking the state
  expect(wrapper.state("calendarFocused")).toBe(focused);
});
