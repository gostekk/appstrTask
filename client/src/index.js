import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

import App from "./routes/App";
import { fetchUsers } from "./actions/users";

const store = configureStore();

store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();