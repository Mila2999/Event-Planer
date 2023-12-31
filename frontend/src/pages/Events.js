import { Link } from 'react-router-dom';
const EVENTS = [
  { id: 'E1', title: 'Some event ' },
  { id: 'E2', title: 'Another event ' },
  { id: 'E3', title: 'Third event ' },
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
