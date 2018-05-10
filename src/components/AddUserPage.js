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
      <div>
        <button onClick={() => this.props.history.push("/")}>Back</button>
        <UserForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect()(AddUserPage);
