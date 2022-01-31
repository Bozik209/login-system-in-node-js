const express = require("express");
const router = express.Router();
const User = require("../mongoDB/user.js"); // import the Mongoose library

//register handle
router.get("/register", (req, res) => {
  res.render("register");
});

/// Handling the POST request to the register directory: validation checks
router.post("/register", (req, res) => {
  console.log(req.body); //res.sendStatus(200);
  // Extract the values from the elements
  const { name, email, password, password2 } = req.body;
  // If any of the fields has not been filled
  let errors = [];
  console.log(" Name " + name + " email :" + email + " pass:" + password);
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }
  // check if match - If the passwords don’t match
  if (password !== password2) {
    errors.push({ msg: "passwords dont match" });
  }
  //check if password is more than 6 characters
  if (password.length < 6) {
    errors.push({ msg: "password atleast 6 characters" });
  }
  // if is any error send the appropriate data along with the errors array
  if (errors.length > 0) {
    res.render("register", {
      errors: errors,
      name: name,
      email: email,
      password: password,
      password2: password2,
    });
  } else {
    // successfully validation passed
    User.findOne({ email: email }).exec((err, user) => {
      console.log(user);
      if (user) {
        errors.push({ msg: "email already registered" });
        render(res, errors, name, email, password, password2);
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password,
        });
      }
    });
  }
});

module.exports = router;
