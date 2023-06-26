import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

function Navmenu() {
    return (
        <header className={styles.menu}>
            <NavLink to="/">Stats</NavLink>
            <NavLink to="/about">About</NavLink>
        </header>
    );
}

export default Navmenu;
