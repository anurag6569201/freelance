import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import image1 from '../../../assets/images/loader/outdoor-wedding-white-floor.jpg'
import image2 from '../../../assets/images/loader/story-book-ball-22-dining (1).jpg'
import image3 from '../../../assets/images/loader/truth-is-power-dinner-setup.jpg'


const testimonials = [
  { review: "For our international medical conference with delegates from 15 countries, Asian Adept mastered complex logistics and cultural nuances. Their hybrid event setup and real-time translation services received rave reviews. The gala dinner's authentic regional cuisine presentations were a culinary masterpiece!", role: "Conference Chair ASEAN MedCon 2023", name: "Dr. Siti Aminah",image:image1 },
  { review: "The product launch event organized by Asian Adept generated 40% more leads than anticipated! Their innovative 'sensory journey' concept blending aromas, textures, and live demonstrations made our new skincare line truly memorable. Flawless execution from start to finish.", role: "Marketing Head at UrbanBrew Cosmetics", name: "Ananya Lee",image:image2 },
  { review: "We entrusted Asian Adept with our 3-day wedding celebration and they created pure magic! From the mehndi decor to the reception lighting, every detail reflected our personalities. Their crisis management skills saved the day when unexpected rain threatened our outdoor ceremony.", role: "Bridegroom", name: "Rahul Kapoor",image:image3 },
];

const Testimonial = () => {
  return (
    <section
      id="testimonial5-section"
      className="testimonial5-section sec-ptb-100 clearfix p-0"
      style={{ background: "#f7f7f7" }}
    >
      <div className="container">
        <OwlCarousel
          className="testimonial5-carousel sr-fade2 owl-theme"
          items={1}
          nav
          loop
          margin={30}
          autoplay
          smartSpeed={1000}
          autoplayTimeout={5000}
          autoplayHoverPause
          animateIn="lightSpeedIn"
        >
          {testimonials.map((test, index) => (
            <div className="row">
                <div className="col-md-6" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={test.image} alt="" style={{borderTopRightRadius:'4rem',borderTopLeftRadius:'4rem'}}/>
                </div>
                <div className="col-md-6" style={{justifyContent:'left',display:'flex'}}>
                <div key={index} className="item p-0" >
                    <span className="quote-icon" style={{marginLeft:'0'}}>
                        <i className="fas fa-quote-right"></i>
                    </span>
                    <p className="clients-comment">“{test.review}”</p>
                    <div className="client-info">
                        <h3 className="client-name">{test.role}</h3>
                        <span className="client-sub-title">{test.name}</span>
                    </div>
                    </div>
                </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonial;
