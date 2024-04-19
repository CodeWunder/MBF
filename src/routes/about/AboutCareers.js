import React from "react";
import OfficeTwo from "../../assets/images/about-us/career.jpg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Careers</h2>
        <h3>Join the team</h3>
        <p>
        At New Dawn Messaging, Food, and Logistics, we mirror the excellence established by New Dawn Events Planning and Management.
         We meticulously source, package, and deliver your fruits, vegetables, and foods,
          ensuring they are either 100 percent fertilizer-free or cultivated using organic fertilizers.
           Some of our produce is cultivated on our own farm, and when external sourcing is necessary,
            we communicate precise requirements to farmers, maintaining our commitment to quality and sustainability.
        </p>
        <Link to="/careers" onClick={ResetLocation} className="active-button-style">Join now</Link>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
