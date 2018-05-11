import React from "react";
import { connect } from "react-redux";

import { addUser } from "../actions/users";

import UserForm from "./UserForm";

class AddUserPage extends React.Component {
  submit = values => {
    const user = { ...values };

    fetch("http://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ ...user })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.dispatch(addUser({ ...data, ...user }));
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="card card-outline-secondary">
          <div className="card-header">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="mb-0">User Information</h3>
              </div>
              <div className="col-lg-6">
                <button
                  className="btn btn-secondary btn-lg float-right"
                  onClick={() => this.props.history.push("/")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <UserForm onSubmit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddUserPage);
