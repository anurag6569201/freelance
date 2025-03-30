import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import StandardBread from './components/standbread';

const StandardQuoteForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    email: "",
    telNumber: "",
    officeTelNumber: "",
    interestShow: "",
    dates: "",
    boothRequirements: "",
  });
  const API_URL = import.meta.env.VITE_API_URL;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare data for API (matching Django model fields)
      const submissionData = {
        country: formData.country,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        tel_number: formData.telNumber,
        office_tel_number: formData.officeTelNumber || null,
        interest_show: formData.interestShow,
        dates: formData.dates || null,
        booth_requirements: formData.boothRequirements || null
      };

      const response = await axios.post(
        `${API_URL}/api/exhibition-quote/`, 
        submissionData
      );

      if (response.data.success) {
        setIsSubmitted(true);
        // Reset form if needed
        setFormData({
          country: "",
          firstName: "",
          lastName: "",
          email: "",
          telNumber: "",
          officeTelNumber: "",
          interestShow: "",
          dates: "",
          boothRequirements: "",
        });
      }
    } catch (err) {
      setError(err.response?.data || "Failed to submit form. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container" style={{marginTop:'50vh'}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="alert alert-success text-center">
              <h4>Thank you for your submission!</h4>
              <p>Your exhibition quote request has been received.</p>
              <p>We will contact you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <StandardBread />
      <div className="container mt-4">
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col-md-8">
            {error && (
              <div className="alert alert-danger">
                {typeof error === 'object' ? JSON.stringify(error) : error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="p-4 border rounded">
              <div className="mb-3">
                <label className="form-label fw-bold">Country of Business HQ</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={formData.country}
                  required
                  onChange={handleChange}
                />
              </div>

              <h5 className="text-center">Name of person completing form</h5>

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Tel Number (incl. country code)</label>
                <input
                  type="text"
                  name="telNumber"
                  className="form-control"
                  value={formData.telNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Office Tel Number (incl. country code)</label>
                <input
                  type="text"
                  name="officeTelNumber"
                  className="form-control"
                  value={formData.officeTelNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  I am interested to Exhibit at the show (Name show)
                </label>
                <input
                  type="text"
                  name="interestShow"
                  className="form-control"
                  value={formData.interestShow}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Dates of show</label>
                <input
                  type="text"
                  name="dates"
                  className="form-control"
                  value={formData.dates}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description of booth requirements</label>
                <textarea
                  name="boothRequirements"
                  className="form-control"
                  rows="3"
                  value={formData.boothRequirements}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-dark w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandardQuoteForm;