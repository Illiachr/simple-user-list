import { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import { IUserData, UserListType } from './types/types';

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
    </div>
  );
}

export default App;
