//////////////////////////////////////////////////////////
// ------ mongoose ------
// Models are defined through the Schema interface.
//////////////////////////////////////////////////////////

const mongoose = require("mongoose");
// Models are defined through the Schema interface.
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Once we define a model through mongoose.model('User', UserSchema), we can access it through the same function
const User = mongoose.model("User", UserSchema);

module.exports = User;
