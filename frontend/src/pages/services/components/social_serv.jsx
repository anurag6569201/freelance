import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp2.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpServScroller from './corp_serv_scroller';

const SocialEvents = () => {
    const subservices = [
        {
            name: 'Weddings',
            description: 'Full-service wedding planning including venue selection, décor, catering, and entertainment for a seamless celebration.',
            image: 'https://picsum.photos/seed/wedding/800/500'
        },
        {
            name: 'Engagement Parties',
            description: 'Elegant engagement celebrations with customized themes, guest management, and event coordination.',
            image: 'https://picsum.photos/seed/engagement/800/500'
        },
        {
            name: 'Birthday Parties',
            description: 'Personalized birthday parties with unique themes, entertainment, and catering for all age groups.',
            image: 'https://picsum.photos/seed/birthday/800/500'
        },
        {
            name: 'Anniversaries',
            description: 'Milestone anniversary celebrations featuring intimate gatherings, fine dining, and memorable experiences.',
            image: 'https://picsum.photos/seed/anniversary/800/500'
        },
        {
            name: 'Baby Showers',
            description: 'Adorable baby shower events with gender reveals, games, and heartwarming decorations.',
            image: 'https://picsum.photos/seed/babyshower/800/500'
        },
        {
            name: 'Housewarming Parties',
            description: 'Warm and welcoming housewarming celebrations with décor, catering, and guest activities.',
            image: 'https://picsum.photos/seed/housewarming/800/500'
        },
        {
            name: 'Graduation Parties',
            description: 'Celebrate academic achievements with customized décor, entertainment, and memorable keepsakes.',
            image: 'https://picsum.photos/seed/graduation/800/500'
        },
        {
            name: 'Family Reunions',
            description: 'Fun-filled family reunions with activities, games, and event planning for a memorable gathering.',
            image: 'https://picsum.photos/seed/familyreunion/800/500'
        },
        {
            name: 'Retirement Parties',
            description: 'Heartfelt retirement celebrations with speeches, tributes, and personalized event themes.',
            image: 'https://picsum.photos/seed/retirement/800/500'
        },
        {
            name: 'Farewell Parties',
            description: 'Memorable farewell parties with emotional send-offs, entertainment, and customized arrangements.',
            image: 'https://picsum.photos/seed/farewell/800/500'
        },
        {
            name: 'Holiday Parties',
            description: 'Festive holiday parties with seasonal themes, live entertainment, and immersive experiences.',
            image: 'https://picsum.photos/seed/holiday/800/500'
        },
        {
            name: 'Theme Parties',
            description: 'Custom-themed parties with immersive décor, interactive activities, and personalized setups.',
            image: 'https://picsum.photos/seed/theme/800/500'
        },
        {
            name: 'Religious Ceremonies',
            description: 'Sacred religious ceremonies with traditional rituals, venue arrangements, and spiritual ambiance.',
            image: 'https://picsum.photos/seed/religious/800/500'
        },
        {
            name: 'Cultural Celebrations',
            description: 'Cultural festivities with authentic performances, traditional cuisine, and heritage-rich experiences.',
            image: 'https://picsum.photos/seed/cultural/800/500'
        },
        {
            name: 'New Year’s Eve Parties',
            description: 'Grand New Year’s Eve celebrations with countdowns, fireworks, and entertainment.',
            image: 'https://picsum.photos/seed/newyear/800/500'
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
                                Social
                            </h1>
                            <img src={image} alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                        Immerse yourself in unforgettable experiences with <strong>Asian Adept</strong>, your trusted partner for
                        exceptional social event planning. Whether it's a casual get-together or a lavish celebration, we bring a unique
                        flair to every occasion. Our team specializes in curating events that foster connections, celebrate milestones,
                        and create lasting memories for all guests.
                        
                        <br/><br/>
                        Let us take care of the details, from venue selection to event coordination, while you enjoy a stress-free,
                        engaging atmosphere. With Asian Adept, your social event will be a seamless blend of fun, elegance, and excitement.
                    </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept />
                <CorpServScroller subservices={subservices} maintitle={"Social Service"}/>

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

export default SocialEvents;