"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setImagesLoading = exports.getImages = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let flickrKey = process.env.REACT_APP_FLICKR_KEY || require("../config/keys").flickrKey;

const getImages = () => dispatch => {
  dispatch(setImagesLoading());
  let payload = [];

  _axios.default.get("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos", {
    params: {
      api_key: flickrKey,
      photoset_id: "72157709321735101",
      user_id: "146427448@N05",
      format: "json",
      nojsoncallback: 1
    }
  }).then(res => {
    res.data.photoset.photo.forEach(photo => {
      _axios.default.get("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo", {
        params: {
          api_key: flickrKey,
          photo_id: photo.id,
          format: "json",
          nojsoncallback: 1
        }
      }).then(res => {
        let tags = [];
        res.data.photo.tags.tag.forEach(tag => tags.push(tag.raw));
        payload.push({
          id: photo.id,
          url: "https://farm".concat(photo.farm, ".staticflickr.com/").concat(photo.server, "/").concat(photo.id, "_").concat(photo.secret, ".jpg"),
          title: photo.title,
          description: res.data.photo.description._content,
          tags,
          flickrUrl: res.data.photo.urls.url[0]._content
        });
        dispatch({
          type: _actions.GET_IMAGES,
          payload: payload
        });
      });
    });
  });
};

exports.getImages = getImages;

const setImagesLoading = () => {
  return {
    type: _actions.IMAGES_LOADING
  };
};

exports.setImagesLoading = setImagesLoading;