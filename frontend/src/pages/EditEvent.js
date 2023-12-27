import { Link, useParams } from 'react-router-dom';
function EditEventPage() {
  const params = useParams();
  return (
    <>
      <h1>Edit event</h1>
      <p>{params.eventId}</p>
      <p>{/* <Link to="/events/:eventId/edit">Back</Link> */}</p>
    </>
  );
}
export default EditEventPage;
