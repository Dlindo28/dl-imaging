"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

require("../css/ContactLinks.css");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

class ContactLinks extends _react.Component {
  render() {
    return dom(
      "div",
      {
        className: "ContactLinks",
      },
      dom(
        "ul",
        null,
        dom(
          "li",
          null,
          dom(
            "a",
            {
              href: "mailto:dlimaging.photo@gmail.com",
              className: "contactItem",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            dom(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faEnvelope,
            })
          )
        ),
        dom(
          "li",
          null,
          dom(
            "a",
            {
              href: "https://www.instagram.com/dl.aesthetics/",
              className: "contactItem",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            dom(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeBrandsSvgIcons.faInstagram,
            })
          )
        ),
        dom(
          "li",
          null,
          dom(
            "a",
            {
              href: "https://github.com/Dlindo28",
              className: "contactItem",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            dom(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeBrandsSvgIcons.faGithub,
            })
          )
        ),
        dom(
          "li",
          null,
          dom(
            "a",
            {
              href: "https://www.linkedin.com/in/daniel-lindo-772894142/",
              className: "contactItem",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            dom(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeBrandsSvgIcons.faLinkedin,
            })
          )
        )
      )
    );
  }
}

var _default = ContactLinks;
exports.default = _default;
