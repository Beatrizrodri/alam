import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import Title from '../../components/Title';
import Input from '../../components/Input';
import PasswordReminder from '../../components/PasswordReminder';
import LoginButton from '../../components/Buttons/LoginButton';

function Login() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <form className={styles.form}>
        <Title />
        <Input label="E-mail" type="email" placeholder="Digite seu email" />
        <Input label="Senha" type="password" placeholder="Digite sua senha" />
        <PasswordReminder />
        <LoginButton />
      </form>
    </div>
  );
}
export default Login;
