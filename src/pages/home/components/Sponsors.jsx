import TBA from "../../../assets/img/TBA.png";
import master from '../../../assets/img/sponsors/strategicPartner/master.png';
import dell from '../../../assets/img/sponsors/goldSponsors/DELL.png';
import fortinet from '../../../assets/img/sponsors/goldSponsors/Fortinet.png';
// import gennext from '../../../assets/img/sponsors/goldSponsors/gennext.png';
// import JIT from '../../../assets/img/sponsors/goldSponsors/JIT.png';
// import LEAFFoundation from '../../../assets/img/sponsors/goldSponsors/LEAFFoundation.png';
// import MIT from '../../../assets/img/sponsors/goldSponsors/MIT.png';
// import ITN from '../../../assets/img/sponsors/electronicMediaPartners/ITN.png';
import Asset6 from '../../../assets/img/sponsors/diamondSponsors/Asset6.png';
import DMS from '../../../assets/img/sponsors/diamondSponsors/DMS.png';
import SafeProject from '../../../assets/img/sponsors/diamondSponsors/SafeProject.png';
import Sanfer from '../../../assets/img/sponsors/diamondSponsors/Sanfer.png';
import Orin from '../../../assets/img/sponsors/diamondSponsors/Orin.png';
import Oracle from '../../../assets/img/sponsors/diamondSponsors/Oracle.png';
import Google from '../../../assets/img/sponsors/diamondSponsors/Google.png';
// import Huawei from '../../../assets/img/sponsors/goldSponsors/Huawei.jpg';
// import Commsc from '../../../assets/img/sponsors/goldSponsors/Commsc.jpeg';
// import SLT from '../../../assets/img/sponsors/SLTMOBITEL.png';
// import Emojot from '../../../assets/img/sponsors/Emojot.png';
// import Garvi from '../../../assets/img/sponsors/Garvi.png';
// import Prime from '../../../assets/img/sponsors/Prime.png';
import BlueChip from '../../../assets/img/sponsors/bluechip.png';
import AIKEN from '../../../assets/img/sponsors/AIKEN.png';
import informatics from '../../../assets/img/sponsors/Informatics.png';
import SAT from '../../../assets/img/sponsors/SAT GROUP.png';

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
                // className="section-title wow fadeInUp"
                style={{ color: "#212121" }}
                data-wow-delay="0.2s"
              >
                Sponsors
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                A special thank you to our valued sponsors, whose support has
                <br />
                been instrumental in driving our success.
                {/* Date:11,12 & 13<sup>th</sup> October 2023.
                  <br/>
                  Venue:Shnagri-La Hotel,Colombo */}
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
              {/* <span className="gold-sponsor-logo">
                  <img src={gennext} alt="" />
                </span>
                <span className="gold-sponsor-logo">
                  <img src={JIT} alt="" />
                </span> */}
 
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
              {/* <br /> */}

              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
              {/* <span className="gold-sponsor-logo">
                  <img src={AIKEN} alt="" />
                </span> */}
              
                {/* <span className="gold-sponsor-logo">
                  <img src={Huawei} alt="" />
                </span>
                <span className="gold-sponsor-logo">
                  <img src={Commsc} alt="" />
                </span> */}
                {/* <span className="sponsor-logo-common">
                  <img src={TBA} alt="" />
                </span> */}
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
              {/* <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Electronic Media Partner
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="electronic-media-partner-logo">
                  <img src={TBA} alt="" />
                </span>
              </div> */}
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

              {/* <p
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "1rem",
                }}
              >
                Partners sponsors
              </p>
              <div className="col-lg-12 col-md-4 col-sm-4 text-center">
                <span className="partner-sponsor-logo">
                  <img src={TBA} alt="" />
                </span>
                <span className="partner-sponsor-logo">
                  <img src={TBA} alt="" />
                </span>
                <span className="partner-sponsor-logo">
                  <img src={TBA} alt="" />
                </span>

                <span className="partner-sponsor-logo">
                  <img src={TBA} alt="" />
                </span>
                <span className="partner-sponsor-logo">
                  <img src={TBA} alt="" />
                </span>
              </div> */}
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <div className="col-lg-12">
            <div className="sponsors-logo text-center">
              <span className="sponsor-logo">
                <img src={logo_1} style={{ width: 100, height: 60 }} alt="" />
              </span>
              <span className="sponsor-logo">
                <img src={logo_2} style={{ width: 100, height: 50 }} alt="" />
              </span>
              <span className="sponsor-logo">
                <img src={logo_3} style={{ width: 150, height: 80 }} alt="" />
              </span>
              <span className="sponsor-logo">
                <img src={logo_4} style={{ width: 120, height: 20 }} alt="" />
              </span>
              <span className="sponsor-logo">
                <img src={logo_5} style={{ width: 100, height: 70 }} alt="" />
              </span>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default Sponsors;
