import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">Contact Us</h2>
        <h3>Transform Your Events and Logistics?</h3>
        <p>
        Ready to elevate your events and logistics experience? Contact us today to discuss your unique requirements and witness firsthand the seamless excellence of MBF NEWDAWN ENTERPRISES. 
        Our team is standing by, ready to transform your vision into reality. 
        Request a call now and let us bring unparalleled quality and professionalism to your every endeavor.
        </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Request a call</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
