import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom to navigate to the checkout page

const CheckoutBtn = ({ className }) => {
  return (
    <Link to="/checkout" className={className}>
      Checkout
    </Link>
  );
}

export default CheckoutBtn;
