import React from "react";
import { Link } from "react-router-dom";

import UsersList from "./UsersList";

const IndexPage = () => (
  <div>
    <Link to="/createUser">New</Link>
    <UsersList />
  </div>
);

export default IndexPage;
