import React from "react";
import { Link as SLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Navbar.css";

const navLinks = [
  { label: "Home", to: "hero-area", icon: null, offset: -50 },
  { label: "About Us", to: "about", icon: faCaretDown, offset: -100 },
  { label: "Accreditation", to: "schedules", icon: faCaretDown, offset: -80 },
  { label: "Membership", to: "award", icon: faCaretDown, offset: -30 },
  { label: "NITC", to: "digital-economy", icon: faCaretDown, offset: -80 },
  { label: "Events", to: "gallery", icon: null, offset: -50 },
  { label: "People", to: "pricing", icon: faCaretDown, offset: -30 },
  { label: "Training Partners", to: "sponsors", icon: null, offset: -80 },
  { label: "Contact Us", to: "dis", icon: null, offset: -30 },
];

export const Navbar = () => {
  return (
    <div className="nt-navbar fixed-top">
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
            >
              {link.label}
              {link.icon && <FontAwesomeIcon className="nt-icon" icon={link.icon} />}
            </SLink>
          ))
        }
      </div>
      <div className="nt-nav-actions">
        <button className="nt-btn nt-btn-filled">Sign In</button>
        <button className="nt-btn nt-btn-outlined">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
