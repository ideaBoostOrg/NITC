/* eslint-disable react/no-unescaped-entities */
import logo_CSSL from "../../../assets/img/CSSL_logo.png";
import { useState } from "react";

import CSSL_digital_investment_summit from "./CSSL_digital_investment_summit";
import DIGI_ECON_Inauguration from "./DIGI-ECON_Inauguration";
import CSSL_awards from "./CSSL_awards";



function About_CSSL() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section
      id="cssl"
      className="intro"
      style={{
        backgroundColor: "rgb(0 85 255 / 8%)",
        padding: "50px 0 75px 0",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                About CSSL
              </h2>
              <img
                className=""
                src={logo_CSSL}
                alt=""
                style={{ marginBottom: "10px", height: "50px" }}
              />
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">
                Join us as we commemorate the extraordinary accomplishments of
                the industry's brightest stars <br />
                at the NITC Awards 2022.
              </p> */}
            </div>
          </div>
        </div>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          The Computer Society of Sri Lanka (CSSL) is the premier professional
          association for individuals and Organisations leading the Information
          Communication Technology (ICT) industry in Sri Lanka.
        </p>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          It is a rallying point for ICT professionals throughout the country
          and espouses the shared vision of over five thousand individuals
          ranging from over 300 CXOs, ICT practitioners, academics and policy
          makers to other professionals in diverse fields and members of the
          business community. Today, the CSSL is widely regarded as both the
          "voice" of this influential industry segment and a "key player" in ICT
          development, nationally.
        </p>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          The passion, vision and commitment of the CSSL founders, who foresaw
          the pivotal role ICT would eventually have in shaping and advancing
          human life, has left a lasting impression on the minds of Sri Lankan
          ICT professionals. This has also led to the broad basing of the
          society’s scope and activities, which has enabled CSSL to become the
          fully-fledged and dynamic professional association that it is today.
          It is also an active member of the South East Asia Regional Computer
          Confederation (SEARCC) and the International Federation for
          Information Processing (IFIP). CSSL is a provisional signatory to the
          Seoul Accord, an internationally acclaimed degree accreditation
          program through which CSSL brings international standards on ICT
          related degrees to Sri Lanka.
        </p>
        <div className="schedule" style={{ marginTop: "60px" }}>
          <div className="col-12 mb-4 text-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  // className="nav-link active"
                  className={toggleState === 1 ? "nav-link active" : "nav-link"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80px",
                    color: "red",
                  }}
                  onClick={() => toggleTab(1)}
                >
                  <div className="item-text">
                    <h4>
                      DIGI-ECON <br /> Inauguration
                    </h4>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={toggleState === 2 ? "nav-link active" : "nav-link"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80px",
                    color: "red",
                  }}
                  onClick={() => toggleTab(2)}
                >
                  <div className="item-text">
                    <h4>CSSL NITC Award</h4>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={toggleState === 3 ? "nav-link active" : "nav-link"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80px",
                    color: "red",
                  }}
                  onClick={() => toggleTab(3)}
                >
                  <div className="item-text">
                    {/* <h4>Day 03</h4>
                    <h5>13th October 2023</h5> */}
                    <h4>
                      Sri Lanka Digital <br /> Investment Summit
                    </h4>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {toggleState === 1 && <DIGI_ECON_Inauguration />}
        {toggleState === 2 && <CSSL_awards />}
        {toggleState === 3 && <CSSL_digital_investment_summit />}
      </div>
    </section>
  );
}

export default About_CSSL;
