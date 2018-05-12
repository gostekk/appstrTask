import React from "react";
import { shallow } from "enzyme";
import { UsersListItem } from "../../components/UsersListItem";
import { newUser } from "../fixtures/users";

test("should render UsersListItem with user", () => {
  const wrapper = shallow(<UsersListItem {...newUser} />);

  expect(wrapper).toMatchSnapshot();
});

test("should click button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<UsersListItem history={history} {...newUser} />);
  wrapper.find("button").simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/edit/4");
});
