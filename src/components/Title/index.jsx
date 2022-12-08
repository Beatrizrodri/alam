import loginImage from '../../assets/log-in.svg';
import './styles.scss';

export default function Title() {
  return (
    <div id="title-container">
      <div id="title">
        <img src={loginImage} alt="" />
        <h1>Faça seu login</h1>
      </div>

      <div id="caption">
        <h2>Entre com suas informações de cadastro.</h2>
      </div>
    </div>
  );
}
