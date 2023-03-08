import styles from './styles.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import {
  FiChevronDown,
  FiChevronUp,
  FiLogOut,
  FiSettings,
} from 'react-icons/fi';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleIsOpen() {
    setIsOpen(value => !value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a href="#" className={styles.menu} onClick={handleToggleIsOpen}>
          <FaUserCircle className={styles.userIcon} />
          <span>Beatriz</span>
          <div>
            {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </div>
        </a>
      </div>
      <div
        className={styles.submenu}
        style={{
          display: isOpen ? 'block' : 'none',
        }}
      >
        <a href="#" className={styles.submenuItem}>
          <FiSettings />
          <span>Configurações</span>{' '}
        </a>
        <a href="#" className={styles.submenuItem}>
          <FiLogOut />
          <span>Sair</span>{' '}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
