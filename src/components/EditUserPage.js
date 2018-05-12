import React from "react";
import { connect } from "react-redux";

import { editUser, removeUser } from "../actions/users";

import UserForm from "./UserForm";

export class EditUserPage extends React.Component {
  submit = values => {
    const user = { ...values };

    fetch(
      `http://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(user)
      }
    )
      .then(response => response.json())
      .then(json => {
        this.props.dispatch(editUser(user.id, { ...json, ...user }));
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="mb-0">User Information</h3>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-secondary btn-lg float-right ml-1"
                  name="back"
                  onClick={() => this.props.history.push("/")}
                >
                  Back
                </button>
                <button
                  className="btn btn-danger btn-lg float-right"
                  name="remove"
                  onClick={() => {
                    this.props.dispatch(removeUser({ id: this.props.user.id }));
                    this.props.history.push("/");
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <UserForm onSubmit={this.submit} initialValues={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id.toString() === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditUserPage);
