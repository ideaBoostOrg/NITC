import { Link as SLink } from "react-scroll";
import '../../../assets/css/hero.css';
import heroData from '../../../data/components/hero';

const Hero = () => {
  return (
    <section className="nt-hero" id="hero-area">
      <div className="nt-hero-overlay">
        <div className="nt-hero-content">
          <img src={heroData.logo} alt="NITC Logo" className="nt-hero-logo nt-hero-logo-mobile-only" />
          <h2 className="nt-hero-subtitle">{heroData.subtitle}</h2>
          <h1 className="nt-hero-title">
            {heroData.title}
          </h1>
          <p className="nt-hero-tagline">{heroData.tagline}</p>
            <SLink 
              className="nt-hero-button"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
              {heroData.buttonText}
            </SLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
