import { makeAutoObservable } from 'mobx';
import { registrationUser } from '../api/apiAuth';

class Auth {
  constructor() {
    makeAutoObservable(this);
  }

  async registrationNewUser(user: any) {
    const regUser = await registrationUser(user);
    console.log(regUser);
    return regUser;
  }
}

export default new Auth();
