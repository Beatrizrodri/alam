import styles from './styles.module.scss';

export default function PasswordReminder() {
  return (
    <div className={styles.container}>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" className={styles.checkbox} />
        <label htmlFor="checkbox">Lembre-me</label>
      </div>

      <a>Esqueci minha senha</a>
    </div>
  );
}
