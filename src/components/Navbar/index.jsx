import styles from './styles.module.scss';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.menu}>
        <FaUserCircle className={styles.userIcon} />
        <span>Beatriz</span>
      </a>
    </div>
  );
}

export default Navbar;
