import classes from './Button.module.css';

type ButtonProps = {
  text: string,
  onClick: () => void
}

const Button = ({ text, onClick}: ButtonProps) => {
  return (
    <button type="button" className={classes.button} onClick={onClick}>{text}</button>
  );
};

export default Button;
