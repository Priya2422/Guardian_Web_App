import { Link } from 'react-router-dom';
import classes from './navbar.module.css';
import logoImage from '../../assets/web-icon.svg';
import { useEffect, useState } from 'react';

function Navbar() {
  const [addShadow, setAddShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 0) {
        setAddShadow(true);
      } else {
        setAddShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${addShadow ? classes.addshadow : ''}`}>
      <Link to="/auth" className={classes.logo}>
        <img src={logoImage} alt="logo" />
      </Link>
      <div className={classes.login}>
        <Link to="/auth/vault" className={classes.btn}>
          My Vault
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
