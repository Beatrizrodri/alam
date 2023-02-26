import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHome } from 'react-icons/fi';

export function ListItem({ label, icon, isHeader = false, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleIsOpen() {
    if (isHeader) {
      setIsOpen(value => !value);
    }
  }

  return (
    <>
      <li
        onClick={handleToggleIsOpen}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: !isHeader ? '1rem' : 0,
        }}
      >
        <div>
          <span>
            {icon && icon}
            {label}
          </span>
        </div>
        {isHeader && <div>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</div>}
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
    </>
  );
}
