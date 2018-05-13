import { connect } from 'react-redux';
import * as usersActions from '../actions/users';
import AddUser from '../components/AddUser';

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (user) => dispatch(usersActions.addNewUser(user)),
  }
}

export default connect(undefined,mapDispatchToProps)(AddUser);