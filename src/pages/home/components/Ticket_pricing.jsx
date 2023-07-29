import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CheckCircleFill } from "react-bootstrap-icons";
import { XCircle } from "react-bootstrap-icons";

function Ticket_pricing() {
  return (
    <section
      id="pricing"
      className=""
      style={{ paddingBottom: "50px", paddingTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Ticket Pricing
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Experience the NITC IT Conference like never before with our
                affordable and flexible ticket pricing options, designed to
                <br />
                ensure accessibility for all technology enthusiasts.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 px-1">
            <div
              className="price-block-wrapper wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="colmun-title">
                <h5>Inauguration Ceremony</h5>
              </div>
              <div className="price">
                <h2>LKR 20000</h2>
                {/* <span>Per Day</span> */}
              </div>
              <div className="pricing-list">
                <ul style={{ textAlign: "left" }}>
                  {/* <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li> */}
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Keynote Speech</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Keynote Presentations</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">CSSL National ICT Awards</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Panel Discussion and Q&A</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Investment Summit</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Lunch</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Conference Tracks</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>CSSL Research Colloquium</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Gala Dinner</span>
                  </li>
                </ul>
              </div>
              <a href="/register?type=Inauguration" className="btn btn-common">
                Buy Ticket
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 px-1">
            <div
              className="price-block-wrapper wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <div className="colmun-title">
                <h5>NITC Conference Day 01 </h5>
              </div>
              <div className="price">
                <h2>LKR 15000</h2>
                {/* <span>Per Day</span> */}
              </div>
              <div className="pricing-list">
                <ul style={{ textAlign: "left" }}>
                  {/* <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li> */}
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Keynote Speech</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Keynote Presentations</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>CSSL National ICT Awards</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Panel Discussion and Q&A</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Investment Summit</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Lunch</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Conference Tracks</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>CSSL Research Colloquium</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Gala Dinner</strike>
                    </span>
                  </li>
                </ul>
              </div>
              <a href="/register?type=Day_01" className="btn btn-common">
                Buy Ticket
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 px-1 rounded">
            <div
              className="price-block-wrapper wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="colmun-title">
                <h5>NITC Conference Day 02</h5>
              </div>
              <div className="price">
                <h2>LKR 15000</h2>
                {/* <span>Per Day</span> */}
              </div>
              <div className="pricing-list">
                <ul style={{ textAlign: "left" }}>
                  {/* <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li> */}
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Keynote Speech</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Keynote Presentations</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>CSSL National ICT Awards</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Panel Discussion and Q&A</strike>
                    </span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Investment Summit</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Lunch</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Conference Tracks</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">CSSL Research Colloquium</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        color: "var(--primary-blue)",
                        verticalAlign: "middle",
                      }}
                    >
                      <XCircle />
                    </span>
                    <span className="text">
                      <strike>Gala Dinner</strike>
                    </span>
                  </li>
                </ul>
              </div>
              <a href="/register?type=Day_02" className="btn btn-common">
                Buy Ticket
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 px-1">
            <div
              className="price-block-wrapper active wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="colmun-title">
                <h5>Full Conference with Inauguration</h5>
              </div>
              <div className="price">
                <h2>LKR 50000</h2>
                {/* <span>Per Day</span> */}
              </div>
              <div className="pricing-list">
                <ul style={{ textAlign: "left" }}>
                  {/* <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li> */}
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Keynote Speech</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Keynote Presentations</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">CSSL National ICT Awards</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Panel Discussion and Q&A</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Investment Summit</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Lunch - Day 1, Day 2</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Conference Tracks</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">CSSL Research Colloquium</span>
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "10px",
                        fontSize: "15px",
                        verticalAlign: "middle",
                      }}
                    >
                      <CheckCircleFill />
                    </span>
                    <span className="text">Gala Dinner - Inauguration</span>
                  </li>
                </ul>
              </div>
              <a href="/register?type=Full_package" className="btn btn-common">
                Buy Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ticket_pricing;
