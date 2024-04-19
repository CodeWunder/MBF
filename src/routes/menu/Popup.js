import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const Popup = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Retrieve visibility state from session storage on component mount
  useEffect(() => {
    const storedVisibility = sessionStorage.getItem('popupVisibility');
    setIsVisible(storedVisibility !== 'hidden');
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    onClose();
    setIsVisible(false); // Hide the popup
    sessionStorage.setItem('popupVisibility', 'hidden'); // Store visibility state
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleProceed = () => {
    if (!isChecked) {
      setIsVisible(false); // Hide the popup when checkbox is unchecked
      sessionStorage.setItem('popupVisibility', 'hidden'); // Store visibility state
    }
  };

  return (
    <>
      {isVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Important Notice</h2>
            <p>Please take a moment to read our terms and conditions before proceeding.</p>
            <div className="popup-buttons">
              <NavLink to="/terms">
                <button onClick={handleProceed}>Proceed</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
    
