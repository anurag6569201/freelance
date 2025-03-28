import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image1 from "../../../assets/images/slider/slider1.jpeg";
import image2 from "../../../assets/images/slider/slider2.jpeg";
import image3 from "../../../assets/images/slider/slider3.jpeg";

const sliderImages = [image1, image2, image3];

const SliderHome = () => {
    return (
        <section id="slide-section" className="slide-section clearfix">
            <OwlCarousel
                className="main-carousel1 owl-theme"
                items={1}
                nav
                loop
                center
                autoplay
                smartSpeed={1000}
                autoplayTimeout={5000}
                dots
            >
                {sliderImages.map((image, index) => (
                    <div key={index} className="item" style={{ backgroundImage: `url(${image})` }}>
                        <div className="overlay-black">
                            <div className="container">
                                <div className="slider-item-content">
                                    <span className="medium-text">one stop</span>
                                    <h1 className="big-text">Event Planner</h1>
                                    <small className="small-text">every event should be perfect</small>
                                    <div className="link-groups">
                                        <a href="/about" className="about-btn custom-btn">about us</a>
                                        <a href="#event-expertise-section" className="start-btn">get started!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </section>
    );
};

export default SliderHome;
