interface IUserData {
  id: string,
  name: string
}

type UserListType = Array<IUserData>;

export type {
  IUserData,
  UserListType
}
