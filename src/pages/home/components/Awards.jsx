import React from "react";
import "../../../assets/css/awards.css";
import awardsDetails from "../../../data/components/awards.js";

const Awards = () => {
  return (
    <section className="nt-awards-section-wrapper">
      <div className="nt-awards-container">
        <div className="nt-awards-content-wrapper">
          <div className="nt-awards-content">
            <h2 className="nt-section-title">{awardsDetails.title}</h2>
            <p className="nt-awards-subtitle">{awardsDetails.subtitle}</p>
            <p className="nt-awards-description">
              {awardsDetails.description}
            </p>            
            <button className="nt-awards-btn">{awardsDetails.button}</button>
          </div>
        </div>
        <div className="nt-awards-image-wrapper">
          <img src={awardsDetails.logo} alt="CSSL Logo" className="nt-awards-logo" />
          <img src={awardsDetails.mainImage} alt="awards NITC Conference" className="nt-awards-image" />
        </div>
      </div>
    </section>
  );
};

export default Awards;
