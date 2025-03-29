import { FaCheckSquare } from "react-icons/fa";
import '../../../assets/css/career_benifits.css'

const BenefitsSection = () => {
  const benefits = [
    "PTO & Holiday Pay",
    "Medical",
    "Dental",
    "Vision",
    "Employee Assistance Program",
    "401K",
  ];

  return (
    <section className="py-5 career_section_benifit">
      <div className="container-fluid text-center">
        <h2 className="mb-4">Our Benefits</h2>
        <div className="row justify-content-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-6 col-md-4 my-3">
              <div className="d-flex flex-column align-items-center">
                <div className="benefit-icon-circle">
                  <FaCheckSquare className="benefit-icon" />
                </div>
                <p className="mt-2">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
