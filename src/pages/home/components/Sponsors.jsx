import logo_1 from '../../../assets/img/sponsors/logo-1.png'
import logo_2 from "../../../assets/img/sponsors/logo-2.png";
import logo_3 from "../../../assets/img/sponsors/logo-3.png";
import logo_4 from "../../../assets/img/sponsors/logo-4.png";
import logo_5 from "../../../assets/img/sponsors/logo-5.png";
// import logo_6 from '../../../assets/img/sponsors/logo-6.png'
// import logo_7 from '../../../assets/img/sponsors/logo-7.png'
// import logo_8 from '../../../assets/img/sponsors/logo-8.png'
// import logo_9 from '../../../assets/img/sponsors/logo-9.png'


function Sponsors(){
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
          </div>
        </div>
      </section>
    );
}

export default Sponsors;