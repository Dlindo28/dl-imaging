const express = require("express");
const router = express.Router();

const Image = require("../../models/Image");

// @route GET /images
// @desc Get all images
router.get("/", (request, response) => {
  Image.find()
    .then((image) => {
      console.log("Getting images from API...");
      response.json(image);
    })
    .catch((err) => {
      console.log(err);
      response.status(400).send(err);
    });
});

// @route POST /images
// @desc Create new image from the requests' url parameter
router.post("/", (request, response) => {
  const newImage = new Image({
    url: request.body.url,
  });

  newImage.save().then((image) => {
    console.log(`Inserting image w/ url: ${request.body.url}`);
    response.json(image);
  });
});

// @route GET /images/:id
// @desc get single image by id
router.get("/:id", (request, response) => {
  Image.findById(request.params.id)
    .then((image) => {
      response.json(image);
    })
    .catch((err) => response.status(404).json({ success: false, error: err }));
});

// @route DELETE /images
// @desc delete image by id
router.delete("/", (request, response) => {
  const id = request.body.id;
  Image.findById(id)
    .then((image) => {
      image.remove().then(() => response.json(image));
    })
    .catch((err) => response.status(404).json({ success: false }));
});

module.exports = router;
