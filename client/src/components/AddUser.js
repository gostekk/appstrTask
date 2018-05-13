import React from "react";
import { SubmissionError } from "redux-form";

import UserForm from "./UserForm";

class AddUser extends React.Component {
  submit = values => {
    const user = { ...values };

    return this.props.addNewUser(user)
      .then(() => {
        this.props.history.push("/");
      }).catch(error => {
        throw new SubmissionError(error);
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

export default AddUser;
