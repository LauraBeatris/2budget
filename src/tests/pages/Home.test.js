import React from "react";
import { Home } from "../../pages/Home/Home";
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />);
});

test("should render homepage correctly", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin at button click", () => {
  const google_auth = jest.fn();
  const wrapper = shallow(<Home google_auth={google_auth} />);
  wrapper.find("#google-auth").simulate("click");

  expect(google_auth).toHaveBeenCalled();
});
