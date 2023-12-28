import { Link } from 'react-router-dom';
const EVENTS = [
  { id: 'E1', title: 'event 1' },
  { id: 'E2', title: 'event 1' },
  { id: 'E3', title: 'event 1' },
];
function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.edit}>{<Link to={event.id}>{event.title}</Link>}</li>
        ))}
      </ul>
    </>
  );
}
export default EventsPage;
