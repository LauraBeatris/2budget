import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { ExpenseListFilter } from "../../components/ExpenseListFilter/ExpenseListFilter";
import { filters, altFilters } from "../fixtures/filters";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters altData correctly", () => {
  // Changing the props
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle date focus change", () => {
  const calendarFocused = "endDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});

test("should handle text change", () => {
  const value = "Rent";
  wrapper.find("input").simulate("change", {
    target: {
      value
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith("Rent");
});

test("should sort by date", () => {
  const value = "date";
  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(4, "year");
  const endDate = moment(0).add(8, "year");

  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
