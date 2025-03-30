import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import image1 from "../../../assets/images/services/corp/corp1.png";
import image2 from "../../../assets/images/services/corp/corp2.png"; // Add a second image for variation

const WhyChooseAsianAdept = () => {
  return (
    <div className="container">
      <h3 className="text-uppercase fw-bold mt-4 pt-3 display-5 text-dark text-center">
        Why Choose Asian Adept?
      </h3>
      <p className="text-muted fs-5 text-center">
        At <strong>Asian Adept</strong>, we don’t just organize events—we create immersive experiences that leave a
        lasting impact. Our approach to corporate event planning is built on precision, creativity, and seamless
        execution. Whether you are hosting an industry conference, a high-profile product launch, or an executive
        retreat, we bring a wealth of expertise to ensure every aspect is meticulously handled. Here’s why we stand
        out:
      </p>
      
      <ul className="list-unstyled text-muted fs-5">
        <li className="mt-4">
          <strong className="text-dark">✨ Seamless Planning & Execution</strong> – From ideation to implementation, we meticulously
          plan every detail to guarantee a smooth, hassle-free experience.
        </li>
        <li className="mt-4">
          <strong className="text-dark">🎯 Customized Event Solutions</strong> – We tailor each event to reflect your brand’s identity,
          business goals, and corporate culture.
        </li>
      </ul>
      
      {/* Image Row */}
      <div className="row my-5 text-center">
        <div className="col-md-6 d-flex justify-content-center">
          <Image
            src={image1}
            alt="Corporate Event 1"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", height: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <Image
            src={image2}
            alt="Corporate Event 2"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", height: "300px", width: "100%" }}
          />
        </div>
      </div>
      
      <ul className="list-unstyled text-muted fs-5">
        <li className="mt-4">
          <strong className="text-dark">🔧 Cutting-Edge Technology</strong> – We leverage the latest event technology to enhance engagement and create a dynamic experience.
        </li>
        <li className="mt-4">
          <strong className="text-dark">📌 End-to-End Management</strong> – From venue selection to branding, we handle every detail meticulously.
        </li>
        <li className="mt-4">
          <strong className="text-dark">🔍 Unparalleled Attention to Detail</strong> – Our team ensures excellence in every aspect of event planning.
        </li>
      </ul>
      
      <p className="text-muted fs-5 mt-4 text-center">
        When you choose <strong>Asian Adept</strong>, you’re not just hiring an event planner—you’re gaining a strategic partner dedicated
        to making your corporate event extraordinary. Let us turn your vision into a memorable reality!
      </p>
    </div>
  );
};

export default WhyChooseAsianAdept;