import { connect } from 'react-redux';
import * as usersActions from '../actions/users';
import EditUser from '../components/EditUser';

const mapStateToProps = (state,ownProps) => {
  return {
    user: state.users.users.find(user => user._id.toString() === ownProps.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (userId, updates) => dispatch(usersActions.editUser(userId, updates)),
    removeUser: (userId) => dispatch(usersActions.removeUser(userId)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUser);