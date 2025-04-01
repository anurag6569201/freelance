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
            name: 'Concert and Live Show Management',
            description: 'Full-scale planning and execution of concerts, music festivals, and live performances with top-tier production quality.',
            image: 'https://picsum.photos/seed/concert/800/500'
        },
        {
            name: 'Stage Design and Setup',
            description: 'Innovative stage designs, custom setups, and immersive backdrops to enhance the visual impact of performances.',
            image: 'https://picsum.photos/seed/stage/800/500'
        },
        {
            name: 'Lighting and Special Effects',
            description: 'Dynamic lighting setups, laser shows, pyrotechnics, and special effects to create unforgettable experiences.',
            image: 'https://picsum.photos/seed/lighting/800/500'
        },
        {
            name: 'Celebrity and Artist Booking',
            description: 'Seamless coordination for booking celebrities, musicians, DJs, and performers for your entertainment events.',
            image: 'https://picsum.photos/seed/celebrity/800/500'
        },
        {
            name: 'Sound and Audio Engineering',
            description: 'State-of-the-art audio systems, live sound mixing, and technical support for clear, immersive sound quality.',
            image: 'https://picsum.photos/seed/audio/800/500'
        },
        {
            name: 'Event Promotion and Marketing',
            description: 'Targeted digital and offline marketing campaigns to maximize audience engagement and event turnout.',
            image: 'https://picsum.photos/seed/marketing/800/500'
        },
        {
            name: 'Video Production and Live Streaming',
            description: 'High-quality video production, multi-camera live streaming, and post-event video editing services.',
            image: 'https://picsum.photos/seed/videoproduction/800/500'
        },
        {
            name: 'VIP and Backstage Management',
            description: 'Exclusive VIP area management, artist hospitality, and backstage coordination for high-profile events.',
            image: 'https://picsum.photos/seed/vip/800/500'
        },
        {
            name: 'Festival and Carnival Organization',
            description: 'Comprehensive planning for large-scale festivals, carnivals, and themed entertainment events.',
            image: 'https://picsum.photos/seed/festival/800/500'
        },
        {
            name: 'Interactive and Immersive Experiences',
            description: 'Virtual reality zones, interactive booths, and gamified experiences to engage audiences dynamically.',
            image: 'https://picsum.photos/seed/interactive/800/500'
        },
        {
            name: 'Security and Crowd Control',
            description: 'Professional security services, crowd management, and risk assessment for large-scale events.',
            image: 'https://picsum.photos/seed/security/800/500'
        },
        {
            name: 'Merchandising and Brand Partnerships',
            description: 'Custom merchandise production and brand collaborations to enhance event branding and revenue.',
            image: 'https://picsum.photos/seed/merchandise/800/500'
        },
        {
            name: 'Red Carpet and Award Show Planning',
            description: 'Elegant red carpet setups, award ceremonies, and gala events designed with precision and style.',
            image: 'https://picsum.photos/seed/redcarpet/800/500'
        },
        {
            name: 'Film Screening and Premiere Events',
            description: 'Exclusive film screenings, premieres, and press events with high-end execution and publicity.',
            image: 'https://picsum.photos/seed/filmscreening/800/500'
        },
        {
            name: 'Post-Event Analysis and Reporting',
            description: 'Data-driven analysis and reporting to measure event success and improve future entertainment experiences.',
            image: 'https://picsum.photos/seed/reporting/800/500'
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
                            Entertainment
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
                <CorpServScroller subservices={subservices} maintitle={"Entertainment Service"}/>

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