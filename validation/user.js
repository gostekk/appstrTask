const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateUserInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.website = !isEmpty(data.website) ? data.website : "";

  // Name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  // Username
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  // Email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Phone
  if (data.phone && !Validator.isMobilePhone(data.phone, "any")) {
    errors.phone = "Phone is invalid";
  }

  // Website
  if (data.website && !Validator.isURL(data.website)) {
    errors.website = "Website url is invalid"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
