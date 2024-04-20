import React from "react";
import { motion } from "framer-motion";

const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <motion.div
        className="map"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.129592394938!2d3.496979474754238!3d6.630822393363538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bec1fe78de66f%3A0x34420bc449e631b0!2s20%20Dorcas%20Elesho%20St%2C%20Ikorodu%2C%20104101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1713617421075!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </motion.div>
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Contact Us</h3>
        <p>
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you!
        </p>
        <section>
          <h4>Customer Support:</h4>
          <p>
            Our dedicated customer support team is ready to assist you with any
            inquiries you may have.
          </p>
          <ul>
            <li>- Email: mbfgbemidele5862@gmail.com</li>
            <li>- Phone: +234 708 6065 667</li>
            <li>- Phone: +234 706 7903 294</li>
            <li>- Hours: Monday - Friday, 8:00am - 6:00pm (WAT)</li>
          </ul>
        </section>
        <section>
          <h4>General Inquiries:</h4>
          <p>
            If you have general questions about our company, partnerships, or
            anything else, feel free to get in touch.
          </p>
          <ul>
            <li>- Email: mbfgbemidele5862@gmail.com</li>
          </ul>
        </section>
        <section>
          <h4>Feedback and Suggestions:</h4>
          <p>
            We value your feedback and are always striving to improve. If you
            have any suggestions, comments, or ideas on how we can enhance our
            offerings, please let us know.
          </p>
          <ul>
            <li>- Email: mbfgbemidele5862@gmail.com</li>
          </ul>
        </section>
      </motion.div>
    </article>
  );
};

export default ContactLanding;
