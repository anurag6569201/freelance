import backgroundImage from "../../../assets/images/careers/jobs.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";

const CareerBreadcrumbSection = () => {
  return (
    <section id="breadcrumb-section" className="breadcrumb-section clearfix">
      <div
        className="jarallax"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay-black">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="breadcrumb-title text-center mb-50">
                  <span className="sub-title">Asian Adept events</span>
                  <h2 className="big-title">
                    Asian Adept <strong>Career</strong>
                  </h2>
                </div>

                <div className="breadcrumb-list">
                  <ul>
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Career
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBreadcrumbSection;
