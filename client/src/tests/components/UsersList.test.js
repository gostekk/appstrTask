import React from "react";
import { shallow } from "enzyme";
import { UsersList } from "../../components/UsersList";
import { users, newUser } from "../fixtures/users";

test("should render UsersList with users", () => {
  const fetchUsersSpy = jest.fn()
  const wrapper = shallow(<UsersList users={users} fetchUsers={fetchUsersSpy} />);

  expect(wrapper).toMatchSnapshot();
});

test("should render UsersList with message", () => {
  const wrapper = shallow(<UsersList users={[]} fetchUsers={jest.fn()} />);

  expect(wrapper).toMatchSnapshot();
});

test("should click button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<UsersList history={history} users={users} fetchUsers={jest.fn()} />);
  wrapper.find("button").simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/createUser");
});

test("should call fetchUsers function", () => {
  const fetchUsers = jest.fn();
  
  const wrapper = shallow(<UsersList users={users} fetchUsers={fetchUsers} />);

  expect(fetchUsers).toHaveBeenCalled();
});
