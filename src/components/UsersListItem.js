import React from "react";
import { withRouter } from "react-router-dom";

const UsersListItem = ({ id, name, username, email, history }) => {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          onClick={() => history.push(`/edit/${id}`)}
          className="btn btn-info btn-sm btn-block"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default withRouter(UsersListItem);
