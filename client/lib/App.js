"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

require("bootstrap/dist/css/bootstrap.min.css");

require("./App.css");

var _Gallery = _interopRequireDefault(require("./components/Gallery"));

var _About = _interopRequireDefault(require("./components/About"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _imageActions = require("./actions/imageActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* TODO: Add loading page for when images aren't loaded/need to refresh
*  TODO: Add Carousel reactstrap component for slideshow on homepage
*  TODO: Pass more image info (orientation, etc.) in redux to better filter them
*  TODO: Implement fields for emailing me, add ContactPg
*  TODO: Connect Redux to Home Page to get images for slideshow */
class App extends _react.Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return dom(_reactRouterDom.BrowserRouter, null, dom("div", {
      className: "App"
    }, dom(_reactRouterDom.Switch, null, dom(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: Home
    }), dom(_reactRouterDom.Route, {
      path: "/gallery",
      component: _Gallery.default
    }), dom(_reactRouterDom.Route, {
      path: "/about",
      component: _About.default
    }))));
  }

}

const Home = () => dom("div", {
  className: "Home"
}, dom(_reactRouterDom.Link, {
  to: "/gallery",
  id: "enterLink"
}, "Enter"));

const mapStateToProps = state => {
  return {
    image: state.image
  };
};

App.propTypes = {
  getImages: _propTypes.default.func.isRequired,
  image: _propTypes.default.object.isRequired
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  getImages: _imageActions.getImages
})(App);

exports.default = _default;