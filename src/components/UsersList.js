import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import UsersListItem from "./UsersListItem";

const UsersList = props => {
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
          {props.users.map(user => {
            return <UsersListItem key={user.id} {...user} />;
          })}
        </thead>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(withRouter(UsersList));
