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

const WeddingEventsEvents = () => {
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

    const imgdata1="https://img.freepik.com/free-photo/affectionate-indian-couple-celebrating-propose-day-together_23-2151111017.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
    const imgdata2="https://img.freepik.com/free-photo/front-view-smiley-couple-wedding_23-2149956435.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"

    const subservices = [
        {
            name: 'Pre-Wedding Shoots & Parties',
            description: 'Capture the magic before the vows with our breath-taking pre-wedding shoots. We turn your love story into timeless memories set against stunning backdrops and creative themes. Whether it’s a dreamy getaway or a candid cityscape, our expert photographers ensure every frame speaks your bond. From concept to execution, we personalize every detail to reflect your unique journey. Let your story unfold beautifully before the big day.',
            image: 'https://picsum.photos/seed/prewedding/800/500'
        },
        {
            name: 'Pre-Wedding Parties',
            description: 'Set the stage for your big day with a pre-wedding party that’s nothing short of spectacular. From elegant soirées to high-energy celebrations, we curate unforgettable experiences that bring friends and families together in style. With seamless planning, stunning decor, entertainment, and personalized touches, we ensure your celebration reflects your vibe perfectly. Whether it’s an intimate gathering or a lavish bash, our team handles every detail with care and creativity. Make your pre-wedding party a night to remember',
            image: 'https://picsum.photos/seed/engagement/800/500'
        },
        {
            name: 'Engagement Ceremonies',
            description: 'Celebrate the beginning of forever with an engagement ceremony that’s as beautiful as your love story. We specialize in crafting elegant, heart-warming events that blend tradition with modern flair. From stunning decor and theme planning to smooth coordination and guest hospitality, our team ensures every detail reflects your vision. Whether it’s a cozy family affair or a grand celebration, we make your special day unforgettable. Let us turn your “Yes” into a joyful, seamless event that leaves lasting impressions.',
            image: 'https://picsum.photos/seed/engagement/800/500'
        },
        {
            name: 'Mehndi, Sangeet, Haldi Ceremonies',
            description: 'Celebrate your heritage with elegance and joy through our bespoke Mehndi, Sangeet, and Haldi ceremony planning. We blend tradition with contemporary charm vibrant décor, soulful music, flawless coordination, and a touch of magic in every detail. Be it a rhythmic Sangeet night or a vibrant Haldi morning, we create experiences that feel as special as the bond you’re about to honor. Our team ensures a stress-free, joy-filled celebration tailored to your preferences and traditions.',
            image: 'https://picsum.photos/seed/mehndi/800/500'
        },
        {
            name: 'Destination Weddings',
            description: 'Transform your wedding dreams into reality with our exquisite destination wedding services. We specialize in crafting bespoke celebrations in the world’s most enchanting settings, blending local culture with sophisticated elegance. Our experienced team manages every aspect—from venue selection and décor design to catering and entertainment—ensuring a stress-free, unforgettable event. Whether you envision a serene seaside ceremony or an opulent mountain retreat, we customize every detail to reflect your unique love story. Elevate your celebration with an international experience that captivates guests and creates timeless memories.',
            image: 'https://picsum.photos/seed/destination/800/500'
        },
        {
            name: 'Reception Parties',
            description: 'Your wedding deserves a grand finale, and our reception parties deliver just that style, sparkle, and unforgettable moments. We specialize in curating extraordinary receptions with personalized themes, stunning decor, curated entertainment, and flawless event coordination. Be it a classic ballroom setting or a trendy outdoor soirée, our team brings your vision to life with precision and passion. Impress your guests, enjoy every moment, and let us handle the rest. Make your reception more than just a party make it an experience.',
            image: 'https://picsum.photos/seed/reception/800/500'
        },
        {
            name: 'Anniversary Celebrations',
            description: "Your anniversary is more than a date it's a celebration of love, memories, and togetherness. We craft extraordinary anniversary events filled with charm, elegance, and personal touches. From romantic candlelit gatherings to grand family parties, we bring your celebration to life with seamless planning, tasteful décor, and unforgettable experiences. Whether it’s a silver, golden, or milestone anniversary, we ensure every moment is as special as the love you’re honouring. Let’s make your celebration timeless and unforgettable.",
            image: 'https://picsum.photos/seed/anniversary/800/500'
        }
    ];


    return (
        <section id="corporate-events" className="py-1 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container-fluid">
                <div className="px-2 service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Wedding
                            </h1>
                            <img src="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740" alt="" style={{ height: '80vh', borderRadius: '20px',objectFit:'cover' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                            A wedding is one of the most cherished milestones in life, and every moment deserves to be
                            perfect. At Asian Adept, we are passionate about curating breath taking wedding experiences
                            that blend tradition, elegance, and innovation. Our team specializes in delivering seamless,
                            unforgettable wedding events that cater to diverse styles, cultures, and preferences.

                            <br /><br />
                            From the intimate joy of a pre-wedding shoot to the grandeur of a destination wedding, we
                            ensure that every detail is thoughtfully planned and executed. Whether it’s the lively mehndi,
                            sangeet, or haldi ceremonies, the heartfelt engagement ceremony, or the grand reception party,
                            we create an atmosphere filled with love, joy, and enchantment. Our expert planners work
                            closely with you to understand your vision and transform it into a spectacular celebration. <br /><br />With a keen eye for detail, we craft exquisite decor, immersive entertainment, top-tier
                            hospitality, and coordination, ensuring a stress-free and magical wedding experience. Whether you dream of an opulent ballroom affair or a serene beach wedding, we bring your vision to
                            life with precision and passion. <br /><br />At Asian Adept, we believe that weddings should be as unique as the love they celebrate. Let
                            us turn your dream wedding into a beautiful reality filled with unforgettable moments.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>
                
                <WhyChooseAsianAdept img1={imgdata1} img2={imgdata2} />
                <CorpServScroller subservices={subservices} maintitle={"Wedding Service"} />

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
                                src="https://img.freepik.com/free-photo/navratri-decoration-with-candles_23-2151193769.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/full-shot-people-posing-wedding_23-2149956421.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481476.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/ritual-with-coconut-leaves-traditional-hindu-wedding-ceremony_8353-8911.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/close-up-hindu-bride-s-hands-covered-with-henna-tattoos_8353-8856.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/navratri-highly-detailed-door-decoration_23-2151193774.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
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

export default WeddingEventsEvents;