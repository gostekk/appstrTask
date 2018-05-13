import React from "react";
import { shallow } from "enzyme";
import { newUser, fullState } from "../fixtures/users";
import AddUser from "../../components/AddUser";

test("should render AddUser correctly", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddUser history={history} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("should click button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddUser history={history} />);
  wrapper.find("button").simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/");
});