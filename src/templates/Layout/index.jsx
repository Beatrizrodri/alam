import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';

function Layout() {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.wrapperContent}>
        <Navbar className={styles.navbar} />
        <Content className={styles.content} />
      </div>
    </div>
  );
}

export default Layout;
