import React, { useCallback, useEffect } from 'react'
import propTypes from 'prop-types'

import './Modal.css'

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
const Modal = ({ children, isOpen, onClose }) => {
  // Event function that closes the modal component when the Escape key is pressed
  const escFunction = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', escFunction)
    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [escFunction])
  return (
    <>
      {isOpen && (
        <>
          <div className='modal-background' onClick={onClose}></div>
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={onClose}>
                &times;
              </span>
              <p>{children}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

Modal.propTypes = {
  /** Content of the modal */
  children: propTypes.object,
  /** Boolean that defines if the modal is open or not */
  isOpen: propTypes.bool,
  /** Function that is called when the modal is closed */
  onClose: propTypes.func,
}

Modal.defaultProps = {
  onClose: () => {
    return
  },
}

export default Modal
