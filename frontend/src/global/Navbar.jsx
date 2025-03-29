import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/home/logo.png'

function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header id="header-section" 
        className={`header-section sticky-header-section not-stuck clearfix ${isScrolled ? 'scrolled' : ''}`} 
        style={{ backgroundColor: isScrolled ? 'white' : 'transparent', transition: 'background-color 0.3s ease-in-out',borderBottom:'1px solid white',color:isScrolled?'black!important':'white!important' }}>
            <div className="header-bottom" style={{padding:'0'}}>
                <nav className="small_device_navbar navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="col-md-4 logo_wrapper_header_top col-4" style={{ display: "flex", justifyContent: "center" }}>
                            <Link to="/">
                                <img style={{ width: "100px", height: "100px", borderRadius: "50%", border: "4px solid #fff" }}
                                    src={logo} alt="" />
                            </Link>
                        </div>
                        <Link className="navbar-brand" to="/">ASIAN ADEPT</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <div className="col-lg-8">
                                <div className="mainmenu-wrapper">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="menu-item-list ul-li clearfix"
                                                style={{ display: "flex", justifyContent: "center" }}>
                                                <ul>
                                                    <li className="menu-item-has-children">
                                                        <Link to="/">home</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#!">about</a>
                                                        <ul className="sub-menu">
                                                            <li><Link to="/about">Who We Are</Link></li>
                                                            <li><Link to="/team">Our Team</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#!">What We Do</a>
                                                        <ul className="sub-menu">
                                                            <li><Link to="/corp_service">Corporate Events</Link></li>
                                                            <li><Link to="/corp_social">Social Events</Link></li>
                                                            <li><Link to="/corp_exhibition">Exhibitions</Link></li>
                                                            <li><Link to="/corp_event">Event Services</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to="/gallery">gallery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/career">Careers</Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="/contact">contact</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="user-search-btn-group ul-li clearfix">
                                    <ul style={{ display: "flex", gap: "20px" }}>
                                        <a href="https://web.whatsapp.com/"
                                            style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                                            <i className="fas fa-user"></i> 8329969729
                                        </a>
                                        <Link to="/contact">Contact</Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid smaller_navbar_container" style={{height:'66px'}}>
                    <div className="row" style={{ justifyContent: "center" }}>
                        <div className="col-lg-2 site-logo-wrapper-container">
                            <div className="site-logo-wrapper">
                                <div className="logo_wrapper_header_top p-2" style={{ display: "flex", justifyContent: "left" }}>
                                    <Link to="/">
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", border: "4px solid #fff" }}
                                            src={logo} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <div className="mainmenu-wrapper">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="menu-item-list ul-li clearfix"
                                            style={{ display: "flex", justifyContent: "center" }}>
                                            <ul>
                                                <li className="menu-item-has-children">
                                                    <Link to="/">home</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link to="/about">about</Link>
                                                    <ul className="sub-menu">
                                                        <li><HashLink smooth to="/about#WhoWe">Who We Are</HashLink></li>
                                                        <li><HashLink smooth to="/about#team">Our Team</HashLink></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#!">What We Do</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/corp_service">Corporate Events</Link></li>
                                                        <li><Link to="/corp_social">Social Events</Link></li>
                                                        <li><Link to="/corp_exhibition">Exhibitions</Link></li>
                                                        <li><Link to="/corp_event">Event Services</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/gallery">gallery</Link>
                                                </li>
                                                <li>
                                                    <Link to="/career">Careers</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="#!">Quote</a>
                                                    <ul className="sub-menu">
                                                        <li><Link to="/quote/standard">Stand Quotation</Link></li>
                                                        <li><Link to="/quote/event">Event Quotation</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 p-0 m-0" style={{display:'flex',alignItems:'center',justifyContent:'right'}}>
                            <div className="user-search-btn-group ul-li clearfix p-0 m-0">
                                <ul style={{ display: "flex", gap: "20px",alignItems:'center' }}>
                                    <a href="https://web.whatsapp.com/"
                                        style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center",color:isScrolled?'black':'white' }}>
                                        <i className="fas fa-user"></i> 8329969729
                                    </a>
                                    <Link to="/contact" style={{background:isScrolled? '#333333':'transparent',height:'66px',padding:'0 20px',display:'flex',alignItems:'center',borderLeft:'1px solid white'}}><b className="text-white">Contact</b></Link>
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