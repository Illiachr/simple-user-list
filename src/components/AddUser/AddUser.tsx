import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Button from '../UI/Button/Button';
import classes from './AddUser.module.css';
import { IUserData } from '../../types/types';
import { revisedRandId } from '../../helpers/common';

type Props = {
  text: string,
  onUserAdd: (data: IUserData) => void
}

const AddUser = ({text, onUserAdd}: Props) => {
  const [userName, setUserName] = useState('');
  const [userNameValid, setUserNameValid] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const inputValue = value.trim();
    const inputValid = inputValue.length > 3;
    console.log(inputValid);
    setUserName(value.trim());
    setUserNameValid(inputValid);
  }

  const onReset = () => {
    setUserName('');
    setUserNameValid(false);
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onUserAdd({
      id: revisedRandId(),
      name: userName
    });
    onReset();
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes['input-wrapper']}>
        <label htmlFor="inputField">{text}</label>
        <input
          type="text"
          value={userName}
          id="inputField"
          placeholder='Enter user name'
          onChange={onChange}
        />
        {!userNameValid && <span>*Invalid user name</span>}
      </div>
      <Button disabled={!userNameValid} text='Add' />
    </form>
  );
};

export default AddUser;
