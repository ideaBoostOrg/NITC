/* eslint-disable react/no-unescaped-entities */

import Awards from "../../../assets/img/Digital_economy.png";
import DIGIECON_logo from "../../../assets/img/DIGIECON_LOGO.png";

function Digital_economy() {
  return (
    <section
      id="digital-economy"
      // style={{ paddingTop: "50px", paddingBottom: "20px" }}
      className="section-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <span
                className="section-title wow fadeInUp DIGIECON_logo"
                data-wow-delay="0.2s"
              >
                <span className="img-thumb">
                  <img
                    className=""
                    src={DIGIECON_logo}
                    alt=""
                    style={{ width: 50, height: 50, marginRight: 10 }}
                  />
                </span>
                <span>DIGIECON</span>
              </span>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Empower Your Business with Digital Economy Insights: Harness
                Growth Opportunities at the <br />
                Digital Economy Summit
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={Awards} alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12">
            <p style={{ marginBottom: "2rem" }}>
              Leapfrog into Industry 4.0 and beyond; transcending to an
              Inclusive Digital Economy. Making Sri Lanka a Resilient Export
              Oriented Hub through Sustainable &amp; Tradable goods and services
              supported by an advanced technology-based economy. The government
              facilitated a conducive Business Environment for Investment.
              Leveraging Human Centric Technology to improve Productivity &amp;
              Efficiency to match the global value chain to overcome the current
              economic crisis. To make society engaged and raise awareness on
              the benefits of IR 5.0 and Transcended Digital Economy across the
              country. Raise Global awareness on Sri Lankan Digital
              Framework/Blueprint up until 2030.
            </p>

            <div
              className="digi_econ_section_button"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <a
                href=" https://digiecon2030.lk/"
                className="btn btn-common"
                id="view_more_btn"
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Digital_economy;
