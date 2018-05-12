const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  website: {
    type: String
  },
  address: {
    street: {
      type: String
    },
    suite: {
      type: String
    },
    city: {
      type: String
    },
    zipcode: {
      type: String
    },
    geo: {
      lat: {
        type: String
      },
      lng: {
        type: String
      }
    }
  },
  company: {
    name: {
      type: String
    },
    catchPhrase: {
      type: String
    },
    bs: {
      type: String
    }
  }
});

module.exports = User = mongoose.model("users", UserSchema);
