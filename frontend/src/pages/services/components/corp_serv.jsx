import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp3.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import image3 from "../../../assets/images/services/corp/corp3.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpSubCategory from './serv_subcategory';
import CorpServScroller from './corp_serv_scroller';

const CorporateEvents = () => {
    const subservices = [
        {
            name: 'Office/Store/Factory Inauguration',
            description: 'Grand openings with ribbon-cutting ceremonies, VIP invitations, media coverage, and facility tours.',
            image: 'https://picsum.photos/seed/inauguration/800/500'
        },
        {
            name: 'Annual Corporate Events',
            description: 'Company-wide annual events featuring keynote speeches, employee recognitions, and team-building activities.',
            image: 'https://picsum.photos/seed/annualevent/800/500'
        },
        {
            name: 'Conferences & Seminars',
            description: 'Large-scale industry conferences and knowledge-sharing seminars with expert speakers and panel discussions.',
            image: 'https://picsum.photos/seed/conferences/800/500'
        },
        {
            name: 'Corporate Social Responsibility (CSR) Events',
            description: 'Community outreach programs, sustainability initiatives, and corporate charity drives.',
            image: 'https://picsum.photos/seed/csr/800/500'
        },
        {
            name: 'MICE Events',
            description: 'Comprehensive planning of Meetings, Incentives, Conferences, and Exhibitions for global corporate needs.',
            image: 'https://picsum.photos/seed/mice/800/500'
        },
        {
            name: 'Product Launches',
            description: 'High-impact product unveiling events with media coordination, influencer marketing, and interactive experiences.',
            image: 'https://picsum.photos/seed/productlaunch/800/500'
        },
        {
            name: 'Corporate Retreats & Team Building',
            description: 'Engaging retreats and team-building activities to foster leadership, collaboration, and employee morale.',
            image: 'https://picsum.photos/seed/retreat/800/500'
        },
        {
            name: 'Board Meetings & Shareholder Gatherings',
            description: 'Confidential and high-security executive meetings with premium venues and secure document handling.',
            image: 'https://picsum.photos/seed/boardmeeting/800/500'
        },
        {
            name: 'Corporate Milestone Celebrations & Anniversaries',
            description: 'Exclusive events celebrating company anniversaries and key achievements with legacy showcases.',
            image: 'https://picsum.photos/seed/milestone/800/500'
        },
        {
            name: 'Networking Events',
            description: 'Professionally curated networking sessions with matchmaking tools and industry-specific gatherings.',
            image: 'https://picsum.photos/seed/networking/800/500'
        },
        {
            name: 'Sales, Dealers, and Suppliers Conference',
            description: 'Strategic conferences to align sales teams, engage dealers, and strengthen supplier relationships.',
            image: 'https://picsum.photos/seed/salesconference/800/500'
        }
    ];

    return (
        <section id="corporate-events" className="py-5 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container">
                <div className="service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Corporate
                            </h1>
                            <img src={image} alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p className="text-muted mb-4">
                            Elevate your corporate gatherings with <strong>Asian Adept</strong>, your trusted partner in
                            premium event planning. We understand that corporate events are more than just meetings—they are
                            an opportunity to showcase your brand, strengthen professional relationships, and create memorable experiences.
                            With our expertise, we craft seamless, high-impact events that leave a lasting impression on your guests.
                            <br /><br />
                            Let us handle the complexities while you focus on what matters most—engaging with your audience and
                            building stronger business connections.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept />
                <CorpServScroller subservices={subservices} maintitle={"Corporate Service"}/>

                <div className="container mt-4">
                    <h2 className="text-uppercase fw-bold mt-4 pt-3 display-5 text-dark px-5">Our Services</h2>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-5">
                            <ul className="list-unstyled fs-5">
                                <li>• Activities Coordination</li>
                                <li>• Audio / Visual</li>
                                <li>• Budget Planning</li>
                                <li>• Catering Consultation</li>
                                <li>• Décor Design & Selection</li>
                                <li>• Entertainment</li>
                                <li>• Evening Program</li>
                                <li>• Floral</li>
                                <li>• Guest Gifts</li>
                                <li>• Hotel Room Blocks</li>
                                <li>• Incentive Trips</li>
                                <li>• Invitations</li>
                                <li>• Itineraries</li>
                                <li>• Lighting & Sound</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled fs-5">
                                <li>• Meeting Planning</li>
                                <li>• On-Site Management</li>
                                <li>• Photography</li>
                                <li>• Print Collateral</li>
                                <li>• Registration</li>
                                <li>• Rentals</li>
                                <li>• Staging</li>
                                <li>• Stationery</li>
                                <li>• Tenting</li>
                                <li>• Timelines</li>
                                <li>• Transportation</li>
                                <li>• Venue Selection & Management</li>
                                <li>• Videography</li>
                                <li>• Welcome Reception</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row my-5 text-center">
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image1}
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image1}
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "300px", width: "100%" }}
                            />
                        </div>
                    </div>

                    <ContactForm/>
                    
                </div>

            </div>

            <style jsx>{`
                .hover-translate {
                    transition: all 0.3s ease;
                    transform: translateY(0);
                }
                
                .hover-translate:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.12)!important;
                }
                
                .bg-gradient-dark {
                    background: linear-gradient(transparent 0%, rgba(0,0,0,0.7) 100%);
                }
                
                .card {
                    border-radius: 1rem;
                    overflow: hidden;
                }
                
                .card-text {
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
                
                @media (max-width: 768px) {
                    .display-5 {
                        font-size: 2.2rem;
                    }
                    
                    .card {
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CorporateEvents;