// Loads environment variables from .env
require("dotenv").config({ path: `${__dirname}/.env` });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const images = require("./routes/api/images");

app.use(bodyParser.json());

const db = process.env.REACT_APP_MONGO_URI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/server.html");
});

app.use("/api/images", images);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
