import React from 'react'
import './Modal.css'

const Modal = ({ children, isOpen, onClose }) => {
  return (
    isOpen && (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-body'>
            <span className='close' onClick={onClose}>
              &times;
            </span>
            <p>{children}</p>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
