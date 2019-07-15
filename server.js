const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

const images = require("./routes/api/images");

app.use(bodyParser.json());

const db = process.env.REACT_APP_MONGO_URI || require("./config/keys").mongoURI;
console.log(db);

mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected!")
  })
  .catch(err => {
    console.log(err)
  });

app.use("/api/images", images);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	})
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
