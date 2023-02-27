import {
  FiEdit2,
  FiFileText,
  FiFolderMinus,
  FiLogIn,
  FiPackage,
  FiPieChart,
  FiPlus,
  FiRepeat,
  FiSettings,
  FiShoppingCart,
  FiTrash,
} from 'react-icons/fi';
import { List } from './List';
import { ListItem } from './ListItem';
import styles from './styles.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <header>Sistema de vendas</header>
      <nav>
        <ul className={styles.list}>
          <ListItem
            label="Vendas"
            icon={<FiShoppingCart />}
            className={styles.header}
          />

          <ListItem label="Produtos" icon={<FiPackage />} />

          <ListItem label="Modificações" icon={<FiSettings />} isHeader>
            <List>
              <ListItem label="Cadastrar" icon={<FiLogIn />} isCaption />
              <ListItem label="Adicionar" icon={<FiPlus />} isCaption />
              <ListItem label="Editar" icon={<FiEdit2 />} isCaption />
              <ListItem label="Remover" icon={<FiTrash />} isCaption />
            </List>
          </ListItem>
          <ListItem label="Troca e devolução" icon={<FiRepeat />} />
          <ListItem label="Despesas" icon={<FiPieChart />} />
          <ListItem label="Histórico" icon={<FiFolderMinus />} />
          <ListItem label="Financeiro" icon={<FiFileText />} />
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
