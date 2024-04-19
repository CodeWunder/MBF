import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | MBF NEWDAWN ENTERPRISES";
  }, []);

  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <section className="contact-us-img"></section>
      <section className="contact-us-content pop-font">
        <section className="contact-us-content-txt">
          <h2>Contact us</h2>
          <p>
    For any inquiries, please feel free to contact us at <strong>08063329112</strong> or email us at <strong>mbfgbemidele5862@gmail.com</strong>. You can also reach out to us through any of our social media handles.
  </p>
  
  <p>
    We greatly value your feedback and questions. Whether you need further clarification or assistance, we are here to support you. Looking forward to hearing from you!
  </p>
        </section>
      </section>
    </motion.main>
  );
}

export default Contact;
