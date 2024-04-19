import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpg'
import SlideTwo from '../../assets/images/img-two.jpg'
import SlideThree from '../../assets/images/img-three.jpg'
import SlideFour from '../../assets/images/img-four.jpg'


const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>About us</h2>
        <h3 className='sub-title'>Our Vision and Mission</h3>
        <p>
            To distinguish ourselves as an unparalleled leader 
            in the realm of service delivery and achieve the pinnacle of customer satisfaction.
             Our overarching goal is to be recognized as an exemplary organization by our expanding
              clientele, esteemed shareholders, and our dedicated workforce.
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;