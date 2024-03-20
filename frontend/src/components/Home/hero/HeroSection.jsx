import classes from './hero.module.css';

import image from '../../../assets/lock.jpg';

function HeroSection() {
  return (
    <section className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.pass}>The password manager</h1>
        <h1>
          <span className={classes.shadow}>trusted</span>{' '}
          <span className={classes.trusted}>by millions</span>
        </h1>
        <p>
          At home, at work, or on the go, Bitwarden easily secures all your
          passwords, passkeys, and sensitive information
        </p>
      </div>
      <img src={image} alt="Application demo image" className={classes.right} />
    </section>
  );
}

export default HeroSection;
