import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp2.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpServScroller from './corp_serv_scroller';

const ExhibitionEvents = () => {
    const subservices = [
        {
            name: 'Art Exhibitions',
            description: 'Showcase artistic talent with curated exhibitions, gallery partnerships, and immersive experiences.',
            image: 'https://picsum.photos/seed/artexhibition/800/500'
        },
        {
            name: 'Trade Exhibitions',
            description: 'Comprehensive trade exhibition planning with industry-specific zoning, vendor coordination, and visitor engagement.',
            image: 'https://picsum.photos/seed/tradeexhibition/800/500'
        },
        {
            name: 'Science and Technology Exhibitions',
            description: 'Innovative science and tech exhibitions featuring groundbreaking research, product showcases, and interactive experiences.',
            image: 'https://picsum.photos/seed/sciencetech/800/500'
        },
        {
            name: 'Fashion and Jewellery Exhibitions',
            description: 'Runway shows, jewellery displays, and exclusive fashion events featuring top designers and brands.',
            image: 'https://picsum.photos/seed/fashionjewellery/800/500'
        },
        {
            name: 'Automobile Exhibitions',
            description: 'Showcase the latest automobiles with test drives, industry speakers, and interactive product demonstrations.',
            image: 'https://picsum.photos/seed/automobile/800/500'
        },
        {
            name: 'Photography Exhibitions',
            description: 'Curate stunning photography exhibitions highlighting creative talent and visual storytelling.',
            image: 'https://picsum.photos/seed/photography/800/500'
        },
        {
            name: 'Food and Beverage Exhibitions',
            description: 'Culinary showcases with gourmet tastings, chef demonstrations, and food industry networking.',
            image: 'https://picsum.photos/seed/foodbeverage/800/500'
        },
        {
            name: 'Craft and Handmade Goods Exhibitions',
            description: 'Celebrate craftsmanship with unique handmade goods, artisan vendors, and live demonstrations.',
            image: 'https://picsum.photos/seed/craft/800/500'
        },
        {
            name: 'Real Estate Exhibitions',
            description: 'Premium real estate expos connecting developers, investors, and property seekers.',
            image: 'https://picsum.photos/seed/realestate/800/500'
        },
        {
            name: 'Sports and Fitness Exhibitions',
            description: 'Showcasing the latest in sports equipment, fitness trends, and athlete meet-and-greets.',
            image: 'https://picsum.photos/seed/sportsfitness/800/500'
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
                                Exhibition
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
                <CorpServScroller subservices={subservices} maintitle={"Exhibition Service"}/>

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

export default ExhibitionEvents;