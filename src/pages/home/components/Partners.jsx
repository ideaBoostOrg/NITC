import logo_1 from "../../../assets/img/partners/ACM.png";
import logo_2 from "../../../assets/img/partners/ACS.png";
import logo_3 from "../../../assets/img/partners/BCS.png";
import logo_4 from "../../../assets/img/partners/FITTIS.png";
import logo_5 from "../../../assets/img/partners/IESL.png";
import logo_6 from "../../../assets/img/partners/IET.png";
import logo_7 from "../../../assets/img/partners/ISACA.png";
// import logo_8 from '../../../assets/img/partners/SLASSCOM.png'
// import logo_9 from '../../../assets/img/sponsors/logo-9.png'

function Partners() {
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
                Partners
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                A heartfelt appreciation to our esteemed partners, whose
                collaboration <br />
                has been paramount in fueling our accomplishments
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
              <span className="partner-logo">
                <img src={logo_1} style={{ width: 80, height: 60 }} alt="" />
              </span>
              <span className="partner-logo">
                <img src={logo_2} style={{ width: 70, height: 60 }} alt="" />
              </span>
              <span className="partner-logo">
                <img src={logo_3} style={{ width: 80, height: 80 }} alt="" />
              </span>
              <span className="partner-logo">
                <img src={logo_4} style={{ width: 90, height: 60 }} alt="" />
              </span>
              <span className="partner-logo">
                <img src={logo_5} style={{ width: 100, height: 50 }} alt="" />
              </span>
              <span className="partner-logo">
                <img src={logo_6} style={{ width: 100, height: 40 }} alt="" />
              </span>
              <span className="partner-logo">
                <img src={logo_7} style={{ width: 80, height: 40 }} alt="" />
              </span>
              {/* <span className="partner-logo">
                <img src={logo_8} style={{ width: 60, height: 70 }} alt="" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
