import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import EventBread from "./components/eventbread";

const EventQuoteForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    telNumber: "",
    companyTelNumber: "",
    companyAddress: "",
    eventExplanation: "",
    eventDates: "",
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
        company: formData.company,
        name: formData.name,
        email: formData.email,
        tel_number: formData.telNumber,
        company_tel_number: formData.companyTelNumber || null,
        company_address: formData.companyAddress,
        event_explanation: formData.eventExplanation,
        event_dates: formData.eventDates || null
      };

      const response = await axios.post(
        `${API_URL}/api/event-quote/`, 
        submissionData
      );

      if (response.data.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          company: "",
          name: "",
          email: "",
          telNumber: "",
          companyTelNumber: "",
          companyAddress: "",
          eventExplanation: "",
          eventDates: "",
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
              <p>Your event quote request has been received.</p>
              <p>We will contact you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <EventBread />
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
                <label className="form-label fw-bold">Your Company</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
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
                <label className="form-label fw-bold">
                  Your Tel Number Including Area Code / Extensions
                </label>
                <input
                  type="text"
                  name="telNumber"
                  className="form-control"
                  value={formData.telNumber}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Your Company Tel Number Including Area Code / Extensions
                </label>
                <input
                  type="text"
                  name="companyTelNumber"
                  className="form-control"
                  value={formData.companyTelNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Your Company & Address Location</label>
                <textarea
                  name="companyAddress"
                  className="form-control"
                  rows="3"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Event Explanation in Brief</label>
                <textarea
                  name="eventExplanation"
                  className="form-control"
                  rows="3"
                  value={formData.eventExplanation}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Event Dates From / To</label>
                <input
                  type="text"
                  name="eventDates"
                  className="form-control"
                  value={formData.eventDates}
                  onChange={handleChange}
                />
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

export default EventQuoteForm;