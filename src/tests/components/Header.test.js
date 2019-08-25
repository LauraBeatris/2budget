import React from "react";
import { shallow } from "enzyme";

import { Header } from "../../components/Header/Header";

test("should render Header correctly", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on navlink click", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);

  // Simulating click
  wrapper.find(".logout").simulate("click");

  expect(startLogout).toHaveBeenCalled();
});
