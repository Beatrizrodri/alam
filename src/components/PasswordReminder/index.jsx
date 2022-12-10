import './styles.scss';

export default function PasswordReminder() {
  return (
    <div id="password-reminder-container">
      <div id="checkbox-content">
        <input type="checkbox" id="checkbox-input" />
        <label htmlFor="checkbox-input">Lembre-me</label>
      </div>

      <a>Esqueci minha senha</a>
    </div>
  );
}
