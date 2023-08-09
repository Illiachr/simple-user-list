import classes from './Button.module.css';

type ButtonProps = {
  text: string,
  disabled: boolean
}

const Button = ({ text, disabled }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={classes.button}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
