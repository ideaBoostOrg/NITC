import Digital_investment_summit from "../../../assets/img/CSSL_Investment_Summit.jpg";
function CSSL_digital_investment_summit() {
  return (
    <section id="cssl-colloquium" style={{ paddingTop: "10px" }}>
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
                CSSL Digital Investment Summit
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Unleash the power of digital investments and seize growth
                opportunities at the CSSL Digital Investment Summit with
                industry leaders and innovators.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "22px" }}>
              <b>CSSL Digital Investment Summit </b> is a special feature of
              40th Anniversary edition which is Organized to connect Sri Lankan
              startups and mature unicorn (USD 1 Billion Company) potential ICT
              companies with the potential to become with the prospective
              investors to support their next level of growth in order to
              contribute to national objective of achieving ICT exports of 3
              billion US dollars by 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_digital_investment_summit;
