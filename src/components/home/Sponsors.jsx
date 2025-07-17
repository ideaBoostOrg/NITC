import TBA from "../../assets/img/TBA.png";
import AIKEN from '../../assets/img/sponsors/AIKEN.png';
import informatics from '../../assets/img/sponsors/Informatics.png';
import SAT from '../../assets/img/sponsors/SAT GROUP.png';
import BlueChip from '../../assets/img/sponsors/bluechip.png';
import Asset6 from '../../assets/img/sponsors/diamondSponsors/Asset6.png';
import DMS from '../../assets/img/sponsors/diamondSponsors/DMS.png';
import Google from '../../assets/img/sponsors/diamondSponsors/Google.png';
import Oracle from '../../assets/img/sponsors/diamondSponsors/Oracle.png';
import Orin from '../../assets/img/sponsors/diamondSponsors/Orin.png';
import SafeProject from '../../assets/img/sponsors/diamondSponsors/SafeProject.png';
import Sanfer from '../../assets/img/sponsors/diamondSponsors/Sanfer.png';
import dell from '../../assets/img/sponsors/goldSponsors/DELL.png';
import fortinet from '../../assets/img/sponsors/goldSponsors/Fortinet.png';
import master from '../../assets/img/sponsors/strategicPartner/master.png';

function Sponsors() {
  return (
    <section
      id="sponsors"
      className="section-padding"
      style={{ marginTop: "75px" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2
                style={{ color: "#212121" }}
                data-wow-delay="0.2s"
              >
                Sponsors
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                A special thank you to our valued sponsors, whose support has
                <br />
                been instrumental in driving our success.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <div className="col-lg-12">
            <div className="sponsors-logo text-center">
              <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Strategic partner
              </p>
              <span className="strategic-partner-logo-common">
                <img src={master} alt="" />
              </span>
              <div className="diamond-sponsor-section">
                <p
                  style={{
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: "1rem",
                  }}
                >
                  Diamond sponsors
                </p>
                <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="diamond-sponsor-logo">
                  <img src={DMS} style={{ marginBottom: "30px" }} alt="" />
                </span>
                <span className="diamond-sponsor-logo">
                  <img src={SAT} style={{ marginBottom: "30px" }} alt="" />
                </span>
                
              </div>
                <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                  <span className="diamond-sponsor-logo-common">
                    <img src={Oracle} alt="" />
                  </span>
                  <span className="diamond-sponsor-logo-common">
                    <img src={Google} alt="" />
                  </span>
                  <span className="diamond-sponsor-logo-common">
                  <img src={Sanfer} alt="" />
                </span>
                <span className="diamond-sponsor-logo-common">
                    <img src={Orin} alt="" />
                  </span>
                  <span className="diamond-sponsor-logo-common">
                    <img src={Asset6} alt="" />
                  </span>
                  <span className="diamond-sponsor-logo-common">
                    <img src={SafeProject} alt="" />
                  </span>
                </div>
              </div>
              <br />
              <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Gold sponsors
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="gold-sponsor-logo">
                  <img src={dell} alt="" />
                </span>
                <span className="gold-sponsor-logo">
                  <img src={fortinet} alt="" />
                </span>
                <span className="gold-sponsor-logo">
                  <img src={AIKEN} alt="" />
                </span>
              </div>

              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
              </div>
              <br />
              <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Partners
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
              <span className="sponsor-logo-common">
                  <img src={informatics} alt="" />
                </span>
                <span className="sponsor-logo-common">
                  <img src={BlueChip}  style={{ height: "80px", width: "150px" }} alt="" />
                </span>
              </div>
              <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Engagement Partner
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="sponsor-logo-common">
                  <img src={TBA} alt="" />
                </span>
              </div>
              <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Event Partner
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="sponsor-logo-common">
                  <img src={TBA} alt="" />
                </span>
              </div>
              <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Design Partner
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="sponsor-logo-common">
                  <img src={TBA} alt="" />
                </span>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
