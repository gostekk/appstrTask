import usersReducer, { usersDefaultState } from "../../reducers/users";
import { users, newUser, error, fullState } from "../fixtures/users";

// DEFAULT
test("should set default state", () => {
  const state = usersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(usersDefaultState);
});

// FETCH_USERS_REQUEST
test("should initialize fetchUsersRequest", () => {
  const action = {
    type: "FETCH_USERS_REQUEST"
  };

  const state = usersReducer(fullState, action);

  expect(state).toEqual({ 
    users: [...users],
    isFetching: true,
    error: null
  });
});

// FETCH_USERS_SUCCESS
test("should fetchUsersSuccess", () => {
  const action = {
    type: "FETCH_USERS_SUCCESS",
    users: users
  };

  const state = usersReducer(undefined, action);

  expect(state).toEqual({ 
    users: [...users],
    isFetching: false,
    error: null
  });
});

// FETCH_USERS_FAILED
test("should fetchUsersFailed", () => {
  const action = {
    type: "FETCH_USERS_FAILED",
    error
  };

  const state = usersReducer(undefined, action);

  expect(state).toEqual({ 
    users: [],
    isFetching: false,
    error: error
  });
});

// ADD_NEW_USER_REQUEST
test("should initialize addNewUserRequest", () => {
  const action = {
    type: "ADD_NEW_USER_REQUEST"
  };

  const state = usersReducer(undefined, action);

  expect(state).toEqual({ 
    users: [],
    isFetching: true,
    error: null
  });
});

// ADD_NEW_USER_SUCCESS
test("should addNewUserSuccess", () => {
  const action = {
    type: "ADD_NEW_USER_SUCCESS",
    user: newUser
  };

  const state = usersReducer(undefined, action);

  expect(state).toEqual({ 
    users: [newUser],
    isFetching: false,
    error: null
  });
});

// ADD_NEW_USER_FAILED
test("should addNewUserFailed", () => {
  const action = {
    type: "ADD_NEW_USER_FAILED",
    error
  };

  const state = usersReducer(usersDefaultState, action);

  expect(state).toEqual({ 
    users: [],
    isFetching: false,
    error: error
  });
});

// EDIT_USER_REQUEST
test("should initialize editUserRequest", () => {
  const action = {
    type: "EDIT_USER_REQUEST"
  };

  const state = usersReducer(undefined, action);

  expect(state).toEqual({ 
    users: [],
    isFetching: true,
    error: null
  });
});

// EDIT_USER_SUCCESS
test("should editUserSuccess", () => {
  const action = {
    type: "EDIT_USER_SUCCESS",
    user: newUser
  };

  const state = usersReducer({...fullState, isFetching: true}, action);

  expect(state).toEqual({ 
    users: [...users],
    isFetching: false,
    error: null
  });
});

// EDIT_USER_FAILED
test("should editUserFailed", () => {
  const action = {
    type: "EDIT_USER_FAILED",
    error
  };

  const state = usersReducer({...fullState, isFetching: true}, action);

  expect(state).toEqual({ 
    users: [...users],
    isFetching: false,
    error: error
  });
});

// REMOVE_USER_REQUEST
test("should initialize editUserRequest", () => {
  const action = {
    type: "REMOVE_USER_REQUEST"
  };

  const state = usersReducer(fullState, action);

  expect(state).toEqual({ 
    users: [...users],
    isFetching: true,
    error: null
  });
});

// REMOVE_USER_SUCCESS
test("should editUserSuccess", () => {
  const action = {
    type: "REMOVE_USER_SUCCESS",
    _id: users[1]._id
  };

  const state = usersReducer({...fullState, isFetching: true}, action);

  expect(state).toEqual({ 
    users: [users[0], users[2]],
    isFetching: false,
    error: null
  });
});

// REMOVE_USER_FAILED
test("should editUserFailed", () => {
  const action = {
    type: "REMOVE_USER_FAILED",
    error
  };

  const state = usersReducer({...fullState, isFetching: true}, action);

  expect(state).toEqual({ 
    users: [...users],
    isFetching: false,
    error: error
  });
});
