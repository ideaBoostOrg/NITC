import "../../../assets/css/informationBar.css";

function InformationBar() {
  return (
    <div className="nt-informationBar-bg">
      <div className="nt-info-container ">
        <div className="nt-info-wrapper">
            <div className="nt-info-card" id="nt-info-card-1">
              <div className="nt-info-card-content">
                <p className="nt-info-card-title">Location</p>
                <p className="nt-info-card-main-content">Shangri-La Hotel, Colombo 02</p>
              </div>
            </div>
            <div className="nt-info-card" id="nt-info-card-2">
              <div className="nt-info-card-content">
                <p className="nt-info-card-title">Date</p>
                <p className="nt-info-card-main-content">14<sup>th</sup> - 16<sup>th</sup> October 2025</p>
              </div>
            </div>
            <div className="nt-info-card" id="nt-info-card-3">
              <div className="nt-info-card-content">
                <p className="nt-info-card-title">Speakers</p>
                <p className="nt-info-card-main-content">25+</p>
                <p className="nt-info-card-sub-content">Professionals</p>
              </div>
            </div>
            <div className="nt-info-card" id="nt-info-card-4">
              <div className="nt-info-card-content">
                <p className="nt-info-card-title">Seats</p>
                <p className="nt-info-card-main-content">450+</p>
                <p className="nt-info-card-sub-content">People</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationBar;

