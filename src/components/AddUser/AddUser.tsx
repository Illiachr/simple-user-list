import classes from './AddUser.module.css';

type Props = {}

const AddUser = (props: Props) => {
  return (
    <div className={classes.input}>
      <label htmlFor="inputField">Input Label</label>
      <input type="text" id="inputField" />
    </div>
  );
};

export default AddUser;
