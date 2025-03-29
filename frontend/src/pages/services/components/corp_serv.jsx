import 'bootstrap/dist/css/bootstrap.min.css';

const CorporateEvents = () => {
    const subservices = [
        {
            name: 'Conferences',
            description: 'Organize large-scale conferences with expert planning, venue selection, and attendee management. We handle everything from keynote arrangements to breakout sessions.',
            image: 'https://picsum.photos/seed/conference/800/500'
        },
        {
            name: 'Seminars',
            description: 'Host impactful seminars with professional speaker coordination, content development, and audience engagement strategies.',
            image: 'https://picsum.photos/seed/seminar/800/500'
        },
        {
            name: 'Workshops',
            description: 'Interactive workshops featuring hands-on learning experiences, expert facilitators, and customized training materials.',
            image: 'https://picsum.photos/seed/workshop/800/500'
        },
        {
            name: 'Product Launches',
            description: 'Create buzzworthy product launches with immersive experiences, media coordination, and influencer engagements.',
            image: 'https://picsum.photos/seed/productlaunch/800/500'
        },
        {
            name: 'Trade Shows',
            description: 'End-to-end trade show management including booth design, logistics, and lead generation strategies.',
            image: 'https://picsum.photos/seed/tradeshow/800/500'
        },
        {
            name: 'Expo and Exhibitions',
            description: 'Large-scale expo management with thematic zoning, vendor coordination, and visitor flow optimization.',
            image: 'https://picsum.photos/seed/expo/800/500'
        },
        {
            name: 'Networking Events',
            description: 'Curated networking events with matchmaking algorithms, ice-breaking activities, and relationship-building sessions.',
            image: 'https://picsum.photos/seed/networking/800/500'
        },
        {
            name: 'Team-Building Events',
            description: 'Custom team-building programs featuring adventure activities, problem-solving challenges, and leadership exercises.',
            image: 'https://picsum.photos/seed/teambuilding/800/500'
        },
        {
            name: 'Corporate Retreats',
            description: 'Destination retreats combining strategic planning sessions with recreational activities in inspiring locations.',
            image: 'https://picsum.photos/seed/retreat/800/500'
        },
        {
            name: 'Award Ceremonies',
            description: 'Prestigious award ceremonies with stage design, nominee management, and live streaming capabilities.',
            image: 'https://picsum.photos/seed/awards/800/500'
        },
        {
            name: 'Corporate Galas',
            description: 'Elegant gala dinners featuring entertainment programming, themed décor, and luxury catering services.',
            image: 'https://picsum.photos/seed/gala/800/500'
        },
        {
            name: 'Board Meetings',
            description: 'Executive-level meeting planning with confidential document handling and high-security arrangements.',
            image: 'https://picsum.photos/seed/boardmeeting/800/500'
        },
        {
            name: 'Milestone Celebrations',
            description: 'Anniversary and milestone events celebrating corporate achievements with historical timelines and legacy showcases.',
            image: 'https://picsum.photos/seed/milestone/800/500'
        },
        {
            name: 'Fundraisers',
            description: 'Charity events with donor management systems, auction coordination, and impact storytelling.',
            image: 'https://picsum.photos/seed/fundraiser/800/500'
        },
        {
            name: 'Press Conferences',
            description: 'Media events with press kit preparation, journalist coordination, and live broadcasting setups.',
            image: 'https://picsum.photos/seed/pressconference/800/500'
        },
        {
            name: 'Incentive Trips',
            description: 'Motivational travel programs with unique experiences, recognition ceremonies, and luxury accommodations.',
            image: 'https://picsum.photos/seed/incentive/800/500'
        },
        {
            name: 'MICE Events',
            description: 'Full-service MICE (Meetings, Incentives, Conferences, Exhibitions) management for global corporate needs.',
            image: 'https://picsum.photos/seed/mice/800/500'
        }
    ];

    return (
        <section id="corporate-events" className="py-5 bg-light" style={{ marginTop: '10vh' }}>
            <div className="container">
            <div className="service-item row align-items-center">
                        <div className="col-md-12">
                            <div className="service-title mb-4">
                                <h2 className="text-uppercase font-weight-bold">
                                    Corporate <strong className="">Events</strong>
                                </h2>
                                <span className="text-success font-weight-bold h5">Starts from ₹40,000</span>
                            </div>
                            <p className="text-muted mb-4">
                                Elevate your corporate gatherings with <strong>Asian Adept</strong>, your trusted partner in
                                premium event planning. We understand that corporate events are more than just meetings—they are
                                an opportunity to showcase your brand, strengthen professional relationships, and create memorable experiences.
                                With our expertise, we craft seamless, high-impact events that leave a lasting impression on your guests.
                                <br /><br />
                                Let us handle the complexities while you focus on what matters most—engaging with your audience and
                                building stronger business connections.
                            </p>
                            <div className="text-left mb-5">
                                <a href="/contact" className="btn custom-btn btn-lg rounded-pill px-4 py-2">Make an Event</a>
                            </div>
                        </div>
                    </div>

                <div className="row g-5">
                    {subservices.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm overflow-hidden hover-translate">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.name}
                                        className="img-fluid"
                                        style={{ 
                                            height: '250px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            filter: 'brightness(0.95)'
                                        }}
                                    />
                                    <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-dark">
                                        <h3 className="text-white mb-0">{service.name}</h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-muted">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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