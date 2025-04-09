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
            name: 'Adventure & Endurance Sports',
            description: "Push limits, build communities, and inspire action through powerful adventure and endurance events. We expertly manage marathons, off-road rallies, cycling tours, and outdoor challenges with seamless logistics and bold creativity. From securing sponsors to managing safety protocols and high-impact branding, our team ensures your event delivers thrill and professionalism in equal measure. Whether you're hosting for a cause, a brand, or pure excitement—we make it impactful and unforgettable. Let’s create a high-energy experience that drives results.",
            image: 'https://picsum.photos/seed/sportsevent/800/500'
        },
        {
            name: 'Corporate Tournaments',
            description: "Unite teams, boost morale, and foster healthy competition with professionally managed corporate tournaments. Whether it’s cricket, football, or badminton, we bring your employees together through sports that energize, engage, and inspire. From venue booking and equipment to scheduling, branding, and hospitality we handle every detail with precision and care. Our events are designed not just for fun, but to build stronger teams and lasting memories. Whether it’s a one-day knockout or a multi-day league, we deliver experiences that score big.",
            image: 'https://picsum.photos/seed/venue/800/500'
        },
        {
            name: 'School & College Sports Meets',
            description: 'Celebrate sportsmanship, talent, and youthful energy with vibrant and well-coordinated school and college sports meets. From interschool rivalry to intercollegiate pride, we plan and manage competitions that are safe, engaging, and flawlessly executed. We handle venue setup, scheduling, registrations, audio-visuals, guest management, and more bringing professionalism and excitement to every corner of your event. Whether it’s a day-long competition or a multi- day tournament, we create experiences that motivate students and strengthen community bonds',
            image: 'https://picsum.photos/seed/athletes/800/500'
        },
    ];


    return (
        <section id="corporate-events" className="py-5 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container-fluid">
                <div className="container service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Sports
                            </h1>
                            <img src={image} alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                            The thrill of competition, the rush of adrenaline, and the spirit of teamwork sports events bring out the best in every participant. At Asian Adept, we specialize in organizing exceptional sports events that capture the energy, excitement, and essence of athletic excellence. With over a decade of experience, we design seamless, well-coordinated sports experiences that leave a lasting impact.
                            <br /><br />From adventure marathons, endurance races, and outdoor sports challenges to corporate
                            tournaments and school sports meets, we ensure every event is executed perfectly. Whether it's
                            a high-profile cycling challenge, an intense cricket match, or a college-level football
                            championship, we handle logistics, event branding, venue management, and sponsorship
                            coordination to create an unforgettable experience.
                            <br /><br />Our expertise extends to corporate sports leagues, offering businesses an engaging way to boost
                            team spirit and networking. For schools and colleges, we craft competitive sports meets that
                            encourage young talent and celebrate athleticism. Our professional planning ensures that
                            everything from referees and equipment to audience engagement and digital coverage is
                            managed with precision. <br /><br />
                            At Asian Adept, we go beyond organizing sports events we build platforms for passion,
                            competition, and triumph. Let’s turn your sports event into an electrifying experience.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept />
                <CorpServScroller subservices={subservices} maintitle={"Sports Service"} />

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
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image1}
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src={image2}
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                        </div>
                    </div>

                    <ContactForm />

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