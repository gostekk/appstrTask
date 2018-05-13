import { connect } from 'react-redux';
import { addNewUser } from '../actions/users';
import AddUser from '../components/AddUser';

export const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (user) => dispatch(addNewUser(user)),
  }
}

export default connect(undefined,mapDispatchToProps)(AddUser);