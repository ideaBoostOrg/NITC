import { Link } from "react-scroll";

function Hero() {

  return (
    <div id="hero-area" className="hero-area-bg">
      <div className="hero-image"></div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-sm-12">
            <div className="contents text-center">
              <div className="icon">
                <i className="lni-mic"></i>
              </div>
              <span className="banner-info" style={{ textAlign: "cetnter" }}>
                11<sup>th</sup> - 13<sup>th</sup> of Oct 2023, Shangri-La Hotel,
                Colombo, Sri-Lanka
              </span>
              <h2 className="head-title">National IT Conference</h2>
              <h4>NITC 2023</h4>
              <h5 style={{ fontWeight: "500" }}>Towards Sustainable Digital Society</h5>
              <p className="banner-desc">
                Unlock the Early Bird Discount and save 10% until the 25
                <sup>th</sup> of August!
              </p>
              <div className="banner-btn">
                <Link
                  className="btn btn-common"
                  spy={true}
                  to="pricing"
                  offset={-80}
                  duration={300}
                  smooth={true}
                >
                  Register Now
                </Link>
                {/* <a href="#pricing" className="btn btn-common">
                    Register Now
                  </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
