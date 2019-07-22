import { shallow } from "enzyme";
import React from "react";
import Dashboard from "../../pages/Dashboard/Dashboard";

test("should render Dashboard correctly", () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});
