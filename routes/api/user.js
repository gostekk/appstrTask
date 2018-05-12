const express = require("express");
const router = express.Router();

// Load Input Validation
const validateUserInput = require("../../validation/user");

// Load User model
const User = require("../../models/User");

///////////////////////////////////////
/////            GET              ////
/////////////////////////////////////

// @route   GET api/user/all
// @desc    Get all users
router.get("/all", (req, res) => {
  const errors = {};
  User.find()
    .then(user => {
      if (!user) {
        errors.nouser = "There are no users";
        return res.status(404).json(errors);
      }

      res.json(user);
    })
    .catch(err => res.status(404).json({ user: "There are no users" }));
});

// @route   GET api/user/:user_id
// @desc    Get user by ID
router.get("/:user_id", (req, res) => {
  const errors = {};
  User.findOne({ _id: req.params.user_id })
    .then(user => {
      if (!user) {
        errors.nouser = "There is no user for this ID";
        return res.status(404).json(errors);
      }

      res.json(user);
    })
    .catch(err =>
      res.status(404).json({ user: "There is no user for this ID" })
    );
});

///////////////////////////////////////
/////            POST             ////
/////////////////////////////////////

// @route   POST api/user
// @desc    Create user
router.post("/", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  // Get fields
  const userFields = {};
  // Name
  userFields.name = req.body.name;
  // Username
  userFields.username = req.body.username;
  // Email
  userFields.email = req.body.email;
  // Phone
  if (req.body.phone) 
    userFields.phone = req.body.phone;
  // Website
  if (req.body.website)
    userFields.website = req.body.website;
  // Address
  if (req.body.address) {
    // Address Street
    if (req.body.address.street)
      userFields.address.street = req.body.address.street;
    // Address Suite
    if (req.body.address.suite) 
      userFields.address.suite = req.body.address.suite;
    // Address City
    if (req.body.address.city) 
      userFields.address.city = req.body.address.city;
    // Address Zipcode
    if (req.body.address.zipcode)
      userFields.address.zipcode = req.body.address.zipcode;
    // Address Geo
    if (req.body.address.geo) {
      // Address Geo Lat
      if (req.body.address.geo.lat)
        userFields.address.geo.lat = req.body.address.geo.lat;
      // Address Geo Lng
      if (req.body.address.geo.lng)
        userFields.address.geo.lng = req.body.address.geo.lng;
    }
  }
  // Company
  if (req.body.company) {
    // Company Name
    if (req.body.company.name) 
    userFields.company.name = req.body.company.name;
    // Company CatchPhrase
    if (req.body.company.catchPhrase)
      userFields.company.catchPhrase = req.body.company.catchPhrase;
    // Company bs
    if (req.body.company.bs) 
    userFields.company.bs = req.body.company.bs;
  }
  // Create user
  new User(userFields).save().then(user => {
    res.json(user);
  });
});

// @route   POST api/user/:user_id
// @desc    Edit user
router.put("/:user_id", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  // Get fields
  const userFields = {};
  // Name
  userFields.name = req.body.name;
  // Username
  userFields.username = req.body.username;
  // Email
  userFields.email = req.body.email;
  // Phone
  if (req.body.phone) 
    userFields.phone = req.body.phone;
  // Website
  if (req.body.website)
    userFields.website = req.body.website;
  // Address
  if (req.body.address) {
    // Address Street
    if (req.body.address.street)
      userFields.address.street = req.body.address.street;
    // Address Suite
    if (req.body.address.suite) 
      userFields.address.suite = req.body.address.suite;
    // Address City
    if (req.body.address.city) 
      userFields.address.city = req.body.address.city;
    // Address Zipcode
    if (req.body.address.zipcode)
      userFields.address.zipcode = req.body.address.zipcode;
    // Address Geo
    if (req.body.address.geo) {
      // Address Geo Lat
      if (req.body.address.geo.lat)
        userFields.address.geo.lat = req.body.address.geo.lat;
      // Address Geo Lng
      if (req.body.address.geo.lng)
        userFields.address.geo.lng = req.body.address.geo.lng;
    }
  }
  // Company
  if (req.body.company) {
    // Company Name
    if (req.body.company.name) 
    userFields.company.name = req.body.company.name;
    // Company CatchPhrase
    if (req.body.company.catchPhrase)
      userFields.company.catchPhrase = req.body.company.catchPhrase;
    // Company bs
    if (req.body.company.bs) 
    userFields.company.bs = req.body.company.bs;
  }

  User.findOne({ _id: req.params.user_id }).then(user => {
    if (user) {
      // Update user
      User.findOneAndUpdate(
        { _id: req.params.user_id },
        { $set: userFields },
        { new: true }
      ).then(user => res.json(user));
    } else {
      res.status(404).json({ user: "There is no user for this ID" });
    }
  });
});

///////////////////////////////////////
/////          DELETE             ////
/////////////////////////////////////

// @route   DELETE api/user/:user_id
// @desc    Delete user
router.delete("/:user_id", (req, res) => {
  User.findOneAndRemove({ _id: req.params.user_id }).then(() => {
    res.json({ success: true });
  });
});

module.exports = router;
