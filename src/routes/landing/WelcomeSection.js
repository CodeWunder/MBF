import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from '../../assets/images/section-one/section-one-375.webp'
import img700 from '../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../assets/images/section-one/section-one-1440.webp'
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <h2 className="txt-white">
          Welcome to <span>MBF NEWDAWN </span> ENTERPRISES
        </h2>
        <p>
          We are known for quality, quick and prompt delivery of our goods and services.
          As event planner and managers, we are professionals with our experience spanning over a decade and also with our high level of passion which is our driving force,
          we can always assure you of quality delivery service
          As farmers, we procure, package and deliver your ordered farm products that are naturally grown void of chemical fertilizer.
           <div className=""></div>
        </p>           
        <div className=""></div>

      </section>
      <LazyLoadImage
        className="section-two-img"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Pizza Time restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  )
}

export default WelcomeSection;
