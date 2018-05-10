import React from "react";
import { Field, reduxForm } from "redux-form";

let UserForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <Field name="website" component="input" type="text" />
        </div>
      </div>
      <div>
        <label>Address</label>
        <div>
          <label htmlFor="street">Street</label>
          <Field name="address.street" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="suite">Suite</label>
          <Field name="address.suite" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <Field name="address.city" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <Field name="address.zipcode" component="input" type="text" />
        </div>
        <div>
          <label>Geolocation</label>

          <div>
            <label htmlFor="lat">Lat</label>
            <Field name="address.geo.lat" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lng">Lng</label>
            <Field name="address.geo.lng" component="input" type="text" />
          </div>
        </div>
      </div>
      <div>
        <label>Company</label>
        <div>
          <label htmlFor="nameCompany">Name</label>
          <Field name="company.name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="catchPhrase">CatchPhrase</label>
          <Field name="company.catchPhrase" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="bs">BS</label>
          <Field name="company.bs" component="input" type="text" />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

UserForm = reduxForm({
  form: "userForm"
})(UserForm);

export default UserForm;
