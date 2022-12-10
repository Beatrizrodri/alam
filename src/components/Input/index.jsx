import './styles.scss';
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
    <div className="content">
      <label htmlFor={label}>{label}</label>
      <div className="input-wrapper">
        <input type={inputType} placeholder={placeholder} name={label} />
        {type === 'password' ? (
          <>
            <FiLock className="icon" />
            <>
              {inputType === 'password' ? (
                <FiEyeOff
                  className="reveal-password-icon"
                  onClick={handleRevealPassword}
                />
              ) : (
                <FiEye
                  className="reveal-password-icon"
                  onClick={handleRevealPassword}
                />
              )}
            </>
          </>
        ) : (
          <FiMail className="icon" />
        )}
      </div>
    </div>
  );
}
