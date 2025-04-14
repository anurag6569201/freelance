import SliderHome from "./components/SliderHome";
import UpcomingEvents from "./components/UpcomingEvents";
import AboutSection from "./components/About";
import EventExpertise from "./components/EventExpertise";
import Testinomial from "./components/Testimonial";
import ContactImage from "./components/ContactImage";
import SliderFooter from "./components/SliderFooter";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { pathname, hash } = location;
  useEffect(() => {
      if (hash) {
          const elementId = hash.slice(1);
          const element = document.getElementById(elementId);

          if (element) {
              element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      }
  }, [hash]);

  useEffect(() => {
      if (!hash) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
  }, [pathname, hash]);
    return (
      <>
        <SliderHome/>
        <UpcomingEvents/>
        <AboutSection/>
        <EventExpertise/>
        <Testinomial/>
        <ContactImage/>
        <SliderFooter/>
      </>
    )
  }
  
  export default Home;
  