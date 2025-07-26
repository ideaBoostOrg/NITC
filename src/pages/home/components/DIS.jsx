import React from "react";
import "../../../assets/css/DIS.css";
import DISData from "../../../data/components/DIS";

const DIS = () => {
  return (
    <section className="nt-dis-section-wrapper">
      <div className="nt-dis-container">
        <div className="nt-dis-image-wrapper">
          <img src={DISData.mainImage} alt="About NITC Conference" className="nt-dis-image" />
          <img src={DISData.logo} alt="CSSL Logo" className="nt-dis-logo" />
        </div>
        <div className="nt-dis-content-wrapper">
          <div className="nt-dis-content">
            <h2 className="nt-section-title nt-title-light-bg">{DISData.title}</h2>
            <p className="nt-dis-description">
              {DISData.description}
            </p>
            <p className="nt-dis-text-content">
                {DISData.content}
            </p>
            <br />
            <button className="nt-dis-btn">{DISData.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIS;
