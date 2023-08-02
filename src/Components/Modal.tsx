import React from 'react'
import ReactModal from 'react-modal'

interface ModalProps {
  children: any
  isOpen: boolean
  onRequestClose: () => void
}

const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      {children}
    </ReactModal>
  )
}

export default Modal
