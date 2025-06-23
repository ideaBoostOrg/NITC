import img1 from "../../../assets/img/about/img1.jpg";
import { CheckCircle } from "react-bootstrap-icons";

function About() {
  
  return (
    <section
      id="about"
      className="section-padding"
      style={{ marginBottom: "75px", marginTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={img1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="about-content">
              <div>
                <div className="about-text">
                  <h2>About the Conference</h2>
                  <p>
                    <b>NITC 2025 Conference</b> will feature 6 tracks and will
                    have 30+ local and foreign high-profile speakers and a
                    series of prior events.
                  </p>
                </div>
                <ul id="stylish-list" className="stylish-list mb-3">
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    FinTech - Financial Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    EduTech - Education Technology
                  </li>

                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    TravelTech - Travel Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    InfoSec & E-Governance - Information Security
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    AgriTech - Agricultural Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    eHealth - Electronic Health care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
