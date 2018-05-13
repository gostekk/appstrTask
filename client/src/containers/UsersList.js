import { connect } from 'react-redux';
import * as usersActions from '../actions/users';
import UsersList from '../components/UsersList';

export const mapStateToProps = (state,ownProps) => {
  return {
    users: state.users.users
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(usersActions.fetchUsers()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersList);