import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import usersReducer from "../reducers/users";

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducer,
      form: formReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
