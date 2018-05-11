import { addUser, editUser, removeUser } from "../../actions/users";

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
  const user = {
    id: "12",
    name: "user",
    username: "username",
    email: "test@email.com"
  };

  const action = addUser(user);

  expect(action).toEqual({
    type: "ADD_USER",
    user
  });
});
