import { action } from 'mobx'
import AuthActions from '../actions/auth_actions'
import { userStore } from '../stores/user_store'; 
import { usersApi } from '../api/users.api';

export default class AuthStore {
  constructor() {
  }

  get error() {
    return userStore.errorMessage
  }

  setAuthorizations(authorizations: string[]) {
    userStore.setAuthorizations(authorizations)
  }

  authenticate() {
    return userStore.authenticated
  }

  checkToken() {
    const token = localStorage.getItem('remux-token')
    if (token != null && token != '') {
      const name = localStorage.getItem('remux-name') ?? ''
      userStore.authenticated = true
      userStore.name = name
      userStore.errorMessage = ''
      //AuthActions.authSetAuthorizations()
    } else {
      userStore.init()
    }
  }

  signInOrUp(token: string, name: string) {
    localStorage.setItem('remux-token', token);
    localStorage.setItem('remux-name', name);
    userStore.authenticated = true;
    userStore.name = name;
    userStore.errorMessage = '';
    userStore.token = token
    //AuthActions.authSetAuthorizations()
  }

  signOut() {
    localStorage.removeItem('remux-token');
    localStorage.removeItem('remux-name');
    userStore.init()
  }

  authError(error:" string") {
    userStore.errorMessage = error
    console.log(error)
  }
}
export let authStore = new AuthStore()
