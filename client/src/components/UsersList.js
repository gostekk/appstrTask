import React from "react";
import { withRouter } from "react-router-dom";

import UsersListItem from "./UsersListItem";

export class UsersList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return <div className="container">
      <div className="card bg-light mb-3">
        <div className="card-header">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Users</h1>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>
                    <button onClick={() => this.props.history.push("/createUser")} className="btn btn-success btn-sm btn-block">
                      Add
                             </button>
                  </th>
                </tr>
                {this.props.users.length ? this.props.users.map(
                  user => {
                    return (
                      <UsersListItem
                        key={user._id}
                        {...user}
                      />
                    );
                  }
                ) : <tr>
                    <td>No</td>
                    <td>data</td>
                    <td>added</td>
                    <td>yet!</td>
                  </tr>}
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>;
  }
};

export default withRouter(UsersList);
