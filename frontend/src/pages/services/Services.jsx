import React from 'react';

import image1 from '../../assets/images/services/corpevents1.png'
import image2 from '../../assets/images/services/social1.jpg'
import image3 from '../../assets/images/services/exe1.png'
import image4 from '../../assets/images/services/party.jpg'

import { Link } from "react-router-dom";
function Services() {
    const serviceList = [
        {
            id: 'corporate',
            title: 'Corporate Services',
            description: 'We specialize in crafting exceptional corporate events, from impactful conferences and seminars to engaging team-building activities and elegant gala dinners. Let Asian Adept elevate your brand presence and foster meaningful connections.',
            link: '/services/corporate', // Example link to a detailed page
            imgSrc: image1
        },
        {
            id: 'social',
            title: 'Social Events',
            description: 'Celebrate life\'s special moments in style. Asian Adept designs and manages unforgettable social gatherings, including weddings, anniversaries, birthdays, and private parties, tailored precisely to your vision and preferences.',
            link: '/services/social',
            imgSrc: image2
        },
        {
            id: 'exhibition',
            title: 'Exhibition Services',
            description: 'Make a lasting impression at trade shows and exhibitions. We offer comprehensive solutions, from innovative booth design and fabrication to seamless logistics and engaging attendee experiences, ensuring your brand stands out.',
            link: '/services/exhibition',
            imgSrc: image3
        },
        {
            id: 'event',
            title: 'End-to-End Event Management',
            description: 'Entrust your event entirely to us. Asian Adept provides complete event management services, handling every detail from initial concept and planning through flawless execution and post-event analysis for any type of event.',
            link: '/services/event-management',
            imgSrc: image4
        }
    ];

    return (
        <div style={styles.servicesPage} className='mt-5'>
            <div style={styles.header}>
                <h1 style={styles.mainTitle}><span style={{ fontWeight: '1000' }}>Our</span> <span style={{ fontWeight: '400' }}>Services</span></h1>
                <div style={styles.titleUnderline}></div>
            </div>

            <p style={styles.introText}>
                At Asian Adept, we offer a comprehensive suite of event planning and management services
                designed to bring your vision to life. Explore our core service areas below, each presented
                with tailored solutions.
            </p>

            <div style={styles.servicesContainer}>
                {serviceList.map((service, index) => (
                    <div
                        key={service.id}
                        style={{
                            ...styles.serviceRow,
                            flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row'
                        }}
                    >
                        <div style={styles.imageColumn}>
                            <div style={styles.imageWrapper}>
                                <img
                                    src={service.imgSrc}
                                    alt={`${service.title} by Asian Adept`}
                                    style={styles.serviceImage}
                                />
                            </div>
                        </div>

                        <div style={styles.textColumn} id={service.id}>
                            <div style={styles.serviceBadge}>Service {index + 1}</div>
                            <h2 style={styles.rowTitle}>{service.title}</h2>
                            <p style={styles.rowDescription}>{service.description}</p>
                            <Link className='btn custom-btn' to={service.link} style={styles.learnMoreLink}>
                                Discover More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    servicesPage: {
        padding: '60px 20px 80px',
        maxWidth: '1280px',
        margin: '0 auto',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
    },
    mainTitle: {
        fontSize: '2.8rem',
        fontWeight: '700',
        color: '#333333',
        marginBottom: '15px',
        letterSpacing: '-0.5px',
    },
    titleUnderline: {
        width: '80px',
        height: '4px',
        backgroundColor: '#cb3229',
        margin: '0 auto',
        borderRadius: '2px',
    },
    introText: {
        fontSize: '1.15rem',
        lineHeight: '1.8',
        color: '#444',
        maxWidth: '800px',
        margin: '0 auto 70px',
        textAlign: 'center',
        padding: '0 20px',
    },
    servicesContainer: {
        position: 'relative',
    },
    serviceRow: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '50px',
        padding: '30px 0',
        borderRadius: '12px',
    },
    imageColumn: {
        flex: '1 1 45%',
        minWidth: '300px',
        padding: '20px',
    },
    imageWrapper: {
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '66.66%', // 3:2 aspect ratio
    },
    serviceImage: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    },
    textColumn: {
        flex: '1 1 45%',
        minWidth: '300px',
        padding: '30px',
        position: 'relative',
    },
    serviceBadge: {
        position: 'absolute',
        top: '-20px',
        left: '30px',
        backgroundColor: '#333333',
        color: 'white',
        padding: '8px 20px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '600',
    },
    rowTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#333333',
        marginBottom: '20px',
        lineHeight: '1.3',
    },
    rowDescription: {
        fontSize: '1.05rem',
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '30px',
    },
    learnMoreLink: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '12px 25px',
        backgroundColor: '#FFA726',
        color: '#333333',
        textDecoration: 'none',
        borderRadius: '25px',
        fontWeight: '700',
        transition: 'all 0.3s ease',
        fontSize: '1rem',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(255,167,38,0.3)',
        },
    },
};

export default Services;