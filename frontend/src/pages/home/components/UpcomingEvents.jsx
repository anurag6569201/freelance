import image1 from '../../../assets/images/home/R.png'

const image2 = "https://cdn.pixabay.com/photo/2014/04/21/20/09/pinky-swear-329329_1280.jpg"
function UpcomingEvents() {
    return (
        <section id="upcoming-event-section" className="upcoming-event-section sec-ptb-100 clearfix" style={{backgroundColor:'#f7f7f7'}}>
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2 className="big-title">Our <strong>Promise to You</strong></h2>
                </div>

                <div className="row d-flex flex-wrap align-items-stretch" style={{flexDirection:'row-reverse'}}>
                    {/* Left Side - Content */}
                    <div className="col-md-7 d-flex flex-column">
                        <p className="lead p-0 m-0">
                            At Asian Adept Events, we craft experiences that reflect your unique story, blending creativity with cultural richness.
                        </p>

                        <h3 className="mt-4 m-0">Our Approach</h3>
                        <p className="p-0 m-0">
                            We listen, understand, and design with precision. Every detail is tailored to capture your essence.
                        </p>

                        <h3 className="mt-4 m-0">Why Choose Us</h3>
                        <p className="p-0 m-0">
                            Our expertise ensures visually stunning and meticulously planned events, transforming visions into timeless experiences.
                        </p>

                        <h3 className="mt-4 m-0">Who We Serve</h3>
                        <p className="p-0 m-0">
                            From private gatherings to corporate galas, we create bespoke celebrations that leave a lasting impact.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-md-5 text-center" style={{display:'flex',alignItems:'baseline',justifyContent:'center'}}>
                        <img 
                            src={image2}
                            alt="Upcoming Event" 
                            className="img-fluid rounded"
                        />
                    </div>

                    {/* Force New Row if Content is Large */}
                    <div className="w-100 d-md-none"></div>

                    {/* Extra Content (Only Shows If Overflow) */}
                    <div className="col-md-6 mt-3 d-md-none">
                        <p>
                            Need more details? Our team is ready to make your dream event a reality with precision and passion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvents;
