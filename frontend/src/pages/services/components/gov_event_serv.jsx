import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp2.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpServScroller from './corp_serv_scroller';

const GovEventsEvents = () => {
    const subservices = [
        {
            name: 'Official Ceremonies and Protocol Management',
            description: 'Planning and execution of state functions, inaugurations, and official ceremonies following strict protocols.',
            image: 'https://picsum.photos/seed/ceremony/800/500'
        },
        {
            name: 'Public Awareness Campaigns',
            description: 'Organizing large-scale awareness campaigns on government initiatives, health, education, and social causes.',
            image: 'https://picsum.photos/seed/awareness/800/500'
        },
        {
            name: 'Conferences and Summits',
            description: 'End-to-end management of government summits, policy discussions, and international conferences.',
            image: 'https://picsum.photos/seed/conference/800/500'
        },
        {
            name: 'Election Events and Political Rallies',
            description: 'Logistics, security, and crowd management for election campaigns, rallies, and political gatherings.',
            image: 'https://picsum.photos/seed/election/800/500'
        },
        {
            name: 'Press Conferences and Media Coordination',
            description: 'Managing media relations, press releases, and live coverage for government announcements.',
            image: 'https://picsum.photos/seed/press/800/500'
        },
        {
            name: 'Security and VIP Management',
            description: 'High-level security planning, VIP escort services, and access control for government officials and dignitaries.',
            image: 'https://picsum.photos/seed/security/800/500'
        },
        {
            name: 'Infrastructure Setup and Logistics',
            description: 'Setting up temporary structures, podiums, and seating arrangements for large-scale public events.',
            image: 'https://picsum.photos/seed/infrastructure/800/500'
        },
        {
            name: 'Cultural and National Festivals',
            description: 'Coordinating national celebrations, parades, and cultural events to promote heritage and unity.',
            image: 'https://picsum.photos/seed/festival/800/500'
        },
        {
            name: 'Workshops and Training Programs',
            description: 'Organizing skill development workshops, training sessions, and capacity-building programs for government employees and citizens.',
            image: 'https://picsum.photos/seed/training/800/500'
        },
        {
            name: 'Environmental and CSR Initiatives',
            description: 'Event planning for tree plantation drives, sustainability programs, and community development projects.',
            image: 'https://picsum.photos/seed/environment/800/500'
        },
        {
            name: 'Disaster Relief Coordination',
            description: 'Logistical support for emergency response, relief distribution, and public safety awareness during disasters.',
            image: 'https://picsum.photos/seed/disaster/800/500'
        },
        {
            name: 'Technology and Digital Governance Expos',
            description: 'Hosting expos and forums on smart cities, e-governance, and emerging technologies in governance.',
            image: 'https://picsum.photos/seed/technology/800/500'
        },
        {
            name: 'Event Marketing and Public Engagement',
            description: 'Strategic promotions, digital outreach, and citizen engagement initiatives for government programs.',
            image: 'https://picsum.photos/seed/marketing/800/500'
        },
        {
            name: 'Transportation and Crowd Control',
            description: 'Managing public transport arrangements, traffic diversions, and pedestrian flow for large-scale government events.',
            image: 'https://picsum.photos/seed/transport/800/500'
        },
        {
            name: 'Post-Event Analysis and Reporting',
            description: 'Detailed documentation, performance analysis, and reporting for transparency and future improvements.',
            image: 'https://picsum.photos/seed/reporting/800/500'
        },
        {
            name: 'Post-Event Cleanup and Waste Management',
            description: 'Eco-friendly waste management solutions and site restoration after large gatherings.',
            image: 'https://picsum.photos/seed/cleanup/800/500'
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
                            Government
                            </h1>
                            <img src={image} alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                        Step into a world of innovation and discovery with <strong>Asian Adept</strong>, your premier partner for unforgettable exhibition events. Whether you're showcasing groundbreaking products, fostering industry connections, or unveiling the latest trends, we bring creativity and precision to every event. Our team excels in curating exhibitions that not only highlight your vision but also engage and inspire attendees, creating a dynamic platform for success.
                    
                        <br/><br/>
                        Let us handle the logistics, from booth design to event management, ensuring a seamless experience. With Asian Adept, your exhibition will be a captivating fusion of creativity, professionalism, and impact, leaving a lasting impression on all your visitors.
                    </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept />
                <CorpServScroller subservices={subservices} maintitle={"Government Service"}/>

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

export default GovEventsEvents;