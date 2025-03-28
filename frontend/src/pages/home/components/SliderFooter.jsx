import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import image1 from "../../../assets/images/loader/brighter-than-ever-dinner-dance-floor.jpg";
import image2 from "../../../assets/images/loader/childrens-aid-dining-area.jpg";
import image3 from "../../../assets/images/loader/john-legend-on-stage.jpg";
import image4 from "../../../assets/images/loader/outdoor-wedding-white-floor.jpg";
import image5 from "../../../assets/images/loader/pink-flower-arch-over-wedding-table.jpg";
import image6 from "../../../assets/images/loader/story-book-ball-22-dining (1).jpg";

const responsiveOptions = {
    0: { items: 1 },
    600: { items: 3 },
    1000: { items: 5 }
};

function SliderFooter() {
    return (
        <div className="container-fluid pt-5 pb-5" style={{ overflowX: "hidden", backgroundColor: "#f7f7f7" }}>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h3></h3>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <a href="/"> Follow @ASIANADEPT{" "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0 m-0">
                <OwlCarousel
                    className="sr-fade2 owl-theme"
                    loop
                    margin={30}
                    nav
                    dots
                    autoplay
                    autoplayTimeout={2000}
                    autoplayHoverPause
                    smartSpeed={1000}
                    responsive={responsiveOptions}
                >
                    {[image1, image2, image3, image4, image5, image6].map((img, index) => (
                        <div className="item" key={index}>
                            <img style={{borderRadius:'10px'}} src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
}

export default SliderFooter;
