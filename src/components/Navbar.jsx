import logo from "../assets/img/NITC-Logo.png";
import { Link as SLink } from "react-scroll";
/*icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav
      className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar top-nav-collapse"
      style={{ height: isOpen ? "fit-content" : "60px" }}
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} style={{ height: "50px" }} alt="" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="navbar-collapse collapse show" id="navbarCollapse">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-50}
                to="hero-area"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Home
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-100}
                to="about"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-80}
                to="schedules"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Schedules
              </SLink>
            </li>

            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-30}
                to="award"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Awards
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-80}
                to="digital-economy"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                DIGIECON
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-50}
                to="gallery"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-30}
                to="pricing"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={-80}
                to="sponsors"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </SLink>
            </li>

            <div className="dis-btn-container">
              <SLink
                spy={true}
                offset={-30}
                to="dis"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                <p
                  className="disBtn"
                >Digital Investment Summit</p>
              </SLink>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
