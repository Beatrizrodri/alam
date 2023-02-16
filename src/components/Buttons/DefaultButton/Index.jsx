import styles from './styles.module.scss';

function DefaultButton({ text, type, textLight = false }) {
  const colors = {
    danger: '#FF8282',
    success: '#A1C5A3',
    warning: '#F1987A',
    secondary: '#DFC1A8',
    info: '#335360',
  };

  return (
    <button
      style={{
        backgroundColor: colors[type],
        color: type === 'info' || textLight ? 'white' : 'black',
      }}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
