import React, { useEffect, useState } from 'react';

const CareerJobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
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

  return (
    <section id="job-openings" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Current Job Openings</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="row g-4">
          {jobs.map((job, index) => (
            <div className="col-md-6" key={index}>
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
  );
};

export default CareerJobOpenings;
