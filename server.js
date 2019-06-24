const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const images = require("./routes/api/images");
const users = require("./routes/api/users");

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected!")
  })
  .catch(err => {
    console.log(err)
  });

app.use("/api/images", images);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
