import classes from './authentication.module.css';
import { Outlet } from 'react-router-dom';

function Authentication() {
  return (
    <section className={classes.container}>
      <div className={classes.leftContainer}>
        <p className={classes.upperText}>
          Welcome to <span>Guardian</span>{' '}
        </p>
      </div>
      <div className={classes.rightContainer}>
        <Outlet />
      </div>
    </section>
  );
}

export default Authentication;
