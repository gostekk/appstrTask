import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducer as formReducer } from "redux-form";
import usersReducer from "../reducers/users";

export default (initialState = {}) => {
  const enhancers = [
    applyMiddleware(thunk),
  ];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    combineReducers({
      users: usersReducer,
      form: formReducer
    }), initialState,
    compose(...enhancers)
  );

  return store;
};
