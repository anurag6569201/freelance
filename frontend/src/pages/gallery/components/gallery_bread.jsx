import { Link } from "react-router-dom";
import image1 from '../../../assets/images/gallery/galbread.jpg'

function GalleryBread() {
    return (
        <>
            <section id="breadcrumb-section" className="breadcrumb-section clearfix">
                <div 
                    className="jarallax" 
                    style={{ backgroundImage: `url(${image1})` }}
                >
                    <div className="overlay-black">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="breadcrumb-title text-center mb-50">
                                        <span className="sub-title">event gallery</span>
                                        <h2 className="big-title">Asian Adept <strong>gallery</strong></h2>
                                    </div>
                                    <div className="breadcrumb-list">
                                        <ul>
                                            <li className="breadcrumb-item">
                                                <Link to="/" className="breadcrumb-link">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Asian Adept gallery</li>
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

export default GalleryBread;
