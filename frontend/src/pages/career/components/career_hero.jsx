const CareerHeroSection = () => {
    return (
      <section
        className="hero"
        style={{
          boxShadow: "0 0 50px 70px white",
          zIndex: 100,
          position: "relative",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Join Our Team</h1>
          <p className="lead">
            At Asian Adept, we create unforgettable events—and we want you to be
            part of the magic!
          </p>
          <a href="#job-openings" className="btn custom-btn btn-lg">
            Explore Openings
          </a>
        </div>
      </section>
    );
  };
  
  export default CareerHeroSection;
  