import logo_CSSL from "../../../assets/img/CSSL_logo.png";

function About_CSSL() {

  return (
    <section
      id="cssl"
      className="intro  section-padding"
      style={{
        padding: "50px 0",
        backgroundColor: " rgb(243, 244, 243)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                About CSSL
              </h2>
              <img
                className=""
                src={logo_CSSL}
                alt=""
                style={{ marginBottom: "10px", height: "50px" }}
              />
            </div>
          </div>
        </div>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          The Computer Society of Sri Lanka (CSSL) is the premier professional
          association for individuals and Organisations leading the Information
          Communication Technology (ICT) industry in Sri Lanka.
        </p>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          It is a rallying point for ICT professionals throughout the country
          and espouses the shared vision of over five thousand individuals
          ranging from over 300 CXOs, ICT practitioners, academics and policy
          makers to other professionals in diverse fields and members of the
          business community. Today, the CSSL is widely regarded as both the
          "voice" of this influential industry segment and a "key player" in ICT
          development, nationally.
        </p>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          The passion, vision and commitment of the CSSL founders, who foresaw
          the pivotal role ICT would eventually have in shaping and advancing
          human life, has left a lasting impression on the minds of Sri Lankan
          ICT professionals. This has also led to the broad basing of the
          society’s scope and activities, which has enabled CSSL to become the
          fully-fledged and dynamic professional association that it is today.
          It is also an active member of the South East Asia Regional Computer
          Confederation (SEARCC) and the International Federation for
          Information Processing (IFIP). CSSL is a provisional signatory to the
          Seoul Accord, an internationally acclaimed degree accreditation
          program through which CSSL brings international standards on ICT
          related degrees to Sri Lanka.
        </p>
      </div>
    </section>
  );
}

export default About_CSSL;
