import styles from './styles.module.scss';

export default function Button() {
  return (
    <div className={styles.buttonContent}>
      <button>Entrar</button>
      <span>
        Não tem uma conta? <a href="">Registre-se</a>
      </span>
    </div>
  );
}
