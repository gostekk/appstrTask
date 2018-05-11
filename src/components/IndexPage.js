import React from "react";

import UsersList from "./UsersList";

const IndexPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="display-4 text-center">Users</h1>
        <p className="lead text-center">info</p>
        <UsersList />
      </div>
    </div>
  </div>
);

export default IndexPage;
