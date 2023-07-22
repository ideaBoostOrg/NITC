/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Awards from "../../../assets/img/CSSL_Awards.jpg";
import View_more from "./View_more";


function CSSL_awards() {
  const [viewMoreOpen, setviewMoreOpen] = useState(false);
  return (
    <section id="cssl-awards" style={{ paddingTop: "10px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={Awards} alt="" />
            </div>
          </div>
          <View_more isOpen={viewMoreOpen} onClose={setviewMoreOpen} />
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="section-title-header mt-4 text-left">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                CSSL NITC Awards
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Join us as we commemorate the extraordinary accomplishments of
                <br />
                the industry's brightest stars at the NITC Awards 2022.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              <b>CSSL Awards </b>recognizes significant national contributions
              by ICT Professionals and CSSL Elite awards will be held at the
              inauguration ceremony of the NITC Conference.
            </p>

            <div className="award_section_button">
              <span
                className="btn btn-common"
                id="view_more_btn"
                onClick={() => setviewMoreOpen(true)}
                // onClick={clickfun()}
              >
                View more
              </span>

              <a href="http://digitalcssl.lk" className="btn btn-common">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_awards;
