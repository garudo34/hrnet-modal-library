"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Modal component that can be opened and closed by clicking outside
 * of the modal, the close button or pressing Escape key .
 *
 * @category Components
 * @component
 * @param {string} children
 * @param {boolean} isOpen state variable boolean for controling modal visibility
 * @param {function} onClose callback to close the modal component
 * @returns {React.Component} - The modal component.
 */
const Modal = _ref => {
  let {
    children,
    isOpen,
    onClose
  } = _ref;
  // Event function that closes the modal component when the Escape key is pressed
  const escFunction = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  (0, _react.useEffect)(() => {
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-background",
    onClick: onClose
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, children)))));
};
Modal.propTypes = {
  /** Content of the modal */
  children: _propTypes.default.object,
  /** Boolean that defines if the modal is open or not */
  isOpen: _propTypes.default.bool,
  /** Function that is called when the modal is closed */
  onClose: _propTypes.default.func
};
Modal.defaultProps = {
  onClose: () => {
    return;
  }
};
var _default = exports.default = Modal;