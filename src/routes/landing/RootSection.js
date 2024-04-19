import React, { useEffect } from "react";
import Header from "./Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import OurServices from "./OurServices";
import Newsletter from "./Newsletter";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./ContactLanding";

const RootSection = () => {
  useEffect(() => {
    document.title = "MBF Dawn Enterprises";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <WelcomeSection />
      <ContactUsLanding />
      <OurServices />
      <Newsletter />
      <ContactLanding />
      <ScrollButton />
    </React.Fragment>
  );
}

export default RootSection;
