import * as usersActions from "../../actions/users";
import { users, newUser } from "../fixtures/users";

// FETCH_USERS

// FETCH_USERS_REQUEST
test("should setup fetchUserRequest action", () => {
  const action = usersActions.fetchUserRequest();

  expect(action).toEqual({
    type: "FETCH_USERS_REQUEST",
  });
});

// FETCH_USERS_SUCCESS
test("should setup fetchUserSuccess action with provided value", () => {
  const action = usersActions.fetchUserSuccess(users);

  expect(action).toEqual({
    type: "FETCH_USERS_SUCCESS",
    users: users
  });
});

// FETCH_USERS_FAILED
test("should setup fetchUserFailed action with provided value", () => {
  const error = { name: "Name is required" }
  const action = usersActions.fetchUserFailed(error);

  expect(action).toEqual({
    type: "FETCH_USERS_FAILED",
    error: error
  });
});

// ADD_NEW_USER

// ADD_NEW_USER_REQUEST
test("should setup addNewUserRequest action", () => {
  const action = usersActions.addNewUserRequest();

  expect(action).toEqual({
    type: "ADD_NEW_USER_REQUEST",
  });
});

// ADD_NEW_USER_SUCCESS
test("should setup addNewUserSuccess action with provided value", () => {
  const action = usersActions.addNewUserSuccess(newUser);

  expect(action).toEqual({
    type: "ADD_NEW_USER_SUCCESS",
    user: newUser
  });
});

// ADD_NEW_USER_FAILED
test("should setup addNewUserFailed action with provided value", () => {
  const error = { name: "Name is required" }
  const action = usersActions.addNewUserFailed(error);

  expect(action).toEqual({
    type: "ADD_NEW_USER_FAILED",
    error: error
  });
});

// EDIT_USER

// EDIT_USER_REQUEST
test("should setup editUserRequest action", () => {
  const action = usersActions.editUserRequest();

  expect(action).toEqual({
    type: "EDIT_USER_REQUEST",
  });
});

// EDIT_USER_SUCCESS
test("should setup editUserSuccess action with provided value", () => {
  const action = usersActions.editUserSuccess(newUser);

  expect(action).toEqual({
    type: "EDIT_USER_SUCCESS",
    user: newUser
  });
});

// EDIT_USER_FAILED
test("should setup editUserFailed action with provided value", () => {
  const error = { name: "Name is required" }
  const action = usersActions.editUserFailed(error);

  expect(action).toEqual({
    type: "EDIT_USER_FAILED",
    error: error
  });
});

// REMOVE_USER

// REMOVE_USER_REQUEST
test("should setup removeUserRequest action", () => {
  const action = usersActions.removeUserRequest();

  expect(action).toEqual({
    type: "REMOVE_USER_REQUEST",
  });
});

// REMOVE_USER_SUCCESS
test("should setup removeUserSuccess action with provided value", () => {
  const action = usersActions.removeUserSuccess(newUser._id);

  expect(action).toEqual({
    type: "REMOVE_USER_SUCCESS",
    id: newUser._id
  });
});
// REMOVE_USER_FAILED
test("should setup removeUserFailed action with provided value", () => {
  const error = { name: "Name is required" }
  const action = usersActions.removeUserFailed(error);

  expect(action).toEqual({
    type: "REMOVE_USER_FAILED",
    error: error
  });
});
