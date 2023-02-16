import loginImage from '../../assets/log-in.svg';
import styles from './styles.module.scss';

export default function Title() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={loginImage} alt="" />
        <h1>Faça seu login</h1>
      </div>

      <div className={styles.caption}>
        <h2>Entre com suas informações de cadastro.</h2>
      </div>
    </div>
  );
}
