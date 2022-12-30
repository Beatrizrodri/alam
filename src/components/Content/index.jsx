import styles from './styles.module.scss';
import logoImage from '../../assets/logo.svg';

function Content() {
  return (
    <div className={styles.container}>
      <img src={logoImage} alt="" />
    </div>
  );
}

export default Content;
