import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp2.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpServScroller from './corp_serv_scroller';

const SportsEventsEvents = () => {
    const subservices = [
        {
            name: 'Sports Event Planning and Management',
            description: 'Comprehensive planning and management for tournaments, marathons, leagues, and sports festivals.',
            image: 'https://picsum.photos/seed/sportsevent/800/500'
        },
        {
            name: 'Venue Selection and Setup',
            description: 'Assistance in selecting the ideal sports venue and setting up facilities for optimal performance and experience.',
            image: 'https://picsum.photos/seed/venue/800/500'
        },
        {
            name: 'Athlete and Team Management',
            description: 'Coordinated services for athlete registrations, team allocations, and professional handling of participants.',
            image: 'https://picsum.photos/seed/athletes/800/500'
        },
        {
            name: 'Live Streaming and Media Coverage',
            description: 'High-quality live streaming, media partnerships, and real-time updates to reach a global audience.',
            image: 'https://picsum.photos/seed/media/800/500'
        },
        {
            name: 'Sponsorship and Brand Partnerships',
            description: 'Strategic sponsorship acquisition and brand collaborations to enhance the event’s reach and financial backing.',
            image: 'https://picsum.photos/seed/sponsorship/800/500'
        },
        {
            name: 'Ticketing and Audience Management',
            description: 'Seamless ticketing solutions, audience engagement strategies, and on-ground event coordination.',
            image: 'https://picsum.photos/seed/tickets/800/500'
        },
        {
            name: 'Equipment and Logistics',
            description: 'Procurement and setup of sports equipment, team gear, and logistical support for smooth operations.',
            image: 'https://picsum.photos/seed/equipment/800/500'
        },
        {
            name: 'On-Field Technical Support',
            description: 'Providing referees, coaches, and technical support staff to ensure fair and smooth gameplay.',
            image: 'https://picsum.photos/seed/technical/800/500'
        },
        {
            name: 'Medical and Emergency Services',
            description: 'On-site medical support, ambulance services, and emergency response planning for athlete safety.',
            image: 'https://picsum.photos/seed/medical/800/500'
        },
        {
            name: 'Security and Crowd Management',
            description: 'Ensuring safety through professional security personnel, crowd control, and access management.',
            image: 'https://picsum.photos/seed/security/800/500'
        },
        {
            name: 'Event Marketing and Promotions',
            description: 'Customized marketing campaigns, social media promotions, and influencer collaborations for event publicity.',
            image: 'https://picsum.photos/seed/marketing/800/500'
        },
        {
            name: 'Award Ceremonies and Trophies',
            description: 'Planning grand award ceremonies, trophy presentations, and celebration events for winners and participants.',
            image: 'https://picsum.photos/seed/awards/800/500'
        },
        {
            name: 'LED Screens and Scoreboards',
            description: 'Installation of LED screens, real-time scoreboards, and digital displays for an immersive audience experience.',
            image: 'https://picsum.photos/seed/screens/800/500'
        },
        {
            name: 'Post-Event Analysis and Reporting',
            description: 'Detailed analytics, player performance reports, and event insights for future improvements.',
            image: 'https://picsum.photos/seed/analysis/800/500'
        },
        {
            name: 'Community Engagement and CSR Initiatives',
            description: 'Organizing outreach programs, charity matches, and community-building initiatives through sports.',
            image: 'https://picsum.photos/seed/community/800/500'
        },
        {
            name: 'Post-Event Clean-Up and Restoration',
            description: 'Efficient venue clean-up and restoration services for a hassle-free post-event experience.',
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
                            Sports
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
                <CorpServScroller subservices={subservices} maintitle={"Sports Service"}/>

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

export default SportsEventsEvents;