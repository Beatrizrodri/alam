import { Fragment, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './styles.module.scss';

export function ListItem({
  label,
  icon,
  isHeader = false,
  isCaption = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleIsOpen() {
    if (isHeader) {
      setIsOpen(value => !value);
    }
  }

  return (
    <div className={styles.container}>
      <li
        onClick={handleToggleIsOpen}
        style={{
          padding: isCaption ? '1.2rem 1.2rem 1.2rem 6rem' : '2rem',
        }}
        className={styles.content}
      >
        <div>
          <span className={styles.text}>
            {icon && icon}
            {label}
          </span>
        </div>
        {isHeader && (
          <div>
            {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </div>
        )}
      </li>
      {children && (
        <div
          style={{
            display: isOpen ? 'block' : 'none',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
