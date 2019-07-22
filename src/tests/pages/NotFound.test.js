import { shallow } from "enzyme";
import React from "react";
import NotFound from "../../pages/NotFound/NotFound";

test("should render NotFound correctly", () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
