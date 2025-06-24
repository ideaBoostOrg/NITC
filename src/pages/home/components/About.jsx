import React from "react";
import "../../../assets/css/about.css";
import aboutData from "../../../data/components/about";

const About = () => {
  return (
    <section className="nt-about-section">
      <div className="nt-about-container">
        <div className="nt-about-image-wrapper">
          <img src={aboutData.mainImage} alt="About NITC Conference" className="nt-about-image" />
          <img src={aboutData.logo} alt="CSSL Logo" className="nt-about-logo" />
        </div>
        <div className="nt-about-content-wrapper">
          <div className="nt-about-content">
            <h2 className="nt-about-title">{aboutData.title}</h2>
            <p className="nt-about-description">
              <b>{aboutData.description.split(' ')[0]}</b>{" "}
              {aboutData.description.substring(aboutData.description.indexOf(' ') + 1)}
            </p>
            <ul className="nt-about-tracks">
              {aboutData.tracks.map((track, idx) => (
                <li key={idx}>{track}</li>
              ))}
            </ul>
            <button className="nt-about-btn">{aboutData.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
