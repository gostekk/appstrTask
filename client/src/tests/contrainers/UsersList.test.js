import React from "react";
import { fullState, users } from '../fixtures/users';

import { mapStateToProps, mapDispatchToProps } from '../../containers/UsersList';

test("should call mapStateToProps with state", () => {
  const { users } = mapStateToProps(fullState);

  expect(users).toEqual(users);
});

test("should call mapDispatchToProps and then fetchUsers", () => {
  const dispatchSpy = jest.fn();

  const { fetchUsers } = mapDispatchToProps(dispatchSpy);
  fetchUsers();

  expect(dispatchSpy).toBeCalled();
});
