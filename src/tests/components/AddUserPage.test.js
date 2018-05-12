import React from "react";
import { shallow } from "enzyme";
import { newUser } from "../fixtures/users";
import { AddUserPage } from "../../components/AddUserPage";

test("should render AddUserPage correctly", () => {
  const handleSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddUserPage handleSubmit={handleSubmitSpy} history={history} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("should click button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddUserPage history={history} />);
  wrapper.find("button").simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/");
});
