import backgroundImage from "../../../assets/images/about/bread.jpg";

function AboutSlider() {
    return (
        <>
            <section id="breadcrumb-section" className="breadcrumb-section clearfix">
                <div 
                    className="jarallax" 
                    style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}
                >
                    <div className="overlay-black">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="breadcrumb-title text-center mb-50">
                                        <span className="sub-title">all you need to know</span>
                                        <h2 className="big-title"><strong>about</strong> Asian Adept</h2>
                                    </div>
                                    <div className="breadcrumb-list">
                                        <ul>
                                            <li className="breadcrumb-item">
                                                <a href="/" className="breadcrumb-link">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">about us</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutSlider;
