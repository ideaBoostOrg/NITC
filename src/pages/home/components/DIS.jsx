import React from "react";
import { Link as SLink } from "react-scroll";
import "../../../assets/css/DIS.css";
import DISData from "../../../data/components/DIS";

const DIS = () => {
  return (
    <section id="digital-investment-summit">
      <div className="container-without-margin">
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
              <SLink 
                className="nt-dis-btn" 
                to="pricing"
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={300}
              >
                {DISData.button}
              </SLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIS;
