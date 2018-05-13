import axios from "axios";

// FETCH_USERS
export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUserRequest());
    return axios
      .get("/api/user/all")
      .then(response => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserFailed(error.response.data));
        throw error.response.data;
      });
  };
};

// FETCH_USERS_REQUEST
export const fetchUserRequest = () => ({
  type: "FETCH_USERS_REQUEST"
});

// FETCH_USERS_SUCCESS
export const fetchUserSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  users
});

// FETCH_USERS_FAILED
export const fetchUserFailed = (error) => ({
  type: "FETCH_USERS_FAILED",
  error
});

// ADD_NEW_USER
export const addNewUser = (user) => {
  return dispatch => {
    dispatch(addNewUserRequest())
    return axios
      .post("/api/user", { ...user })
      .then(response =>
        dispatch(addNewUserSuccess(response.data))
      )
      .catch(error => {
        dispatch(addNewUserFailed(error.response.data));
        throw error.response.data;
      });
  };
};

// ADD_NEW_USER_REQUEST
export const addNewUserRequest = () => ({
  type: "ADD_NEW_USER_REQUEST"
});

// ADD_NEW_USER_SUCCESS
export const addNewUserSuccess = (user) => ({
  type: "ADD_NEW_USER_SUCCESS",
  user
});

// ADD_NEW_USER_FAILED
export const addNewUserFailed = (error) => ({
  type: "ADD_NEW_USER_FAILED",
  error
});

// EDIT_USER
export const editUser = (userId, updates) => {
  return dispatch => {
    dispatch(editUserRequest)
    return axios
      .put(`/api/user/${userId}`, updates)
      .then(response =>
        dispatch(editUserSuccess(response.data))
      )
      .catch(error => {
        dispatch(editUserFailed(error.response.data));
        throw error.response.data;
      });
  };
};

// EDIT_USER_REQUEST
export const editUserRequest = () => ({
  type: "EDIT_USER_REQUEST"
});

// EDIT_USER_SUCCESS
export const editUserSuccess = (user) => ({
  type: "EDIT_USER_SUCCESS",
  user
});

// EDIT_USER_FAILED
export const editUserFailed = (error) => ({
  type: "EDIT_USER_FAILED",
  error
});

// REMOVE_USER
export const removeUser = ({ _id }) => {
  return dispatch => {
    dispatch(removeUserRequest());
    return axios
      .delete(`/api/user/${_id}`)
      .then(response =>
        dispatch(removeUserSuccess(response.data._id))
      )
      .catch(error => {
        dispatch(removeUserFailed(error.response.data));
        throw error.response.data;
      });
  };
};

// REMOVE_USER_REQUEST
export const removeUserRequest = () => ({
  type: "REMOVE_USER_REQUEST"
});

// REMOVE_USER_SUCCESS
export const removeUserSuccess = (id) => ({
  type: "REMOVE_USER_SUCCESS",
  id
});

// REMOVE_USER_FAILED
export const removeUserFailed = (error) => ({
  type: "REMOVE_USER_FAILED",
  error
});
