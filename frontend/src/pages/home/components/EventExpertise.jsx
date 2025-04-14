import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../../../assets/css/colors/crousalstyle.css'
import image1 from '../../../assets/images/services/social2.jpg'
import image2 from '../../../assets/images/services/exe2.jpg'
import image3 from '../../../assets/images/services/wed.jpg'
import image4 from '../../../assets/images/services/corp/corp10.jpg'
import image5 from '../../../assets/images/services/sport.jpeg'
import image6 from '../../../assets/images/services/gov.jpeg'
import image7 from '../../../assets/images/services/party.jpg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const expertiseData = [
  {
    title: "Social Events",
    image: image1,
    price: "30,000 - 50,000",
    link: "/services/social",
  },
  {
    title: "Exhibitions",
    image: image2,
    price: "50,000 - 80,000",
    link: "/services/exhibitions",
  },
  {
    title: "Wedding Events",
    image: image3,
    price: "30,000 - 50,000",
    link: "/services/wedding",
  },
  {
    title: "Corporate Events",
    image: image4,
    price: "10,000 - 20,000",
    link: "/services/corporate",
  },
  {
    title: "Sport Events",
    image: image5,
    price: "10,000 - 20,000",
    link: "/services/sports",
  },
  {
    title: "Government Events",
    image: image6,
    price: "10,000 - 20,000",
    link: "/services/government",
  },
  {
    title: "Entertainment Events",
    image: image7,
    price: "10,000 - 20,000",
    link: "/services/entertainment",
  },
];

const EventExpertise = () => {
  return (
    <>
      <section id="Services" className="event-expertise-section bg-gray-light sec-ptb-100 clearfix" style={{ position: 'relative' }}>
        <div className="container">
          <div className="section-title text-center mb-50">
            <small className="sub-title">our services</small>
            <h2 className="big-title">
              Asian Adept <strong>Expertise</strong>
            </h2>
            <Link to='/services' className="custom-btn mt-2 p-1 px-3">
                What We Do
            </Link>
          </div>

          <OwlCarousel
            className="event-expertise-carousel owl-theme sr-fade2"
            items={3}
            loop
            margin={0}
            autoplay
            smartSpeed={1000}
            autoplayTimeout={5000}
            autoplayHoverPause
            nav
            dots
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
                    <img src={item.image} alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                    <a href="#!" className="plus-effect"></a>
                  </div>
                  <div className="content">
                    <h3 className="title">{item.title}</h3>
                    <HashLink to={item.link} className="custom-btn">
                      Know More
                    </HashLink>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default EventExpertise;
