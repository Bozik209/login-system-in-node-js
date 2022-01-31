const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose"); // Using Node.js `require()`
const expressEjsLayout = require("express-ejs-layouts");

const hostname = "127.0.0.1";
const port = 3000;

/////////////////
// mongoose
/////////////////
// getting-started.js - define a connection
mongoose
  .connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

/////////////////
//EJS
/////////////////
app.set("view engine", "ejs");
app.use(expressEjsLayout);

/////////////////
//BodyParser
/////////////////
app.use(express.urlencoded({ extended: false }));
// direct styles folder (css folder)
app.use(express.static("styles"));
app.use(express.static("views"));
app.use(express.static("routes"));
// app.use('/styles', express.static('styles'))

/////////////////
// Routes
/////////////////
app.use("/", require("./routes/index"));
app.use("/register", require("./routes/register"));

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


