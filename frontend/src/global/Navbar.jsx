import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useRef, useState } from "react";
import logo from '../assets/images/home/logo.png';

function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(true);
    const collapseDivRef = useRef(null);
    const navTogglerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        if (collapseDivRef.current?.classList.contains('show')) {
            navTogglerRef.current?.click();
        }
    };

    return (
        <header id="header-section"
            className={`header-section sticky-header-section not-stuck clearfix ${isScrolled ? 'scrolled' : 'scrolled'}`}
            style={{
                backgroundColor: isScrolled ? 'white' : 'white',
                transition: 'background-color 0.3s ease-in-out',
                borderBottom: '1px solid white',
                color: isScrolled ? 'black' : 'black'
            }}
        >
            <div className="header-bottom" style={{ padding: '0' }}>
                <nav className="small_device_navbar navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        {/* Logo Section */}
                        <div className="logo_wrapper_header_top p-2 d-flex justify-content-start">
                            <Link to="/" onClick={handleNavClick} className="d-flex align-items-center">
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ width: "50px", height: "50px", borderRadius: "50%", border: "4px solid #fff" }}
                                />
                                <span style={{ fontSize: '20px', fontWeight: '800', color: '#333333', marginLeft: '10px', fontFamily: 'cursive' }}>
                                    Asian Adept
                                </span>
                            </Link>
                        </div>

                        {/* Toggler */}
                        <button
                            ref={navTogglerRef}
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>

                        {/* Menu */}
                        <div ref={collapseDivRef} className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <div className="col-lg-8 col-md-8">
                                <div className="mainmenu-wrapper">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" onClick={handleNavClick}>Home</Link>
                                        </li>

                                        {/* About Dropdown */}
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                                                About <i className="bi bi-chevron-down ms-1"></i>
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li><HashLink className="dropdown-item" smooth to="/about#WhoWe" onClick={handleNavClick}>Who We Are</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/about#WhyUs" onClick={handleNavClick}>Why Us</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/about#team" onClick={handleNavClick}>Our Team</HashLink></li>
                                            </ul>
                                        </li>

                                        {/* What We Do Dropdown */}
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                                                What We Do <i className="bi bi-chevron-down ms-1"></i>
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li><HashLink className="dropdown-item" smooth to="/services#corporate" onClick={handleNavClick}>Corporate Events</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/services#wedding" onClick={handleNavClick}>Wedding Planning</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/services#social" onClick={handleNavClick}>Social Events</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/services#exhibitions" onClick={handleNavClick}>Exhibitions</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/services#sports" onClick={handleNavClick}>Sports Events</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/services#government" onClick={handleNavClick}>Government Events</HashLink></li>
                                                <li><HashLink className="dropdown-item" smooth to="/services#entertainment" onClick={handleNavClick}>Entertainment Events</HashLink></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/gallery" onClick={handleNavClick}>Gallery</Link>
                                        </li>

                                        {/* Quote Dropdown */}
                                        <li className="nav-item dropdown">
                                            <span className="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                                                Quote <i className="bi bi-chevron-down ms-1"></i>
                                            </span>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="/quote/standard" onClick={handleNavClick}>Stand Quotation</Link></li>
                                                <li><Link className="dropdown-item" to="/quote/event" onClick={handleNavClick}>Event Quotation</Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/career" onClick={handleNavClick}>Careers</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="col-lg-2 col-md-2 d-flex align-items-center justify-content-start">
                                <div className="user-search-btn-group d-flex gap-3">
                                    <a href="https://web.whatsapp.com/" className="text-decoration-none d-flex align-items-center gap-2" style={{ color: isScrolled ? 'black' : 'black' }}>
                                        <i className="fas fa-phone"></i> 8329969729
                                    </a>
                                    <Link to="/contact" onClick={handleNavClick} style={{
                                        background: isScrolled ? '#333333' : '#333333',
                                        height: '66px',
                                        padding: '0 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderLeft: '1px solid white',
                                        color: '#fff',
                                        fontWeight: 'bold'
                                    }}>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid smaller_navbar_container" style={{ height: '66px' }}>
                    <div className="row" style={{ justifyContent: "center" }}>
                        <div className="col-lg-3 col-md-2 site-logo-wrapper-container">
                            <div className="site-logo-wrapper">
                                <div className="logo_wrapper_header_top p-2" style={{ display: "flex", justifyContent: "left" }}>
                                    <Link to="/">
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", border: "4px solid #fff" }}
                                            src={logo} alt="" />
                                        <span style={{ fontSize: '20px', fontWeight: '800', color: '#333333', marginLeft: '10px', fontFamily: 'cursive' }}>
                                            Asian Adept
                                        </span>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="mainmenu-wrapper">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="menu-item-list ul-li clearfix"
                                            style={{ display: "flex", justifyContent: "center" }}>
                                            <ul>
                                                <li className="menu-item-has-children">
                                                    <Link to="/">home</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link >about</Link>
                                                    <ul className="sub-menu">
                                                        <li><HashLink smooth to="/about#WhoWe">Who We Are</HashLink></li>
                                                        <li><HashLink smooth to="/about#WhyUs">Why Us</HashLink></li>
                                                        <li><HashLink smooth to="/about#team">Our Team</HashLink></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link >What We Do</Link>
                                                    <ul className="sub-menu">
                                                        <li><HashLink smooth to="/services/corporate">Corporate Events</HashLink></li>
                                                        <li><HashLink smooth to="/services/wedding">Wedding Planning</HashLink></li>
                                                        <li><HashLink smooth to="/services/social">Social Events</HashLink></li>
                                                        <li><HashLink smooth to="/services/exhibitions">Exhibitions</HashLink></li>
                                                        <li><HashLink smooth to="/services/sports">Sports Events</HashLink></li>
                                                        <li><HashLink smooth to="/services/government">Government Events</HashLink></li>
                                                        <li><HashLink smooth to="/services/entertainment">Entertainment Events</HashLink></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/gallery">gallery</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#!">Quote</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/quote/standard">Stand Quotation</Link></li>
                                                        <li><Link to="/quote/event">Event Quotation</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/career">Careers</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 p-0 m-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                            <div className="user-search-btn-group ul-li clearfix p-0 m-0">
                                <ul style={{ display: "flex", gap: "20px", alignItems: 'center' }}>
                                    <a href="https://web.whatsapp.com/"
                                        style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", color: isScrolled ? 'black' : 'black' }}>
                                        <i className="fas fa-phone"></i> 8329969729
                                    </a>
                                    <Link to="/contact" style={{ background: isScrolled ? '#333333' : '#333333', height: '66px', padding: '0 20px', display: 'flex', alignItems: 'center', borderLeft: '1px solid white' }}><b className="text-white">Contact</b></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavigationBar;
