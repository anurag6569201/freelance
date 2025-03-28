import image1 from '../../../assets/images/home/contact.jpg'

function ContactImage() {
    return (
        <section
            style={{
                height: "350px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#f7f7f7",
                zIndex: "100",
                paddingTop:'30px',
                paddingBottom:'30px',
                position: "relative",
            }}
        >
            <div 
                className="container"
                style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "20px",
                    justifyContent: "center",
                    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image1})`,
                    backgroundSize: "cover",
                    backgroundRepeat:'no-repeat',
                    backgroundPosition: "center center",
                    borderRadius:'20px',
                    height: "100%"
                }}
            >
                <p style={{ fontSize: "1rem", textTransform: "uppercase", color: "#fff" }}>
                    Make your dreams come true
                </p>
                <p style={{ fontSize: "2rem", color: "#fff" }}>
                    Plan your next event with us.
                </p>
                <div className="buttons_groups" style={{ fontSize: "1.6rem", color: "#fff" }}>
                    <a style={{ marginRight: "20px", color: "#fff" }} href="tel:+918329969729">
                        +91 8329969729
                    </a>
                    <a href="/contact" className="custom-btn">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactImage;
