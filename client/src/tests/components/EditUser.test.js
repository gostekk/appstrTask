import React from "react";
import { shallow } from "enzyme";
import { users, newUser } from "../fixtures/users";
import { EditUser } from "../../components/EditUser";

test("should render EditUser correctly", () => {
  const wrapper = shallow(<EditUser />);

  expect(wrapper).toMatchSnapshot();
});

test("should click back button and change route", () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<EditUser history={history} user={newUser} />);
  wrapper
    .find("button")
    .at(0)
    .prop("onClick")();

  expect(history.push).toHaveBeenLastCalledWith("/");
});

// test("should click remove button");
// test("should click remove button", () => {
//   const history = { push: jest.fn() };
//   const removeUserReq = jest.fn();
//   const wrapper = shallow(
//     <EditUser history={history} user={newUser} removeUserReq={removeUserReq} />
//   );
//   wrapper
//     .find("button")
//     .at(1)
//     .prop("onClick")();

//   expect(removeUserReq).toHaveBeenCalled();
//   expect(history.push).toHaveBeenLastCalledWith("/");
// });
