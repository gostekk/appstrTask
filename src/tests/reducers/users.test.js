import usersReducer from "../../reducers/users";
import { users, newUser } from "../fixtures/users";

test("should set default state", () => {
  const state = usersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("should remove user by id", () => {
  const action = {
    type: "REMOVE_USER",
    id: users[1].id
  };

  const state = usersReducer(users, action);

  expect(state).toEqual([users[0], users[2]]);
});

test("should not remove user if id not found", () => {
  const action = {
    type: "REMOVE_USER",
    id: "123"
  };

  const state = usersReducer(users, action);

  expect(state).toEqual(users);
});

test("should add new user", () => {
  const action = {
    type: "ADD_USER",
    user: newUser
  };

  const state = usersReducer(users, action);

  expect(state).toEqual([...users, newUser]);
});

test("should edit user", () => {
  const action = {
    type: "EDIT_USER",
    id: users[1].id,
    updates: {
      name: newUser.name
    }
  };

  const state = usersReducer(users, action);

  expect(state[1].name).toBe(newUser.name);
});

test("should not edit user if user doesn't exists", () => {
  const action = {
    type: "EDIT_USER",
    id: "123",
    updates: {
      name: newUser.name
    }
  };

  const state = usersReducer(users, action);

  expect(state).toEqual(users);
});
