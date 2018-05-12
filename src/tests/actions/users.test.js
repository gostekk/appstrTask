import { addUser, editUser, removeUser } from "../../actions/users";
import { newUser } from "../fixtures/users";

test("should setup remove user action object", () => {
  const action = removeUser({ id: "123" });

  expect(action).toEqual({
    type: "REMOVE_USER",
    id: "123"
  });
});

test("should setup edit user action object", () => {
  const action = editUser("123", { name: "newName" });

  expect(action).toEqual({
    type: "EDIT_USER",
    id: "123",
    updates: {
      name: "newName"
    }
  });
});

test("should setup add user action object with provided value", () => {
  const action = addUser(newUser);

  expect(action).toEqual({
    type: "ADD_USER",
    user: newUser
  });
});

test("should setup add user action object with provided value", () => {
  const action = addUser(newUser);

  expect(action).toEqual({
    type: "ADD_USER",
    user: newUser
  });
});
