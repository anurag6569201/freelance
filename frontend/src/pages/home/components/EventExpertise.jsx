import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import image1 from '../../../assets/images/services/wed.jpg'
import image2 from '../../../assets/images/services/mus.jpg'
import image3 from '../../../assets/images/services/party.jpg'
import image4 from '../../../assets/images/services/team.jpg'

const expertiseData = [
  {
    title: "Social Events",
    image: image1,
    price: "30,000 - 50,000",
    link: "/corp_social",
  },
  {
    title: "Exhibitions",
    image: image2,
    price: "50,000 - 80,000",
    link: "/corp_exhibition",
  },
  {
    title: "Events Services",
    image: image3,
    price: "30,000 - 50,000",
    link: "/corp_event",
  },
  {
    title: "Corporate Events",
    image: image4,
    price: "10,000 - 20,000",
    link: "/corp_service",
  },
];

const EventExpertise = () => {
  return (
    <section id="Services" className="event-expertise-section bg-gray-light sec-ptb-100 clearfix">
      <div className="container">
        <div className="section-title text-center mb-50">
          <small className="sub-title">our services</small>
          <h2 className="big-title">
            Asian Adept <strong>Expertise</strong>
          </h2>
        </div>

        <OwlCarousel
          className="event-expertise-carousel owl-theme"
          items={3}
          loop
          margin={30}
          autoplay
          smartSpeed={1000}
          autoplayTimeout={5000}
          autoplayHoverPause
          responsive={{
            0: { items: 1 },
            360: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1199: { items: 3 },
          }}
        >
          {expertiseData.map((item, index) => (
            <div key={index} className="item">
              <div className="expertise-item">
                <div className="image image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <a href="#!" className="plus-effect"></a>
                </div>
                <div className="content">
                  <h3 className="title">{item.title}</h3>
                  <a href={item.link} className="custom-btn">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default EventExpertise;
