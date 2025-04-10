import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../assets/images/services/corp/corp2.png'
import { Image } from "react-bootstrap";
import WhyChooseAsianAdept from './whychoose';

import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation
import ContactForm from './corp_serv_form';
import CorpServScroller from './corp_serv_scroller';

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ExhibitionEvents = () => {
    const location = useLocation();
    const { pathname, hash } = location;
    useEffect(() => {
        if (hash) {
            const elementId = hash.slice(1);
            const element = document.getElementById(elementId);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }, [hash]);

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
    }, [pathname, hash]);

    const subservices = [
        {
            name: 'Industry Trade Shows & Expos',
            description: "Make your brand the showstopper at the next industry expo. We specialize in curating impactful trade show experiences that attract attention, engage audiences, and create lasting impressions. From concept to execution, our expert team handles every detail booth design, branding, tech integration, and logistics to ensure your presence is bold and unforgettable. Whether you're launching a product or building industry connections, we make it seamless and successful.",
            image: 'https://picsum.photos/seed/artexhibition/800/500'
        },
        {
            name: 'Art & Cultural Exhibitions',
            description: "Bring stories to life through unforgettable art and cultural exhibitions. We specialize in designing and managing events that celebrate diversity, creativity, and tradition creating an emotional connection between your audience and the artwork. From intricate detailing to flawless coordination, we handle everything with professionalism and passion. Whether it’s a solo exhibition or a multi-artist cultural fest, our team ensures your message resonates deeply and your event runs effortlessly. Let’s build a platform that honors talent and touches lives.",
            image: 'https://picsum.photos/seed/tradeexhibition/800/500'
        },
        {
            name: 'Automobile & Technology Expos',
            description: "Accelerate your brand presence at the forefront of innovation with our expertly managed automobile and technology expos. We bring your vision to life with immersive layouts, interactive showcases, and state-of-the-art execution. Whether you're an auto brand, tech startup, or industry leader, we ensure your expo delivers impact, sparks engagement, and attracts the right audience. From concept planning to live demonstrations, we handle it all with professionalism and a passion for perfection. Let’s create an experience that puts your brand in the driver’s seat.",
            image: 'https://picsum.photos/seed/sciencetech/800/500'
        },
        {
            name: 'Education & Career Fairs',
            description: "Shape futures and build opportunities with expertly managed education and career fairs. We bring institutions, recruiters, and aspiring minds together in professionally organized events that foster meaningful connections. From student-friendly layouts to seamless coordination, every detail is designed to inspire, inform, and engage. Whether it’s a university showcase or a multi-industry career expo, we ensure your event is impactful, well-branded, and efficiently executed. Let us help you create a platform where knowledge meets opportunity.",
            image: 'https://picsum.photos/seed/fashionjewellery/800/500'
        },
        {
            name: 'Fashion & Lifestyle Exhibitions',
            description: "Step into the spotlight with fashion and lifestyle exhibitions that dazzle, inspire, and sell. We craft visually stunning, trend-driven events that bring together designers, influencers, and shoppers under one roof. From elegant layouts to interactive brand showcases, every detail is carefully designed to elevate your brand and create unforgettable experiences. Whether launching a new collection or hosting a lifestyle pop-up, we ensure your event draws the right audience and delivers real impact. Let’s turn your vision into a fashion-forward experience that commands attention",
            image: 'https://picsum.photos/seed/automobile/800/500'
        },
    ];
    const imgdata1 = "https://img.freepik.com/free-photo/group-people-city-composition_23-2148993228.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
    const imgdata2 = "https://img.freepik.com/free-vector/exhibition-announcement-advertising-invitation_98292-4487.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"


    return (
        <section id="corporate-events" className="py-5 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container-fluid">
                <div className="container service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Exhibition
                            </h1>
                            <img src="https://img.freepik.com/free-photo/beautiful-pier-view_1417-1690.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740" alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                        Exhibitions are not just about displays, they are dynamic experiences that connect businesses,
artists, innovators, and audiences in meaningful ways. At Asian Adept, we specialize in
curating engaging, impactful, and seamlessly executed exhibitions that elevate brands, spark
conversations, and drive real engagement. Whether it’s an industry trade show, art & cultural
exhibition, automobile & technology expo, education & career fair, or fashion & lifestyle event,
we bring your vision to life with precision and creativity <br /><br />Our expertise covers strategic planning, space management, exhibitor coordination, branding,
audience engagement, and on-site execution ensuring that every event is meticulously crafted
for success. We create an immersive atmosphere where exhibitors connect with the right
audience, fostering opportunities for business growth, artistic recognition, and valuable
networking. From grand industry expos to exclusive boutique showcases, we tailor each
exhibition to surpass expectations and deliver a high-impact experience. <br /><br />At Asian Adept, we don’t just organize exhibitions we transform them into extraordinary
experiences that captivate, inspire, and leave a lasting impression. Whether you’re launching a
ground-breaking product, unveiling artistic masterpieces, or fostering industry connections, we
ensure your exhibition stands out in every way.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept img1={imgdata1} img2={imgdata2} />

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

                <div className="container-fluid">
                    <div className="row my-5 text-center">
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/navratri-highly-detailed-interior-decoration_23-2151193716.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/tanned-caucasian-female-wearing-floral-mask-amusement-park_181624-33782.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-vector/pictures-exhibition-illustration_1284-12853.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/people-enjoying-art-exhibition_53876-139909.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-vector/art-gallery-exhibition-hall-empty-interior-vector_1441-3868.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/young-man-going-art-gallery_23-2149709119.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
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