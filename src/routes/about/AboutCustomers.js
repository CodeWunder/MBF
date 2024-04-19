import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-one.jpg";
import ImgTwo from "../../assets/images/about-us/img-two.jpg";
import ImgThree from "../../assets/images/about-us/img-three.jpg";

const AboutCustomers = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">As Event</h2>
        <h3>Planners and Managers</h3>
        <p>
        We alleviate the burden of orchestrating corporate or private events, sparing you the stress and anxiety.
         As seasoned professionals with over a decade and a half of experience, coupled with a profound passion that 
         propels us forward, we guarantee the delivery of top-notch services whenever our paths cross.
Rest assured, when we handle your events, success is guaranteed at 100 percent. At New Dawn Event Planning and Management,
 our reputation is built on the pillars of quality, swift, and punctual delivery of both goods and services. We proudly stand as unrivaled leaders in our field.
        </p>
      </section>
    </article>
  );
}


export default AboutCustomers;
