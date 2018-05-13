import React from "react";
import { SubmissionError } from 'redux-form';

import UserForm from "./UserForm";

export class EditUser extends React.Component {
  submit = values => {
    const user = { ...values };

    return this.props.editUser(user._id, { ...user })
      .then((res) => {
        this.props.history.push("/");
      }).catch(error => {
        throw new SubmissionError(error);
      });
  };

  removeButton() {
    return this.props.removeUser({ _id: this.props.user._id })
      .then(() => {
        this.props.history.push("/");
      }).catch(error => {
        console.log(error);
      });
  }

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
                  onClick={this.removeButton.bind(this)}
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

export default EditUser;
