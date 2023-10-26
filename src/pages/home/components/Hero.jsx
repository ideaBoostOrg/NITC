import { Link } from "react-scroll";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


function Hero() {

  // useEffect(() => {
  //   const t1 = gsap.timeline({ defaults: { ease: "power1.out" } })

  //   t1.from('.banner-info', { y: 10, opacity: 0, duration: 0.5 })
  //     .from('.head-title', { y: 10, opacity: 0, duration: 0.5 })
  //     .from('.banner-btn', { y: 10, opacity: 0, duration: 0.5 })

  //     t1.play();
  //   // const scrollTrigger = ScrollTrigger.create({
  //   //   trigger: '#hero-area',
  //   //   scrub: true,
  //   //   onEnter: () => {
  //   //     t1.play();
  //   //   }

  //   // return () => {
  //   //   scrollTrigger.kill();
  //   // }

  // }, [])

  return (
    <div id="hero-area" className="hero-area-bg">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-sm-12">
            <div className="contents text-center">
              <div className="icon">
                <i className="lni-mic"></i>
              </div>
              <p className="banner-info">
                11<sup>th</sup> - 13<sup>th</sup> of Oct 2023, Shangri-La Hotel, Colombo, Sri-Lanka
              </p>
              <h2 className="head-title">National IT Conference</h2>
              <p className="banner-desc">
                Unlock the Early Bird Discount and save 10% until the 25<sup>th</sup> of
                August!
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
