import React from "react";
import { shallow } from "enzyme";
import { users, newUser } from "../fixtures/users";
import { EditUserPage } from "../../components/EditUserPage";

test("should render EditUserPage correctly", () => {
  const wrapper = shallow(<EditUserPage />);

  expect(wrapper).toMatchSnapshot();
});

test("should click back button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<EditUserPage history={history} user={newUser} />);
  wrapper
    .find("button")
    .at(0)
    .prop("onClick")();

  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should click remove button", () => {
  const history = { push: jest.fn() };
  const dispatch = jest.fn();
  const wrapper = shallow(
    <EditUserPage history={history} user={newUser} dispatch={dispatch} />
  );
  wrapper
    .find("button")
    .at(1)
    .prop("onClick")();

  expect(dispatch).toHaveBeenCalled();
  expect(history.push).toHaveBeenLastCalledWith("/");
});
