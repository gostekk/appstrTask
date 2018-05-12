import React from "react";
import { shallow } from "enzyme";
import { UsersList } from "../../components/UsersList";
import { users, newUser } from "../fixtures/users";

test("should render UsersList with users", () => {
  const wrapper = shallow(<UsersList users={users} />);

  expect(wrapper).toMatchSnapshot();
});

test("should render UsersList with message", () => {
  const wrapper = shallow(<UsersList users={[]} />);

  expect(wrapper).toMatchSnapshot();
});

test("should click button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<UsersList history={history} users={users} />);
  wrapper.find("button").simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/createUser");
});
