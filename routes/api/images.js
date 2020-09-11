const express = require("express");
const router = express.Router();
const axios = require("axios");

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
  Image.findOne({ photoId: photo.id })
    .then((image, err) => {
      if (image) {
        //console.log(image);
      } else {
        const newImage = new Image({
          url,
          photoId: photo.id,
          title: photo.title,
          description: res.data.photo.description._content,
          tags: res.data.photo.tags,
          flickrUrl: res.data.photo.urls.url[0]._content,
        });

        newImage
          .save()
          .then((image) => {
            console.log(`Inserting image w/ id: ${photo.id}`);
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
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
  // Use deleteKey to delete all images from the collection
  if (request.body.deleteKey == process.env.DELETE_KEY) {
    Image.deleteMany({})
      .then(() => {
        console.log("All Images Removed!");
        response.json({ success: "true" });
      })
      .catch((err) => {
        console.log(err);
        response.json({ success: "false" });
      });
  } else {
    const id = request.body.id;
    Image.findById(id)
      .then((image) => {
        image.remove().then(() => response.json(image));
      })
      .catch((err) => response.status(404).json({ success: false }));
  }
});

const collectImagesFromFlickr = () => {
  axios
    .get(
      "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos",
      {
        params: {
          api_key: process.env.REACT_APP_FLICKR_KEY,
          photoset_id: "72157709321735101",
          user_id: "146427448@N05",
          format: "json",
          nojsoncallback: 1,
        },
      }
    )
    .then((res) => {
      res.data.photoset.photo.forEach((photo) => {
        axios
          .get(
            "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo",
            {
              params: {
                api_key: process.env.REACT_APP_FLICKR_KEY,
                photo_id: photo.id,
                format: "json",
                nojsoncallback: 1,
              },
            }
          )
          .then((res) => {
            let tags = [];
            const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            res.data.photo.tags.tag.forEach((tag) => tags.push(tag.raw));

            Image.findOne({ photoId: photo.id }).then((image, err) => {
              if (image) {
                //console.log(image);
              } else {
                const newImage = new Image({
                  url,
                  photoId: photo.id,
                  title: photo.title,
                  description: res.data.photo.description._content,
                  tags: tags,
                  flickrUrl: res.data.photo.urls.url[0]._content,
                });

                newImage
                  .save()
                  .then((image) => {})
                  .catch((err) => console.log(err));
              }
            });
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
};

// Collect images each 10 minutes
setInterval(() => {
  collectImagesFromFlickr();
}, 1000 * 60 * 10);

module.exports = router;
