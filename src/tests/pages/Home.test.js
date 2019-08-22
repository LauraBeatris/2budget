import React from "react";
import Home from "../../pages/Home/Home";
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />);
});

test("should render homepage correctly", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
