import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp2.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpServScroller from './corp_serv_scroller';

const EventsEvents = () => {
    const subservices = [
        {
            name: 'Event Planning and Coordination',
            description: 'Comprehensive event planning services, from concept development to flawless execution, ensuring a seamless experience.',
            image: 'https://picsum.photos/seed/eventplanning/800/500'
        },
        {
            name: 'Venue Selection and Setup',
            description: 'Find and prepare the perfect venue with layout planning, seating arrangements, and ambiance creation.',
            image: 'https://picsum.photos/seed/venue/800/500'
        },
        {
            name: 'Catering and Hospitality',
            description: 'Delight your guests with exquisite catering options and seamless hospitality services.',
            image: 'https://picsum.photos/seed/catering/800/500'
        },
        {
            name: 'Entertainment and Activities',
            description: 'Engaging entertainment options including live performances, interactive activities, and unique experiences.',
            image: 'https://picsum.photos/seed/entertainment/800/500'
        },
        {
            name: 'Decor and Theme Design',
            description: 'Bespoke event decor and theme designs to create immersive and visually stunning experiences.',
            image: 'https://picsum.photos/seed/decor/800/500'
        },
        {
            name: 'Audio-Visual and Technical Support',
            description: 'State-of-the-art AV equipment, lighting, and technical support for flawless event execution.',
            image: 'https://picsum.photos/seed/avsupport/800/500'
        },
        {
            name: 'Guest Management and Invitations',
            description: 'Streamlined guest management solutions including invitations, RSVPs, and on-site coordination.',
            image: 'https://picsum.photos/seed/guestmanagement/800/500'
        },
        {
            name: 'Transportation and Logistics',
            description: 'Efficient transport and logistics coordination for seamless guest and vendor movement.',
            image: 'https://picsum.photos/seed/transport/800/500'
        },
        {
            name: 'Photography and Videography',
            description: 'Professional photography and videography to capture unforgettable moments.',
            image: 'https://picsum.photos/seed/photography/800/500'
        },
        {
            name: 'Event Staffing',
            description: 'Trained event staff, including hosts, coordinators, and service personnel to manage all aspects of the event.',
            image: 'https://picsum.photos/seed/eventstaff/800/500'
        },
        {
            name: 'Security and Crowd Management',
            description: 'Comprehensive security services to ensure a safe and well-managed event.',
            image: 'https://picsum.photos/seed/security/800/500'
        },
        {
            name: 'Event Marketing and Promotion',
            description: 'Strategic marketing and promotional campaigns to maximize event reach and engagement.',
            image: 'https://picsum.photos/seed/marketing/800/500'
        },
        {
            name: 'Custom Invitations and Printed Materials',
            description: 'Beautifully designed invitations, brochures, and event materials tailored to your theme.',
            image: 'https://picsum.photos/seed/invitations/800/500'
        },
        {
            name: 'Party Favours and Gifts',
            description: 'Curated party favors and gifts to leave a lasting impression on your guests.',
            image: 'https://picsum.photos/seed/gifts/800/500'
        },
        {
            name: 'Lighting and Stage Design',
            description: 'Expert lighting and stage design to enhance the visual appeal and atmosphere of your event.',
            image: 'https://picsum.photos/seed/stagedesign/800/500'
        },
        {
            name: 'Budget Management',
            description: 'Smart financial planning and budget management to optimize event expenses.',
            image: 'https://picsum.photos/seed/budget/800/500'
        },
        {
            name: 'Post-Event Clean Up and Restoration',
            description: 'Efficient clean-up and venue restoration services for a hassle-free post-event experience.',
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
                                Events
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
                <CorpServScroller subservices={subservices} maintitle={"Events Service"}/>

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

export default EventsEvents;