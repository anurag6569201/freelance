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
            name: 'Public Awareness Campaigns',
            description: "Looking to raise awareness and create meaningful impact? Our Public Awareness Campaigns are designed to do just that. With years of experience managing events for government bodies, corporates, and NGOs, we deliver campaigns that spark conversations and spread the message loud and clear. From roadshows to exhibitions, flash mobs to digital activations we use every platform to amplify your cause. Trust us to plan, promote, and execute a campaign that turns awareness into action. Let’s work together to make a difference.",
            image: 'https://picsum.photos/seed/ceremony/800/500'
        },
        {
            name: 'Political Rallies & Conferences',
            description: "Political events require trust, clarity, and flawless execution and that's exactly what we bring to every rally and conference we manage. We specialize in end-to-end planning that ensures your message reaches every corner of the audience, both on-ground and online. From stage design to security, from sound systems to audience engagement we cover every detail with professionalism and care. Whether it’s a large-scale rally or an exclusive political forum, we help you create the right impression, every time. Make your next political gathering a benchmark in communication and outreach.",
            image: 'https://picsum.photos/seed/awareness/800/500'
        },
        {
            name: 'National & Cultural Celebrations',
            description:"National and Cultural Celebrations deserve more than just planning they deserve passion, precision, and purpose. We specialize in curating events that honor traditions while engaging audiences through captivating experiences. From grand stage setups to folk performances, traditional cuisines, and immersive storytelling we create unforgettable moments that resonate with every age group. Trusted by corporates, schools, and government bodies alike, our events bring people together in celebration of identity and heritage. Let us help you craft a cultural experience that connects, inspires, and leaves a lasting impact.",
            image: 'https://picsum.photos/seed/conference/800/500'
        },
        {
            name: 'Educational & Welfare Programs',
            description: "Empower, educate, and uplift our Educational and Welfare Programs are crafted to bring knowledge and support where it's needed most. Whether it's literacy drives, health awareness, career guidance, or social welfare campaigns, we bring together planning, logistics, and community engagement under one roof. We collaborate with corporates, schools, NGOs, and government departments to create events that are informative, impactful, and well-received. Every detail is handled with heart and precision, ensuring your initiative leaves a lasting footprint. Let’s create programs that don’t just speak but spark change.",
            image: 'https://picsum.photos/seed/election/800/500'
        },
        {
            name: 'Official Summits & Diplomatic Meetings',
            description: "Precision, protocol, and professionalism our expertise in managing Official Summits and Diplomatic Meetings ensures every detail is flawlessly executed. From high-level security arrangements to world-class hospitality, seamless logistics, and discreet coordination, we deliver an event experience that reflects credibility and class. Trusted by government bodies and global organizations, we understand the gravity of diplomacy and the importance of flawless planning. Whether it’s bilateral talks or multi-nation summits, we maintain the highest standards of excellence. Let’s create a dignified setting where decisions are made and alliances are built.",
            image: 'https://picsum.photos/seed/press/800/500'
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
                            Government
                            </h1>
                            <img src={image} alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                        Government events hold the power to inform, engage, and unite citizens toward a common
cause. At Asian Adept, we specialize in seamlessly executing large-scale government events
with precision, professionalism, and impact. Whether it’s a public awareness campaign,
political rally, national celebration, educational initiative, or high-level diplomatic meeting, our
experienced team ensures every event is meticulously planned and flawlessly executed. <br /><br />With over a decade of expertise, we understand the protocols, security measures, and logistical
intricacies that come with organizing government events. Our comprehensive approach
includes venue selection, crowd management, media coordination, branding, and technology
integration, ensuring a smooth and effective execution. We work closely with government
bodies, public organizations, and agencies to deliver events that are not only well-organized
but also resonate with the intended audience. <br /><br /> From empowering awareness programs to grand cultural celebrations and official diplomatic
summits, we tailor our strategies to maximize outreach and engagement. Our ability to blend
innovative solutions, structured planning, and strict compliance with government regulations
makes us a trusted partner for organizing impactful events that make a difference. <br /><br /> At Asian Adept, we don’t just organize government events we create platforms that shape
narratives, drive change, and strengthen communities. Let’s collaborate to make your next
event a resounding success.
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