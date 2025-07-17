import React from "react";
import "../../../assets/css/aboutcssl.css";
import aboutCSSLData from "../../../data/components/aboutCSSL";

const AboutCSSL = () => {
  return (
    <section className="nt-aboutCSSL-section-wrapper">
      <div className="nt-aboutCSSL-container">
        <div className="nt-aboutCSSL-image-wrapper">
          <img src={aboutCSSLData.logo} alt="CSSL Logo" className="nt-aboutCSSL-logo" />
        </div>
        <div className="nt-aboutCSSL-content-wrapper">
          <div className="nt-aboutCSSL-content">
            <h2 className="nt-section-title nt-title-light-bg nt-aboutcssl-title">{aboutCSSLData.title}</h2>
            <p className="nt-aboutCSSL-description">
              {aboutCSSLData.description1}
            </p>
            <p className="nt-aboutCSSL-description">
              {aboutCSSLData.description2}
            </p>
            <p className="nt-aboutCSSL-description">
              {aboutCSSLData.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCSSL;
