import logo_NITC from "../../../assets/img/NITC-Logo.png";
import '../../../assets/css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="nt-logo-container">
              <img src={logo_NITC} alt="" className="nt-NITC-logo" />
            </div>
            <div
              className="social-icons-footer"
            >
              <ul>
                <li className="facebook">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/ComputerSocietySriLanka/"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="linkedin">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/computer-society-of-sri-lanka-secretariat"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="email">
                  <a target="_blank" href="info@cssl.lk">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="site-info">
              <p className="nt-footer-text">
                2025 ©️ Powered by{" "}
                <a href="https://ideaboosts.vercel.app/" rel="nofollow">
                  ideaBoost.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
