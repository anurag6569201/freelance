import SliderHome from "./components/SliderHome";
import UpcomingEvents from "./components/UpcomingEvents";
import AboutSection from "./components/About";
import EventExpertise from "./components/EventExpertise";
import Testinomial from "./components/Testimonial";
import ContactImage from "./components/ContactImage";
import SliderFooter from "./components/SliderFooter";

function Home() {
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
  