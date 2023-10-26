function Shedule_day_03() {
  return (
    <section
      id="shedule_day_03"
      className=""
    >
      <div className="container">
        <div className="moblie-title">
          <h4>Day 02</h4>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="schedule-area row wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="schedule-tab-content col-12 clearfix">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="monday" >

                    <div className="schedule-card">
                      <div className="schedule-slot-time">
                        <span> 9.00 AM - 10.50 AM</span>
                      </div>
                      <div className="schedule-card-content">
                        <div className="schedule-card-header">
                          <h4>Conference - Common Sessions</h4>
                        </div>
                        <div className="schedule-card-body">
                          <span>Keynote Presentations</span>
                          <br />
                          <span>Panel Discussion and Q&A</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-card">
                    <div className="schedule-slot-time">
                      <span> 10.50 AM - 12.30 PM</span>
                    </div>
                    <div className="schedule-card-content">
                      <div className="schedule-card-header"  >
                        <h4>Investment Summit</h4>
                      </div>
                    </div>
                    {/* <div className="show" >
                    </div> */}
                  </div>

                  <div className="schedule-card">
                    <div className="schedule-slot-time">
                      <span> 12.30 PM - 1.30 PM</span>
                    </div>
                    <div className="schedule-card-content">
                      <div className="schedule-card-header" >
                        <h4>Lunch</h4>
                      </div>
                    </div>
                    {/* <div className="show" >
                    </div> */}
                  </div>

                  <div className="schedule-card">
                    <div className="schedule-slot-time">
                      <span> 1.30 PM - 5.00 PM</span>
                    </div>
                    <div className="schedule-card-content">
                      <div className="schedule-card-header"  >
                        <h4>Conference - Breakout Sessions</h4>
                      </div>
                      <div className="schedule-card-body">
                        <span>Conference Tracks</span>
                        <br />
                        <span>SSL Research Colloquium</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Shedule_day_03;
