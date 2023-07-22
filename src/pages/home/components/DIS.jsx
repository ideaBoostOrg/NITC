/* eslint-disable react/no-unescaped-entities */

import Awards from "../../../assets/img/DIGI_ECON.jpg";


function DIS() {
  return (
    <section
      id="dis"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: " rgb(243, 244, 243",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                CSSL Digital Investment Summit
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Unleash the power of digital innovations and seize growth
                opportunities at the Sri Lanka Digital
                <br /> Investment Summit.
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
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              <b>Sri Lanka Digital Investment Summit</b> is a joint industry
              initiative to connect Sri Lankan startups and mature companies
              with local and foreign investors to support their next growth
              phase and global expansions. Digital investment Summit rallies all
              industry stakeholders in order to create a vibrant tech investment
              eco system to accelerate the economic resurgence.
            </p>

            <div className="award_section_button">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScyNM5zUn7EyZnvA4-ZwCvoLT265BZRrwNjKtgN3_ifD6svbg/viewform"
                className="btn btn-common"
                id="view_more_btn"
              >
                Apply for pitching
              </a>

              <a
                href="https://forms.gle/BpxqFa2TmknPo21PA"
                className="btn btn-common"
              >
                Investor Registration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DIS;
