import '../../../assets/css/schedule.css';
import ScheduleDay from './ScheduleDay';
import { scheduleData } from '../../../data/components/schedule';

import { useState } from "react";

function Shedule() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="schedule">
      <div className="nt-container-without-margin">
        <div className="row gap-lg-4 gap-sm-1">
          <div className="col-lg-4 col-md-4 col-sm-12 nt-schedule-title-section-wrapper">
            <div className="">
              <div className="nt-section-title nt-title-dark-bg nt-schedule-section-title">
                {scheduleData.mainTitle.split(' ').map((word, i) =>
                  word === 'Schedules' ? <><br key={i}/>{word}</> : word + ' '
                )}
              </div>
              <div className="nt-sub-title">
                {scheduleData.subTitle}
              </div>
              <a href="#" className="nt-schedule-section-btn">
                {scheduleData.agendaBtn}
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 nt-schedule-content-wrapper">
            <h2 className="nt-section-title nt-title-light-bg schedule-section-title-mobile-view">{scheduleData.mainTitle}</h2>
            <ul className="nav nt-schedule-nav-tabs">
              {scheduleData.tabs.map(tab => (
                <li
                  key={tab.id}
                  className={`nt-schedule-nav-item ${toggleState === tab.id ? "nt-active-item" : ""}`}
                >
                  <a
                    className={toggleState === tab.id ? "nav-link active" : "nav-link"}
                    id={`tab-${tab.id}`}
                    data-toggle="tab"
                    role="tab"
                    aria-controls={`tab-panel-${tab.id}`}
                    aria-expanded={toggleState === tab.id}
                    onClick={() => toggleTab(tab.id)}
                  >
                    <div className="nt-schedule-nav-item-content">
                      <p className="nt-schedule-nav-item-date" dangerouslySetInnerHTML={{ __html: tab.date }} />
                      <p className="nt-schedule-nav-item-title">{tab.title}</p>
                      <p className="nt-schedule-nav-item-time">{tab.time}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            {toggleState === 1 && <ScheduleDay eventlist={scheduleData.tabs[0].eventlist} />}
            {toggleState === 2 && <ScheduleDay eventlist={scheduleData.tabs[1].eventlist} />}
            {toggleState === 3 && <ScheduleDay eventlist={scheduleData.tabs[2].eventlist} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shedule;
