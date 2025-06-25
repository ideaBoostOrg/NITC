import '../../../assets/css/scheduleDay.css';

function ScheduleDay({ eventlist }) {
    return (
        <div className="nt-schedule-day-wrapper">
            {eventlist.map((event, idx) => (
                <div key={idx} className="row nt-event-list">
                    <div className="col-lg-3 col-md-12 col-sm-12 fw-bold">
                        <span className="nt-event-time">{event.time}</span>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 ">
                        <span className="nt-event-title">{event.title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScheduleDay;