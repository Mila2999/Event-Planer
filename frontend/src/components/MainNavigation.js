import classes from './MainNavigation.module.css';
import 
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
          <Link to="/events">the list of events</Link>
            <a>Home</a>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
