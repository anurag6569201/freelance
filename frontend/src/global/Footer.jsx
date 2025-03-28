import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhone } from "react-icons/fa";

import logo from '../assets/images/home/logo.png'
function Footer() {
    return (
        <section className="footer mt-3" style={{ backgroundColor: "#010101", color: "white", zIndex: 100, position: "relative", padding: "40px 0" }}>
            <div className="container">
                <footer className="py-5 pb-0">
                    <div className="row" style={{ justifyContent: "space-between" }}>
                        
                        {/* Brand and Social Links */}
                        <div className="col-md-3 mb-3">
                            <h2 className="text-light" style={{ fontWeight: 600, letterSpacing: "5px" }}>ASIAN ADEPT</h2>
                            <img style={{width:'70px',height:'70px',borderRadius:'50%'}} src={logo} alt="" />
                        </div>

                        {/* Explore Section */}
                        <div className="col-md-3 mb-3">
                            <h5 className="text-secondary">EXPLORE</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="nav-link text-light">About</a></li>
                                <li><a href="#" className="nav-link text-light">Gallery</a></li>
                                <li><a href="#" className="nav-link text-light">Careers</a></li>
                            </ul>
                        </div>

                        {/* Get in Touch Section */}
                        <div className="col-md-3 mb-3">
                            <h5 className="text-secondary">GET IN TOUCH</h5>
                            <p className="text-light mb-0"><FaPhone /> (888) 593-1220</p>
                        </div>

                        {/* Insights Section (Placeholder) */}
                        <div className="col-3 text-center">
                            <h5 className="text-secondary">GET OUR LATEST INSIGHTS</h5>
                            <div className="d-flex mt-3">
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaInstagram /></a>
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaLinkedin /></a>
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaTwitter /></a>
                                <a href="#" className="me-3 text-light" style={iconStyle}><FaFacebook /></a>
                            </div>
                        </div>

                        <hr />
                        <div className="col-md-12">
                            <p className="p-0 m-0">© 2025 Asian Adept. All rights reserved.</p>
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
