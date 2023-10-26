import Shedule_day_01 from "./Shedule_day_01";
import Shedule_day_02 from "./Shedule_day_02";
import Shedule_day_03 from "./Shedule_day_03";

import { useState } from "react";

function Shedule() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section
      id="schedules"
      className="schedule section-padding"
      style={{ marginTop: "0", padding: "50px 0" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Event Schedules
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Discover the cutting-edge event schedules at the NITC IT
                Conference, bringing together tech enthusiasts <br /> to explore
                the latest industry trends.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-5 text-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={toggleState === 1 ? "nav-link active" : "nav-link"}
                  id="monday-tab"
                  data-toggle="tab"
                  // href="#monday"
                  role="tab"
                  aria-controls="monday"
                  aria-expanded="true"
                  onClick={() => toggleTab(1)}
                >
                  <div className="item-text">
                    <h4>Inauguration</h4>
                    <h5>11<sup>th</sup> October 2023</h5>
                    <h5>
                      6.00 PM onwards
                    </h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={toggleState === 2 ? "nav-link active" : "nav-link"}
                  id="tuesday-tab"
                  data-toggle="tab"
                  // href="#tuesday"
                  role="tab"
                  aria-controls="tuesday"
                  onClick={() => toggleTab(2)}
                >
                  <div className="item-text">
                    <h4>Day 01</h4>
                    <h5>12<sup>th</sup> October 2023</h5>
                    <h5>
                      9.00 AM - 5.00 PM
                    </h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={toggleState === 3 ? "nav-link active" : "nav-link"}
                  id="wednesday-tab"
                  data-toggle="tab"
                  // href="#wednesday"
                  role="tab"
                  aria-controls="wednesday"
                  onClick={() => toggleTab(3)}
                >
                  <div className="item-text">
                    <h4>Day 02</h4>
                    <h5>13<sup>th</sup> October 2023</h5>
                    <h5>
                      9.00 AM - 5.00 PM
                    </h5>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {toggleState === 1 && <Shedule_day_01 />}
        {toggleState === 2 && <Shedule_day_02 />}
        {toggleState === 3 && <Shedule_day_03 />}
      </div>
    </section>
  );
}

export default Shedule;
