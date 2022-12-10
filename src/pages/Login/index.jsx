import './styles.scss';
import logo from '../../assets/AlamLogo.svg';
import Title from '../../components/Title';
import Input from '../../components/Input';
import PasswordReminder from '../../components/PasswordReminder';
import LoginButton from '../../components/Buttons/LoginButton';

function Login() {
  return (
    <div id="container">
      <img src={logo} alt="" />
      <div className="form">
        <Title />
        <Input label="E-mail" type="email" placeholder="Digite seu email" />
        <Input label="Senha" type="password" placeholder="Digite sua senha" />
        <PasswordReminder />
        <LoginButton />
      </div>
    </div>
  );
}
export default Login;
