import { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import { IUserData, UserListType } from './types/types';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [userList, setUserList] = useState<UserListType>([]);

  const onUserAdd = (data: IUserData) => {
    setUserList((prevUserList) => {
      return [
        data,
        ...prevUserList
      ]
    });
  };

  return (
    <div>
      <AddUser text='New User' onUserAdd={onUserAdd} />
      <UsersList data={userList}/>
    </div>
  );
}

export default App;
