import ap_logo_1 from "../../../assets/img/sponsors/annualPartners/Altria.png";
import ap_logo_2 from "../../../assets/img/sponsors/annualPartners/Connex.png";
import ap_logo_3 from "../../../assets/img/sponsors/annualPartners/CryptoGen.png";
import ap_logo_4 from "../../../assets/img/sponsors/annualPartners/FiniQe.png";
import ap_logo_5 from "../../../assets/img/sponsors/annualPartners/NuMind.png";
import ap_logo_6 from "../../../assets/img/sponsors/annualPartners/IdeaBoost.png";
import TBA from "../../../assets/img/TBA.png";

function Annual_partners() {
  return (
    <section id="sponsors" className="section-padding">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2
                // className="section-title wow fadeInUp"
                style={{ color: "#212121" }}
                data-wow-delay="0.2s"
              >
                CSSL Annual Partners
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Deeply grateful to our CSSL Annual Partners for their unwavering
                support and collaborative spirit,
                <br />
                propelling our collective success to new heights.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <div className="col-lg-12">
            <div className="sponsors-logo">
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="annual-partner-logo">
                  <img src={TBA} alt="" />
                </span>
                {/* <span className="annual-partner-logo">
                  <img src={ap_logo_2} alt="" />
                </span>
                <span>
                  <img
                    src={ap_logo_3}
                    alt=""
                    style={{ width: 200, height: 45 }}
                  />
                </span>
              </div>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="annual-partner-logo">
                  <img src={ap_logo_4} alt="" />
                </span>
                <span className="annual-partner-logo">
                  <img src={ap_logo_5} alt="" />
                </span>
                <span className="annual-partner-logo">
                  <img src={ap_logo_6} alt="" />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Annual_partners;
