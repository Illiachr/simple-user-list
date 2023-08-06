import classes from './UsersList.module.css';

type Props = {
  data: Array<object>
}

const UsersList = ({ data }: Props) => {
  return (
    <div className={classes.users}>
      <ul>
        {!data || data.length === 0
          ? <li>No user added</li>
          : data.map((user, id) => (<li key={id}>USER ITEM</li>))}
      </ul>
    </div>
  );
};

export default UsersList;
