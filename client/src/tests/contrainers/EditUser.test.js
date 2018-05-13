import React from "react";
import { fullState, users } from '../fixtures/users';

import { mapStateToProps, mapDispatchToProps } from '../../containers/EditUser';

test("should call mapStateToProps with state", () => {
  const state = {users: fullState};
  const { user } = mapStateToProps(state, {match: {params: {id: users[1]._id.toString()}}});

  expect(user).toEqual(users[1]);
});

test('should call editUser', () => {
  const dispatchSpy = jest.fn();

  const { editUser } = mapDispatchToProps(dispatchSpy);
  editUser();

  expect(dispatchSpy).toBeCalled();
});
