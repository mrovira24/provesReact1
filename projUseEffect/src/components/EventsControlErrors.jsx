import { useState, useEffect } from "react";
import Event from "./Event";

function EventsControlErrors() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
const controller = new AbortController();

fetch("/api/events.jsoon", { signal: controller.signal })
.then(res => res.json())
.then(setEvents)
.catch(err => {
if (err.name !== "AbortError") {
console.error(err);
}
});

return () => controller.abort();
}, []);


  return (
    <ul>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventsControlErrors;