import styles from './styles.module.scss';

export function List({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}
