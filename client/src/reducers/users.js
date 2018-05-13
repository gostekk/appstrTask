// Users Reducer

export const usersDefaultState = {
  users: [],
  isFetching: false,
  error: null
};

const usersReducer = (state = usersDefaultState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        users: state.users,
        isFetching: true,
        error: null
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.users,
        isFetching: false,
        error: null
      };
    case "FETCH_USERS_FAILED":
      return {
        ...state,
        users: [],
        isFetching: false,
        error: action.error
      };
    case "ADD_NEW_USER_REQUEST":
      return {
        ...state,
        users: state.users,
        isFetching: true,
        error: null
      };
    case "ADD_NEW_USER_SUCCESS":
      return {
        ...state,
        users: [...state.users, action.user],
        isFetching: false,
        error: null
      };
    case "ADD_NEW_USER_FAILED":
      return {
        ...state,
        users: state.users,
        isFetching: false,
        error: action.error
      };
    case "EDIT_USER_REQUEST":
      return {
        ...state,
        users: state.users,
        isFetching: true,
        error: null
      };
    case "EDIT_USER_SUCCESS":
      const updatedUsers = state.users.map(user => {
        if (user._id === action.user._id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        }
      })
      return {
        ...state,
        users: updatedUsers,
        isFetching: false,
        error: null
      };
    case "EDIT_USER_FAILED":
      return {
        ...state,
        users: state.users,
        isFetching: false,
        error: action.error
      };
    case "REMOVE_USER_REQUEST":
      return {
        ...state,
        users: state.users,
        isFetching: true,
        error: null
      };
    case "REMOVE_USER_SUCCESS":
      const filteredUsers = state.users.filter(({ _id }) => _id !== action._id)
      return {
        ...state,
        users: filteredUsers,
        isFetching: false,
        error: null
      };
    case "REMOVE_USER_FAILED":
      return {
        ...state,
        users: state.users,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default usersReducer;
