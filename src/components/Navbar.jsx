import logo from "../assets/img/logo-crop.png";
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
          <img src={logo} alt="" />
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
                // spy={true}
                offset={-100}
                to="about"
                duration={300}
                // smooth={true}
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
                offset={-40}
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
                offset={0}
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
                offset={0}
                to="dis"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                DIS
              </SLink>
              {/* <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  className="nav-link"
                  activeClass="active-link"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  style={{ background: "transparent", border: "none" }}
                >
                  CSSL
                </button>
                <div class="dropdown-menu">
                  <SLink
                    className="dropdown-item"
                    activeClass="active-link"
                    spy={true}
                    offset={0}
                    to="cssl"
                    duration={300}
                    smooth={true}
                  >
                    CSSL
                  </SLink>

                  <SLink
                    className="dropdown-item"
                    activeClass="active-link"
                    spy={true}
                    offset={0}
                    to="cssl-digita-investment-summit"
                    duration={300}
                    smooth={true}
                  >
                    CSSL Digital Investment Summit
                  </SLink>

                  <SLink
                    className="dropdown-item"
                    activeClass="active-link"
                    spy={true}
                    offset={0}
                    to="cssl-awards"
                    duration={300}
                    smooth={true}
                  >
                    CSSL Awards
                  </SLink>

                  <SLink
                    className="dropdown-item"
                    activeClass="active-link"
                    spy={true}
                    offset={0}
                    to="cssl-colloquium"
                    duration={300}
                    smooth={true}
                  >
                    CSSL Colloquium
                  </SLink>
                </div>
              </div> */}
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={0}
                to="digital-economy"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                DIGI-ECON
              </SLink>
            </li>
            <li className="nav-item">
              <SLink
                className="nav-link"
                activeClass="active-link"
                spy={true}
                offset={0}
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
                offset={0}
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
                offset={0}
                to="sponsors"
                duration={300}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                Sponsors
              </SLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#google-map-area">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
