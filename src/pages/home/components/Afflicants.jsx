// import logo_1 from "../../../assets/img/afflicants/logo-1.webp";
// import logo_2 from "../../../assets/img/afflicants/logo-2.webp";
import logo_3 from "../../../assets/img/afflicants/logo-4.webp";
import logo_4 from "../../../assets/img/afflicants/logo-5.webp";
import logo_5 from "../../../assets/img/afflicants/logo-3.webp";
import logo_6 from "../../../assets/img/afflicants/logo-6.png"

// import logo_1 from "../../../assets/img/partners/ACM.png";
// import logo_3 from "../../../assets/img/partners/ACS.png";
// import logo_4 from "../../../assets/img/partners/BCS.png";

function Afflicants() {
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
                Our Affiliations
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                We extend a special thank you to our esteemed affiliations,
                whose partnership and support <br />
                have played a pivotal role in our collective achievements
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
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <span className="afflicants-logo1">
                  <img src={logo_6} alt="" />
                </span>
                <span href="" className="afflicants-logo1">
                  <img src={logo_3} alt="" />
                </span>
                <span href="" className="afflicants-logo2">
                  <img src={logo_4} alt="" />
                </span>
                <span href="" className="afflicants-logo3">
                  <img src={logo_5} alt="" />
                </span>

                {/* <span className="partner-logo">
                  <img src={logo_4} alt="" />
                </span>
                <span className="partner-logo">
                  <img src={logo_3} alt="" />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Afflicants;
