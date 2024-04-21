import React from "react";
import Modal from "react-modal";

const PaymentSuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Payment Successful!</h2>
        <p>Your payment was successful. Thank you!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default PaymentSuccessModal;
        
