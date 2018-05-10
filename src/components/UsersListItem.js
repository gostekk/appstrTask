import React from "react";
import { Link } from "react-router-dom";

const UsersListItem = ({ id, name, username, email }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>
        {username} - {email}
      </p>
    </div>
  );
};

export default UsersListItem;
