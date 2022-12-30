import styles from './styles.module.scss';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

export default function Input({ label, type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  function handleRevealPassword() {
    setShowPassword(oldValue => !oldValue);

    setInputType(toggleInputType());
  }

  function toggleInputType() {
    if (type === 'password') {
      return !showPassword ? 'password' : 'text';
    } else {
      return type;
    }
  }

  return (
    <div className={styles.content}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.InputWrapper}>
        <input
          type={inputType}
          placeholder={placeholder}
          name={label}
          onChange={event => {
            console.log(event.target.value);
          }}
        />
        {type === 'password' ? (
          <>
            <FiLock className={styles.icon} />
            <>
              {inputType === 'password' ? (
                <FiEyeOff
                  className={styles.revelPasswordIcon}
                  onClick={handleRevealPassword}
                />
              ) : (
                <FiEye
                  className={styles.revelPasswordIcon}
                  onClick={handleRevealPassword}
                />
              )}
            </>
          </>
        ) : (
          <FiMail className={styles.icon} />
        )}
      </div>
    </div>
  );
}
