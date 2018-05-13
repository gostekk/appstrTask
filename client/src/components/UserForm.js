import React from "react";
import { Field, reduxForm } from "redux-form";
import classnames from 'classnames';

const renderField = ({ input, label, type, name, className, meta: {touched, error}}) => (
  <div className="form-group col-md-12 col-lg-6">
    <label
      className="col-md-12 col-form-label form-control-label"
      htmlFor={name}
    >
      {label}
          </label>
    <div className="col-md-12">
      <input {...input} className={classnames("form-control form-control-lg", {
            "is-invalid": error && touched
          })} placeholder={label} type={type} />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  </div>
);

export let UserForm = props => {
  const { handleSubmit, submitting, invalid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <Field
          className="form-control form-control-lg"
          name="name"
          component={renderField}
          label="Name"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="username"
          component={renderField}
          label="Username"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="email"
          component={renderField}
          label="Email"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="phone"
          component={renderField}
          label="Phone"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="website"
          component={renderField}
          label="Website"
          type="text"
        />

      </div>
      <div className="row">
        <label className="col-lg-12">Address</label>

        <Field
          className="form-control form-control-lg"
          name="address.street"
          component={renderField}
          label="Street"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="address.suite"
          component={renderField}
          label="Suite"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="address.city"
          component={renderField}
          label="City"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="address.zipcode"
          component={renderField}
          label="Zipcode"
          type="text"
        />
      </div>

      <div className="row">
          <label className="col-lg-12">Geolocation</label>

          <Field
            className="form-control form-control-lg"
            name="address.geo.lat"
            component={renderField}
            label="lat"
            type="text"
          />

          <Field
            className="form-control form-control-lg"
            name="address.geo.lng"
            component={renderField}
            label="lng"
            type="text"
          />
      </div>

      <div className="row">
        <label className="col-lg-12">Company</label>

        <Field
          className="form-control form-control-lg"
          name="company.name"
          component={renderField}
          label="Name"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="company.catchPhrase"
          component={renderField}
          label="catchPhrase"
          type="text"
        />

        <Field
          className="form-control form-control-lg"
          name="company.bs"
          component={renderField}
          label="bs"
          type="text"
        />

      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label" />
        <div className="col-lg-9">
          <button
            className={classnames("btn btn-lg float-right", {
              "btn-success": (!submitting || !invalid),
              "btn-danger": (submitting || invalid)
            })}
            disabled={submitting || invalid}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

UserForm = reduxForm({
  form: "userForm"
})(UserForm);

export default UserForm;
