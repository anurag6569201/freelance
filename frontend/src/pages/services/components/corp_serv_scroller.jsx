import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";


const CorpServScroller = ({ subservices,maintitle }) => {
    return (
        <section id="Services" className="event-expertise-section bg-gray-light sec-ptb-100 clearfix">
            <div className="container-fluid">
                <OwlCarousel
                    className="event-expertise-carousel owl-theme"
                    items={3}
                    loop
                    margin={0}
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
                    {subservices.map((item, index) => (
                        <div key={index} className="item">
                            <div className="expertise-item">
                                <div className="image image-wrapper">
                                    <img src={item.image} alt={item.image} />
                                    <Link to={`/services/sub-category/${index}`} className="plus-effect" state={{ subservices,maintitle }}></Link>
                                </div>
                                <div className="content">
                                    <h3 className="title">{item.name}</h3>
                                    <Link
                                        to={`/services/sub-category/${index}`}
                                        state={{ subservices,maintitle }}
                                        className="custom-btn"
                                    >
                                        Know More
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default CorpServScroller;
