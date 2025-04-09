import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

// --- Import your images here ---
// Make sure these paths are correct relative to Services.jsx
// Assuming the structure is src/pages/Services/Services.jsx
// and images are in src/assets/images/services/
import image1 from '../../assets/images/services/corpevents1.png'; // Corporate
import image2 from '../../assets/images/services/social1.jpg';    // Wedding (using social1.jpg as per original code)
import image3 from '../../assets/images/services/exe1.png';       // Social (using exe1.png as per original code)
import image4 from '../../assets/images/services/party.jpg';      // Exhibition (using party.jpg as placeholder)
import image5 from '../../assets/images/services/party.jpg';      // Sports (using party.jpg as placeholder)
import image6 from '../../assets/images/services/party.jpg';      // Government (using party.jpg as placeholder)
import image7 from '../../assets/images/services/party.jpg';      // Entertainment (using party.jpg as placeholder)
// Please update image4 to image7 imports if you have specific images for them
// --- --- ---

function Services() {
    // Use location hook once to get pathname and hash
    const location = useLocation();
    const { pathname, hash } = location;

    // Define the list of services with IDs matching the hash links
    const serviceList = [
        {
            id: 'corporate', // Matches #corporate from HashLink
            title: 'Corporate Services',
            description: 'We excel in organizing high-impact corporate events, including conferences, seminars, product launches, and team-building activities. Let us enhance your brand presence and create professional, engaging experiences.',
            link: '/services/corporate', // Link to a potential detailed page (optional)
            imgSrc: image1
        },
        {
            id: 'wedding', // Matches #wedding from HashLink
            title: 'Wedding Planning',
            description: 'Make your dream wedding a reality with our bespoke planning services. From venue selection to decor, catering, and entertainment, we ensure every detail is perfect for your big day.',
            link: '/services/wedding',
            imgSrc: image2 // Using social1.jpg based on original code
        },
        {
            id: 'social', // Matches #social from HashLink
            title: 'Social Events',
            description: 'Celebrate life’s special moments with our expertly crafted social events, including birthdays, anniversaries, private parties, and cultural gatherings tailored to your vision.',
            link: '/services/social',
            imgSrc: image3 // Using exe1.png based on original code
        },
        {
            id: 'exhibitions', // Matches #exhibitions from HashLink
            title: 'Exhibition Services',
            description: 'Stand out at trade shows and exhibitions with our end-to-end solutions, including innovative booth designs, logistics management, and engaging attendee experiences.',
            link: '/services/exhibitions',
            imgSrc: image4 // Placeholder image
        },
        {
            id: 'sports', // Matches #sports from HashLink
            title: 'Sports Event Management',
            description: 'From local tournaments to large-scale sports championships, we handle all aspects of sports event planning, ensuring smooth operations and an electrifying experience for participants and spectators.',
            link: '/services/sports',
            imgSrc: image5 // Placeholder image
        },
        {
            id: 'government', // Matches #government from HashLink
            title: 'Government Events',
            description: 'We specialize in organizing official government events, including summits, public conferences, cultural programs, and diplomatic gatherings with precision and professionalism.',
            link: '/services/government',
            imgSrc: image6 // Placeholder image
        },
        {
            id: 'entertainment', // Matches #entertainment from HashLink
            title: 'Entertainment Events',
            description: 'Bring entertainment to life with our expert planning of concerts, live performances, award shows, and festivals, ensuring a seamless and unforgettable experience for audiences.',
            link: '/services/entertainment',
            imgSrc: image7 // Placeholder image
        }
    ];

    // --- Effects for Scrolling ---

    // Effect 1: Scroll to the element matching the hash in the URL
    useEffect(() => {
        if (hash) {
            // Remove the '#' symbol from the hash to get the element ID
            const elementId = hash.slice(1);
            const element = document.getElementById(elementId);

            if (element) {
                // Element found, scroll smoothly to it
                element.scrollIntoView({
                    behavior: 'smooth', // Use smooth scrolling animation
                    block: 'start'     // Align the top of the element with the top of the viewport
                    // Alternative: block: 'center' to align the center of the element with the center of the viewport
                });
            }
            // If element is not found (e.g., invalid hash), nothing happens
        }
    }, [hash]); // This effect runs only when the 'hash' part of the location changes

    // Effect 2: Scroll to the top of the page when navigating WITHOUT a hash
    useEffect(() => {
      // Check if there is NO hash in the URL
      if (!hash) {
        // Instantly scroll to the top-left corner of the page
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
      // If there IS a hash, do nothing here; Effect 1 will handle the scrolling.
    }, [pathname, hash]); // This effect runs if the page path or the hash changes

    // --- Component Rendering ---
    return (
        // Main container for the services page
        // Apply margin-top if needed from className='mt-5'
        <div style={styles.servicesPage} className='mt-5 main-page-of-services'>

            {/* Header Section */}
            <div style={styles.header}>
                <h1 style={styles.mainTitle}>
                    <span style={{ fontWeight: '1000' }}>Our</span> <span style={{ fontWeight: '400' }}>Services</span>
                </h1>
                <div style={styles.titleUnderline}></div>
            </div>

            {/* Introductory Text */}
            <p style={styles.introText}>
                At Asian Adept, we offer a comprehensive suite of event planning and management services
                designed to bring your vision to life. Explore our core service areas below, each presented
                with tailored solutions.
            </p>

            {/* Container for all service rows */}
            <div style={styles.servicesContainer}>
                {/* Map through the serviceList to generate each service section */}
                {serviceList.map((service, index) => (
                    <div
                        key={service.id} // Unique key for React list rendering
                        style={{
                            ...styles.serviceRow,
                            // Alternate layout direction: image left/right
                            flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row'
                        }}
                    >
                        {/* Image Column */}
                        <div style={styles.imageColumn}>
                            <div style={styles.imageWrapper}>
                                <img
                                    src={service.imgSrc}
                                    alt={`${service.title} event service by Asian Adept`} // Descriptive alt text
                                    style={styles.serviceImage}
                                />
                            </div>
                        </div>

                        {/* Text Column - Apply the ID here for scroll targeting */}
                        <div style={styles.textColumn} id={service.id}>
                            {/* Service Badge (Optional visual element) */}
                            <div style={styles.serviceBadge}>Service {index + 1}</div>
                            {/* Service Title */}
                            <h2 style={styles.rowTitle}>{service.title}</h2>
                            {/* Service Description */}
                            <p style={styles.rowDescription}>{service.description}</p>
                            {/* Link to potentially more detailed service page */}
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

// --- Styles Object ---
// Using inline styles as provided in the original code
const styles = {
    servicesPage: {
        padding: '60px 20px 80px', // Top, horizontal, bottom padding
        maxWidth: '1280px', // Max width of the content area
        margin: '0 auto', // Center the content horizontally
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Font stack
    },
    header: {
        textAlign: 'center', // Center align header text
        marginBottom: '60px', // Space below header
    },
    mainTitle: {
        fontSize: '2.8rem', // Main title font size
        fontWeight: '700', // Main title font weight
        color: '#333333', // Dark grey color
        marginBottom: '15px', // Space below title
        letterSpacing: '-0.5px', // Adjust letter spacing
    },
    titleUnderline: {
        width: '80px', // Width of the underline
        height: '4px', // Thickness of the underline
        backgroundColor: '#cb3229', // Theme color for underline (adjust as needed)
        margin: '0 auto', // Center the underline
        borderRadius: '2px', // Slightly rounded corners
    },
    introText: {
        fontSize: '1.15rem', // Intro text font size
        lineHeight: '1.8', // Line spacing
        color: '#444', // Slightly lighter grey than title
        maxWidth: '800px', // Limit width for readability
        margin: '0 auto 70px', // Center horizontally, add bottom margin
        textAlign: 'center', // Center align text
        padding: '0 20px', // Add horizontal padding if needed on smaller screens
    },
    servicesContainer: {
        position: 'relative', // Needed if using absolute positioning inside (like the badge)
    },
    serviceRow: {
        display: 'flex', // Use flexbox for layout
        flexWrap: 'wrap', // Allow items to wrap on smaller screens
        alignItems: 'center', // Vertically align items in the center
        gap: '50px', // Space between image and text columns
        padding: '30px 0', // Vertical padding for spacing between rows
        borderRadius: '12px', // Optional: rounded corners for the row container
    },
    imageColumn: {
        flex: '1 1 45%', // Flex properties: grow, shrink, basis (takes up ~45% width)
        minWidth: '300px', // Minimum width before wrapping
        padding: '20px', // Padding around the image container
    },
    imageWrapper: {
        borderRadius: '10px', // Rounded corners for the image
        overflow: 'hidden', // Ensure image stays within bounds
        position: 'relative', // Needed for absolute positioning of the image
        paddingTop: '66.66%', // Aspect ratio padding hack (3:2 height/width)
        backgroundColor: '#f0f0f0', // Placeholder background color while image loads
    },
    serviceImage: {
        position: 'absolute', // Position image absolutely within the wrapper
        top: '0',
        left: '0',
        width: '100%', // Image takes full width of wrapper
        height: '100%', // Image takes full height of wrapper
        objectFit: 'cover', // Cover the area, cropping if necessary
        transition: 'transform 0.3s ease', // Smooth transition for hover effects (if added)
    },
    textColumn: {
        flex: '1 1 45%', // Flex properties: grow, shrink, basis
        minWidth: '300px', // Minimum width before wrapping
        padding: '30px', // Padding inside the text column
        position: 'relative', // Needed for absolute positioning of the badge
    },
    serviceBadge: {
        position: 'absolute', // Position badge relative to textColumn
        top: '-15px', // Adjust position above the text content
        left: '30px',
        backgroundColor: '#333333', // Badge background color
        color: 'white', // Badge text color
        padding: '8px 20px', // Badge padding
        borderRadius: '20px', // Pill shape
        fontSize: '0.9rem', // Badge font size
        fontWeight: '600', // Badge font weight
        zIndex: 1, // Ensure badge is above other elements if overlapping occurs
    },
    rowTitle: {
        fontSize: '2rem', // Service title font size
        fontWeight: '700', // Service title font weight
        color: '#333333', // Title color
        marginBottom: '20px', // Space below title
        lineHeight: '1.3', // Title line spacing
    },
    rowDescription: {
        fontSize: '1.05rem', // Description font size
        color: '#555', // Description text color
        lineHeight: '1.8', // Description line spacing
        marginBottom: '30px', // Space below description
    },
    learnMoreLink: {
        // Styles for the "Discover More" button/link
        display: 'inline-flex', // Use inline-flex for alignment
        alignItems: 'center', // Vertically center content (text and arrow)
        padding: '12px 25px', // Button padding
        backgroundColor: '#FFA726', // Example button background color (adjust)
        color: '#333333', // Button text color
        textDecoration: 'none', // Remove underline from link
        borderRadius: '25px', // Rounded button corners
        fontWeight: '700', // Button text weight
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        fontSize: '1rem', // Button text size
        border: 'none', // Remove default border
        cursor: 'pointer', // Pointer cursor on hover
        // Note: :hover pseudo-class cannot be used directly in inline styles.
        // Use CSS Modules, styled-components, or a separate CSS file for hover effects.
        // Example hover effect (add via CSS):
        // .custom-btn:hover {
        //     transform: translateY(-2px);
        //     box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        // }
    },
};

// Export the component for use in other parts of the application
export default Services;