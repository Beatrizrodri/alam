import { FiHome } from 'react-icons/fi';
import { List } from './List';
import { ListItem } from './ListItem';
import styles from './styles.module.scss';

function Sidebar() {
  return (
    <div>
      <header>Sistema de vendas</header>
      <nav>
        <List>
          <ListItem label="Vendas" isHeader icon={<FiHome />}>
            <List>
              <ListItem label="Produtos 1" />
              <ListItem label="Produtos 2" />
              <ListItem label="Produtos 3" />
            </List>
          </ListItem>

          <ListItem label="Vendas" isHeader icon={<FiHome />}>
            <List>
              <ListItem label="Produtos 1" />
              <ListItem label="Produtos 2" />
              <ListItem label="Produtos 3" />
            </List>
          </ListItem>
        </List>
      </nav>
    </div>
  );
}

export default Sidebar;
