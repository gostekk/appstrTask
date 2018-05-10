// ADD_USER
export const addUser = (user = {}) => ({
  type: "ADD_USER",
  user
});

// REMOVE_USER
export const removeUser = ({ id } = {}) => ({
  type: "REMOVE_USER",
  id
});

// EDIT_USER
export const editUser = (id, updates) => ({
  type: "EDIT_USER",
  id,
  updates
});
