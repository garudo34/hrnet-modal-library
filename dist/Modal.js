"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    children,
    isOpen,
    onClose
  } = _ref;
  return isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, children))));
};
var _default = exports.default = Modal;