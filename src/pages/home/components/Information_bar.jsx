import { GeoAlt, Calendar3, Mic, Person } from "react-bootstrap-icons";

function Information_bar() {
  return (
    <div className="info-wrapper">
      <div className="border-info">
        <div className="info-card">
          <GeoAlt className="info-card__icon" />
          <div className="info-card__content">
            <h3>Location</h3>
            <p>Shangri-La Hotel, Colombo 02</p>
          </div>
        </div>
      </div>
      <div className="border-info">

        <div className="info-card">
          <Calendar3 className="info-card__icon" />
          <div className="info-card__content">
            <h3>Date</h3>
            <p>11<sup>th</sup> October - 13<sup>th</sup> October</p>
          </div>
        </div>
      </div>
      <div className="border-info">

        <div className="info-card">
          <Mic className="info-card__icon" />
          <div className="info-card__content">
            <h3>Speakers</h3>
            <p>25 Professionals</p>
          </div>
        </div>

      </div>
      <div className="border-info">

        <div className="info-card">
          <Person className="info-card__icon" />
          <div className="info-card__content">
            <h3>Seats</h3>
            <p>500 People</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information_bar;