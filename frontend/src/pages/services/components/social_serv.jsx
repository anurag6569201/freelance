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

const SocialEvents = () => {
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
            name: 'Birthday Parties',
            description: "Looking to throw a birthday bash that truly stands out? We specialize in crafting unique and joyful birthday experiences for all age’s kids, teens, adults, and even corporate birthday celebrations. From eye-catching decorations to interactive entertainment and seamless coordination, we manage it all with precision and heart. Whether it's an intimate gathering or a grand affair, we tailor each event to match your style and budget. Create moments that matter with our expert team by your side.",
            image: 'https://picsum.photos/seed/birthday/800/500'
        },
        {
            name: 'Baby Showers & Naming Ceremonies',
            description: 'Welcoming a new life deserves a celebration that’s as special as the moment itself. Our baby shower and naming ceremony planning services blend tradition with creativity, offering a personalized and seamless experience. From dreamy décor and curated rituals to guest management and photo-worthy setups, we take care of every detail with love and precision. Whether you prefer a modern celebration or a culturally rich ceremony, we bring your vision to life with warmth and professionalism.',
            image: 'https://picsum.photos/seed/babyshower/800/500'
        },
        {
            name: 'Reunions (Family, School, College)',
            description: "Reconnect, reminisce, and relive beautiful memories with our expertly planned reunion events. Whether it's a warm family gathering, a school get-together, or a college batch reunion, we create unforgettable experiences that bring everyone closer. From venue selection and themed décor to entertainment, photography, and hospitality we handle it all, so you can focus on the joy of reconnecting. Let us help you celebrate the bonds that time can’t break.",
            image: 'https://picsum.photos/seed/reunion/800/500'
        },
        {
            name: 'Farewell & Welcome Parties',
            description: "Every goodbye deserves a graceful farewell, and every new beginning calls for a grand welcome. We plan heartfelt farewell and lively welcome parties that celebrate people, milestones, and new journeys. Whether it's for employees, students, teachers, or loved ones, we handle everything from décor and entertainment to speeches and coordination with care and creativity. Our events strike the perfect balance between emotion and excitement, leaving lasting impressions. Let us help you honor the past and embrace the future in style.",
            image: 'https://picsum.photos/seed/farewell/800/500'
        },
        {
            name: 'Housewarming Ceremonies',
            description: "A new home marks a fresh beginning and it deserves to be celebrated with warmth, joy, and elegance. Our housewarming ceremony planning blends tradition with modern flair, offering complete event solutions from décor and catering to rituals and guest management. Whether it's a spiritual pooja or a stylish celebration, we curate every detail to match your vision. Let your first memories in your new home be filled with love, laughter, and stunning moments. Trust us to create a welcoming atmosphere that your guests will remember.",
            image: 'https://picsum.photos/seed/housewarming/800/500'
        },
        {
            name: 'Religious Festivals',
            description: "Religious festivals are more than just events they’re moments of deep faith, joy, and community bonding. We specialize in managing large-scale and intimate religious celebrations with the utmost respect for tradition and detail. From setting up stages, lighting, and audio systems to coordinating rituals, prasad distribution, and cultural programs we ensure every element is thoughtfully handled. Whether it’s for a society, trust, temple, or private group, we make your festival vibrant, organized, and unforgettable.",
            image: 'https://picsum.photos/seed/religiousfestival/800/500'
        },
        {
            name: 'Themed Events or Parties',
            description: "Why settle for ordinary when your event can be extraordinary? Our themed events and parties are designed to transport your guests into a whole new world. From fairytale-inspired birthdays and movie nights to corporate gala themes and cultural evenings, we deliver fully immersive experiences tailored to your occasion and audience. With creative concepts, thematic décor, lighting, entertainment, and coordination we turn your ideas into unforgettable celebrations. Whether it's fun, formal, or fantasy, we execute it with style and perfection.",
            image: 'https://picsum.photos/seed/themedparty/800/500'
        },
        {
            name: 'Milestone Celebrations (Retirements, Promotions)',
            description: "Celebrate achievements and transitions in style with our customized milestone event planning. Whether it’s a prestigious promotion or a graceful retirement, we craft experiences that reflect the significance of the occasion. From professional setups for corporate environments to warm, personal gatherings we handle every detail, including venue, décor, catering, and heartfelt tributes. We ensure your event feels meaningful, memorable, and seamless from start to finish. Mark the next chapter with a celebration that leaves a lasting impression.",
            image: 'https://picsum.photos/seed/milestone/800/500'
        },
        {
            name: 'New Year’s Eve Parties',
            description: "Say goodbye to the old and hello to new beginnings with a New Year’s Eve party like no other. We specialize in creating electrifying NYE experiences complete with glamorous themes, top- notch entertainment, dance floors, fireworks, gourmet dining, and the perfect countdown. Whether it’s a corporate celebration or a private gathering, our team brings energy, elegance, and excitement to every corner of your event. Let us help you end the year on a high and step into the next with unforgettable joy.",
            image: 'https://picsum.photos/seed/newyear/800/500'
        },
        {
            name: 'Graduation Ceremonies or Parties',
            description: "Celebrate the turning point from dreams to reality with a graduation ceremony that honors every step of the journey. We specialize in creating impactful, seamless events that combine formal tradition with joyful celebration. From curated stage design, mementos, and backdrops to live streaming, crowd management, and event flow we handle everything with precision and care. Whether you're a school, university, or family organizing a personal milestone event, we promise an unforgettable experience that captures the pride of the moment.",
            image: 'https://picsum.photos/seed/graduation/800/500'
        },
        {
            name: 'Cultural Celebrations',
            description: "Celebrate culture, tradition, and unity with vibrant cultural events that reflect the true spirit of your community. From regional festivals and folk performances to inter-cultural evenings and traditional rituals we bring authenticity, creativity, and flawless execution to every celebration. Whether it’s a society function, school event, or organizational festivity, we manage it all stage setups, artists, décor, audio-visuals, and crowd flow. Our team blends cultural richness with modern professionalism to create events that captivate and connect. Let’s honor heritage together.",
            image: 'https://picsum.photos/seed/culturalcelebration/800/500'
        },
        // {
        //     name: 'Fashion Shows',
        //     description: 'Host glamorous fashion shows showcasing the latest trends, with model coordination, venue decoration, and event styling.',
        //     image: 'https://picsum.photos/seed/fashionshow/800/500'
        // }
    ];

    const imgdata1 = "https://img.freepik.com/free-photo/family-having-indian-food_53876-40943.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
    const imgdata2 = "https://img.freepik.com/free-photo/typical-indian-family-eating-together_123827-29560.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"


    return (
        <section id="corporate-events" className="py-1 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container-fluid">
                <div className="px-2 service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Social
                            </h1>
                            <img src="https://img.freepik.com/free-photo/vibrant-summer-soiree-scene-with-guests-adorned-punchy-fuchsia-mingling-around-table-laden-with-gourmet-dishes_73899-27524.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740" alt="" style={{ height: '80vh', borderRadius: '20px',objectFit:'cover' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                            Every celebration tells a story, and we make sure it’s one to remember. At Asian Adept, we
                            specialize in curating exceptional social events that bring your dreams to life. Whether it’s a
                            birthday bash, baby shower, school reunion, or housewarming ceremony, we transform your
                            vision into a seamlessly executed event filled with joy and excitement.

                            <br /><br />
                            From themed parties and New Year’s Eve celebrations to cultural festivals and milestone
                            achievements, our expertise spans across a diverse range of social gatherings. We handle
                            everything event décor, entertainment, food arrangements, and logistics so you can focus on
                            enjoying the moment with your loved ones. Our team combines creativity, precision, and
                            passion to design events that reflect your personality and style. <br /><br />We don’t just plan events, we craft experiences that leave a lasting impact. Whether it’s an
                            intimate family celebration or a large-scale cultural festivity, we are here to make it perfect and
                            unforgettable.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept img1={imgdata1} img2={imgdata2} />
                <CorpServScroller subservices={subservices} maintitle={"Social Service"} />

                <div className="container">
                    <h2 className="text-uppercase fw-bold pt-3 display-5 text-dark px-5">Our Services</h2>
                    <div className="row justify-content-center">
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

                <div className="container-fluid mb-3">
                    <div className="row my-5 text-center">
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/good-friends-celebrating-new-year-that-s-coming_23-2149144076.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/adults-enjoying-mexican-food_23-2149663877.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/front-view-smiley-groom-bride_23-2149956455.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/medium-shot-smiley-women-with-smartphone_23-2149461763.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/lovely-family-enjoying-new-year-party_23-2149173252.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/side-view-people-celebrating-tamil-new-year_23-2151210764.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
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

export default SocialEvents;