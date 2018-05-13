import React from "react";

import { mapDispatchToProps } from '../../containers/AddUser';

test('should call addNewUser', () => {
  const dispatchSpy = jest.fn();

  const { addNewUser } = mapDispatchToProps(dispatchSpy);
  addNewUser();

  expect(dispatchSpy).toBeCalled();
});
