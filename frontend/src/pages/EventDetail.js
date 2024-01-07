import { useLoaderData, json } from 'react-router-dom';
import EventItem from '../components/EventItem';
function EventDetailPage() {
  const data = useLoaderData();
  return <EventItem event={data.event}></EventItem>;
}
export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + id);
  // return response
  //  return fetch('http://localhost:8080/events/'+ id)
  if (!response.ok) {
    throw json({ message: 'Could not fetch the details for event' }, { status: 500 });
  } else {
    return response;
  }
}
