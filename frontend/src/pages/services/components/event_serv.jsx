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

const EventsEvents = () => {
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
            name: 'Live Concerts & Music Festivals',
            description: "Where sound meets spectacle. Our expert team crafts live concerts and music festivals that thrill audiences and elevate brands. From indie vibes to large-scale music fests, we manage it all artist coordination, AV production, logistics, and safety ensuring a seamless, high-energy experience. Whether you're a corporate sponsor or an independent organizer, we tailor each event to captivate and connect. Let the crowd sing, dance, and remember your event for years.",
            image: 'https://picsum.photos/seed/concert/800/500'
        },
        {
            name: 'Award Shows & Film Premieres',
            description: "Lights. Camera. Perfection. We craft breath-taking award shows and film premieres that celebrate achievements with elegance and style. From celebrity coordination and redcarpet setups to lighting, sound, and audience experience we manage every detail with finesse. Whether it’s a corporate recognition event or a glamorous movie launch, our team ensures it shines at every angle. Let your stars and stories take center stage while we handle the magic behind the scenes",
            image: 'https://picsum.photos/seed/stage/800/500'
        },
        {
            name: 'Comedy & Stand-Up Shows',
            description: "Laughter is the loudest applause and we know how to deliver it. Our team curates unforgettable comedy and stand-up shows that turn ordinary evenings into extraordinary experiences. From corporate laughter nights and college gigs to public shows and private parties, we handle artist bookings, stage setup, lighting, and crowd engagement with seamless professionalism. Whether you want clean corporate humor or bold, high-energy acts, we tailor each show to your audience.",
            image: 'https://picsum.photos/seed/lighting/800/500'
        },
        {
            name: 'Celebrity & Influencer Meetups',
            description: "Give your event the spotlight it deserves with celebrity and influencer meetups that captivate, engage, and elevate your brand. We specialize in organizing seamless interactions between audiences and renowned personalities be it for corporate branding, entertainment nights, product endorsements, or fan events. Our team handles everything from celebrity liaison to event logistics, ensuring a high-profile experience that feels personal and polished. In today’s digital world, influencer presence can make or break momentum let us make it memorable.",
            image: 'https://picsum.photos/seed/celebrity/800/500'
        },
        {
            name: 'Club & Nightlife Events',
            description: "When the sun goes down, we bring the city to life. Our club and nightlife events are all about high energy, stylish vibes, and unforgettable memories. From exclusive VIP parties and brand activations to DJ nights and themed experiences, we handle every element venue selection, artist bookings, lighting, sound, and crowd engagement. Whether you're a brand aiming to create buzz or a host planning a packed house, we tailor every detail to perfection. Let’s set the night on fire",
            image: 'https://picsum.photos/seed/audio/800/500'
        },
        {
            name: 'Reality Shows & Talent Hunts',
            description: "We specialize in creating buzzworthy reality shows and talent hunts that blend entertainment with opportunity. From scouting raw talent to managing grand finales, our team delivers complete end-to-end production with creativity, professionalism, and precision. Whether it’s a school talent search, corporate-themed contest, or nationwide reality series, we handle everything — casting, scripting, production, and promotions. Our shows don’t just entertain; they inspire, engage, and leave a mark. Let’s build a platform where stories unfold, talents shine, and memories are made.",
            image: 'https://picsum.photos/seed/marketing/800/500'
        },
        {
            name: 'Movie Promotions & OTT Launches',
            description: "Create buzz before the first frame rolls. We specialize in high-impact movie promotions and OTT launches that capture attention and spark conversations. From star-studded media events and influencer tie-ups to press meets, fan engagement, and immersive experiences we execute every detail with cinematic flair. Whether it’s a theatrical blockbuster or an OTT original, we ensure your launch goes viral and stays memorable. Let us craft your premiere moment where the screen meets the spotlight.",
            image: 'https://picsum.photos/seed/videoproduction/800/500'
        },
    ];
    const imgdata1 = "https://img.freepik.com/free-photo/boy-with-vr-glasses-cinema_23-2148115861.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
    const imgdata2 = "https://img.freepik.com/free-photo/musician-playing-electronic-music-live-performance-nightclub-dj-headphones-mixing-sound-controller-panel-stage-while-crowd-partying-discotheque-club_482257-67146.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"

    return (
        <section id="corporate-events" className="py-5 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container-fluid">
                <div className="container service-item row align-items-center">
                    <div className="col-md-12">
                        <div className="service-title mb-4" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='lead text-center fs-6'>SERVICES</p>
                            <h1 className="text-uppercase font-weight-bold text-center">
                                Entertainment
                            </h1>
                            <img src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740" alt="" style={{ height: '70vh', borderRadius: '20px' }} />
                        </div>
                        <p class="service-description text-muted mb-4">
                            Entertainment events aren’t just about performances they’re about unforgettable experiences
                            that ignite emotions, captivate audiences, and leave an indelible mark. At Asian Adept, we
                            master the art of crafting high-energy, visually stunning, and seamlessly executed
                            entertainment experiences. Whether it’s electrifying live concerts, grand music festivals,
                            prestigious award shows, star-studded film premieres, or OTT launches, we deliver moments
                            that resonate beyond the stage. <br /><br /> With over a decade of expertise, we understand that entertainment events demand flawless
                            execution, strategic planning, and immersive engagement. From breath taking stage designs
                            and cutting-edge audio-visual setups to seamless artist coordination and crowd engagement,
                            we ensure every aspect is curated to perfection. Whether it’s an exclusive nightclub event, a
                            power-packed reality show, a high-profile celebrity meetup, or an influencer-driven
                            experience, we create an atmosphere where excitement thrives and memories are made. <br /><br />Our expertise spans event ideation, talent and artist management, venue selection, security
                            protocols, media collaborations, and viral digital promotions guaranteeing maximum visibility
                            and audience impact. We collaborate with leading brands, production houses, and
                            entertainment moguls to craft world-class spectacles that don’t just entertain but elevate
                            experiences. <br /><br />At Asian Adept, we don’t just organize events we engineer entertainment that captivates,
                            excites, and inspires. Whether you’re envisioning a thrilling live concert, a red-carpet award
                            night, or an immersive influencer extravaganza, we bring your vision to life. Let’s set the stage
                            for something legendary.
                        </p>
                        <div className="text-left mb-5">
                            <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                        </div>
                    </div>
                </div>

                <WhyChooseAsianAdept img1={imgdata1} img2={imgdata2} />
                <CorpServScroller subservices={subservices} maintitle={"Entertainment Service"} />

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
                                src="https://img.freepik.com/free-photo/close-up-recording-video-with-smartphone-concert_1153-7310.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/professional-tv-camera-set-up-concert-venue_91128-3567.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/back-view-excited-audience-with-arms-raised-cheering-front-stage-music-concert-copy-space_637285-538.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/people-festival_1160-736.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 1"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/multiethnic-team-people-meeting-broadcast-internet-podcast-recording-video-discussion-camera-influencer-guest-talking-online-livestream-create-social-media-channel-content_482257-45714.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
                                alt="Corporate Event 2"
                                className="img-fluid rounded shadow"
                                style={{ objectFit: "cover", height: "260px", width: "100%" }}
                            />
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <Image
                                src="https://img.freepik.com/free-photo/medium-shot-smiley-people-playing-videogame_23-2149350011.jpg?ga=GA1.1.1414907394.1744281754&semt=ais_hybrid&w=740"
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

export default EventsEvents;