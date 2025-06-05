import { useNavigate } from "react-router";
import stockImage from "../../assets/Thumbnail.png";

export default function EventGrid({ data }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/eventpost/${event.id}`);
  };

  return (
    <div className="event-grid">
      {data.map((event) => (
        <div
          className="event-card"
          key={event.id}
          onClick={() => handleClick(event)}
          style={{ cursor: "pointer" }}
        >
          <img src={stockImage} alt="Event" className="event-card-image" />
          <div className="event-card-content">
            <h3 className="event-card-title">{event.title}</h3>
            <div className="event-card-meta">
              <span className="event-card-category">{event.category}</span>
              <span className="event-card-date">{event.date}</span>
              <span className="event-card-time">{event.time}</span>
            </div>
            <div className="event-card-location">{event.location}</div>
            <div className="event-card-description">{event.description}</div>
            <div className="event-card-footer">
              <span>Organizer: {event.organizer}</span>
              <span>Speakers: {event.speakers.join(", ")}</span>
              <span>
                Registered: {event.registered}/{event.capacity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
