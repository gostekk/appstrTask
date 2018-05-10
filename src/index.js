import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

import { addUser } from "./actions/users";

import App from "./routes/App";

const store = configureStore();

// Add users
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json =>
    json.map(user => {
      return store.dispatch(addUser({ ...user }));
    })
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
