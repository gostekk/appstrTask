import React from "react";
import { shallow } from "enzyme";
import { newUser } from "../fixtures/users";
import UserForm, { UserForm as UserFormLet, renderField } from "../../components/UserForm";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { reduxForm } from "redux-form";

test("should render UserForm correctly", () => {
  const wrapper = shallow(<UserForm />);

  expect(wrapper).toMatchSnapshot();
});

test("should render UserForm with newUser data", () => {
  const wrapper = shallow(<UserForm user={newUser} />);

  expect(wrapper).toMatchSnapshot();
});

test("should call handleSubmit prop for valid form submission", () => {
  const initialStateValues = { ...newUser };
  const store = createStore(state => state, initialStateValues);
  const handleSubmitSpy = jest.fn();
  const Decorated = reduxForm({
    form: "userForm"
  })(UserFormLet);

  const wrapper = shallow(
    <Provider store={store}>
      <Decorated handleSubmit={handleSubmitSpy} {...newUser} />
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});
