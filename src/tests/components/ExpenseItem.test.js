import React from "react";
import { shallow } from "enzyme";
import { ExpenseItem } from "../../components/ExpenseItem/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseItem with the expense data", () => {
  const wrapper = shallow(<ExpenseItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
