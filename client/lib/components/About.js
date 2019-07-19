"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class About extends _react.Component {
  componentDidMount() {
    document.title = "About | DL Imaging";
  }

  render() {
    return dom("div", null, "About");
  }

}

const mapStateToProps = state => {
  return {
    image: state.image
  };
};

About.propTypes = {
  image: _propTypes.default.object.isRequired
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(About);

exports.default = _default;