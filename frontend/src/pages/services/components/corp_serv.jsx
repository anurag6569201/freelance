import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp10.jpg'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png";
import image3 from "../../../assets/images/services/corp/corp3.png";
import ContactForm from './corp_serv_form';
import CorpSubCategory from './serv_subcategory';
import CorpServScroller from './corp_serv_scroller';

const CorporateEvents = () => {
    const subservices = [
        {
            name: 'Office/Store/Factory Inauguration',
            description: "Opening a new office, store, or factory is a moment of pride and it deserves to be celebrated with style. We specialize in organizing impactful inauguration events that blend tradition with innovation. From setting up the perfect stage to managing VIP guests, catering, and branding elements, we ensure everything runs flawlessly. Our focus is on creating a memorable first impression that boosts your brand visibility and connects with your audience. Whether it's a corporate launch or a community celebration, we craft experiences that resonate.",
            image: 'https://picsum.photos/seed/inauguration/800/500'
        },
        {
            name: 'Annual Corporate Events',
            description: 'Make your annual corporate event more than just a date on the calendar make it an experience to remember. We specialize in end-to-end planning for corporate gatherings that reflect your company’s values and celebrate its achievements. From award nights and annual meets to gala dinners and team-building retreats, we craft every detail with precision. Our goal is to impress your stakeholders, engage your teams, and deliver a seamless, stress-free execution. Let your brand shine with an event that inspires and connects.',
            image: 'https://picsum.photos/seed/annualevent/800/500'
        },
        {
            name: 'Conferences & Seminars',
            description: 'Conferences and seminars are more than just gatherings they’re platforms for knowledge, networking, and growth. We design and manage events that spark ideas, drive engagement, and create impact. From academic forums to corporate leadership panels, our expert team handles everything from logistics and audio-visuals to delegate management and branding. Whether it’s a small workshop or a large-scale seminar, we ensure your message is heard loud and clear. Deliver professionalism at every step and make your event stand out.',
            image: 'https://picsum.photos/seed/conferences/800/500'
        },
        {
            name: 'Corporate Social Responsibility (CSR) Events',
            description: 'CSR events are more than goodwill they’re a reflection of your brand’s values. We help you plan and execute meaningful Corporate Social Responsibility events that create real impact. Whether it’s a community drive, sustainability initiative, health camp, or educational outreach, our team ensures smooth coordination, impactful storytelling, and responsible branding. We align your mission with memorable experiences that build stronger community ties and brand reputation. Let us help you turn purpose into action with an event that truly matters.',
            image: 'https://picsum.photos/seed/csr/800/500'
        },
        {
            name: 'MICE Events',
            description: 'MICE events are the heartbeat of professional engagement and we’re here to make them unforgettable. We specialize in curating powerful meetings, inspiring incentive programs, strategic conferences, and immersive exhibitions. With meticulous planning, creative direction, and flawless execution, we bring together people, ideas, and impact under one roof. Whether you’re building brand authority or fostering global connections, we ensure every detail reflects your vision and professionalism. Experience the difference of working with a team that understands both precision and passion.',
            image: 'https://picsum.photos/seed/mice/800/500'
        },
        {
            name: 'Product Launches',
            description: "Your product deserves more than a reveal it deserves a grand entrance. We craft impactful product launch events that create buzz, build anticipation, and drive engagement from the very first moment. From concept to execution, we handle venue setup, AV, media coverage, branding, and audience interaction ensuring your launch tells a compelling story. Whether it's a tech innovation, fashion line, or new service, we align every detail with your brand's identity and business goals. Let your product shine in the spotlight it deserves.",
            image: 'https://picsum.photos/seed/productlaunch/800/500'
        },
        {
            name: 'Corporate Retreats & Team Building',
            description: "Strong teams don’t happen by chance they're built through shared experiences and meaningful moments. Our corporate retreats and team-building activities are designed to inspire collaboration, ignite creativity, and foster trust among your workforce. From adventure-based outings to goal-oriented workshops, we tailor each retreat to reflect your company’s culture and objectives. Whether it's a weekend getaway or a one-day immersive event, we manage everything to perfection. Give your team the motivation they need to perform at their best. Let’s create an experience they’ll never forget.",
            image: 'https://picsum.photos/seed/retreat/800/500'
        },
        {
            name: 'Board Meetings & Shareholder Gatherings',
            description: 'Board meetings and shareholder gatherings demand a setting that speaks of class, clarity, and control. We ensure every aspect of your high-stakes meetings is handled with the utmost professionalism. Whether it’s an annual general meeting or a closed-door boardroom session, we provide secure, well-equipped venues, timely coordination, and discreet service. Our goal is to help you create a productive atmosphere where decisions are made and confidence is built. Elevate the way you host critical gatherings',
            image: 'https://picsum.photos/seed/boardmeeting/800/500'
        },
        {
            name: 'Corporate Milestone Celebrations & Anniversaries',
            description: 'Your company’s milestones deserve more than recognition they deserve celebration. We craft corporate anniversary and milestone events that reflect your brand’s journey, achievements, and values. From concept creation to flawless execution, we handle everything venue, themes, guest experience, presentations, and more. Whether it’s a silver jubilee, product success, or leadership recognition, we ensure the occasion leaves a lasting mark on everyone present. Inspire pride among employees, appreciation among clients, and confidence among stakeholders. Let’s celebrate your success story in a way that builds lasting connections.',
            image: 'https://picsum.photos/seed/milestone/800/500'
        },
        {
            name: 'Networking Events',
            description: "Networking is the heartbeat of growth and we know how to make every interaction count. We plan and execute networking events that are professional, engaging, and result-driven. Whether it's an exclusive corporate mixer, an industry meet-up, or a business brunch, we tailor every detail to foster real conversations and strategic connections. From stylish venues to smooth coordination, we ensure your guests experience comfort, clarity, and class. Make your brand the bridge to powerful partnerships. Let’s create a networking event that delivers value beyond the room.",
            image: 'https://picsum.photos/seed/networking/800/500'
        },
        {
            name: 'Sales, Dealers, and Suppliers Conference',
            description: "Your sales teams, dealers, and suppliers are the backbone of your business and they deserve an event that energizes, informs, and inspires. Our expertly curated conferences bring together your key players in a setting that encourages alignment, motivation, and mutual growth. We manage everything from conceptual planning and branding to logistics, tech, and engagement activities. Whether it’s an annual dealers' meet or a strategic supplier gathering, we ensure your event runs flawlessly and delivers real value. Celebrate partnerships, boost performance, and set the tone for future success.",
            image: 'https://picsum.photos/seed/salesconference/800/500'
        }
    ];

    return (
        <section id="corporate-events" className="py-5 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container-fluid">
                <div className="container service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Corporate
                            </h1>
                            <img src={image} alt="" style={{ height: '70vh', borderRadius: '20px', objectFit: 'cover' }} />
                        </div>
                        <p className="text-muted mb-4">
                            In today’s dynamic business world, corporate events are more than just meetings, they are
                            opportunities to build relationships, strengthen brands, and drive business success. Whether
                            it’s an annual conference, product launch, award ceremony, or executive retreat, every
                            corporate event must be meticulously planned and flawlessly executed to leave a lasting
                            impression. With over 10 years of industry experience, our expert team at Asian Adept
                            specializes in crafting events that inspire, engage, and deliver measurable impact.
                            <br /><br />
                            We understand that corporate events are a direct reflection of your brand’s values and
                            reputation. That’s why we take a strategic and detail-oriented approach to event planning,
                            ensuring that everything from venue selection and stage design to technology integration and
                            guest experience is executed with precision. Our customized solutions cater to businesses of
                            all sizes, helping them achieve their goals while providing a seamless and stress-free event
                            experience <br /><br />Our expertise spans a wide range of corporate events, including high-profile conferences,
                            leadership summits, investor meetings, networking events, brand activations, and team-
                            building retreats. We leverage cutting-edge technology, innovative design, and industry best
                            practices to make every event stand out. Whether you need a formal setting with a sophisticated
                            ambiance or an interactive experience that fosters engagement, we ensure a flawless execution
                            that exceeds expectations. <br /><br />At Asian Adept, we don’t just plan events we create powerful experiences that drive results.
                            Let us take your corporate event to the next level.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept />
                <CorpServScroller subservices={subservices} maintitle={"Corporate Service"} />

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

export default CorporateEvents;