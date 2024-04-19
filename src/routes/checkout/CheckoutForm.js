import React, { useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";

const CheckoutForm = ({ totalPayment, productsQuantity }) => {
  const [deliveryOption, setDeliveryOption] = useState("normal");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleProceedToPayment = () => {
    // Reset location or perform any other necessary actions
    ResetLocation();
  
    // Construct the message with name, delivery option, phone number, address, total payment, and quantity
    const message = `Hello, I'm interested in making a purchase with the following details:
    Name: ${name}
    Delivery Option: ${deliveryOption}
    Phone Number: ${phoneNumber}
    Address: ${address}
    Total Payment: ₦${totalPayment}
    Quantity: ${productsQuantity}`;
  
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
  
    // Construct the WhatsApp link with the encoded message
    const whatsappLink = `https://wa.me/+2347067903294?text=${encodedMessage}`;
  
    // Open the WhatsApp link in a new window
    window.open(whatsappLink, "_blank");
  };
  

  return (
    <section className="checkout-personal-information">
      <form>
        <h3>Delivery details</h3>

        <div className="delivery-options">
          <input
            type="radio"
            id="normal-delivery"
            name="delivery-option"
            value="normal"
            checked={deliveryOption === "normal"}
            onChange={() => setDeliveryOption("normal")}
          />
          <label htmlFor="normal-delivery">Normal Delivery</label>

          <input
            type="radio"
            id="express-delivery"
            name="delivery-option"
            value="express"
            checked={deliveryOption === "express"}
            onChange={() => setDeliveryOption("express")}
          />
          <label htmlFor="express-delivery">Express Delivery</label>
        </div>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />

        <label htmlFor="phone-number">Phone Number:</label>
        <input
          type="tel"
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input-field"
        />

        <label htmlFor="address">Delivery Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input-field"
        />

        <article className="checkout-carttotals">
          {productsQuantity === 0 ? null : (
            <section className="cart-totals">
              <section className="totals-content">
                <h4 className="cart-totals-sum">Quantity:</h4>
                <p>{productsQuantity}</p>
              </section>
              <section className="totals-content">
                <h4 className="cart-totals-sum">Total:</h4>
                <p>₦ {totalPayment}</p>
              </section>
            </section>
          )}
        </article>
        {/* Call handleProceedToPayment when button is clicked */}
        <button
          type="button"
          className="active-button-style"
          onClick={handleProceedToPayment}
        >
          Proceed to payment
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
