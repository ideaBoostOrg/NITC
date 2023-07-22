import img1 from "../../../assets/img/about/img1.jpg";

import { CheckCircle } from "react-bootstrap-icons";

// import { useEffect } from "react";

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

function About() {

  // const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
  // const t2 = gsap.timeline({ defaults: { ease: "power1.out" } });

  // useEffect(() => {
  //   const scrollTrigger = ScrollTrigger.create({
  //     trigger: '.about-text',
  //     scrub: true,
  //     onEnter: () => {
  //       t1.from('.about-text', { x: 10, opacity: 0, duration: 0.5 })
  //         .from('.about-text p', { x: 10, opacity: 0, duration: 0.5 })
  //         .from('#stylish-list', { x: 10, opacity: 0, duration: 0.5 })

  //       t2.from('.img-thumb', { x: -10, opacity: 0, duration: 1 })
  //     },
  //     onLeave: () => {
  //       t1.reverse();
  //       t2.reverse();
  //     },

  //     onEnterBack: () => {
  //       t1.play();
  //       t2.play();
  //     }

  //   })

  //   return () => {
  //     scrollTrigger.kill();
  //   }
  // }, []);

  return (
    <section
      id="about"
      className="section-padding"
      style={{ marginBottom: "75px", marginTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={img1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="about-content">
              <div>
                <div className="about-text">
                  <h2>About the Conference</h2>
                  <p>
                    <b>NITC 2023 Conference</b> will feature 6 tracks and will
                    have 30+ local and foreign high-profile speakers and a
                    series of prior events. This year, NITC 2023 will be held in
                    conjunction with DIGI-ECON 2023, which was initiated by H.E.
                    President Ranil Wickremesinghe and symbolizes a new chapter
                    in Sri Lanka’s quest to create an inclusive digital economy.
                  </p>
                </div>
                <ul id="stylish-list" className="stylish-list mb-3">
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    FinTech - Financial Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    EduTech - Education Technology
                  </li>

                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    TravelTech - Travel Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    InfoSec - Information Security
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    AgriTech - Agricultural Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    eHealth - Electronic Health care
                  </li>
                </ul>
                {/* <a className="btn btn-common" href="#">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
