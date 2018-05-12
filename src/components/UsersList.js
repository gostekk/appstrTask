import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import UsersListItem from "./UsersListItem";

export const UsersList = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>
              <button
                onClick={() => props.history.push("/createUser")}
                className="btn btn-success btn-sm btn-block"
              >
                Add
              </button>
            </th>
          </tr>
          {props.users.length ? (
            props.users.map(user => {
              return <UsersListItem key={user.id} {...user} />;
            })
          ) : (
            <tr>
              <td>No</td>
              <td>data</td>
              <td>added</td>
              <td>yet!</td>
            </tr>
          )}
        </thead>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(withRouter(UsersList));
