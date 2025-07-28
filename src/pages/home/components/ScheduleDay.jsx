import '../../../assets/css/scheduleDay.css';

function ScheduleDay({ eventlist }) {
    return (
        <div className="nt-schedule-day-wrapper">
            {eventlist.map((event, idx) => (
                <div key={idx} className="nt-event-list">
                    <div className="nt-event-list-item">
                        <span className="nt-event-time">{event.time}</span>
                        <span className="nt-event-title">{event.title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScheduleDay;