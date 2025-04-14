import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image1 from "../../../assets/images/slider/slider1.jpeg";
import image2 from "../../../assets/images/slider/slider2.jpeg";
import image3 from "../../../assets/images/slider/slider3.jpeg";
import image4 from "../../../assets/images/services/corp/corp10.jpg";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const image5 ="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740";
const image6="https://img.freepik.com/free-photo/beautiful-pier-view_1417-1690.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740";
const image7="https://img.freepik.com/free-photo/girl-library_1150-18018.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740";
const image8="https://img.freepik.com/free-photo/vibrant-summer-soiree-scene-with-guests-adorned-punchy-fuchsia-mingling-around-table-laden-with-gourmet-dishes_73899-27524.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
const image9="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740";

const sliderImages = [image1,image4,image5,image6,image7,image8,image9];

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
                smartSpeed={1500}
                autoplayTimeout={5000}
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
                                        <Link to="/about" className="about-btn custom-btn">about us</Link>
                                        <HashLink to="#Services" className="start-btn">get started!</HashLink>
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
