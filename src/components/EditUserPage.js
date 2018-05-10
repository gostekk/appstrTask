import React from "react";
import { connect } from "react-redux";

import { editUser, removeUser } from "../actions/users";

import UserForm from "./UserForm";

class EditUserPage extends React.Component {
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
      <div>
        <button onClick={() => this.props.history.push("/")}>Back</button>
        <button
          onClick={() => {
            this.props.dispatch(removeUser({ id: this.props.user.id }));
            this.props.history.push("/");
          }}
        >
          Remove
        </button>
        <UserForm onSubmit={this.submit} initialValues={this.props.user} />
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
