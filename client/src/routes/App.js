import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UsersList from "../containers/UsersList";
import AddUser from "../containers/AddUser";
import EditUser from "../containers/EditUser";
import NotFound from "../components/NotFound";

const App = () => (
  <Router>
    <div>
      <div className="container-fluid">
        <Switch>
          <Route path="/" component={UsersList} exact={true} />
          <Route path="/createUser" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
