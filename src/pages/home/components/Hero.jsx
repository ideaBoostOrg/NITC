import React from 'react';
import '../../../assets/css/Hero.css';
import heroData from '../../../data/components/hero';

const Hero = () => {
  return (
    <section className="nt-hero">
      <div className="nt-hero-overlay">
        <div className="nt-hero-content">
          <h2 className="nt-hero-subtitle">{heroData.subtitle}</h2>
          <h1 className="nt-hero-title">
            {heroData.title}
          </h1>
          <p className="nt-hero-tagline">{heroData.tagline}</p>
          <button className="nt-hero-button">{heroData.buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
