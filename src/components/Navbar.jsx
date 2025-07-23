import { faBars, faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link as SLink } from "react-scroll";
import "../assets/css/navbar.css";
import NITCLogo from '../assets/img/NITC-Logo.png';

const navLinks = [
  { label: "Home", to: "hero-area", icon: null, offset: -50 },
  { label: "About", to: "about", icon: null, offset: -100 },
  { label: "Schedule", to: "schedules", icon: null, offset: -80 },
  { label: "Awards", to: "award", icon: null, offset: -30 },
  { label: "Gallery", to: "gallery", icon: null, offset: -50 },
  { label: "Pricing", to: "pricing", icon: null, offset: -30 },
  { label: "Sponsors", to: "sponsors", icon: null, offset: -80 },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleCloseMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {!mobileMenuOpen && (
        <FontAwesomeIcon
          icon={faBars}
          className="nt-nav-icon"
          onClick={handleMenuToggle}
        />
      )}
      <div className="nt-navbar fixed-top">
        <img src={NITCLogo} alt="NITC Logo" className="nt-hero-logo" />
        <div className="nt-navbar-content">
          <div className="nt-nav-links">
            {navLinks.map((link, idx) => (
              <SLink
                key={link.label}
                className="nt-nav-link"
                activeClass="nt-active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={300}
                onClick={handleCloseMenu}
              >
                {link.label}
                {link.icon && <FontAwesomeIcon className="nt-icon" icon={link.icon} />}
              </SLink>
            ))}
          </div>
          <div className="nt-nav-actions">
            <button className="nt-btn nt-btn-outlined">Digital Investment Summit</button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="nt-mobile-menu-overlay" onClick={handleCloseMenu}>
          <div className="nt-mobile-menu" onClick={e => e.stopPropagation()}>
            <FontAwesomeIcon
              icon={faTimes}
              className="nt-nav-close-icon"
              onClick={handleCloseMenu}
            />
            <div className="nt-mobile-nav-links">
              {navLinks.map((link) => (
                <SLink
                  key={link.label}
                  className="nt-nav-link"
                  activeClass="nt-active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={300}
                  onClick={handleCloseMenu}
                >
                  {link.label}
                  {link.icon && <FontAwesomeIcon className="nt-icon" icon={link.icon} />}
                </SLink>
              ))}
            </div>
            <div className="nt-mobile-nav-actions">
              <button className="nt-btn nt-btn-outlined">Digital Investment Summit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

