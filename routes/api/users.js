const express = require("express");
const router = express.Router();

const User = require("../../models/User");

// @route GET api/users
// @desc Get all users
router.get("/", (request, response) => {
  User.find()
    .then(user => response.json(user))
})

// @route POST api/users
// @desc Create new user
router.post("/", (request, response) => {
  const newUser = new User({
    name: request.body.name,
    email: request.body.email
  });

  newUser.save()
    .then(user => response.json(user));
})

// @route DELETE api/users/:id
// @desc delete user by id
router.delete("/:id", (request, response) => {
  User.findById(request.params.id)
    .then(user => {
      user.remove()
        .then(() => response.json({success: true}))
    })
    .catch(err => response.status(404).json({success: false}));
})

module.exports = router;
