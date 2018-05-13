import React from "react";
import { withRouter } from "react-router-dom";

export const UsersListItem = ({ _id, name, username, email, history }) => (
  <tr key={_id}>
    <td>{name}</td>
    <td>{username}</td>
    <td>{email}</td>
    <td>
      <button
        onClick={() => history.push(`/edit/${_id}`)}
        className="btn btn-info btn-sm btn-block"
      >
        Edit
      </button>
    </td>
  </tr>
);

export default withRouter(UsersListItem);
