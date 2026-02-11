import { useState, useEffect } from "react";
import Event from "./Event";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events.json")
      .then(res => res.json())
      .then(setEvents);
  }, []);

  return (
    <ul>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default Events;