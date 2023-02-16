import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import Title from '../../components/Title';
import Input from '../../components/Input';
import PasswordReminder from '../../components/PasswordReminder';
import LoginButton from '../../components/Buttons/LoginButton';
import DefaultButton from '../../components/Buttons/DefaultButton/Index';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>

        <h2>Bem vindo!</h2>
        <span>
          É muito bom te ver aqui de volta! Ainda não faz parte? Click no botão
          abaixo e cadastre-se
        </span>
        <DefaultButton text="Cadastre-se" type="success" />
      </div>

      <div className={styles.partition}></div>

      <div className={styles.form}>
        <form>
          <Title />
          <Input label="Empresa" type="text" placeholder="Nome da empresa" />
          <Input label="E-mail" type="email" placeholder="Digite seu email" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />
          <PasswordReminder />
          <LoginButton />
        </form>
      </div>
    </div>
  );
}
export default Login;
