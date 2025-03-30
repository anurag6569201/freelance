import React, { useState } from "react";
import axios from "axios";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
    meeting_date: "",
    meeting_time: "",
    meeting_link: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await axios.post(`${API_URL}/api/contact/`, formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError(err.response?.data || "Failed to schedule meeting. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGoogleMeet = () => {
    window.open("https://meet.google.com/new", "_blank");
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-5">
        <h3>Meeting Scheduled Successfully!</h3>
        <p>Confirmation emails have been sent to you and our team.</p>
        <p>
          <strong>Meeting Link:</strong> {formData.meeting_link}
        </p>
        <button 
          className="btn btn-primary mt-3"
          onClick={() => setIsSubmitted(false)}
        >
          Schedule Another Meeting
        </button>
      </div>
    );
  }

  return (
    <section id="contact-section" className="contact-section sec-ptb-100 clearfix">
      <div className="container">
        <div className="section-title mb-50">
          <small className="sub-title">contact us</small>
          <h2 className="big-title">Schedule a Meeting <strong>with Asian Adept</strong></h2>
        </div>
        
        {error && (
          <div className="alert alert-danger">
            {typeof error === 'object' ? JSON.stringify(error) : error}
          </div>
        )}
        
        <div className="contact-form form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-item">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-item">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-item">
                  <input 
                    type="text" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange} 
                    placeholder="Your Country" 
                    required 
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-item">
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Your Phone" 
                    required 
                  />
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-item">
                  <label>Meeting Date</label>
                  <input 
                    type="date" 
                    name="meeting_date" 
                    value={formData.meeting_date} 
                    onChange={handleChange} 
                    min={new Date().toISOString().split('T')[0]} 
                    required 
                    className="form-control p-2"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="form-item">
                  <label>Meeting Time</label>
                  <input 
                    type="time" 
                    name="meeting_time" 
                    value={formData.meeting_time} 
                    onChange={handleChange} 
                    required 
                    className="form-control p-2"
                  />
                </div>
              </div>
              
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-item">
                  <label>Google Meet Link</label>
                  <div className="input-group mb-3">
                    <input 
                      type="url" 
                      name="meeting_link" 
                      value={formData.meeting_link} 
                      onChange={handleChange} 
                      placeholder="Paste your Google Meet link here" 
                      required 
                      className="form-control p-2 mb-2"
                    />
                    <button 
                      className="btn btn-outline-secondary mt-2" 
                      type="button"
                      onClick={openGoogleMeet}
                    >
                      Create Meeting
                    </button>
                  </div>
                  <small className="text-muted">
                    Click "Create Meeting" to generate a Google Meet link, then paste it here
                  </small>
                </div>
              </div>
              
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-item">
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your Message" 
                    required
                    rows="5"
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button 
                    type="submit" 
                    className="btn custom-btn btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;