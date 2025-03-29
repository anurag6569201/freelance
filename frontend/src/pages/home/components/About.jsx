import image1 from '../../../assets/images/home/re.png'
import { HashLink } from 'react-router-hash-link';

function AboutSection() {
    return (
        <section id="about-section" className="about-section sec-ptb-100 clearfix p-0">
            <div className="container">
                <div className="row">
                    {/* Section Title - Start */}
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="section-title text-left mb-30">
                            <span className="line-style"></span>
                            <small className="sub-title">we are Asian Adept</small>
                            <h2 className="big-title"><strong>No.1</strong> Events Management</h2>
                            <p className="black-color mb-50">
                                Asian Adept is a premier event management company specializing in curating seamless, innovative, and unforgettable experiences. With a strong presence across Asia, the company excels in organizing corporate events, weddings, product launches, conferences, and large-scale public gatherings.
                            </p>
                            <HashLink  smooth to="/about#WhoWe" className="custom-btn">
                                Discover who we are
                            </HashLink>
                        </div>
                    </div>
                    {/* Section Title - End */}

                    {/* About Item Wrapper - Start */}
                    <div className="col-lg-4 col-md-12 col-sm-12" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img style={{maxWidth:'300px'}} src={image1} alt="" />
                    </div>
                    {/* About Item Wrapper - End */}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
