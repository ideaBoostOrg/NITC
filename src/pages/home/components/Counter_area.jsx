function Counter_area() {
  return (
    <section className="counter-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div className="counter">
              <div className="icon">
                <i className="lni-mic"></i>
              </div>
              <div className="counter-content">
                <div className="counterUp">42</div>
                <p>Spekers</p>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni-bulb"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">800</div>
                  <p>Seats</p>
                </div>
              </div>
            </div> */}

          <div className="temp">

            <div className="counter">
              <div className="icon">
                <i className="lni-briefcase"></i>
              </div>
              <div className="counter-content">
                <div className="counterUp">24</div>
                <p>Sponsors</p>
              </div>
          </div>


          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div className="counter">
              <div className="icon">
                <i className="lni-briefcase"></i>
              </div>
              <div className="counter-content">
                <div className="counterUp">24</div>
                <p>Sponsors</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div className="counter">
              <div className="icon">
                <i className="lni-coffee-cup"></i>
              </div>
              <div className="counter-content">
                <div className="counterUp">56</div>
                <p>Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter_area;
