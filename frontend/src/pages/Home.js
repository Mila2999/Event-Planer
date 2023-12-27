import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to="/events">the list of events</Link>
      </p>
    </>
  );
}
export default HomePage;
