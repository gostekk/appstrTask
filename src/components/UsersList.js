import React from "react";
import { connect } from "react-redux";
import UsersListItem from "./UsersListItem";

const UsersList = props => {
  return (
    <div>
      <h1>Users List</h1>
      {props.users.map(user => {
        return <UsersListItem key={user.id} {...user} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(UsersList);
