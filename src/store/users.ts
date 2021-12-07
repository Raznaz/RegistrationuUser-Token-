import { makeAutoObservable } from 'mobx';
import { addNewUser } from '../api/apiAuth';
import { fetchAllUsers } from '../api/apiUsers';

class Users {
  userList: {
    id?: number;
    email?: string;
    password?: string;
    banned?: boolean;
    banReason?: string;
    createdAt?: string;
    updateAt?: string;
  }[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async fetchGetAllUsers() {
    console.log('all users');
    const { data } = await fetchAllUsers();
    console.log(data);
    this.userList = data;
  }

  async addNewUser(user: any) {
    console.log('add user');
    console.log(user);
    const currentUser = await addNewUser(user);
    return currentUser;
  }
}

export default new Users();
