import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareerApplySection = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/career/`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received');
        }
        
        setJobs(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message || 'Failed to load job openings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Invalid email format";
    if (!formData.position) return "Please select a position";
    if (!formData.message.trim()) return "Cover letter is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }
  
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('message', formData.message);
      
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }
  
      const response = await fetch(`${API_URL}/api/career/form`, {
        method: "POST",
        body: formDataToSend,
        // Don't set Content-Type header - the browser will set it automatically
        // with the correct boundary for FormData
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.errors ? JSON.stringify(data.errors) : data.error || 'Submission failed');
      }
  
      navigate('/thank-you');
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(error.message || "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5">
        {error}
        <button 
          className="btn btn-link" 
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="career-apply-container">
      <section id="job-openings" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Current Job Openings</h2>
          <div className="row g-4">
            {jobs.length > 0 ? (
              <>
              {jobs.map((job) => (
              <div className="col-md-6" key={job.id}>
                <div className="job-card p-4">
                  <h5 className="fw-bold">{job.topic}</h5>
                  <p className="text-muted">Location: {job.location}</p>
                  <p>{job.paragraph}</p>
                  <a 
                        href="#apply" 
                        className="btn custom-btn"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          position: job.id.toString()
                        }))}
                      >
                        Apply Now
                      </a>
                </div>
              </div>
            ))}
              </>
            ) : (
              <div className="col-12 text-center py-4">
                <p>No current openings available. Please check back later.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="apply" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body p-4 p-md-5">
                  <h2 className="text-center mb-4">Application Form</h2>
                  
                  {submitError && (
                    <div className="alert alert-danger mb-4">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="id_name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="id_name"
                        name="name"
                        className="form-control form-control-lg"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="id_email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="id_email"
                        name="email"
                        className="form-control form-control-lg"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="id_position" className="form-label">Position *</label>
                      <select
                        id="id_position"
                        name="position"
                        className="form-select form-select-lg"
                        value={formData.position}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a position</option>
                        {jobs.map((job) => (
                          <option key={job.id} value={job.id}>
                            {job.topic} ({job.location})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="id_message" className="form-label">Cover Letter *</label>
                      <textarea
                        id="id_message"
                        name="message"
                        className="form-control form-control-lg"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us why you'd be a great fit for this position..."
                      />
                    </div>


                    <div className="d-grid mt-4">
                      <button 
                        type="submit" 
                        className="btn btn custom-btn  btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerApplySection;