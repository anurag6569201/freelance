import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareerApplySection = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
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
      try {
        const response = await fetch(`${API_URL}/api/career/`); // Replace with actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data); // Debugging log

        if (data && Array.isArray(data)) {
          setJobs(data);
        } else {
          throw new Error('Invalid API response structure');
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load job openings. Please try again later.');
      }
    };

    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/career/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({ name: "", email: "", position: "", message: "" });
        navigate('/thank-you')
      } else {
        alert(`Error: ${data.errors ? JSON.stringify(data.errors) : data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <>
      <section id="job-openings" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Current Job Openings</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <div className="row g-4">
            {jobs.map((job) => (
              <div className="col-md-6" key={job.id}>
                <div className="job-card p-4">
                  <h5 className="fw-bold">{job.topic}</h5>
                  <p className="text-muted">Location: {job.location}</p>
                  <p>{job.paragraph}</p>
                  <a href="#apply" className="btn custom-btn mt-2">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Ready to Apply?</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="id_name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="id_name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="id_email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="id_email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="id_position" className="form-label">Position Applying For</label>
                  <select
                    id="id_position"
                    name="position"
                    className="form-control"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.id}>{job.topic}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="id_message" className="form-label">Cover Letter</label>
                  <textarea
                    id="id_message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn custom-btn w-100">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerApplySection;
