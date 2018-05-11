import React from "react";
import { Field, reduxForm } from "redux-form";

let UserForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="name"
          >
            Name
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="name"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="username"
          >
            Username
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="username"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="email"
          >
            Email
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="email"
              component="input"
              type="email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="phone"
          >
            Phone
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="phone"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="website"
          >
            Website
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="website"
              component="input"
              type="text"
            />
          </div>
        </div>
      </div>
      <div>
        <label>Address</label>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="street"
          >
            Street
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="address.street"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="suite"
          >
            Suite
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="address.suite"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="city"
          >
            City
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="address.city"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="zipcode"
          >
            Zipcode
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="address.zipcode"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div>
          <label>Geolocation</label>

          <div className="form-group row">
            <label
              className="col-lg-3 col-form-label form-control-label"
              htmlFor="lat"
            >
              Lat
            </label>
            <div className="col-lg-9">
              <Field
                className="form-control"
                name="address.geo.lat"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-lg-3 col-form-label form-control-label"
              htmlFor="lng"
            >
              Lng
            </label>
            <div className="col-lg-9">
              <Field
                className="form-control"
                name="address.geo.lng"
                component="input"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label>Company</label>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="nameCompany"
          >
            Name
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="company.name"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="catchPhrase"
          >
            CatchPhrase
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="company.catchPhrase"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            className="col-lg-3 col-form-label form-control-label"
            htmlFor="bs"
          >
            BS
          </label>
          <div className="col-lg-9">
            <Field
              className="form-control"
              name="company.bs"
              component="input"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-3 col-form-label form-control-label" />
        <div className="col-lg-9">
          <button
            className="btn btn-secondary btn-lg float-right"
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
