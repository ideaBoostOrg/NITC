/* eslint-disable react/no-unescaped-entities */

import Awards from "../../../assets/img/DIGI_ECON.jpg";

function DIS() {
  return (
    <section
      id="dis"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        // backgroundColor: " rgb(243, 244, 243)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Digital Investment Summit
              </h2>
              <p className="wow fadeInDown">
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
            <p style={{ marginBottom: "2rem" }}>
              <b>Sri Lanka Digital Investment Summit</b> is a joint industry
              initiative to connect Sri Lankan Startups and mature companies
              with local and foreign investors to support their next growth
              phase and global expansions and serves as a gateway to delve into
              Sri Lanka's dynamic digital investment ecosystem. This summit
              rallies all industries and sectors nationwide, fostering
              partnerships with government officials, venture capitalists,
              investor groups, multinational corporates, entrepreneurs and
              thought leaders in the global stage. It also engages bilateral and
              multilateral associations and acts as a catalyst for economic
              resurgence while accelerating digital advancements for the
              country.
            </p>

            {/* hide this for the time being */}
            {/* <p
              style={{ marginBottom: "16px", fontWeight: "bold" }}
            >Ticket Price : $45.00 (LKR 15,300.00)</p> */}

            <div className="award_section_button">
              <a
                href="/disregister?type=Dis"
                className="btn btn-common"
                id="view_more_btn"
              >
                Register now
              </a>
              {/* 
              <a
                href="https://forms.gle/BpxqFa2TmknPo21PA"
                className="btn btn-common"
              >
                Investor Registration
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DIS;
