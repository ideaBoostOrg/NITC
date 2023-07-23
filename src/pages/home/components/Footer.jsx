import logo_NITC from '../../../assets/img/logo.png'
import logo_IdeaBoost from "../../../assets/img/logo-IdeaBoost.png";

/* icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="NITC-logo" style={{ padding: "20px 0 0 0" }}>
                <img
                  src={logo_NITC}
                  alt=""
                  style={{ width: 150, height: 100 }}
                />
              </div>
              <div
                className="social-icons-footer"
                style={{ padding: "20px 0 0 0" }}
              >
                <ul>
                  <li className="facebook">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/ComputerSocietySriLanka/"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a
                      target="_blank"
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
                <p style={{textAlign:"center"}}>
                  2023 ©️ Powered by{" "}
                  <a href="http://ideaboost.tech" rel="nofollow">
                    ideaBoost.
                  </a>
                </p>
                {/* <img src={logo_IdeaBoost} alt="" style={{ width: 150 }} /> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;