function Event({ event }) {
  return (
    <li>
      <strong>{event.title}</strong> - {event.date}
    </li>
  );
}

export default Event;
