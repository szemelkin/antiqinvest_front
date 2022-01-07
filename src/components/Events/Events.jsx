import "./Events.css";
import "../../index.css";
import EventsCard from "./EventsCard";

function Events() {
  return (
    <div className="Events">
      <h3>События</h3>
      <EventsCard />
      <hr />
      <EventsCard />
      <hr />
      <EventsCard />
      <hr />
      <EventsCard />
    </div>
  );
}

export default Events;
