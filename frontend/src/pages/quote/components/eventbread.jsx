import backgroundImage from "../../../assets/images/loader/childrens-aid-dining-area.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";

const EventBread = () => {
  return (
    <section id="breadcrumb-section" className="breadcrumb-section clearfix">
      <div
        className="jarallax"
        style={{ backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay-black">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="breadcrumb-title text-center mb-50">
                  <h2 className="big-title">
                    Asian Adept <strong>EVENT QUOTATION FORM</strong>
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
                      Event Quotation Form
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

export default EventBread;
