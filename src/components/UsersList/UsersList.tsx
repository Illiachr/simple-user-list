import { UserListType } from '../../types/types';
import classes from './UsersList.module.css';

type Props = {
  data: UserListType
}

const UsersList = ({ data }: Props) => {
  return (
    <div className={classes.users}>
      <ul>
        {!data || data.length === 0
          ? <li>No user added</li>
          : data.map(({id, name}) => (<li key={id}>{name}</li>))}
      </ul>
    </div>
  );
};

export default UsersList;
