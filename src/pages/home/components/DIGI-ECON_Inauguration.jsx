import Digital_investment_summit from "../../../assets/img/DIGI_ECON.jpg";


function CSSL_digital_investment_submit() {
  return (
    <section id="cssl-digita-investment-summit" style={{ paddingTop: "10px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img
                className="img-fluid"
                src={Digital_investment_summit}
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="section-title-header mt-4 text-left">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">

                DIGIECON Inauguration
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Witness the transformative launch of DIGIECON, the esteemed NITC
                IT conference that fuels revolutionary discussions, insights,
                and innovations in the digital economy.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "22px" }}>
              ====content====
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_digital_investment_submit;
