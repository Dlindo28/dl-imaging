const express = require("express");
const router = express.Router();

const Image = require("../../models/Image");

// @route GET api/images
// @desc Get all images
router.get("/", (request, response) => {
  Image.find()
    .then(image => response.json(image))
});

// @route POST api/images
// @desc Create new image
router.post("/", (request, response) => {
  const newImage = new Image({
    url: request.body.url,
  });

  newImage.save()
    .then(image => response.json(image));
});

// @route DELETE api/images/:id
// @desc delete image by id
router.delete("/:id", (request, response) => {
  Image.findById(request.params.id)
    .then(image => {
      image.remove()
        .then(() => response.json({success: true}))
    })
    .catch(err => response.status(404).json({success: false}));
});

module.exports = router;
