import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexPage from "../components/IndexPage";
import AddUserPage from "../components/AddUserPage";
import EditUserPage from "../components/EditUserPage";
import NotFoundPage from "../components/NotFoundPage";

const App = () => (
  <Router>
    <div>
      <div className="container-fluid">
        <Switch>
          <Route path="/" component={IndexPage} exact={true} />
          <Route path="/createUser" component={AddUserPage} />
          <Route path="/edit/:id" component={EditUserPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
