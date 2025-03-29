import { FaHeart, FaRocket, FaCalendarCheck } from "react-icons/fa";

const CareerBenefit = () => {
  return (
    <section className="py-5 mt-3">
      <div className="container">
        <h2 className="text-center mb-4">Why Work With Us?</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div>
              <FaHeart className="benefit-icon" />
              <h5 className="mt-3">Passionate Team</h5>
              <p>Work alongside a team of creative and driven individuals who love what they do.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <FaRocket className="benefit-icon" />
              <h5 className="mt-3">Career Growth</h5>
              <p>Opportunities to grow, learn, and take your career to the next level.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <FaCalendarCheck className="benefit-icon" />
              <h5 className="mt-3">Exciting Projects</h5>
              <p>Be part of organizing high-profile events and making a real impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBenefit;
