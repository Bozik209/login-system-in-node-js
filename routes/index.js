const express = require("express");
const router = express.Router();
const User = require("../mongoDB/user.js"); // import the Mongoose library

//login handle
router.get("/", (req, res) => {
  res.render("login");
});
// router.get("/", (req, res) => {
//   const button = document.querySelector(".submit-input-register");
//   console.log(button);
//   button.addEventListener("click", () => {
//     console.log("gg");
//   });
// });

module.exports = router;
