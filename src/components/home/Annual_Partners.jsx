import TBA from "../../assets/img/TBA.png";

function Annual_partners() {
  return (
    <section id="sponsors" className="section-padding">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Annual_partners;
