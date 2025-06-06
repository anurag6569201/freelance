import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhone, FaVoicemail, FaAt, FaYoutube } from "react-icons/fa";

import logo from '../assets/images/home/logo.png'
import '../assets/css/footer.css'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <section className="footer" style={{ backgroundColor: "#010101", color: "white", zIndex: 100, position: "relative", padding: "40px 0" }}>
            <div className="container-fluid">
                <footer className="py-3 pb-0 px-2">
                    <div className="row" style={{ justifyContent: "space-between" }}>
                        
                        {/* Brand and Social Links */}
                        <div className="col-md-4 mb-3">
                            <img style={{width:'70px',height:'70px',borderRadius:'50%'}} src={logo} alt="" />
                            <h2 className="text-light mt-3" style={{ fontWeight: 600, letterSpacing: "5px" }}>ASIAN ADEPT</h2>
                        </div>

                        {/* Explore Section */}
                        <div className="col-md-2 mb-3">
                            <h5 className="text-secondary">EXPLORE</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/about" className="nav-link text-light mt-2">About</Link></li>
                                <li><Link to="/gallery" className="nav-link text-light mt-2">Gallery</Link></li>
                                <li><Link to="/career" className="nav-link text-light mt-2">Careers</Link></li>
                                <li><Link to="/quote/standard" className="nav-link text-light mt-2">Quote</Link></li>
                            </ul>
                        </div>

                        {/* Get in Touch Section */}
                        <div className="col-md-3 mb-3">
                            <h5 className="text-secondary">GET IN TOUCH</h5>
                            <p className="text-light mb-0"><FaPhone /> (888) 593-1220</p>
                            <p className="text-light mb-0"><FaAt /> test@gmail.com</p>
                        </div>

                        {/* Insights Section (Placeholder) */}
                        <div className="col-md-3 text-left mb-3">
                            <h5 className="text-secondary">GET OUR LATEST INSIGHTS</h5>
                            <div className="d-flex mt-3">
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaInstagram /></a>
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaLinkedin /></a>
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaYoutube/></a>
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaFacebook /></a>
                            </div>
                        </div>

                        <hr />
                        <div className="col-md-12">
                            <p className="p-0 m-0" style={{color:'grey'}}>© 2025 Asian Adept. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}

// Icon style for social media links
const iconStyle = {
    fontSize: "22px",
    border: "1px solid white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none"
};

export default Footer;
